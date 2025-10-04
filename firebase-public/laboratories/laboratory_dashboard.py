#!/usr/bin/env python3
"""
DASHBOARD DE MONITORAMENTO EM TEMPO REAL
Interface para visualizar todos os laboratórios
"""

import json
import time
from datetime import datetime
from pathlib import Path

class LaboratoryDashboard:
    def __init__(self):
        self.base_dir = Path("laboratorios")
        self.labs = {
            "lab1": "IBM Research Quantum",
            "lab2": "MIT CSAIL", 
            "lab3": "Stanford Quantum Engineering",
            "lab4": "Google Quantum AI",
            "lab5": "NASA Advanced Supercomputing",
            "lab6": "CERN Open Data",
            "lab7": "arXiv Quantum Physics", 
            "lab8": "Nature Quantum Information"
        }
    
    def get_lab_status(self, lab_id):
        """Obtém status detalhado de cada laboratório"""
        lab_path = self.base_dir / lab_id
        report_file = lab_path / f"{lab_id}_analysis_report.json"
        
        if report_file.exists():
            with open(report_file, "r") as f:
                data = json.load(f)
            return {
                "status": "🟢 ATIVO",
                "last_update": data.get("timestamp", "Unknown"),
                "data_points": len(data),
                "zenith_compatibility": data.get("zenith_integration", {}).get("compatibility", "UNKNOWN")
            }
        else:
            return {
                "status": "🔴 INATIVO", 
                "last_update": "Never",
                "data_points": 0,
                "zenith_compatibility": "UNKNOWN"
            }
    
    def generate_dashboard_data(self):
        """Gera dados consolidados para o dashboard"""
        dashboard = {
            "timestamp": datetime.now().isoformat(),
            "system": "Fundação Alquimista - Rede de Laboratórios",
            "total_labs": len(self.labs),
            "active_labs": 0,
            "laboratories": {},
            "research_breakthroughs": [],
            "zenith_recommendations": []
        }
        
        for lab_id, lab_name in self.labs.items():
            status = self.get_lab_status(lab_id)
            dashboard["laboratories"][lab_id] = {
                "name": lab_name,
                "status": status
            }
            
            if status["status"] == "🟢 ATIVO":
                dashboard["active_labs"] += 1
                
                # Coletar recomendações para Zenith
                report_path = self.base_dir / lab_id / f"{lab_id}_analysis_report.json"
                if report_path.exists():
                    with open(report_path, "r") as f:
                        lab_data = json.load(f)
                    
                    zenith_recs = lab_data.get("zenith_integration", {}).get("recommended_implementations", [])
                    dashboard["zenith_recommendations"].extend(zenith_recs)
        
        # Salvar dashboard
        with open(self.base_dir / "laboratory_dashboard.json", "w") as f:
            json.dump(dashboard, f, indent=2)
        
        return dashboard
    
    def display_real_time_dashboard(self):
        """Exibe dashboard em tempo real no terminal"""
        dashboard = self.generate_dashboard_data()
        
        print("\n" + "="*80)
        print("🔬 DASHBOARD DA REDE DE LABORATÓRIOS - FUNDAÇÃO ALQUIMISTA")
        print("="*80)
        print(f"📊 Status Geral: {dashboard['active_labs']}/{dashboard['total_labs']} Laboratórios Ativos")
        print(f"🕒 Última Atualização: {dashboard['timestamp']}")
        print("-"*80)
        
        for lab_id, lab_data in dashboard["laboratories"].items():
            status = lab_data["status"]
            print(f"{status['status']} {lab_data['name']:35} | "
                  f"Compatibilidade: {status['zenith_compatibility']:10} | "
                  f"Dados: {status['data_points']:2} pontos")
        
        print("-"*80)
        
        # Mostrar recomendações principais
        if dashboard["zenith_recommendations"]:
            print("🎯 PRINCIPAIS RECOMENDAÇÕES PARA ZENITH:")
            for i, rec in enumerate(dashboard["zenith_recommendations"][:5], 1):
                print(f"  {i}. {rec}")
        
        print("="*80)

if __name__ == "__main__":
    dashboard = LaboratoryDashboard()
    dashboard.display_real_time_dashboard()
