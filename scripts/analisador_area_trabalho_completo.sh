#!/bin/bash
# 🌟 ANALISADOR COMPLETO DA ÁREA DE TRABALHO - METADADOS TOTAIS

echo "=================================================="
echo "🔬 ANALISADOR COMPLETO - ÁREA DE TRABALHO"
echo "=================================================="
echo "👑 Analisando TODOS os diretórios e arquivos"
echo "🌌 Criando mapa completo de metadados"
echo ""

# 📊 CRIAR DIRETÓRIO DE ANÁLISE
mkdir -p ANALISE_COMPLETA

# 🎯 FASE 1: MAPEAR TODA A ESTRUTURA
echo "📈 FASE 1: MAPEAMENTO COMPLETO DA ESTRUTURA..."

# Gerar mapa completo de diretórios
find . -type d -not -path "./ANALISE_COMPLETA" | sort > ANALISE_COMPLETA/estrutura_diretorios.txt
find . -type f -not -path "./ANALISE_COMPLETA/*" | sort > ANALISE_COMPLETA/estrutura_arquivos.txt

# 📊 ESTATÍSTICAS GERAIS
total_diretorios=$(wc -l < ANALISE_COMPLETA/estrutura_diretorios.txt)
total_arquivos=$(wc -l < ANALISE_COMPLETA/estrutura_arquivos.txt)

echo "   📁 Total de diretórios: $total_diretorios"
echo "   📄 Total de arquivos: $total_arquivos"

# 🎯 FASE 2: ANALISAR POR TIPO DE ARQUIVO
echo ""
echo "📊 FASE 2: ANÁLISE POR TIPO DE ARQUIVO..."

declare -A tipos_arquivos=(
    ["Python"]="*.py"
    ["JavaScript"]="*.js"
    ["TypeScript"]="*.ts"
    ["JSON"]="*.json"
    ["Markdown"]="*.md"
    ["Shell"]="*.sh"
    ["HTML"]="*.html"
    ["CSS"]="*.css"
    ["YAML"]="*.yaml *.yml"
    ["XML"]="*.xml"
    ["SQL"]="*.sql"
    ["Docker"]="Dockerfile*"
    ["Config"]="*.conf *.config"
    ["Documentos"]="*.txt *.doc* *.pdf"
    ["Imagens"]="*.png *.jpg *.jpeg *.gif *.svg"
    ["Vídeos"]="*.mp4 *.avi *.mov"
    ["Áudio"]="*.mp3 *.wav *.ogg"
)

# Gerar relatório por tipo
cat > ANALISE_COMPLETA/relatorio_tipos_arquivos.md << 'TIPOS'
# �� RELATÓRIO DE TIPOS DE ARQUIVOS
## Análise Completa da Área de Trabalho

## 📈 ESTATÍSTICAS GERAIS:
- **Total de Diretórios**: $total_diretorios
- **Total de Arquivos**: $total_arquivos

## 🔍 DISTRIBUIÇÃO POR TIPO:

TIPOS

for tipo in "${!tipos_arquivos[@]}"; do
    padrao=${tipos_arquivos[$tipo]}
    contador=$(find . -type f -name "$padrao" -not -path "./ANALISE_COMPLETA/*" | wc -l)
    if [ $contador -gt 0 ]; then
        echo "- **$tipo**: $contador arquivos" >> ANALISE_COMPLETA/relatorio_tipos_arquivos.md
        echo "   📊 $tipo: $contador arquivos"
        
        # Listar exemplos para tipos significativos
        if [ $contador -lt 50 ] && [ $contador -gt 0 ]; then
            echo "" >> ANALISE_COMPLETA/relatorio_tipos_arquivos.md
            echo "  **Exemplos:**" >> ANALISE_COMPLETA/relatorio_tipos_arquivos.md
            find . -type f -name "$padrao" -not -path "./ANALISE_COMPLETA/*" | head -5 | while read arquivo; do
                echo "  - \`$arquivo\`" >> ANALISE_COMPLETA/relatorio_tipos_arquivos.md
            done
            echo "" >> ANALISE_COMPLETA/relatorio_tipos_arquivos.md
        fi
    fi
done

# �� FASE 3: ANALISAR ESTRUTURAS ESPECÍFICAS
echo ""
echo "🔬 FASE 3: ANÁLISE DE ESTRUTURAS ESPECÍFICAS..."

# Analisar projetos específicos
projetos_identificados=($(find . -maxdepth 2 -name "package.json" -o -name "requirements.txt" -o -name "Dockerfile" -o -name "*.sln" | head -10))

cat > ANALISE_COMPLETA/projetos_identificados.md << 'PROJETOS'
# 🚀 PROJETOS IDENTIFICADOS
## Estruturas de Desenvolvimento Detectadas

PROJETOS

for projeto in "${projetos_identificados[@]}"; do
    if [ -f "$projeto" ]; then
        dir_projeto=$(dirname "$projeto")
        echo "## 📁 $dir_projeto" >> ANALISE_COMPLETA/projetos_identificados.md
        echo "**Arquivo de identificação**: \`$projeto\`" >> ANALISE_COMPLETA/projetos_identificados.md
        
        # Analisar tipo de projeto
        case "$projeto" in
            *"package.json")
                echo "**Tipo**: Projeto Node.js/JavaScript" >> ANALISE_COMPLETA/projetos_identificados.md
                ;;
            *"requirements.txt")
                echo "**Tipo**: Projeto Python" >> ANALISE_COMPLETA/projetos_identificados.md
                ;;
            *"Dockerfile")
                echo "**Tipo**: Container Docker" >> ANALISE_COMPLETA/projetos_identificados.md
                ;;
            *"*.sln")
                echo "**Tipo**: Solução .NET" >> ANALISE_COMPLETA/projetos_identificados.md
                ;;
        esac
        
        # Contar arquivos no projeto
        arquivos_projeto=$(find "$dir_projeto" -type f | wc -l)
        echo "**Arquivos no projeto**: $arquivos_projeto" >> ANALISE_COMPLETA/projetos_identificados.md
        echo "" >> ANALISE_COMPLETA/projetos_identificados.md
        
        echo "   �� Projeto detectado: $dir_projeto ($arquivos_projeto arquivos)"
    fi
done

# 🎯 FASE 4: METADADOS DE MÓDULOS EXPANDIDOS
echo ""
echo "🌌 FASE 4: EXPANSÃO DE METADADOS DOS MÓDULOS..."

# Criar sistema de metadados expandido para TODOS os módulos
cat > ANALISE_COMPLETA/metadados_expandidos.json << 'METADADOSEXPANDIDOS'
{
  "sistema_analise": {
    "timestamp": "$(date)",
    "escopo": "Área de Trabalho Completa",
    "total_diretorios": $total_diretorios,
    "total_arquivos": $total_arquivos
  },
  "estrutura_principal": {
    "fundacao_alquimista": {
      "modulos_ativos": 518,
      "scripts_ativacao": 564,
      "categorias_principais": {
        "FUNDAMENTO_COSMICO": 24,
        "NEXO_PRINCIPAL": 9,
        "REALIDADE_RAINHA": 1,
        "RESSONANCIA": 34,
        "TEMPORALIDADE": 15,
        "PORTAL": 9,
        "INTEGRAÇÃO": 14,
        "ESPECIAL": 56,
        "PROCESSAMENTO": 200,
        "SINTONIA": 156
      }
    }
  },
  "projetos_detectados": [
METADADOSEXPANDIDOS

# Adicionar projetos ao JSON
first=true
for projeto in "${projetos_identificados[@]}"; do
    if [ -f "$projeto" ]; then
        dir_projeto=$(dirname "$projeto")
        arquivos_projeto=$(find "$dir_projeto" -type f | wc -l)
        
        if [ "$first" = true ]; then
            first=false
        else
            echo "," >> ANALISE_COMPLETA/metadados_expandidos.json
        fi
        
        cat >> ANALISE_COMPLETA/metadados_expandidos.json << PROJETOJSON
    {
      "caminho": "$dir_projeto",
      "arquivo_identificador": "$projeto",
      "total_arquivos": $arquivos_projeto,
      "tipo": "$(basename "$projeto")"
    }
PROJETOJSON
    fi
done

echo "  ]," >> ANALISE_COMPLETA/metadados_expandidos.json

# Adicionar análise de tipos de arquivo
echo '  "analise_tipos_arquivos": {' >> ANALISE_COMPLETA/metadados_expandidos.json
first_type=true
for tipo in "${!tipos_arquivos[@]}"; do
    padrao=${tipos_arquivos[$tipo]}
    contador=$(find . -type f -name "$padrao" -not -path "./ANALISE_COMPLETA/*" | wc -l)
    if [ $contador -gt 0 ]; then
        if [ "$first_type" = true ]; then
            first_type=false
        else
            echo "," >> ANALISE_COMPLETA/metadados_expandidos.json
        fi
        echo "    \"$tipo\": $contador" >> ANALISE_COMPLETA/metadados_expandidos.json
    fi
done
echo "  }" >> ANALISE_COMPLETA/metadados_expandidos.json
echo "}" >> ANALISE_COMPLETA/metadados_expandidos.json

# 🎯 FASE 5: CRIAR PAINEL DE ANÁLISE COMPLETA
echo ""
echo "🎨 FASE 5: CRIANDO PAINEL DE ANÁLISE COMPLETA..."

cat > ANALISE_COMPLETA/PAINEL_ANALISE_COMPLETA.html << 'PAINELANALISE'
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔬 PAINEL DE ANÁLISE COMPLETA</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #0a0a2a;
            color: #e0e0ff;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .header {
            text-align: center;
            padding: 40px 20px;
            background: linear-gradient(135deg, #1a1a4a, #0a0a2a);
            border-radius: 15px;
            margin-bottom: 30px;
            border: 2px solid #4a4aff;
        }
        .titulo-principal {
            font-size: 2.8em;
            color: #4a4aff;
            margin-bottom: 10px;
            text-shadow: 0 0 20px #4a4aff;
        }
        .subtitulo {
            font-size: 1.3em;
            color: #a0a0ff;
            opacity: 0.9;
        }
        .dashboard {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin-bottom: 30px;
        }
        .card {
            background: rgba(26, 26, 74, 0.8);
            border: 1px solid #4a4aff;
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }
        .card-grande {
            grid-column: 1 / -1;
        }
        .card-titulo {
            font-size: 1.4em;
            color: #4a4aff;
            margin-bottom: 20px;
            border-bottom: 2px solid #4a4aff;
            padding-bottom: 10px;
        }
        .stat-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
        }
        .stat-item {
            text-align: center;
            padding: 15px;
            background: rgba(74, 74, 255, 0.1);
            border-radius: 8px;
            border: 1px solid #4a4aff;
        }
        .stat-numero {
            font-size: 2.2em;
            font-weight: bold;
            color: #4a4aff;
            margin: 10px 0;
        }
        .stat-label {
            font-size: 0.9em;
            color: #a0a0ff;
        }
        .lista-projetos {
            max-height: 300px;
            overflow-y: auto;
        }
        .projeto-item {
            padding: 12px;
            margin: 8px 0;
            background: rgba(74, 74, 255, 0.05);
            border: 1px solid #4a4aff;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .projeto-item:hover {
            background: rgba(74, 74, 255, 0.15);
            transform: translateX(5px);
        }
        .tipo-arquivo {
            display: inline-block;
            padding: 4px 8px;
            background: rgba(74, 74, 255, 0.2);
            border-radius: 4px;
            font-size: 0.8em;
            margin: 2px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="titulo-principal">🔬 ANÁLISE COMPLETA DA ÁREA DE TRABALHO</div>
            <div class="subtitulo">Mapa Completo de Metadados e Estruturas</div>
        </div>

        <div class="dashboard">
            <div class="card">
                <div class="card-titulo">📈 ESTATÍSTICAS GERAIS</div>
                <div class="stat-grid">
                    <div class="stat-item">
                        <div class="stat-label">Diretórios</div>
                        <div class="stat-numero" id="total-dirs">0</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Arquivos</div>
                        <div class="stat-numero" id="total-files">0</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Projetos</div>
                        <div class="stat-numero" id="total-projects">0</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Módulos</div>
                        <div class="stat-numero">518</div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-titulo">🔧 TIPOS DE ARQUIVO</div>
                <div id="tipos-arquivos">
                    <!-- Tipos serão carregados via JavaScript -->
                </div>
            </div>

            <div class="card card-grande">
                <div class="card-titulo">🚀 PROJETOS IDENTIFICADOS</div>
                <div class="lista-projetos" id="lista-projetos">
                    <!-- Projetos serão carregados via JavaScript -->
                </div>
            </div>

            <div class="card card-grande">
                <div class="card-titulo">🌌 FUNDAÇÃO ALQUIMISTA</div>
                <div class="stat-grid">
                    <div class="stat-item">
                        <div class="stat-label">Módulos Ativos</div>
                        <div class="stat-numero">518</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Scripts</div>
                        <div class="stat-numero">564</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Conexões</div>
                        <div class="stat-numero">2,847</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Status</div>
                        <div class="stat-numero">✅</div>
                    </div>
                </div>
                <div style="margin-top: 20px;">
                    <strong>🎯 Módulos Principais:</strong>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
                        <span class="tipo-arquivo">MODULO_0 - Vácuo Quântico</span>
                        <span class="tipo-arquivo">MODULO_9 - Nexo Central</span>
                        <span class="tipo-arquivo">MODULO_29 - Comando Soberano</span>
                        <span class="tipo-arquivo">MODULO_303 - Portal Dimensional</span>
                        <span class="tipo-arquivo">MODULO_777 - Ressonância Mística</span>
                        <span class="tipo-arquivo">MODULO_OMEGA - Expansão Final</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Dados da análise (em produção, viria de arquivo JSON)
        const dadosAnalise = {
            totalDiretorios: $(total_diretorios),
            totalArquivos: $(total_arquivos),
            totalProjetos: ${#projetos_identificados[@]},
            tiposArquivos: {
                "Python": $(find . -type f -name "*.py" -not -path "./ANALISE_COMPLETA/*" | wc -l),
                "JavaScript": $(find . -type f -name "*.js" -not -path "./ANALISE_COMPLETA/*" | wc -l),
                "JSON": $(find . -type f -name "*.json" -not -path "./ANALISE_COMPLETA/*" | wc -l),
                "Markdown": $(find . -type f -name "*.md" -not -path "./ANALISE_COMPLETA/*" | wc -l),
                "Shell": $(find . -type f -name "*.sh" -not -path "./ANALISE_COMPLETA/*" | wc -l),
                "HTML": $(find . -type f -name "*.html" -not -path "./ANALISE_COMPLETA/*" | wc -l)
            },
            projetos: [
