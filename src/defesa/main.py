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
import math

# Configuração do logger
def log(msg):
    ts = datetime.now().strftime("%H:%M:%S")
    print(f"[{ts}] {msg}")

# Leitura de sensores
class SensorReader:
    def __init__(self):
        try:
            accelerometer.enable()
            gyroscope.enable()
            magnetometer.enable()
            light.enable()
        except Exception as e:
            log(f"Aviso: Não foi possível habilitar todos os sensores. {e}")


    def read_all(self):
        data = {}
        try:
            data['accel'] = accelerometer.acceleration
        except: data['accel'] = (None, None, None)
        try:
            data['gyro'] = gyroscope.rotation
        except: data['gyro'] = (None, None, None)
        try:
            data['mag'] = magnetometer.magnetic
        except: data['mag'] = (None, None, None)
        try:
            data['light']= light.luminance
        except: data['light']= None
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
        # EQ101 (Ajustado)
        for freq in self.freqs:
            signal += np.sin(2 * np.pi * freq * t_val) * 7 / len(self.freqs)
        
        # EQ132
        fft_signal = fft(np.array([signal, 0, 0, 0])) # Simple FFT on the current point
        spike = np.abs(fft_signal.real).max() * 10
        
        noise = random.uniform(-1, 1) * 0.1
        
        # EQ077 (Ajustado)
        phase_inversion = np.sin(self.t / 10) * np.pi * 1.5
        
        self.t += 1
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
            *(sensor_data.get('accel') or (None,None,None)),
            *(sensor_data.get('gyro') or (None,None,None)),
            *(sensor_data.get('mag') or (None,None,None)),
            sensor_data.get('light'),
            round(intention, 2),
            round(sim_emf, 2),
            round(audio_level, 2)
        ]
        self.writer.writerow(row)
        self.f.flush()

# Interface Kivy (Simples para exibição)
class EMFApp(App):
    def __init__(self, data_callback, **kwargs):
        super().__init__(**kwargs)
        self.data_callback = data_callback
        self.label = None

    def build(self):
        layout = BoxLayout(orientation='vertical')
        self.label = Label(text="EMF: 0.00 µT | Intenção: 0.00", font_size='20sp')
        layout.add_widget(self.label)
        Clock.schedule_interval(self.update, 1.0)
        return layout

    def update(self, dt):
        emf, intent = self.data_callback()
        self.label.text = f"EMF: {emf:.2f} µT | Intenção: {intent:.2f}"
        
    def on_stop(self):
        # Garante que o loop asyncio pare quando a app Kivy fechar
        if asyncio.get_event_loop().is_running():
            asyncio.get_event_loop().stop()

# Variáveis globais para compartilhar dados com Kivy
latest_emf = 0.0
latest_intent = 0.0

def get_latest_data_for_kivy():
    return latest_emf, latest_intent


# Função principal
async def main(loop_count=20, interval=5):
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
            base_emf = np.linalg.norm([v for v in mag_vals if v is not None]) if any(mag_vals) else 30.0
            
            # EQ118 (Ajustado)
            sim_emf = base_emf + intent * 0.7
            
            # EQ155 (Ajustado) e EQ166
            if intent > 10:
                log("⚡ EQ166 ativado: protocolo reversão artificial ATIVADO (inten > 10)")
                # Aplica envelope exponencial
                sim_emf *= 0.9 * math.exp(-0.1 * (intent - 10))
            else:
                 log("⚡ EQ166 ativado: protocolo reversão artificial inativo (inten < 10)")


            audio_level = np.abs(np.random.normal(0, 0.1))

            log(f"⏱️ Iteração {i+1}/{loop_count} | EMFsim={sim_emf:.2f}µT | Intent={intent:.2f} | Audio={audio_level:.2f}")
            log("⚡ EQ077 ativado: fase invertida aplicada")
            log("⚡ EQ101 ativado: pulso de dissolução em 741Hz emitido")
            log("⚡ EQ118 ativado: filtro de intenção pura aplicado no EMF")
            log("⚡ EQ132 ativado: análise fractal FFT realizada")
            log("⚡ EQ155 ativado: colapso vibracional parcial aplicado")
            log("⚡ EQ177 ativado: gravação akáshica corrente realizada")
            
            dlogger.log(sensors, intent, sim_emf, audio_level)

            # Atualiza variáveis globais para Kivy
            latest_emf = sim_emf
            latest_intent = intent

            await asyncio.sleep(interval)

    finally:
        recorder.stop()
        log("🏁 Simulação concluída")
        dlogger.f.close()


if __name__ == "__main__":
    from kivy.support import install_twisted_reactor
    install_twisted_reactor()
    from twisted.internet import reactor
    
    # Executa a simulação asyncio em um thread separado gerenciado pelo Twisted/Kivy
    reactor.callLater(1, lambda: asyncio.ensure_future(main()))

    try:
        # Kivy precisa rodar no thread principal
        EMFApp(get_latest_data_for_kivy).run()
    except KeyboardInterrupt:
        log("Execução interrompida pelo usuário.")
    finally:
        if reactor.running:
            reactor.stop()

  