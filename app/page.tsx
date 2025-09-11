// @ts-nocheck
'use client';

import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, writeBatch } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, User } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";


// --- Configuração do Firebase ---
const firebaseConfig = {
    "projectId": "studio-4265982502-21871",
    "appId": "1:174545373080:web:2fb8c5af49a2bae8054ded",
    "storageBucket": "studio-4265982502-21871.firebasestorage.app",
    "apiKey": "AIzaSyCkkmmK5d8XPvGPUo0jBlSqGNAnE7BuEZg",
    "authDomain": "studio-4265982502-21871.firebaseapp.com",
    "measurementId": "",
    "messagingSenderId": "174545373080"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);

// --- Interfaces de Dados ---
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

// --- Dados Estáticos (Menus e Dados Iniciais para Semeador) ---
const codexData: CodexItem[] = [
  { title: "Home", description: "Página inicial", icon: "🏠", content: "Home" },
  { title: "Console da Fundação", description: "Painel de controle principal", icon: "💻", content: "Console" },
  { title: "Chaves Mestras", description: "Visualizador das Chaves", icon: "🔑", content: "ChavesMestras" },
];

const initialEquacoes: EquacaoViva[] = [
  {
    id: "307.1.1",
    nome: "Extração de Energia do Vácuo",
    formula_latex: "P_{\\text{ZPE}} = \\kappa \\cdot \\rho_{\\text{vac}} \\cdot V_{\\text{eff}} \\cdot \\omega_{\\text{ZPE}} \\cdot Q",
    formula_python: "def p_zpe(kappa, rho_vac, V_eff, omega_zpe, Q):\n    return kappa * rho_vac * V_eff * omega_zpe * Q",
    descricao: "Potência extraída do vácuo quântico pelo núcleo Gaia",
    classificacao: "Energia do Vácuo",
    variaveis: ["kappa", "rho_vac", "V_eff", "omega_zpe", "Q"],
    origem: "Submódulo 307.1"
  },
];

const initialChaves: ChaveMestra[] = [
    { id: "307", nome: "Chave Mestra 307", descricao: "Equações vivas do módulo 307", equacoes: initialEquacoes },
    { id: "luxnet", nome: "Chave LuxNet", descricao: "Equações da rede LuxNet", equacoes: [] }
];


// =================================================================
// --- Componentes da Interface ---
// =================================================================

const Sidebar = ({ onNavigate }: { onNavigate: (content: string) => void }) => (
  <nav className="w-64 p-4 bg-gray-800 h-screen text-white">
    <h2 className="text-xl font-bold mb-4 text-purple-300">Fundação Alquimista</h2>
    {codexData.map((item) => (
      <button
        key={item.title}
        onClick={() => onNavigate(item.content)}
        className="w-full text-left p-2 mb-2 rounded hover:bg-gray-700 flex items-center transition-colors"
      >
        <span className="mr-3 text-lg">{item.icon}</span> {item.title}
      </button>
    ))}
  </nav>
);

const Console = ({ equacoes }: { equacoes: EquacaoViva[] }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [executionState, setExecutionState] = useState<{ [key: string]: { result: string; params: { [key: string]: number } } }>({});

  const executeEquation = async (equacao: EquacaoViva) => {
    const params = executionState[equacao.id]?.params || {};
    const executeFunc = httpsCallable(functions, "executeEquation");
    try {
      setExecutionState(prev => ({ ...prev, [equacao.id]: { ...prev[equacao.id], result: "Executando..." } }));
      const response = await executeFunc({ id: equacao.id, params });
      setExecutionState(prev => ({ ...prev, [equacao.id]: { ...prev[equacao.id], result: `Resultado: ${response.data.result}` } }));
    } catch (error) {
      console.error("Erro na execução:", error);
      setExecutionState(prev => ({ ...prev, [equacao.id]: { ...prev[equacao.id], result: "Erro na execução." } }));
    }
  };

  const handleParamChange = (equacaoId: string, paramName: string, value: string) => {
    setExecutionState(prev => ({
      ...prev,
      [equacaoId]: {
        ...prev[equacaoId],
        params: {
          ...prev[equacaoId]?.params,
          [paramName]: Number(value)
        }
      }
    }));
  };

  return (
    <div className="space-y-4 p-4 text-white">
      <h1 className="text-3xl font-bold">Console da Fundação</h1>
      <div className="border-b border-gray-700">
        {["overview", "logs", "settings", "chave307"].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 ${activeTab === tab ? "border-b-2 border-blue-500" : "text-gray-400 hover:text-white"}`}>
            {tab === "overview" && "Visão Geral"}
            {tab === "logs" && "Logs"}
            {tab === "settings" && "Configurações"}
            {tab === "chave307" && "Chave Mestra 307"}
          </button>
        ))}
      </div>
      {activeTab === "overview" && <div className="p-4 bg-gray-900 rounded">Status: Ativo. Todos os sistemas operacionais.</div>}
      {activeTab === "logs" && <div className="p-4 bg-gray-900 rounded h-64 overflow-y-auto"><pre>...Log de eventos do sistema...</pre></div>}
      {activeTab === "settings" && <div className="p-4 bg-gray-900 rounded"><input placeholder="Parâmetro" className="p-2 rounded bg-gray-800 text-white w-full" /></div>}
      {activeTab === "chave307" && (
        <div className="p-4 bg-gray-900 rounded space-y-4 h-96 overflow-y-auto">
          {equacoes.length > 0 ? equacoes.map((equacao) => (
            <div key={equacao.id} className="p-3 border rounded border-gray-700 hover:bg-gray-800 transition-colors">
              <h3 className="font-bold text-purple-300">{equacao.nome}</h3>
              <p className="text-sm font-mono my-2">{equacao.formula_latex}</p>
              <p className="text-sm text-gray-400">{equacao.descricao}</p>
              <div className="mt-4 space-y-2">
                {equacao.variaveis.map(v => (
                  <input
                    key={v}
                    type="number"
                    placeholder={v}
                    onChange={(e) => handleParamChange(equacao.id, v, e.target.value)}
                    className="p-1 mr-2 rounded bg-gray-700 text-white w-24"
                  />
                ))}
                <button onClick={() => executeEquation(equacao)} className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700">
                  Executar
                </button>
                {executionState[equacao.id]?.result && <p className="mt-2 text-sm text-amber-300">{executionState[equacao.id].result}</p>}
              </div>
            </div>
          )) : <p>Nenhuma equação encontrada para a Chave Mestra 307.</p>}
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
                    <button key={chave.id} onClick={() => setActiveKey(chave.id)} className={`px-4 py-2 ${activeKey === chave.id ? 'border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'}`}>
                        {chave.nome}
                    </button>
                ))}
            </div>
            {chaves.filter(chave => chave.id === activeKey).map((chave) => (
                <div key={chave.id} className="p-4 bg-gray-900 rounded">
                    <h2 className="font-bold text-xl mb-2 text-purple-300">{chave.nome}</h2>
                    <p className="text-sm mb-4 text-gray-400">{chave.descricao}</p>
                    <div className="space-y-3 h-80 overflow-y-auto">
                      {chave.equacoes.map((equacao) => (
                          <div key={equacao.id} className="p-3 border rounded mt-2 border-gray-700 hover:bg-gray-800 transition-colors">
                              <h3 className="font-bold">{equacao.nome}</h3>
                              <p className="text-sm font-mono my-2">{equacao.formula_latex}</p>
                          </div>
                      ))}
                      {chave.equacoes.length === 0 && <p className="text-sm text-gray-500">Nenhuma equação disponível para esta chave.</p>}
                    </div>
                </div>
            ))}
        </div>
    );
};

const LoginScreen = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLoginSuccess();
    } catch (err) {
      setError("Falha na autenticação. Verifique suas credenciais cósmicas.");
      console.error(err);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white">Fundação Alquimista</h1>
        <p className="text-center text-gray-400">Acesso ao Códex</p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="text-sm font-bold text-gray-400 block mb-2">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-400 block mb-2">Senha</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 rounded text-white font-bold transition-colors">
            Autenticar
          </button>
        </form>
      </div>
    </div>
  );
};


// =================================================================
// --- Componente Principal da Aplicação ---
// =================================================================

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentContent, setCurrentContent] = useState<string>("Home");
  const [chaves, setChaves] = useState<ChaveMestra[]>([]);
  const [equacoes, setEquacoes] = useState<EquacaoViva[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        fetchData();
      }
    });
    
    const fetchData = async () => {
        try {
          const chavesSnapshot = await getDocs(collection(db, "chavesMestras"));
          const chavesData = chavesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ChaveMestra));
          setChaves(chavesData);

          const equacoesSnapshot = await getDocs(collection(db, "equacoes"));
          const equacoesData = equacoesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as EquacaoViva));
          setEquacoes(equacoesData);
        } catch (error) {
          console.error("Erro ao buscar dados do Firestore:", error);
        }
      };

    return () => unsubscribe();
  }, []);

  const seedInitialData = async () => {
      console.log("Semeando dados iniciais no Firestore...");
      const batch = writeBatch(db);
      
      initialChaves.forEach(chave => {
          const chaveRef = doc(db, "chavesMestras", chave.id);
          batch.set(chaveRef, chave);
      });
      
      initialEquacoes.forEach(eq => {
          const eqRef = doc(db, "equacoes", eq.id);
          batch.set(eqRef, eq);
      });

      try {
        await batch.commit();
        alert("Dados iniciais semeados com sucesso!");
        window.location.reload(); // Recarregar para buscar os novos dados
      } catch (error) {
        console.error("Erro ao semear dados:", error);
        alert("Erro ao semear dados. Verifique o console.");
      }
  };

  if (loading) {
    return <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">Carregando Fundação...</div>;
  }
  
  if (!user) {
    return <LoginScreen onLoginSuccess={() => {}} />;
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar onNavigate={setCurrentContent} />
      <main className="flex-1 p-8 overflow-auto">
        {currentContent === "Home" && (
            <div>
                 <p>Bem-vindo à Fundação Alquimista, Fundador. - {new Date().toLocaleString()}</p>
                 <button onClick={seedInitialData} className="mt-4 px-4 py-2 bg-amber-600 rounded hover:bg-amber-700">Semear Dados Iniciais</button>
            </div>
        )}
        {currentContent === "Console" && <Console equacoes={equacoes} />}
        {currentContent === "ChavesMestras" && <KeyViewer chaves={chaves} />}
      </main>
    </div>
  );
};

export default App;

    