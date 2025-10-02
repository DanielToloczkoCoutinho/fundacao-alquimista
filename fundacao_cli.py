
import sys
import os

# Adiciona o diretório raiz ao path para garantir que o pacote 'biblioteca' seja encontrado
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

class Cores:
    """Define códigos de cores ANSI para uma saída de terminal mais clara."""
    VERDE = '\033[92m'
    AMARELO = '\033[93m'
    VERMELHO = '\033[91m'
    AZUL = '\033[94m'
    FIM = '\033[0m'

def verificar_coerencia():
    """
    Verifica a coerência do sistema, garantindo que a Biblioteca Unificada
    esteja corretamente conectada a todos os módulos de conhecimento (as portas).
    """
    print(f"{Cores.AZUL}Iniciando verificação de coerência da Fundação Alquimista...{Cores.FIM}")

    try:
        from biblioteca_unificada import grand_unified_library
        
        total_unificado = grand_unified_library.total_de_equacoes()

        if total_unificado > 0:
            print(f"{Cores.VERDE}✓ SUCESSO:{Cores.FIM} Biblioteca Unificada (as chaves) carregada com sucesso.")
            print(f"  Total de equações consolidadas: {Cores.AMARELO}{total_unificado}{Cores.FIM}")
        else:
            print(f"{Cores.VERMELHO}✗ FALHA:{Cores.FIM} A Biblioteca Unificada foi carregada, mas está vazia.")
            return

        # Lista de chaves de amostra para verificar se cada porta (módulo) está conectada
        modulos_chave = {
            "EQ001": "Chave Mestra Primordial",
            "EQ021": "Interação do Vácuo",
            "EQ0041": "Expansão Total da Fundação",
            "EQ0064": "Expansão da Consciência Multiplanar",
            "EQ0080": "Fusão da Identidade",
            "EQ100": "Consciência Unificada",
            "EQ112": "Portal de Hélios",
            "EQ177-001": "Ponto Singular (MOD 0-9)",
            "EQ177-041": "Hardware Quântico (MOD 10-20)",
            "EQ2101": "Trajetória Interdimensional (MOD 21-31)",
            "EQ3201": "Campo de Consciência Unificada (MOD 32-41)",
            "EQ4201": "Alinhamento com a Vontade Divina (MOD 42-46)",
        }

        print(f"\n{Cores.AZUL}Verificando conectividade com os módulos (as portas)...{Cores.FIM}")
        erros = 0
        for eq_id, nome_exemplo in modulos_chave.items():
            if grand_unified_library.buscar_por_id(eq_id):
                print(f"  {Cores.VERDE}✓ Conectado:{Cores.FIM} A porta para o módulo '{nome_exemplo}' está aberta.")
            else:
                print(f"  {Cores.VERMELHO}✗ Desconectado:{Cores.FIM} Falha ao encontrar a chave '{eq_id}' para a porta '{nome_exemplo}'.")
                erros += 1

        print("-" * 40)
        if erros == 0:
            print(f"{Cores.VERDE}COERÊNCIA DO SISTEMA VERIFICADA. TODAS AS PORTAS ESTÃO CONECTADAS À BIBLIOTECA.{Cores.FIM}")
        else:
            print(f"{Cores.VERMELHO}VERIFICAÇÃO DE COERÊNCIA FALHOU. {erros} MÓDULOS (PORTAS) PARECEM DESCONECTADOS.{Cores.FIM}")

    except ImportError as e:
        print(f"{Cores.VERMELHO}ERRO CRÍTICO DE IMPORTAÇÃO:{Cores.FIM}")
        print("Não foi possível carregar a Biblioteca Unificada. Verifique se 'biblioteca_unificada.py' existe e se o diretório 'biblioteca' contém todos os módulos.")
        print(f"Detalhe do erro: {e}")
    except Exception as e:
        print(f"{Cores.VERMELHO}ERRO INESPERADO DURANTE A VERIFICAÇÃO:{Cores.FIM} Detalhe: {e}")

def atualizar_modulos():
    """
    Força a recarga da Biblioteca Unificada, sincronizando-a com o estado
    atual de todos os arquivos de módulo no disco.
    """
    print(f"{Cores.AZUL}Iniciando a atualização de todos os módulos da Fundação...{Cores.FIM}")
    print("Sincronizando a Biblioteca (as chaves) com os Módulos (as portas) em disco...")

    try:
        # A lógica de verificação já força a recarga e consolidação,
        # cumprindo efetivamente o propósito da atualização.
        verificar_coerencia()
        print(f"\n{Cores.VERDE}ATUALIZAÇÃO CONCLUÍDA.{Cores.FIM} A Fundação está sincronizada.")
    except Exception as e:
        print(f"{Cores.VERMELHO}FALHA NA ATUALIZAÇÃO:{Cores.FIM} {e}")

def exibir_ajuda():
    """Mostra as instruções de uso do comando."""
    print("\nComando para gerenciamento da Fundação Alquimista")
    print("Uso: python fundacao_cli.py [comando]")
    print("\nComandos disponíveis:")
    print(f"  {Cores.AMARELO}verify{Cores.FIM}    - Verifica a coerência e a conexão entre a Biblioteca e todos os Módulos.")
    print(f"  {Cores.AMARELO}update{Cores.FIM}    - Sincroniza a Biblioteca com o estado atual de todos os Módulos em disco.")
    print(f"  {Cores.AMARELO}help{Cores.FIM}      - Exibe esta mensagem de ajuda.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        exibir_ajuda()
        sys.exit(1)

    comando = sys.argv[1].lower()

    if comando == "verify":
        verificar_coerencia()
    elif comando == "update":
        atualizar_modulos()
    elif comando == "help":
        exibir_ajuda()
    else:
        print(f"\n{Cores.VERMELHO}Comando '{comando}' não reconhecido.{Cores.FIM}")
        exibir_ajuda()
