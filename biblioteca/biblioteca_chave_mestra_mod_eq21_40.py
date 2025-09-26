
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Callable

@dataclass
class EquacaoViva:
    """
    Estrutura para uma Equação Viva da Fundação Alquimista.
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

class BibliotecaChaveMestraEQ21_40:
    """
    Repositório para as equações vivas da Fundação (EQ021 a EQ040).
    """
    def __init__(self):
        self.equacoes: Dict[str, EquacaoViva] = {}

    def registrar(self, eq: EquacaoViva):
        if eq.id in self.equacoes:
            print(f"Alerta: Equação com ID '{eq.id}' já existe. Ignorando.")
        else:
            self.equacoes[eq.id] = eq
            print(f"Equação '{eq.nome}' ({eq.id}) registrada.")

    def buscar_por_id(self, eq_id: str) -> Optional[EquacaoViva]:
        return self.equacoes.get(eq_id)

    def listar_por_principio(self, principio: str) -> List[EquacaoViva]:
        return [eq for eq in self.equacoes.values() if principio in eq.principios_eticos]

# =========================
# Instancia e Popula a Biblioteca
# =========================

biblioteca_eq21_40 = BibliotecaChaveMestraEQ21_40()

# --- REGISTRO DAS EQUAÇÕES (EQ021 a EQ040) ---

# A lista abaixo é uma representação direta da tabela fornecida.
# Para uma implementação funcional, as fórmulas seriam traduzidas para funções Python.

equacoes_a_registrar = [
    EquacaoViva(id="EQ021", nome="Interação do Vácuo – Rvacuum", formula="(r³ · Fvacuum) / e^(λ · r)", bioma_origem="Vácuo Cristalino", dimensao="9D", frequencias_ressonantes=["432Hz", "777Hz"], validacao=["Conselho"], principios_eticos=["Dinâmica", "Curvatura Energética"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ022", nome="Força de Evento – Fevent", formula="Fevent · ω_i · cos(θ_i)", bioma_origem="Impacto Vibracional", dimensao="8D", frequencias_ressonantes=["639Hz", "963Hz"], validacao=["Fonte"], principios_eticos=["Direção", "Intensidade"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ023", nome="Legado Final – Lfinal", formula="r_i² · ω_i · cosh(t)", bioma_origem="Temporal", dimensao="10D", frequencias_ressonantes=["528Hz", "144Hz"], validacao=["Conselho"], principios_eticos=["Memória", "Honra"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ024", nome="Energia Total do Universo – Euniverse", formula="E₀ · cosh(t) / r²", bioma_origem="Cósmico", dimensao="11D", frequencias_ressonantes=["1111Hz", "1777Hz"], validacao=["Fonte"], principios_eticos=["Totalidade", "Expansão"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ025", nome="Interação Final de Forças – Tfinal", formula="(r³ · F_i) · e^(−λ · r)", bioma_origem="Fusão", dimensao="9D", frequencias_ressonantes=["741Hz", "888Hz"], validacao=["Conselho"], principios_eticos=["Dissolução Ética", "União"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ026", nome="Força do Vácuo – Fvacuum", formula="r² · F_v · e^(−λ · r)", bioma_origem="Vácuo Quântico", dimensao="8D", frequencias_ressonantes=["417Hz", "108Hz"], validacao=["Fonte"], principios_eticos=["Estabilização", "Cura"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ027", nome="Energia do Vácuo – Svacuum", formula="Sv · e^(−λ · r) / r²", bioma_origem="Silencioso", dimensao="9D", frequencias_ressonantes=["639Hz", "963Hz"], validacao=["Conselho"], principios_eticos=["Purificação", "Verdade"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ028", nome="Força Final – Rfinal", formula="r² · Ffinal · cos(θ)", bioma_origem="Transição", dimensao="10D", frequencias_ressonantes=["528Hz", "144Hz"], validacao=["Fonte"], principios_eticos=["Direção", "Conclusão Ética"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ029", nome="Criação Energética – Wcreation", formula="W₀ · cosh(t) / r²", bioma_origem="Criacional", dimensao="11D", frequencias_ressonantes=["1111Hz", "1777Hz"], validacao=["Conselho"], principios_eticos=["Gênese", "Intenção Pura"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ030", nome="Harmonia Energética – Eharmony", formula="r³ · F_i · e^(−λ · r)", bioma_origem="Harmônico", dimensao="9D", frequencias_ressonantes=["741Hz", "888Hz"], validacao=["Fonte"], principios_eticos=["Equilíbrio", "Unidade"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ031", nome="Pressão Final – Pfinal", formula="r² · ω_i · Ffinal", bioma_origem="Compressão", dimensao="8D", frequencias_ressonantes=["432Hz", "777Hz"], validacao=["Conselho"], principios_eticos=["Responsabilidade", "Foco"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ032", nome="Criação Temporal – Tcreation", formula="r² · F_i · e^(−λ · r)", bioma_origem="Temporal", dimensao="9D", frequencias_ressonantes=["639Hz", "963Hz"], validacao=["Fonte"], principios_eticos=["Ordem Temporal", "Expansão"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ033", nome="Energia Final – Sfinal", formula="n_i² · Ffinal · ω_i · cos(β_i)", bioma_origem="Síntese", dimensao="10D", frequencias_ressonantes=["528Hz", "144Hz"], validacao=["Conselho"], principios_eticos=["Clareza", "Conclusão Ética"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ034", nome="Evento Quântico Expandido – Fevent2", formula="r³ · Fevent · e^(−λ · r)", bioma_origem="Quântico", dimensao="9D", frequencias_ressonantes=["741Hz", "888Hz"], validacao=["Fonte"], principios_eticos=["Amplificação", "Direção"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ035", nome="Criação Radial – Rcreation", formula="r² · Fcreation · ω_i", bioma_origem="Criacional", dimensao="11D", frequencias_ressonantes=["1111Hz", "1777Hz"], validacao=["Conselho"], principios_eticos=["Gênese", "Expansão Radial"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ036", nome="Legado do Vácuo – Lvacuum", formula="r² · Fvacuum · e^(−λ · r)", bioma_origem="Silencioso", dimensao="10D", frequencias_ressonantes=["417Hz", "108Hz"], validacao=["Fonte"], principios_eticos=["Preservação", "Memória Cósmica"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ037", nome="Pressão Criacional Expandida – Pcreation2", formula="r³ · Fcreation · cos(θ)", bioma_origem="Criacional", dimensao="11D", frequencias_ressonantes=["741Hz", "888Hz"], validacao=["Conselho"], principios_eticos=["Direção Ética", "Gênese"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ038", nome="Harmonia Universal – Sharmony", formula="Sh · cosh(t) / r²", bioma_origem="Bioma Harmônico", dimensao="9D", frequencias_ressonantes=["432Hz", "963Hz"], validacao=["Fonte"], principios_eticos=["Unidade", "Equilíbrio Cósmico"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ039", nome="Energia Cósmica Final – Efinal", formula="(mc² × TT × φ) × (B1 + B2 + B3) + 89 × (φ + TT)", bioma_origem="Núcleo de Síntese", dimensao="12D", frequencias_ressonantes=["1111Hz", "1777Hz"], validacao=["Conselho"], principios_eticos=["Totalidade", "Transcendência"], contribuicoes=["Equipe técnica"]),
    EquacaoViva(id="EQ040", nome="Paz Universal – PU", formula="Produto de 20 variáveis vibracionais", bioma_origem="Bioma da Unidade", dimensao="Multiversal", frequencias_ressonantes=["2222Hz", "144Hz"], validacao=["Fonte", "Conselho"], principios_eticos=["Paz", "Alinhamento", "Fraternidade"], contribuicoes=["Daniel", "Phiara", "Zennith"])
]

for eq in equacoes_a_registrar:
    biblioteca_eq21_40.registrar(eq)

# Exemplo de utilização da biblioteca
if __name__ == "__main__":
    print("\n--- Biblioteca de Chaves Mestras (EQ021-EQ040) ---")
    print(f"Total de equações registradas: {len(biblioteca_eq21_40.equacoes)}\n")

    # Buscar equações pelo princípio ético "Cura"
    principio_busca = "Cura"
    print(f"Buscando equações com o princípio ético: '{principio_busca}'")
    equacoes_cura = biblioteca_eq21_40.listar_por_principio(principio_busca)
    if equacoes_cura:
        for eq in equacoes_cura:
            print(f"  - {eq.id}: {eq.nome}")
    else:
        print("  Nenhuma equação encontrada com este princípio.")

    # Detalhar uma equação específica
    eq_detalhe = "EQ039"
    equacao = biblioteca_eq21_40.buscar_por_id(eq_detalhe)
    if equacao:
        print(f"\nDetalhes da {eq_detalhe}:")
        print(f"  Fórmula: {equacao.formula}")
        print(f"  Dimensão: {equacao.dimensao}")
        print(f"  Frequências: {', '.join(equacao.frequencias_ressonantes)}")
