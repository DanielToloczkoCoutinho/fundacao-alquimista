
from dataclasses import dataclass, field
from typing import List, Optional

@dataclass
class EquacaoViva:
    id: str
    nome: str
    descricao: str
    aplicacao: str
    chave_primaria: str
    frequencia: str

class BibliotecaChaveMestraEQ112_133:
    def __init__(self):
        self.equacoes = {}
        self._registrar_equacoes()

    def _registrar_equacoes(self):
        lista_equacoes = [
            EquacaoViva(id="EQ112", nome="Portal de Hélios", descricao="Abertura de portais solares para canalização de energia.", aplicacao="Rituais de ascensão, energização de redes cristalinas.", chave_primaria="Frequência do Sol", frequencia="126.22 Hz"),
            EquacaoViva(id="EQ113", nome="Chave de Metatron", descricao="Decodificação de padrões geométricos complexos.", aplicacao="Acesso a registros akáshicos, criação de mandalas de proteção.", chave_primaria="Cubo de Metatron", frequencia="N/A"),
            EquacaoViva(id="EQ114", nome="Semente da Vida", descricao="Ativação do potencial genético e espiritual.", aplicacao="Cura quântica, reprogramação de DNA.", chave_primaria="Geometria da Semente da Vida", frequencia="528 Hz"),
            EquacaoViva(id="EQ115", nome="Flor da Vida", descricao="Conexão com a matriz universal da criação.", aplicacao="Viagem interdimensional, manifestação consciente.", chave_primaria="Geometria da Flor da Vida", frequencia="N/A"),
            EquacaoViva(id="EQ121", nome="O Olho de Hórus", descricao="Amplificação da percepção e da intuição.", aplicacao="Clarividência, projeção astral.", chave_primaria="Símbolo do Olho de Hórus", frequencia="N/A"),
            EquacaoViva(id="EQ133", nome="A Ascensão de Sophia", descricao="Integração da sabedoria divina feminina.", aplicacao="Equilíbrio de polaridades, cura do sagrado feminino.", chave_primaria="Sabedoria de Sophia", frequencia="N/A"),
        ]
        for eq in lista_equacoes:
            self.equacoes[eq.id] = eq
            print(f"Equação '{eq.nome}' ({eq.id}) registrada.")

    def buscar_por_id(self, eq_id: str) -> Optional[EquacaoViva]:
        return self.equacoes.get(eq_id)

# Instancia a biblioteca para que seja importável
biblioteca = BibliotecaChaveMestraEQ112_133()

if __name__ == "__main__":
    print(f"\nTotal de equações na biblioteca: {len(biblioteca.equacoes)}")
    eq_busca = "EQ115"
    equacao = biblioteca.buscar_por_id(eq_busca)
    if equacao:
        print(f"\nDetalhes de {eq_busca}: {equacao.nome} - {equacao.descricao}")
