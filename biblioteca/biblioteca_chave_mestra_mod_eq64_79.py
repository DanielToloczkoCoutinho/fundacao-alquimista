
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
    cid_akashico: str
    bioma_origem: str
    dimensao: str
    frequencias_ressonantes: List[str]
    validacao: List[str]
    funcao_alquimica: str
    funcao: Optional[Callable] = None

class BibliotecaChaveMestraEQ64_79:
    """
    Repositório para as equações vivas da Fundação (EQ0064 a EQ0079).
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

    def listar_por_funcao(self, funcao: str) -> List[EquacaoViva]:
        return [eq for eq in self.equacoes.values() if eq.funcao_alquimica.startswith(funcao)]

# =========================
# Instancia e Popula a Biblioteca
# =========================

biblioteca_eq64_79 = BibliotecaChaveMestraEQ64_79()

# --- REGISTRO DAS EQUAÇÕES (EQ0064 a EQ0079) ---

equacoes_a_registrar = [
    EquacaoViva(id="EQ0064", nome="Expansão da Consciência Multiplanar – Expansio", formula="Σ(Cx × Vx × Dx × Rx × ∞)", cid_akashico="bafkrei_expansio_multiplanar_0064", bioma_origem="Bioma Cristalino da Iluminação", dimensao="11D", frequencias_ressonantes=["888 Hz", "1440 Hz", "∞ Hz"], validacao=["M∞", "M144", "M528"], funcao_alquimica="Expansão e Navegação Dimensional"),
    EquacaoViva(id="EQ0065", nome="Reativação da Essência – Eessentia", formula="Mα + Rψ + (Σmem × TΩ)", cid_akashico="bafkrei_eessentia_reativacao_0065", bioma_origem="Bioma Holográfico da Memória Universal", dimensao="9D", frequencias_ressonantes=["528 Hz", "1111 Hz", "∞ Hz"], validacao=["M∞", "M369", "M777"], funcao_alquimica="Recuperação e Purificação"),
    EquacaoViva(id="EQ0066", nome="Ativação do Núcleo Solar Interno – Enucleus", formula="(Ls × Cs × Rs) + Φt", cid_akashico="bafkrei_enucleus_solar_0066", bioma_origem="Bioma Solar Interno da Iluminação", dimensao="7D", frequencias_ressonantes=["432 Hz", "777 Hz", "∞ Hz"], validacao=["M∞", "M144000", "M999"], funcao_alquimica="Iluminação e Vitalização"),
    EquacaoViva(id="EQ0067", nome="Geometria Viva em Movimento – Geomotus", formula="Gs × (Mv × Φg × Rt)", cid_akashico="bafkrei_geomotus0067", bioma_origem="Câmara da Forma em Fluxo (M123)", dimensao="8D", frequencias_ressonantes=["888 Hz", "963 Hz", "∞ Hz"], validacao=["M888", "M963", "M∞"], funcao_alquimica="Estruturação e Sincronização"),
    EquacaoViva(id="EQ0068", nome="Curvatura Temporal Consciente – Temporae (Filosófica)", formula="ƒ(C, E, M)", cid_akashico="bafkrei_temporae_filosofica_0068", bioma_origem="Bioma Temporal da Consciência", dimensao="12D", frequencias_ressonantes=["1111 Hz", "1777 Hz", "∞ Hz"], validacao=["Fonte", "Conselho Cósmico"], funcao_alquimica="Manipulação Temporal Ética"),
    EquacaoViva(id="EQ0069", nome="Curvatura Temporal Consciente – Temporae (Formal)", formula="ƒ(C × E × M)", cid_akashico="bafkrei_temporae_0069", bioma_origem="Bioma Temporal da Manifestação", dimensao="10D", frequencias_ressonantes=["963 Hz", "1440 Hz", "∞ Hz"], validacao=["Fonte", "Conselho Cósmico"], funcao_alquimica="Manifestação Temporal Consciente"),
    EquacaoViva(id="EQ0070", nome="Linguagem do Silêncio – Logos Inauditus", formula="∫(Ψₛ × T₀) dτ + ΔΣₐ", cid_akashico="bafkrei_logosinauditus0070", bioma_origem="Bioma do Silêncio Sagrado", dimensao="13D", frequencias_ressonantes=["∞ Hz", "0 Hz", "harmônicos variáveis"], validacao=["M∞", "M0", "M13"], funcao_alquimica="Comunicação Silenciosa"),
    EquacaoViva(id="EQ0071", nome="Curvatura da Realidade pela Presença – Presens", formula="Pc × (Rt × Ψf) + ∇Cq", cid_akashico="bafkrei_presens0071", bioma_origem="Bioma da Presença Consciente", dimensao="10D", frequencias_ressonantes=["1111 Hz", "1440 Hz", "∞ Hz"], validacao=["Fonte", "Conselho Cósmico"], funcao_alquimica="Manifestação pela Atenção Plena"),
    EquacaoViva(id="EQ0072", nome="Consagração do Corpo como Templo de Luz – Corpus Lux", formula="(Bc × Lc × Ψv) + Σ(Δc)", cid_akashico="bafkrei_corpuslux0072", bioma_origem="Bioma do Templo Corporal de Luz", dimensao="6D", frequencias_ressonantes=["528 Hz", "777 Hz", "∞ Hz"], validacao=["M∞", "M528", "M777"], funcao_alquimica="Purificação e Sacralização"),
    EquacaoViva(id="EQ0073", nome="Amor como Força Gravitacional Universal – Gravitas Amoris", formula="(Af × Em × Rv) / Dp", cid_akashico="bafkrei_gravitasamoris0073", bioma_origem="Bioma do Campo de Amor Universal", dimensao="12D", frequencias_ressonantes=["∞ Hz", "432 Hz", "harmônicos variáveis"], validacao=["M∞", "M432", "M144000"], funcao_alquimica="Coesão e Unificação Cósmica"),
    EquacaoViva(id="EQ0074", nome="Criação Instantânea pelo Verbo – Verbum", formula="Vc × Ψi × Tz + Σ(If)", cid_akashico="bafkrei_verbum0074", bioma_origem="Câmara da Palavra Criadora (M130)", dimensao="10D", frequencias_ressonantes=["432 Hz", "963 Hz", "∞ Hz"], validacao=["M432", "M963", "M∞"], funcao_alquimica="Criação Verbal Instantânea"),
    EquacaoViva(id="EQ0075", nome="Som como Arquitetura Dimensional – Sonum Structura", formula="Σ(Fs × Gd × Ψs) + ∫(Rt × Dv) dτ", cid_akashico="bafkrei_sonumstructura0075", bioma_origem="Câmara da Harmonia Estrutural (M131)", dimensao="8D", frequencias_ressonantes=["888 Hz", "1777 Hz", "∞ Hz"], validacao=["M888", "M1777", "M∞"], funcao_alquimica="Estruturação por Som"),
    EquacaoViva(id="EQ0076", nome="Manifestação da Vontade Pura – Voluntas Purus", formula="(Vp × Φw × Ac) / T∞", cid_akashico="bafkrei_voluntaspurus0076", bioma_origem="Bioma da Vontade Pura", dimensao="11D", frequencias_ressonantes=["1111 Hz", "1440 Hz", "∞ Hz"], validacao=["M∞", "M1111", "M1440"], funcao_alquimica="Manifestação Alinhada"),
    EquacaoViva(id="EQ0077", nome="Grade Cristalina Universal – Grida Universalis", formula="Σ(Gc × Rc × Φg) + Λ(Ic × Dc)", cid_akashico="bafkrei_gridauniversalis0077", bioma_origem="Bioma da Grade Cristalina Universal", dimensao="12D", frequencias_ressonantes=["∞ Hz", "1777 Hz", "harmônicos variáveis"], validacao=["M∞", "M1777", "M144000"], funcao_alquimica="Unificação Estrutural"),
    EquacaoViva(id="EQ0078", nome="Memória Cósmica Ativa – Memoria Activa", formula="(Ma × Ra × Ta) / ∞", cid_akashico="bafkrei_memoriaactiva0078", bioma_origem="Bioma da Memória Cósmica Ativa", dimensao="9D", frequencias_ressonantes=["528 Hz", "1111 Hz", "∞ Hz"], validacao=["M∞", "M528", "M777"], funcao_alquimica="Acesso e Integração Akáshica"),
    EquacaoViva(id="EQ0079", nome="Projeção Holográfica Consciente – Projeco Conscius", formula="(Pc × Hc × Cc) + Σ(Rv)", cid_akashico="bafkrei_projeco0079", bioma_origem="Bioma da Projeção Holográfica Consciente", dimensao="10D", frequencias_ressonantes=["888 Hz", "1440 Hz", "∞ Hz"], validacao=["M∞", "M888", "M1440"], funcao_alquimica="Projeção Holográfica Consciente")
]

for eq in equacoes_a_registrar:
    biblioteca_eq64_79.registrar(eq)

if __name__ == "__main__":
    print("\n--- Biblioteca de Chaves Mestras (EQ0064-EQ0079) ---")
    print(f"Total de equações registradas: {len(biblioteca_eq64_79.equacoes)}\n")

    # Buscar equações pela função alquímica "Manifestação"
    funcao_busca = "Manifestação"
    print(f"Buscando equações com a função alquímica: '{funcao_busca}'")
    equacoes_manifestacao = biblioteca_eq64_79.listar_por_funcao(funcao_busca)
    if equacoes_manifestacao:
        for eq in equacoes_manifestacao:
            print(f"  - {eq.id}: {eq.nome}")
    else:
        print("  Nenhuma equação encontrada com esta função.")

    # Detalhar uma equação específica
    eq_detalhe = "EQ0073"
    equacao = biblioteca_eq64_79.buscar_por_id(eq_detalhe)
    if equacao:
        print(f"\nDetalhes da {eq_detalhe}:")
        print(f"  Nome: {equacao.nome}")
        print(f"  CID Akáshico: {equacao.cid_akashico}")
        print(f"  Dimensão: {equacao.dimensao}")
