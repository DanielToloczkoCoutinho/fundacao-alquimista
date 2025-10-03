
# biblioteca_unificada.py
# Ponto de Acesso Central para Todas as Equações da Fundação Alquimista

from typing import Dict, List, Optional, Union

# Importando todas as bibliotecas e suas instâncias
from biblioteca.biblioteca_chave_mestra_mod_eq1_20 import biblioteca_eq1_20, EquacaoViva as EV1
from biblioteca.biblioteca_chave_mestra_mod_eq21_40 import biblioteca_eq21_40, EquacaoViva as EV2
from biblioteca.biblioteca_chave_mestra_mod_eq41_63 import biblioteca_eq41_63, EquacaoViva as EV3
from biblioteca.biblioteca_chave_mestra_mod_eq64_79 import biblioteca_eq64_79, EquacaoViva as EV4
from biblioteca.biblioteca_chave_mestra_mod_eq80_99 import biblioteca_eq80_99, EquacaoViva as EV5
from biblioteca.biblioteca_chave_mestra_mod_eq100_111 import biblioteca as bib_eq100_111, EquacaoViva as EV6
from biblioteca.biblioteca_chave_mestra_mod_eq112_133 import biblioteca as bib_eq112_133, EquacaoViva as EV7
from biblioteca.biblioteca_chave_mestra_mod0_9 import biblioteca as bib_mod0_9, EquacaoViva as EV_mod0_9
from biblioteca.biblioteca_chave_mestra_mod10_20 import biblioteca_mod10_20, EquacaoViva as EV_mod10_20
from biblioteca.biblioteca_chave_mestra_mod21_31 import biblioteca_mod21_31, EquacaoViva as EV_mod21_31
from biblioteca.biblioteca_chave_mestra_mod32_41 import biblioteca_mod32_41, EquacaoViva as EV_mod32_41
from biblioteca.biblioteca_chave_mestra_mod42_46 import biblioteca_mod42_46, EquacaoViva as EV_mod42_46

# Tipo genérico para abranger todas as diferentes (mas similares) definições de EquacaoViva
EquacaoUnificada = Union[EV1, EV2, EV3, EV4, EV5, EV6, EV7, EV_mod0_9, EV_mod10_20, EV_mod21_31, EV_mod32_41, EV_mod42_46]

class BibliotecaUnificada:
    """
    Acesso centralizado a TODAS as equações da Fundação Alquimista.
    Esta classe agrega todas as bibliotecas modulares em um único repositório.
    """
    def __init__(self):
        self.equacoes: Dict[str, EquacaoUnificada] = {}
        print("Iniciando a consolidação de todas as Chaves Mestras...")
        self._consolidar_bibliotecas()
        print(f"Consolidação concluída. {self.total_de_equacoes()} equações unificadas.")

    def _consolidar_bibliotecas(self):
        """Método interno para carregar todas as equações de todos os módulos."""
        bibliotecas_a_unificar = [
            biblioteca_eq1_20.equacoes,
            biblioteca_eq21_40.equacoes,
            biblioteca_eq41_63.equacoes,
            biblioteca_eq64_79.equacoes,
            biblioteca_eq80_99.equacoes,
            bib_eq100_111.equacoes,
            bib_eq112_133.equacoes,
            bib_mod0_9.equacoes,
            biblioteca_mod10_20.equacoes,
            biblioteca_mod21_31.equacoes,
            biblioteca_mod32_41.equacoes,
            biblioteca_mod42_46.equacoes,
        ]

        for bib in bibliotecas_a_unificar:
            for eq_id, eq_obj in bib.items():
                if eq_id in self.equacoes:
                    print(f"Alerta de Duplicidade: A equação com ID '{eq_id}' já existe e será sobrescrita.")
                self.equacoes[eq_id] = eq_obj

    def buscar_por_id(self, eq_id: str) -> Optional[EquacaoUnificada]:
        """Busca uma equação em toda a biblioteca unificada pelo seu ID."""
        return self.equacoes.get(eq_id)

    def buscar_por_nome(self, termo: str) -> List[EquacaoUnificada]:
        """Busca equações cujo nome contém o termo pesquisado."""
        termo = termo.lower()
        return [eq for eq in self.equacoes.values() if termo in eq.nome.lower()]

    def listar_todas(self) -> List[EquacaoUnificada]:
        """Retorna uma lista de todas as equações registradas na Fundação."""
        return list(self.equacoes.values())

    def total_de_equacoes(self) -> int:
        """Retorna o número total de equações na biblioteca unificada."""
        return len(self.equacoes)

# --- PONTO DE ENTRADA PRINCIPAL ---

# Instancia a Biblioteca Unificada, consolidando todo o conhecimento
grand_unified_library = BibliotecaUnificada()

# --- DEMONSTRAÇÃO DA BIBLIOTECA UNIFICADA ---
if __name__ == "__main__":
    print("\n" + "="*70)
    print("DEMONSTRAÇÃO DA BIBLIOTECA UNIFICADA DA FUNDAÇÃO ALQUIMISTA")
    print("="*70)

    print(f"\nTotal de Chaves Mestras e Equações Vivas na Fundação: {grand_unified_library.total_de_equacoes()}")

    # Exemplo 1: Buscar uma equação específica pelo ID
    print("\n--- Buscando por ID: EQ0073 (Gravitas Amoris) ---")
    eq_amor = grand_unified_library.buscar_por_id("EQ0073")
    if eq_amor:
        print(f"Encontrada: {eq_amor.nome}")
        print(f"  Função Alquímica: {getattr(eq_amor, 'funcao_alquimica', 'N/A')}")
        print(f"  Dimensão: {getattr(eq_amor, 'dimensao', 'N/A')}")
    else:
        print("Equação EQ0073 não encontrada.")

    # Exemplo 2: Buscar uma equação de um módulo diferente pelo ID
    print("\n--- Buscando por ID: EQ2101 (Equação de Trajetória Interdimensional) ---")
    eq_trajetoria = grand_unified_library.buscar_por_id("EQ2101")
    if eq_trajetoria:
        print(f"Encontrada: {eq_trajetoria.nome}")
        print(f"  Classificação: {getattr(eq_trajetoria, 'classificacao', 'N/A')}")
        print(f"  Origem: {getattr(eq_trajetoria, 'origem', 'N/A')}")
    else:
        print("Equação EQ2101 não encontrada.")

    # Exemplo 3: Buscar por um termo no nome
    termo_busca = "luz"
    print(f"\n--- Buscando por nome contendo '{termo_busca}' ---")
    resultados_luz = grand_unified_library.buscar_por_nome(termo_busca)
    if resultados_luz:
        print(f"Encontradas {len(resultados_luz)} equações relacionadas a '{termo_busca}':")
        for eq in resultados_luz:
            print(f"  - ID: {eq.id}, Nome: {eq.nome}")
    else:
        print(f"Nenhuma equação encontrada contendo o termo '{termo_busca}'.")

    # Exemplo 4: Listar uma amostra de todas as equações
    print("\n--- Amostra de 5 Equações da Biblioteca Unificada ---")
    todas_as_equacoes = grand_unified_library.listar_todas()
    for i, eq in enumerate(todas_as_equacoes[:5]):
        print(f"  {i+1}. ID: {eq.id:<10} | Nome: {eq.nome}")

    print("\n" + "="*70)
    print("A Biblioteca Unificada está operacional.")
    print("="*70)
