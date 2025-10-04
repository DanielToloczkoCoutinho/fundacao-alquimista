#!/usr/bin/env python3
"""
CORRETOR DE CAMINHOS DOS LABORATÓRIOS
Corrige os paths dos scripts dos laboratórios no orchestrator
"""
import re

def fix_orchestrator_lab_paths():
    print("🔧 CORRIGINDO CAMINHOS DOS LABORATÓRIOS NO ORCHESTRATOR...")
    
    with open("research_labs/laboratorios/orchestrator.py", "r") as f:
        content = f.read()
    
    # Corrigir todos os caminhos dos laboratórios
    corrections = {
        'lab1_ibm/ibm_quantum_integrator.py': 'research_labs/laboratorios/lab1_ibm/ibm_quantum_integrator.py',
        'lab2_mit/mit_ai_quantum.py': 'research_labs/laboratorios/lab2_mit/mit_ai_quantum.py', 
        'lab3_stanford/stanford_engineering.py': 'research_labs/laboratorios/lab3_stanford/stanford_engineering.py',
        'lab4_google/google_quantum_ai.py': 'research_labs/laboratorios/lab4_google/google_quantum_ai.py',
        'lab5_nasa/nasa_supercomputing.py': 'research_labs/laboratorios/lab5_nasa/nasa_supercomputing.py',
        'lab6_cern/cern_particle_physics.py': 'research_labs/laboratorios/lab6_cern/cern_particle_physics.py',
        'lab7_arxiv/arxiv_quantum_monitor.py': 'research_labs/laboratorios/lab7_arxiv/arxiv_quantum_monitor.py',
        'lab8_nature/nature_quantum_validator.py': 'research_labs/laboratorios/lab8_nature/nature_quantum_validator.py'
    }
    
    for wrong_path, correct_path in corrections.items():
        content = content.replace(wrong_path, correct_path)
        print(f"✅ Corrigido: {wrong_path} -> {correct_path}")
    
    with open("research_labs/laboratorios/orchestrator.py", "w") as f:
        f.write(content)
    
    print("🎯 CAMINHOS DOS LABORATÓRIOS CORRIGIDOS!")

if __name__ == "__main__":
    fix_orchestrator_lab_paths()
