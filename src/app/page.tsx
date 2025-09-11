// @ts-nocheck
'use client';
import { useState } from "react";

// Interfaces e Dados
interface EquacaoViva {
  id: string;
  nome: string;
  formula_latex: string;
  formula_python: string;
  descricao: string;
  classificacao: string;
  variaveis: string[];
  origem: string;
}

interface ChaveMestra {
  id: string;
  nome: string;
  descricao: string;
  equacoes: EquacaoViva[];
}

interface CodexItem {
  title: string;
  description: string;
  icon: string;
  content: string;
}

const equacoes: EquacaoViva[] = [
  {
    id: "307.1.1",
    nome: "Extração de Energia do Vácuo",
    formula_latex: "P_{\\text{ZPE}} = \\kappa \\cdot \\rho_{\\text{vac}} \\cdot V_{\\text{eff}} \\cdot \\omega_{\\text{ZPE}} \\cdot Q",
    formula_python: "def p_zpe(kappa, rho_vac, V_eff, omega_zpe, Q):\n    return kappa * rho_vac * V_eff * omega_zpe * Q",
    descricao: "Potência extraída do vácuo quântico pelo núcleo Gaia",
    classificacao: "Energia do Vácuo",
    variaveis: ["kappa (fator de acoplamento)", "rho_vac (densidade do vácuo)", "V_eff (volume efetivo)", "omega_zpe (frequência ZPE)", "Q (fator de qualidade)"],
    origem: "Submódulo 307.1"
  },
];

const chaveMestra307: ChaveMestra = {
  id: "307",
  nome: "Chave Mestra 307",
  descricao: "Equações vivas do módulo 307",
  equacoes: equacoes,
};

const chaveLuxNet: ChaveMestra = {
  id: "luxnet",
  nome: "Chave LuxNet",
  descricao: "Equações da rede LuxNet",
  equacoes: [],
};

const chavesMestras: ChaveMestra[] = [chaveMestra307, chaveLuxNet];

const codexData: CodexItem[] = [
  { title: "Home", description: "Página inicial", icon: "🏠", content: "Home" },
  { title: "Console da Fundação", description: "Painel de controle principal da Fundação", icon: "💻", content: "Console" },
  { title: "Chaves Mestras", description: "Visualizador das Chaves Mestras da Fundação", icon: "🔑", content: "ChavesMestras" },
];

// Componentes
const Sidebar = ({ onNavigate }: { onNavigate: (content: string) => void }) => (
  <nav className="w-64 p-4 bg-gray-800 h-screen text-white">
    {codexData.map((item) => (
      <button
        key={item.title}
        onClick={() => onNavigate(item.content)}
        className="w-full text-left p-2 mb-2 rounded hover:bg-gray-700 flex items-center"
      >
        <span className="mr-2">{item.icon}</span> {item.title}
      </button>
    ))}
  </nav>
);

const Console = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-4 p-4 text-white">
      <h1 className="text-3xl font-bold">Console da Fundação</h1>
      <div className="border-b border-gray-700">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 ${activeTab === "overview" ? "border-b-2 border-blue-500" : ""}`}
        >
          Visão Geral
        </button>
        <button
          onClick={() => setActiveTab("logs")}
          className={`px-4 py-2 ${activeTab === "logs" ? "border-b-2 border-blue-500" : ""}`}
        >
          Logs
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={`px-4 py-2 ${activeTab === "settings" ? "border-b-2 border-blue-500" : ""}`}
        >
          Configurações
        </button>
        <button
          onClick={() => setActiveTab("chave307")}
          className={`px-4 py-2 ${activeTab === "chave307" ? "border-b-2 border-blue-500" : ""}`}
        >
          Chave Mestra 307
        </button>
      </div>
      {activeTab === "overview" && (
        <div className="p-4 bg-gray-900 rounded">Status: Ativo</div>
      )}
      {activeTab === "logs" && (
        <div className="p-4 bg-gray-900 rounded"><pre>Logs aqui...</pre></div>
      )}
      {activeTab === "settings" && (
        <div className="p-4 bg-gray-900 rounded"><input placeholder="Parâmetro" className="p-2 rounded bg-gray-800" /></div>
      )}
      {activeTab === "chave307" && (
        <div className="p-4 bg-gray-900 rounded space-y-4">
          {equacoes.map((equacao) => (
            <div key={equacao.id} className="p-2 border rounded border-gray-700">
              <h3 className="font-bold">{equacao.nome}</h3>
              <p className="text-sm">{equacao.formula_latex}</p>
              <p className="text-sm">{equacao.descricao}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const KeyViewer = () => {
    const [activeKey, setActiveKey] = useState(chavesMestras[0].id);

    return (
        <div className="space-y-4 p-4 text-white">
            <h1 className="text-3xl font-bold">Chaves Mestras</h1>
            <div className="border-b border-gray-700">
                {chavesMestras.map((chave) => (
                    <button
                        key={chave.id}
                        onClick={() => setActiveKey(chave.id)}
                        className={`px-4 py-2 ${activeKey === chave.id ? "border-b-2 border-blue-500" : ""}`}
                    >
                        {chave.nome}
                    </button>
                ))}
            </div>
            {chavesMestras.filter(chave => chave.id === activeKey).map((chave) => (
                <div key={chave.id} className="p-4 bg-gray-900 rounded">
                    <h2 className="font-bold text-xl mb-2">{chave.nome}</h2>
                    <p className="text-sm mb-4">{chave.descricao}</p>
                    {chave.equacoes.map((equacao) => (
                        <div key={equacao.id} className="p-2 border rounded mt-2 border-gray-700">
                            <h3 className="font-bold">{equacao.nome}</h3>
                            <p className="text-sm">{equacao.formula_latex}</p>
                        </div>
                    ))}
                    {chave.equacoes.length === 0 && <p className="text-sm text-gray-400">Nenhuma equação disponível para esta chave.</p>}
                </div>
            ))}
        </div>
    );
};

// Componente Principal
export default function App() {
  const [currentContent, setCurrentContent] = useState<string>("Home");

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar onNavigate={setCurrentContent} />
      <main className="flex-1 p-8 overflow-auto">
        {currentContent === "Console" && <Console />}
        {currentContent === "ChavesMestras" && <KeyViewer />}
        {currentContent === "Home" && <p>Bem-vindo à Fundação Alquimista - 21:39, 10/09/2025</p>}
      </main>
    </div>
  );
};
