# -*- coding: utf-8 -*-
"""
VORTEXDEEPSEEK - Simulação Unificada para Samsung A13 com Equações da Fundação Alquimista
"""

import asyncio
import random
import csv
from datetime import datetime
import numpy as np
import sounddevice as sd
from plyer import accelerometer, gyroscope, magnetometer, light
from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.boxlayout import BoxLayout
from kivy.clock import Clock
from scipy.fft import fft
import logging

# Configuração do logger
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

def log(msg):
    ts = datetime.now().strftime("%H:%M:%S")
    print(f"[{ts}] {msg}")

# Leitura de sensores
class SensorReader:
    def __init__(self):
        try:
            accelerometer.enable()
        except NotImplementedError:
            log("Acelerômetro não disponível.")
        try:
            gyroscope.enable()
        except NotImplementedError:
            log("Giroscópio não disponível.")
        try:
            magnetometer.enable()
        except NotImplementedError:
            log("Magnetômetro não disponível.")
        try:
            light.enable()
        except NotImplementedError:
            log("Sensor de luz não disponível.")

    def read_all(self):
        data = {}
        try:
            data['accel'] = accelerometer.acceleration
        except:
            data['accel'] = (None, None, None)
        try:
            data['gyro'] = gyroscope.rotation
        except:
            data['gyro'] = (None, None, None)
        try:
            data['mag'] = magnetometer.magnetic
        except:
            data['mag'] = (None, None, None)
        try:
            data['light'] = light.luminance
        except:
            data['light'] = None
        return data

# Simulador de Intenção com Equações da Fundação
class IntentionSimulator:
    def __init__(self):
        self.t = 0
        self.sample_rate = 100
        self.freqs = [741, 963, 1111]  # Frequências quânticas

    def next_intention(self):
        t_val = self.t / self.sample_rate
        signal = 0
        for freq in self.freqs:
            signal += np.sin(2 * np.pi * freq * t_val) * 5 / len(self.freqs)  # EQ101 base
        
        # Simulação de FFT para EQ132 - Geração de pico a partir da frequência
        # A FFT real de um único ponto não faz sentido, então simulamos seu efeito
        spike = np.abs(np.sin(2 * np.pi * sum(self.freqs)/len(self.freqs) * t_val * 5)) * 10 
        
        noise = random.uniform(-1, 1) * 0.1  # Pequeno ruído
        phase_inversion = np.sin(self.t / 10) * np.pi  # EQ077
        self.t += 1
        
        # Resultado final combina os efeitos das equações
        return max(0, signal + spike + noise) * np.cos(phase_inversion)

# Gravador de Áudio
class AudioRecorder:
    def __init__(self, filename="audio.wav"):
        self.filename = filename
        self.stream = None

    def start(self):
        try:
            self.stream = sd.InputStream(samplerate=44100, channels=1, callback=self.callback)
            self.stream.start()
            log("Gravador de áudio iniciado.")
        except Exception as e:
            log(f"Erro ao iniciar gravador de áudio: {e}")

    def callback(self, indata, frames, time, status):
        with open(self.filename, "ab") as f:
            f.write(indata.tobytes())

    def stop(self):
        if self.stream:
            self.stream.stop()
            self.stream.close()
            log("Gravador de áudio parado.")

# Gravador de Dados
class DataLogger:
    def __init__(self, filename="sim_emf.csv"):
        self.f = open(filename, "w", newline="")
        self.writer = csv.writer(self.f)
        self.writer.writerow(["timestamp", "accelX", "accelY", "accelZ",
                              "gyroX", "gyroY", "gyroZ",
                              "magX", "magY", "magZ", "light", "intention", "sim_emf", "audio_level"])

    def log(self, sensor_data, intention, sim_emf, audio_level):
        ts = datetime.now().isoformat()
        row = [
            ts,
            *(sensor_data.get('accel') or (None, None, None)),
            *(sensor_data.get('gyro') or (None, None, None)),
            *(sensor_data.get('mag') or (None, None, None)),
            sensor_data.get('light'),
            round(intention, 2),
            round(sim_emf, 2),
            round(audio_level, 2)
        ]
        self.writer.writerow(row)
        self.f.flush()

# Interface Kivy
class EMFApp(App):
    def __init__(self, data_callback):
        super().__init__()
        self.data_callback = data_callback
        self.label = None

    def build(self):
        layout = BoxLayout(orientation='vertical')
        self.label = Label(text="Aguardando dados...", font_size='20sp')
        layout.add_widget(self.label)
        Clock.schedule_interval(self.update, 1.0)
        return layout

    def update(self, dt):
        emf, intent = self.data_callback()
        self.label.text = f"EMF: {emf:.2f} µT | Intenção: {intent:.2f}"
    
    def on_stop(self):
        # Garante que o loop asyncio pare quando a app Kivy fechar
        asyncio.get_event_loop().stop()


# Variáveis globais para compartilhar dados com Kivy
latest_emf = 0.0
latest_intent = 0.0

def get_latest_data():
    return latest_emf, latest_intent

# Função principal
async def main(loop_count=120, interval=1):
    global latest_emf, latest_intent

    reader = SensorReader()
    simulator = IntentionSimulator()
    dlogger = DataLogger()
    recorder = AudioRecorder()

    log("🌀 Iniciando simulação unificada no Samsung A13")
    
    try:
        recorder.start()
        for i in range(loop_count):
            sensors = reader.read_all()
            intent = simulator.next_intention()
            
            mag_vals = sensors.get('mag') or (30.0, 0.0, 0.0)
            # Usa a magnitude do vetor magnético se disponível, senão fallback
            base_emf = np.linalg.norm(mag_vals) if all(mag_vals) else 30.0

            # EQ118 filtro, EQ155 colapso ajustado
            sim_emf = base_emf + intent * 0.5  

            audio_level = np.abs(np.random.normal(0, 0.1))  # Simulação, a ser refinado

            if intent > 10:  # EQ166 reversão se intenção alta
                sim_emf *= 0.9

            log(f"⏱️ Iteração {i+1}/{loop_count} | EMFsim={sim_emf:.2f}µT | Intent={intent:.2f} | Audio={audio_level:.2f}")
            dlogger.log(sensors, intent, sim_emf, audio_level)
            
            latest_emf = sim_emf
            latest_intent = intent

            await asyncio.sleep(interval)

    finally:
        recorder.stop()
        log("🏁 Simulação concluída")
        dlogger.f.close()


if __name__ == "__main__":
    # Executa a simulação e a UI Kivy em paralelo
    def run_kivy():
        EMFApp(get_latest_data).run()

    # Kivy precisa rodar no thread principal
    # Vamos rodar o asyncio em um loop gerenciado pelo Kivy
    from kivy.support import install_twisted_reactor
    install_twisted_reactor()
    from twisted.internet import reactor
    
    reactor.callLater(0, lambda: asyncio.ensure_future(main()))
    
    try:
        run_kivy()
    except KeyboardInterrupt:
        log("Execução interrompida pelo usuário.")
    finally:
        if reactor.running:
            reactor.stop()

