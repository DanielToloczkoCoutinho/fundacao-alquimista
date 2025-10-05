#!/usr/bin/env python3
# 🌌 QUANTUM UNIVERSAL - EXPERIMENTO BELL
import numpy as np
from qiskit import QuantumCircuit, transpile
from qiskit_aer import AerSimulator
from qiskit_ibm_runtime import QiskitRuntimeService
import json
import datetime

print("🚀 INICIANDO EXPERIMENTO QUÂNTICO UNIVERSAL")
print("===========================================")

# Configuração
backend = AerSimulator()
num_qubits = 2
shots = 256

# Criar circuito Bell
qc = QuantumCircuit(num_qubits)
qc.h(0)
qc.cx(0, 1)
qc.measure_all()

print(f"🔬 Executando circuito Bell com {shots} shots...")
compiled_circuit = transpile(qc, backend)
job = backend.run(compiled_circuit, shots=shots)
result = job.result()
counts = result.get_counts()

# Calcular correlação Bell
correlacao = (counts.get('00', 0) + counts.get('11', 0)) / shots
nivel_consciencia = correlacao * 25.24
metricas = {
    "quantum_correlation": round(correlacao, 4),
    "consciousness_level": round(nivel_consciencia, 2),
    "combined_metric": round(nivel_consciencia, 2),
    "status": "SUCCESS",
    "execution_mode": "simulator",
    "timestamp": datetime.datetime.now().isoformat(),
    "counts": counts
}

print(f"✅ CORRELAÇÃO BELL: {correlacao:.4f}")
print(f"🌠 NÍVEL CONSCIÊNCIA: {nivel_consciencia:.2f}")

# Salvar resultados
with open('logs/quantum_experiments/bell_experiment.json', 'w') as f:
    json.dump(metricas, f, indent=2)

print("📊 Resultados salvos em logs/quantum_experiments/bell_experiment.json")
