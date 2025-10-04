#!/usr/bin/env python3
"""
ATIVAÇÃO MANUAL DOS LABORATÓRIOS
Executa cada laboratório individualmente para diagnóstico
"""
import subprocess
import os

def run_lab_manual(lab_name, script_path):
    """Executa um laboratório manualmente"""
    print(f"🚀 Iniciando {lab_name}...")
    
    if os.path.exists(script_path):
        try:
            result = subprocess.run(
                ["python3", script_path], 
                capture_output=True, 
                text=True,
                cwd=os.path.dirname(script_path) or "."
            )
            if result.returncode == 0:
                print(f"✅ {lab_name} executado com sucesso!")
                print(f"📝 Output: {result.stdout[:100]}...")
            else:
                print(f"❌ {lab_name} falhou: {result.stderr}")
        except Exception as e:
            print(f"❌ Erro executando {lab_name}: {e}")
    else:
        print(f"⚠️  Script não encontrado: {script_path}")

def main():
    print("🔬 ATIVAÇÃO MANUAL DOS LABORATÓRIOS ZENITH")
    
    labs = [
        ("IBM Research Quantum", "research_labs/laboratorios/lab1_ibm/ibm_quantum_integrator.py"),
        ("MIT CSAIL", "research_labs/laboratorios/lab2_mit/mit_ai_quantum.py"),
        ("Stanford Quantum Engineering", "research_labs/laboratorios/lab3_stanford/stanford_engineering.py"),
        ("Google Quantum AI", "research_labs/laboratorios/lab4_google/google_quantum_ai.py"),
        ("NASA Advanced Supercomputing", "research_labs/laboratorios/lab5_nasa/nasa_supercomputing.py"),
        ("CERN Open Data", "research_labs/laboratorios/lab6_cern/cern_particle_physics.py"),
        ("arXiv Quantum Physics", "research_labs/laboratorios/lab7_arxiv/arxiv_quantum_monitor.py"),
        ("Nature Quantum Information", "research_labs/laboratorios/lab8_nature/nature_quantum_validator.py")
    ]
    
    for lab_name, script_path in labs:
        run_lab_manual(lab_name, script_path)
    
    print("🎯 ATIVAÇÃO MANUAL CONCLUÍDA!")

if __name__ == "__main__":
    main()
