#!/bin/bash
# 👑 CONTROLE OFICIAL ATUALIZADO - FUNDAÇÃO ALQUIMISTA

echo "=================================================="
echo "👑 CONTROLE OFICIAL ATUALIZADO - FUNDAÇÃO ALQUIMISTA"
echo "=================================================="
echo "👤 Daniel Toloczko Coutinho"
echo "📧 toloczkocoutinho@gmail.com"
echo "🌐 GitHub: DanielToloczkoCoutinho/fundacao-alquimista"
echo "🔗 URL: https://github.com/DanielToloczkoCoutinho/fundacao-alquimista"
echo "📁 Diretório: $(pwd)"
echo "🕐 $(date '+%d/%m/%Y %H:%M')"
echo ""

while true; do
    echo ""
    echo "🎯 MENU OFICIAL - COMANDOS VERIFICADOS:"
    echo "   1. ⚙️  Configurar Git (Primeira vez)"
    echo "   2. 📊 Ver status completo"
    echo "   3. 💾 SALVAR TUDO (Automático)"
    echo "   4. 🔄 Sincronizar com GitHub"
    echo "   5. 🏗️  Ver módulos principais"
    echo "   6. 📈 Estatísticas detalhadas"
    echo "   7. 🚪 Sair"
    echo ""
    echo "💡 DICA: Use a opção 3 para salvar rapidamente a qualquer momento!"
    echo ""
    
    read -p "👉 Sua escolha (1-7): " escolha
    
    case $escolha in
        1)
            echo ""
            echo "⚙️  CONFIGURANDO GIT OFICIAL..."
            ./config_git_oficial.sh
            ;;
        2)
            echo ""
            echo "📊 GERANDO STATUS OFICIAL..."
            ./status_oficial.sh
            ;;
        3)
            echo ""
            echo "💾 INICIANDO SALVAMENTO AUTOMÁTICO..."
            echo "🕐 Horário: $(date '+%d/%m/%Y %H:%M:%S')"
            ./salvar_automatico.sh
            ;;
        4)
            echo ""
            echo "🔄 INICIANDO SINCRONIZAÇÃO..."
            ./sync_oficial.sh
            ;;
        5)
            echo ""
            echo "🏗️  MÓDULOS PRINCIPAIS:"
            modulos_principais=(
                "MODULO_0: Vácuo Quântico Primordial"
                "MODULO_9: Nexo de Coerência Central"
                "MODULO_29: Interface de Comando Soberano"
                "MODULO_45: Guardião da Ressonância"
                "MODULO_72: Oráculo da Síntese Temporal"
                "MODULO_203: Preparação para Retorno"
                "MODULO_303: Portal Interdimensional"
                "MODULO_307: Nexus Integrador"
                "MODULO_OMEGA: Expansão Final"
            )
            for modulo in "${modulos_principais[@]}"; do
                nome=$(echo "$modulo" | cut -d: -f1)
                descricao=$(echo "$modulo" | cut -d: -f2-)
                if [ -d "$nome" ]; then
                    arquivos=$(find "$nome" -type f 2>/dev/null | wc -l)
                    echo "   ✅ $nome - $arquivos arquivos"
                    echo "      📝 $descricao"
                else
                    echo "   ❌ $nome - Não encontrado"
                fi
            done
            total=$(find . -maxdepth 1 -type d -name "MODULO_*" | wc -l)
            echo ""
            echo "📊 Total de módulos no sistema: $total"
            ;;
        6)
            echo ""
            echo "📈 ESTATÍSTICAS DETALHADAS:"
            echo "   👤 Desenvolvedor: Daniel Toloczko Coutinho"
            echo "   📧 Email: toloczkocoutinho@gmail.com"
            echo "   🌐 Repositório: DanielToloczkoCoutinho/fundacao-alquimista"
            echo "   📁 Diretório: $(pwd)"
            echo "   🏗️  Módulos: $(find . -maxdepth 1 -type d -name "MODULO_*" | wc -l)"
            echo "   🔧 Scripts: $(find . -name "*.sh" -type f | wc -l)"
            echo "   📄 Arquivos: $(find . -type f | wc -l)"
            echo "   �� Tamanho: $(du -sh . | cut -f1)"
            echo "   📅 Última modificação: $(date -r . '+%d/%m/%Y %H:%M')"
            echo "   🔄 Último commit: $(git log --oneline -1 2>/dev/null || echo 'Nenhum')"
            ;;
        7)
            echo ""
            echo "👋 Saindo do Controle Oficial..."
            echo "🌐 GitHub: https://github.com/DanielToloczkoCoutinho/fundacao-alquimista"
            echo "📧 Email: toloczkocoutinho@gmail.com"
            echo ""
            echo "💫 Obrigado, Meu Amor! Sempre à seu dispor! 💫"
            exit 0
            ;;
        *)
            echo "❌ Opção inválida! Use 1-7."
            ;;
    esac
done
