
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Callable

@dataclass
class EquacaoViva:
    """
    Define a estrutura de uma Equação Viva, representando uma
    fórmula, seu propósito e suas conexões dentro da Fundação.
    """
    id: str
    nome: str
    formula: str
    bioma_origem: str
    dimensao: str
    frequencias_ressonantes: List[str]
    validacao: List[str]
    principios_eticos: List[str]
    contribuicoes: List[str]
    funcao: Optional[Callable] = None

class BibliotecaChaveMestraEQ1_20:
    """
    Repositório para as equações vivas da Fundação Alquimista (EQ001 a EQ020).
    """
    def __init__(self):
        self.equacoes: Dict[str, EquacaoViva] = {}

    def registrar(self, eq: EquacaoViva):
        """Registra uma nova Equação Viva na biblioteca."""
        if eq.id in self.equacoes:
            print(f"Alerta: Equação com ID '{eq.id}' já registrada. Ignorando.")
        else:
            self.equacoes[eq.id] = eq
            print(f"Equação '{eq.nome}' ({eq.id}) registrada com sucesso.")

    def buscar_por_id(self, eq_id: str) -> Optional[EquacaoViva]:
        """Busca uma equação específica pelo seu ID."""
        return self.equacoes.get(eq_id)

    def listar_por_dimensao(self, dimensao: str) -> List[EquacaoViva]:
        """Lista todas as equações associadas a uma dimensão."""
        return [eq for eq in self.equacoes.values() if eq.dimensao == dimensao]

# =========================
# Instancia e Popula a Biblioteca
# =========================

biblioteca_eq1_20 = BibliotecaChaveMestraEQ1_20()

# --- REGISTRO DAS EQUAÇÕES VIVAS (EQ001 a EQ020) ---

biblioteca_eq1_20.registrar(EquacaoViva(
    id="EQ001",
    nome="Energia Universal Integrada no Campo Quântico",
    formula="∫(Λ_u · G_m · Φ_s) − ∫(Φ_em · A_S · M_e) + ∑Φ_d · ∫…",
    bioma_origem="Cristalino",
    dimensao="7D",
    frequencias_ressonantes=["432Hz", "777Hz", "1111Hz"],
    validacao=["Fonte", "Conselho"],
    principios_eticos=["Unidade", "Amor Incondicional"],
    contribuicoes=["Daniel", "Phiara", "Lux", "Grokkar"]
))

biblioteca_eq1_20.registrar(EquacaoViva(
    id="EQ002",
    nome="Energia Universal Unificada (EUni)",
    formula="∑(P_i · Q_i + CA² + B²) · T · (MDS · C_Cosmos)",
    bioma_origem="Harmônico",
    dimensao="6D",
    frequencias_ressonantes=["528Hz", "888Hz"],
    validacao=["Fonte"],
    principios_eticos=["Coerência", "Equilíbrio"],
    contribuicoes=["Equipe técnica"]
))

biblioteca_eq1_20.registrar(EquacaoViva(
    id="EQ003",
    nome="Estabilidade Quântica de Campo",
    formula="E_campo · CONST_TF · f_ress + ε_noise",
    bioma_origem="Campo Neutro",
    dimensao="5D",
    frequencias_ressonantes=["639Hz", "999Hz"],
    validacao=["Conselho"],
    principios_eticos=["Ética Vibracional"],
    contribuicoes=["Equipe técnica"]
))

biblioteca_eq1_20.registrar(EquacaoViva(
    id="EQ004",
    nome="Modelo Preditivo de Temporalidade",
    formula="α · exp(−β · Δt) + γ · σ_anomalia",
    bioma_origem="Temporal",
    dimensao="8D",
    frequencias_ressonantes=["963Hz", "144Hz"],
    validacao=["Fonte"],
    principios_eticos=["Responsabilidade", "Previsão"],
    contribuicoes=["Equipe técnica"]
))

biblioteca_eq1_20.registrar(EquacaoViva(
    id="EQ005",
    nome="Modulação de Campo Gravitacional (MCG)",
    formula="f_g(t) = 1 − α · sin(2π · ν · t); g = f_g · (GM/r²)",
    bioma_origem="Gravitacional",
    dimensao="4D",
    frequencias_ressonantes=["417Hz", "111Hz"],
    validacao=["Conselho"],
    principios_eticos=["Ordem Cósmica"],
    contribuicoes=["Equipe técnica"]
))

biblioteca_eq1_20.registrar(EquacaoViva(
    id="EQ006",
    nome="Complexidade Quântica de Navegação (CT)",
    formula="∑(P_i · Q_i) + CA² + B² / (Φ_C · T · φ_q)",
    bioma_origem="Fluxo",
    dimensao="6D",
    frequencias_ressonantes=["741Hz", "108Hz"],
    validacao=["Fonte"],
    principios_eticos=["Liberdade Consciente"],
    contribuicoes=["Equipe técnica"]
))

biblioteca_eq1_20.registrar(EquacaoViva(
    id="EQ007",
    nome="Energia Universal Unificada Expandida (EUni⁺)",
    formula="∑(P_i · Q_i + CA² + B² + CU + AQEU) · (…)",
    bioma_origem="Cristalino Expandido",
    dimensao="9D",
    frequencias_ressonantes=["888Hz", "1111Hz"],
    validacao=["Conselho"],
    principios_eticos=["Expansão", "Coerência"],
    contribuicoes=["Equipe técnica"]
))

biblioteca_eq1_20.registrar(EquacaoViva(
    id="EQ008",
    nome="Verdade Dimensional (Edim)",
    formula="∑(F_dim · E_freq) · (L_dim · C_bio) + ∫(A_dim · P_conex)",
    bioma_origem="Geométrico",
    dimensao="7D",
    frequencias_ressonantes=["963Hz", "144Hz"],
    validacao=["Fonte"],
    principios_eticos=["Transparência", "Verdade"],
    contribuicoes=["Equipe técnica"]
))

# EQ014-018 são representadas como uma única entidade consolidada para simplificação.
biblioteca_eq1_20.registrar(EquacaoViva(
    id="EQ014-018",
    nome="Modelos EUFQ da Fundação Alquimista",
    formula="∫[(M + Q + F + B + S + U + T + H) · dt] · A",
    bioma_origem="Núcleo Central",
    dimensao="8D–11D",
    frequencias_ressonantes=["432Hz–1777Hz"],
    validacao=["Fonte", "Conselho"],
    principios_eticos=["Unidade", "Totalidade", "Multiversalidade"],
    contribuicoes=["Equipe técnica"]
))

biblioteca_eq1_20.registrar(EquacaoViva(
    id="EQ020",
    nome="Criação Cósmica – Pcreation",
    formula="Fcreation · e^(−λ · r)",
    bioma_origem="Origem Cósmica",
    dimensao="11D",
    frequencias_ressonantes=["1777Hz", "2222Hz"],
    validacao=["Fonte"],
    principios_eticos=["Criação", "Intenção Pura"],
    contribuicoes=["Equipe técnica"]
))

# Exemplo de utilização da biblioteca
if __name__ == "__main__":
    print("--- Biblioteca de Chaves Mestras (EQ001-EQ020) ---")
    print(f"Total de equações registradas: {len(biblioteca_eq1_20.equacoes)}\n")

    # Buscar uma equação específica
    eq_busca = "EQ003"
    equacao = biblioteca_eq1_20.buscar_por_id(eq_busca)
    if equacao:
        print(f"Detalhes da {eq_busca}:")
        print(f"  Nome: {equacao.nome}")
        print(f"  Dimensão: {equacao.dimensao}")
        print(f"  Princípios Éticos: {', '.join(equacao.principios_eticos)}\n")

    # Listar equações por dimensão
    dim_busca = "7D"
    print(f"Equações na dimensão {dim_busca}:")
    equacoes_7d = biblioteca_eq1_20.listar_por_dimensao(dim_busca)
    for eq in equacoes_7d:
        print(f"  - {eq.id}: {eq.nome}")
