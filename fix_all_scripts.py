#!/usr/bin/env python3
"""
CORRETOR DEFINITIVO - SISTEMA ZENITH
Corrige todos os problemas de caminhos nos scripts
"""
import os
import re
from pathlib import Path

def fix_script_paths(script_path):
    """Corrige paths em um script específico"""
    with open(script_path, 'r') as f:
        content = f.read()
    
    # Substituir paths problemáticos
    fixes = [
        (r'self\.base_dir\s*=\s*Path\("laboratorios"\)', 'self.base_dir = Path(".")'),
        (r'self\.base_dir\s*=\s*Path\(["\']laboratorios["\']\)', 'self.base_dir = Path(".")'),
        (r'Path\("laboratorios"\)', 'Path(".")'),
    ]
    
    for pattern, replacement in fixes:
        content = re.sub(pattern, replacement, content)
    
    # Escrever de volta
    with open(script_path, 'w') as f:
        f.write(content)
    
    print(f"✅ Corrigido: {script_path}")

def main():
    print("🔧 APLICANDO CORREÇÕES DEFINITIVAS...")
    
    # Lista de scripts para corrigir
    scripts = [
        "research_labs/laboratorios/orchestrator.py",
        "research_labs/laboratorios/conscious_dashboard_fixed.py",
        "research_labs/laboratorios/conscious_dashboard.py",
        "research_labs/laboratorios/scientific_reporter_real_data.py",
        "research_labs/laboratorios/zenith_integrator_fixed.py"
    ]
    
    for script in scripts:
        if Path(script).exists():
            fix_script_paths(script)
        else:
            print(f"⚠️  Não encontrado: {script}")
    
    print("🎯 TODOS OS SCRIPTS CORRIGIDOS!")

if __name__ == "__main__":
    main()
