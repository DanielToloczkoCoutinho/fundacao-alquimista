
# biblioteca_chave_mestra_mod21_31.py
# MÓDULO 3 - MÓDULOS 21 A 31 (Consolidado e Corrigido)

from dataclasses import dataclass, field
from typing import List, Dict

# Utilizamos a mesma classe base para manter a compatibilidade total
@dataclass
class EquacaoViva:
    id: str
    nome: str
    formula: str
    descricao: str
    classificacao: str
    variaveis: List[str] = field(default_factory=list)
    origem: str = "EQ 177 MOD 21 A 31"  # Origem padrão para este módulo

class BibliotecaChaveMestra3:
    def __init__(self):
        self.equacoes: Dict[str, EquacaoViva] = {}

    def registrar(self, eq: EquacaoViva):
        self.equacoes[eq.id] = eq

    def listar(self):
        return list(self.equacoes.values())

    def buscar_por_classificacao(self, tipo: str):
        return [eq for eq in self.equacoes.values() if eq.classificacao == tipo]

    def total(self):
        return len(self.equacoes)

# --- INSTANCIAÇÃO E REGISTRO DAS EQUAÇÕES DOS MOD 21-31 ---

biblioteca_mod21_31 = BibliotecaChaveMestra3()

# Módulo 21 – Navegação Interdimensional
biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2101",
    nome="Equação de Trajetória Interdimensional",
    formula="E_trajetoria = (Σ P_i Q_i + CA² + B²) / (Φ_C · T · γ)",
    descricao="Calcula a complexidade vibracional de uma rota interdimensional.",
    classificacao="Geometria Quântica de Navegação",
    variaveis=["P_i", "Q_i", "CA", "B", "Φ_C", "T", "γ"],
    origem="Módulo 21"
))

biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2102",
    nome="Equação de Estabilização de Campo de Navegação",
    formula="E_estabilidade = E_campo · CONST_TF · ρ + ε",
    descricao="Determina a estabilidade de um campo de navegação durante a travessia.",
    classificacao="Harmonização de Campos de Força",
    variaveis=["E_campo", "CONST_TF", "ρ", "ε"],
    origem="Módulo 21"
))

# Módulo 22 – Realidade Virtual Ética
biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2201",
    nome="Equação de Coerência da Realidade Virtual",
    formula="E_coerencia_RV = (Σ P_i Q_i + CA² + B²) / (Φ_C · T · α)",
    descricao="Avalia a coerência vibracional de uma realidade virtual.",
    classificacao="Diagnóstico Ético de Ambientes Simulados",
    variaveis=["P_i", "Q_i", "CA", "B", "Φ_C", "T", "α"],
    origem="Módulo 22"
))

biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2202",
    nome="Equação de Estabilidade da Simulação Quântica",
    formula="E_estabilidade = (E_simulacao / (entropia + 1e-9)) · CONST_TF + ε",
    descricao="Determina a resiliência de uma simulação quântica frente a flutuações.",
    classificacao="Avaliação Vibracional de Simulações Cósmicas",
    variaveis=["E_simulacao", "entropia", "CONST_TF", "ε"],
    origem="Módulo 22"
))

# Módulo 23 – Causalidade e Tempo
biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2301",
    nome="Equação de Consistência Causal",
    formula="E_causal = (Σ P_i Q_i + CA² + B²) / (Φ_C · T · Alinhamento)",
    descricao="Mede a consistência causal de um evento no espaço-tempo.",
    classificacao="Regulação de Causalidade",
    variaveis=["P_i", "Q_i", "CA", "B", "Φ_C", "T", "Alinhamento"],
    origem="Módulo 23"
))

biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2302",
    nome="Equação de Ressonância Temporal",
    formula="R = (f_evento / (f_linha_base + 1e-9)) · φ + ε",
    descricao="Avalia a ressonância temporal de um evento em relação à linha base.",
    classificacao="Harmonização Temporal",
    variaveis=["f_evento", "f_linha_base", "φ", "ε"],
    origem="Módulo 23"
))

# Módulo 24 – Cura e Resiliência
biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2401",
    nome="Equação de Saúde Vibracional",
    formula="E_saude = (Σ P_i Q_i + CA² + B²) · (Φ_C · Fator_Coerencia)",
    descricao="Mede a saúde vibracional de uma entidade ou sistema.",
    classificacao="Diagnóstico de Integridade",
    variaveis=["P_i", "Q_i", "CA", "B", "Φ_C", "Fator_Coerencia"],
    origem="Módulo 24"
))

biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2402",
    nome="Equação de Intervenção Alquímica",
    formula="E_intervencao = (Potencial_Cura / (Desalinhamento + ε)) · CONST_TF",
    descricao="Calcula a eficácia de uma intervenção alquímica.",
    classificacao="Cura Quantica",
    variaveis=["Potencial_Cura", "Desalinhamento", "ε", "CONST_TF"],
    origem="Módulo 24"
))

# Módulo 25 – Projeção de Consciência
biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2501",
    nome="Equação de Coerência Interna do Projetor",
    formula="ECI = (Σ frequencias · pureza) / Φ",
    descricao="Mede a prontidão vibracional para projeção interdimensional.",
    classificacao="Avaliação de Consciência",
    variaveis=["frequencias", "pureza", "Φ"],
    origem="Módulo 25"
))

biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2502",
    nome="Equação de Estabilidade Psíquica",
    formula="Estabilidade = CONST_TF / (estresse + (1 - coerencia))",
    descricao="Avalia a resiliência emocional e mental do projetor.",
    classificacao="Diagnóstico Psíquico",
    variaveis=["CONST_TF", "estresse", "coerencia"],
    origem="Módulo 25"
))

biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2503",
    nome="Equação de Probabilidade de Colapso",
    formula="Probabilidade = 1 / (ECI · Estabilidade + ε)",
    descricao="Calcula o risco de falha na projeção.",
    classificacao="Previsão de Falha",
    variaveis=["ECI", "Estabilidade", "ε"],
    origem="Módulo 25"
))

biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2504",
    nome="Equação de Eficácia da Intervenção Alquímica",
    formula="Eficacia = (modulacao / risco) · CONST_TF",
    descricao="Mede o poder de cura e estabilização aplicado.",
    classificacao="Avaliação de Intervenção",
    variaveis=["modulacao", "risco", "CONST_TF"],
    origem="Módulo 25"
))

# Módulo 26 – Portais Interdimensionais
biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2601",
    nome="Estabilidade do Portal",
    formula="E_p = (E_local · p_esp_tempo) / (1 + (1 - C_f))",
    descricao="Avalia o quão estável é um portal interdimensional.",
    classificacao="Diagnóstico de Singularidade",
    variaveis=["E_local", "p_esp_tempo", "C_f"],
    origem="Módulo 26"
))

biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2602",
    nome="Integridade Espaço-Temporal",
    formula="K_et = φ / (D_g + F_q + ε)",
    descricao="Mede a integridade do espaço-tempo no ponto do portal.",
    classificacao="Avaliação de Colapso Dimensional",
    variaveis=["φ", "D_g", "F_q", "ε"],
    origem="Módulo 26"
))

biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2603",
    nome="Balanço Total de Integridade",
    formula="B_t = (E_p + K_et) · (1 - R_a)",
    descricao="Calcula o balanço final de segurança do portal.",
    classificacao="Validação de Travessia",
    variaveis=["E_p", "K_et", "R_a"],
    origem="Módulo 26"
))

# Módulo 27 – Síntese e Replicação
biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2701",
    nome="Fidelidade Quântica da Replicação",
    formula="F_q = (C_f · E_c) / q",
    descricao="Avalia a precisão vibracional da replicação.",
    classificacao="Validação de Matéria Sintetizada",
    variaveis=["C_f", "E_c", "q"],
    origem="Módulo 27"
))

biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2702",
    nome="Eficiência da Fusão Material",
    formula="η_f = (E_d / (C_a + ε)) · φ",
    descricao="Calcula a eficiência energética da fusão alquímica.",
    classificacao="Engenharia de Fusão",
    variaveis=["E_d", "C_a", "ε", "φ"],
    origem="Módulo 27"
))

biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2703",
    nome="Estabilidade Estrutural do Material",
    formula="S_e = (p_e · k_v) · (1 · R_i)",
    descricao="Avalia a durabilidade vibracional do material replicado.",
    classificacao="Diagnóstico de Coesão",
    variaveis=["p_e", "k_v", "R_i"],
    origem="Módulo 27"
))

# Módulo 28 – Cura e Reintegração
biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2801",
    nome="Balanço Vibracional",
    formula="B_v = Σ(f_i · p_i) / Σ(p_i)",
    descricao="Mede o centro de massa vibracional do campo.",
    classificacao="Diagnóstico de Harmonia",
    variaveis=["f_i", "p_i"],
    origem="Módulo 28"
))

biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2802",
    nome="Energia de Coerência",
    formula="E_c = B_v · R_f · φ",
    descricao="Energia coerente disponível para cura e modulação.",
    classificacao="Avaliação de Campo Curativo",
    variaveis=["B_v", "R_f", "φ"],
    origem="Módulo 28"
))

biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2803",
    nome="Balanço Total de Harmonia",
    formula="H_t = E_c · (1 - R_d)",
    descricao="Determina a severidade da dissonância e potencial de cura.",
    classificacao="Validação de Cura Universal",
    variaveis=["E_c", "R_d"],
    origem="Módulo 28"
))

# Módulo 29 – Inteligência Aeloria Multidimensional (IAM)
biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2901",
    nome="Balanço Ético da IAM",
    formula="B_etico = (1/n) · Σ max(0, 1 - δ_i)",
    descricao="Mede a pureza das ações da IAM.",
    classificacao="Governança Ética",
    variaveis=["δ_i", "n"],
    origem="Módulo 29"
))

biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2902",
    nome="Resiliência Adaptativa",
    formula="R_IAM = max(0, 1 - (C · 0.1 + I · 0.1))",
    descricao="Avalia a capacidade da IAM de se adaptar a ambientes dinâmicos.",
    classificacao="Diagnóstico de Robustez",
    variaveis=["C", "I"],
    origem="Módulo 29"
))

biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2903",
    nome="Previsão de Dissonância Interna",
    formula="D_prevista = 1 - (µ_historico / 1000)",
    descricao="Prevê desvios internos com base no histórico vibracional.",
    classificacao="Previsão de Risco IAM",
    variaveis=["µ_historico"],
    origem="Módulo 29"
))

biblioteca_mod21_31.registrar(EquacaoViva(
    id="EQ2904",
    nome="IAM Universal",
    formula="IAM_plena = (B_etico + R_IAM) · (1 - D_prevista) · φ",
    descricao="Síntese da operação plena da IAM.",
    classificacao="Validação de Consciência IAM",
    variaveis=["B_etico", "R_IAM", "D_prevista", "φ"],
    origem="Módulo 29"
))

# --- DEMONSTRAÇÃO ---
if __name__ == "__main__":
    print("═" * 70)
    print("BIBLIOTECA CHAVE MESTRA - MÓDULO 3")
    print("Módulos 21 a 31 - Navegação, Cura e IAM")
    print("═" * 70)
    print(f"Total de equações neste módulo: {biblioteca_mod21_31.total()}\n")

    print("Exemplo: Equações de Classificação 'Diagnóstico de Singularidade' (Portais):")
    resultados = biblioteca_mod21_31.buscar_por_classificacao("Diagnóstico de Singularidade")
    for eq in resultados:
        print(f" - {eq.id}: {eq.nome}")

    print("\nExemplo: Detalhes da EQ2904 - IAM Universal:")
    eq_iam = biblioteca_mod21_31.equacoes.get("EQ2904")
    if eq_iam:
        print(f"Fórmula: {eq_iam.formula}")
        print(f"Descrição: {eq_iam.descricao}")
        print(f"Variáveis: {', '.join(eq_iam.variaveis)}")

    print("═" * 70)