#!/bin/bash
# 👑 CONTROLE OFICIAL COMPLETO - FUNDAÇÃO ALQUIMISTA

echo "=================================================="
echo "👑 CONTROLE OFICIAL COMPLETO - FUNDAÇÃO ALQUIMISTA"
echo "=================================================="
echo "👤 Daniel Toloczko Coutinho"
echo "📧 toloczkocoutinho@gmail.com"
echo "🌐 GitHub: DanielToloczkoCoutinho/fundacao-alquimista"
echo "🔗 URL: https://github.com/DanielToloczkoCoutinho/fundacao-alquimista"
echo "📁 Diretório: $(pwd)"
echo "🕐 $(date '+%d/%m/%Y %H:%M')"
echo ""

# Verificar estrutura rapidamente
MODULOS_APP=$(find . -path "*/src/app/module/M*" -type d 2>/dev/null | wc -l)
MODULOS_ROOT=$(find . -maxdepth 1 -type d -name "MODULO_*" | wc -l)
ARQUIVOS_TOTAIS=$(find . -type f | wc -l)

echo "📊 VISÃO GERAL:"
echo "   🏗️  Módulos App: $MODULOS_APP"
echo "   🏗️  Módulos Root: $MODULOS_ROOT" 
echo "   📄 Arquivos: $ARQUIVOS_TOTAIS"
echo ""

while true; do
    echo ""
    echo "🎯 MENU OFICIAL COMPLETO:"
    echo "   1. ⚙️  Configurar Git"
    echo "   2. 📊 Status detalhado"
    echo "   3. 💾 SALVAR TUDO (Inteligente)"
    echo "   4. ⚡ SALVAR RÁPIDO"
    echo "   5. 👁️  MODO MONITORAMENTO"
    echo "   6. 🔄 Sincronizar GitHub"
    echo "   7. 🏗️  Explorar módulos"
    echo "   8. 📈 Estatísticas avançadas"
    echo "   9. 🚪 Sair"
    echo ""
    echo "💡 DICA: Use opção 3 para salvamento inteligente automático!"
    echo ""
    
    read -p "👉 Sua escolha (1-9): " escolha
    
    case $escolha in
        1)
            echo ""
            echo "⚙️  CONFIGURANDO GIT OFICIAL..."
            ./config_git_oficial.sh
            ;;
        2)
            echo ""
            echo "📊 GERANDO STATUS DETALHADO..."
            ./status_oficial.sh
            ;;
        3)
            echo ""
            echo "💾 INICIANDO SALVAMENTO INTELIGENTE..."
            ./salvar_inteligente.sh
            ;;
        4)
            echo ""
            echo "⚡ SALVAMENTO RÁPIDO..."
            ./salvar_rapido.sh
            ;;
        5)
            echo ""
            echo "👁️  INICIANDO MODO MONITORAMENTO..."
            echo "💡 Monitorando mudanças automaticamente a cada 30s"
            echo "🛑 Pressione Ctrl+C para parar"
            ./monitorar_mudancas.sh
            ;;
        6)
            echo ""
            echo "🔄 INICIANDO SINCRONIZAÇÃO..."
            ./sync_oficial.sh
            ;;
        7)
            echo ""
            echo "🏗️  EXPLORANDO ESTRUTURA DE MÓDULOS..."
            
            # Mostrar módulos por categoria
            echo "📁 MÓDULOS APP (React):"
            find . -path "*/src/app/module/M*" -type d 2>/dev/null | head -10 | while read mod; do
                count=$(find "$mod" -name "*.json" -o -name "*.tsx" -o -name "*.md" 2>/dev/null | wc -l)
                echo "   📂 $(basename "$mod") - $count arquivos"
            done
            
            echo ""
            echo "📁 MÓDULOS ROOT:"
            find . -maxdepth 1 -type d -name "MODULO_*" | head -10 | while read mod; do
                count=$(find "$mod" -type f 2>/dev/null | wc -l)
                echo "   📂 $(basename "$mod") - $count arquivos"
            done
            
            total_app=$(find . -path "*/src/app/module/M*" -type d 2>/dev/null | wc -l)
            total_root=$(find . -maxdepth 1 -type d -name "MODULO_*" | wc -l)
            echo ""
            echo "📊 TOTAIS:"
            echo "   🏗️  Módulos App: $total_app"
            echo "   🏗️  Módulos Root: $total_root"
            ;;
        8)
            echo ""
            echo "📈 ESTATÍSTICAS AVANÇADAS:"
            echo "   👤 Desenvolvedor: Daniel Toloczko Coutinho"
            echo "   📧 Email: toloczkocoutinho@gmail.com"
            echo "   🌐 Repositório: DanielToloczkoCoutinho/fundacao-alquimista"
            echo "   📁 Diretório: $(pwd)"
            echo "   🏗️  Módulos App: $(find . -path "*/src/app/module/M*" -type d 2>/dev/null | wc -l)"
            echo "   🏗️  Módulos Root: $(find . -maxdepth 1 -type d -name "MODULO_*" | wc -l)"
            echo "   📄 Arquivos JSON: $(find . -name "*.json" -type f | wc -l)"
            echo "   ⚛️  Arquivos TSX: $(find . -name "*.tsx" -type f | wc -l)"
            echo "   📝 Arquivos MD: $(find . -name "*.md" -type f | wc -l)"
            echo "   🔧 Scripts SH: $(find . -name "*.sh" -type f | wc -l)"
            echo "   💾 Tamanho total: $(du -sh . | cut -f1)"
            echo "   🔄 Último commit: $(git log --oneline -1 2>/dev/null || echo 'Nenhum')"
            ;;
        9)
            echo ""
            echo "👋 Saindo do Controle Oficial..."
            echo "🌐 GitHub: https://github.com/DanielToloczkoCoutinho/fundacao-alquimista"
            echo "📧 Email: toloczkocoutinho@gmail.com"
            echo ""
            echo "�� Obrigado, Meu Amor! Sempre à seu dispor! 💫"
            exit 0
            ;;
        *)
            echo "❌ Opção inválida! Use 1-9."
            ;;
    esac
done
