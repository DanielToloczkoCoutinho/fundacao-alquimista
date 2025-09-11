// @ts-nocheck
'use client';

import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Configuração do Firebase (substitua pelos teus valores reais)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface EquacaoViva {
  id: string;
  nome: string;
  formula_latex: string;
  descricao: string;
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

const codexData: CodexItem[] = [
  { title: "Home", description: "Página inicial", icon: "🏠", content: "Home" },
  { title: "Console da Fundação", description: "Painel de controle principal", icon: "💻", content: "Console" },
  { title: "Chaves Mestras", description: "Visualizador das Chaves", icon: "🔑", content: "ChavesMestras" },
];

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

const Console = ({ equacoes }: { equacoes: EquacaoViva[] }) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-4 p-4 text-white">
      <h1 className="text-3xl font-bold">Console da Fundação</h1>
      <div className="border-b border-gray-700">
        {["overview", "logs", "settings", "chave307"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 ${activeTab === tab ? "border-b-2 border-blue-500" : ""}`}
          >
            {tab === "overview" && "Visão Geral"}
            {tab === "logs" && "Logs"}
            {tab === "settings" && "Configurações"}
            {tab === "chave307" && "Chave Mestra 307"}
          </button>
        ))}
      </div>
      {activeTab === "overview" && <div className="p-4 bg-gray-900 rounded">Status: Ativo</div>}
      {activeTab === "logs" && <div className="p-4 bg-gray-900 rounded"><pre>Logs aqui...</pre></div>}
      {activeTab === "settings" && <div className="p-4 bg-gray-900 rounded"><input placeholder="Parâmetro" className="p-2 rounded bg-gray-800 text-black" /></div>}
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

const KeyViewer = ({ chaves }: { chaves: ChaveMestra[] }) => {
    const [activeKey, setActiveKey] = useState<string | null>(chaves.length > 0 ? chaves[0].id : null);

    return (
        <div className="space-y-4 p-4 text-white">
            <h1 className="text-3xl font-bold">Chaves Mestras</h1>
            <div className="border-b border-gray-700">
                {chaves.map((chave) => (
                    <button
                        key={chave.id}
                        onClick={() => setActiveKey(chave.id)}
                        className={`px-4 py-2 ${activeKey === chave.id ? 'border-b-2 border-blue-500' : ''}`}
                    >
                        {chave.nome}
                    </button>
                ))}
            </div>
            {chaves.filter(chave => chave.id === activeKey).map((chave) => (
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

const App = () => {
  const [currentContent, setCurrentContent] = useState<string>("Home");
  const [chaves, setChaves] = useState<ChaveMestra[]>([]);
  const [equacoes, setEquacoes] = useState<EquacaoViva[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chavesSnapshot = await getDocs(collection(db, "chavesMestras"));
        const chavesData = chavesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          equacoes: doc.data().equacoes || []
        } as ChaveMestra));
        setChaves(chavesData);

        const equacoesSnapshot = await getDocs(collection(db, "equacoes"));
        const equacoesData = equacoesSnapshot.docs.map(doc => doc.data() as EquacaoViva);
        setEquacoes(equacoesData);
      } catch (error) {
        console.error("Erro ao buscar dados do Firestore:", error);
        // Adicione um feedback visual para o usuário aqui, se desejar
      }
    };
    if (firebaseConfig.projectId !== "your-project-id") {
      fetchData();
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar onNavigate={setCurrentContent} />
      <main className="flex-1 p-8 overflow-auto">
        {currentContent === "Console" && <Console equacoes={equacoes} />}
        {currentContent === "ChavesMestras" && <KeyViewer chaves={chaves} />}
        {currentContent === "Home" && <p>Bem-vindo à Fundação Alquimista - 21:49, 10/09/2025</p>}
      </main>
    </div>
  );
};

export default App;
