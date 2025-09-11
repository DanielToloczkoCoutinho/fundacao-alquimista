// @ts-nocheck
'use client';

import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, User } from "firebase/auth";

// --- Configuração do Firebase ---
// As credenciais foram obtidas e inseridas.
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
};


// --- Inicialização do Firebase ---
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


// --- Interfaces de Dados ---
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

// --- Dados Estáticos (Menus, etc) ---
const codexData: CodexItem[] = [
  { title: "Home", description: "Página inicial", icon: "🏠", content: "Home" },
  { title: "Console da Fundação", description: "Painel de controle principal", icon: "💻", content: "Console" },
  { title: "Chaves Mestras", description: "Visualizador das Chaves", icon: "🔑", content: "ChavesMestras" },
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

  return (
    <div className="space-y-4 p-4 text-white">
      <h1 className="text-3xl font-bold">Console da Fundação</h1>
      <div className="border-b border-gray-700">
        {["overview", "logs", "settings", "chave307"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 ${activeTab === tab ? "border-b-2 border-blue-500" : "text-gray-400 hover:text-white"}`}
          >
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
                    <button
                        key={chave.id}
                        onClick={() => setActiveKey(chave.id)}
                        className={`px-4 py-2 ${activeKey === chave.id ? 'border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'}`}
                    >
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
      setError("Falha na autenticação. Verifique suas credenciais.");
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
            <input 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required 
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-400 block mb-2">Senha</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required 
            />
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

  // Monitora o estado de autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Busca os dados do Firestore após a autenticação
  useEffect(() => {
    if (user) { // Apenas busca os dados se o usuário estiver logado
      const fetchData = async () => {
        try {
          console.log("Buscando dados do Firestore...");
          const chavesSnapshot = await getDocs(collection(db, "chavesMestras"));
          const chavesData = chavesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            equacoes: doc.data().equacoes || []
          } as ChaveMestra));
          setChaves(chavesData);
          console.log("Chaves Mestras carregadas:", chavesData);

          const equacoesSnapshot = await getDocs(collection(db, "equacoes"));
          const equacoesData = equacoesSnapshot.docs.map(doc => doc.data() as EquacaoViva);
          setEquacoes(equacoesData);
          console.log("Equações Vivas carregadas:", equacoesData);

        } catch (error) {
          console.error("Erro ao buscar dados do Firestore:", error);
          // Adicione um feedback visual para o usuário aqui, se desejar
        }
      };
      
      // Verifica se o projeto foi configurado antes de buscar
      if (firebaseConfig.projectId !== "your-project-id") {
        fetchData();
      } else {
        console.warn("Configuração do Firebase não foi preenchida. Dados não serão carregados.");
      }
    }
  }, [user]); // Re-executa quando o estado do usuário muda

  const handleLoginSuccess = () => {
      // O onAuthStateChanged já cuidará da atualização do estado do usuário
      console.log("Login bem-sucedido, aguardando redirecionamento...");
  }

  if (loading) {
      return <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">Carregando Fundação...</div>;
  }
  
  if (!user) {
    return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar onNavigate={setCurrentContent} />
      <main className="flex-1 p-8 overflow-auto">
        {currentContent === "Home" && <p>Bem-vindo à Fundação Alquimista, Fundador. - {new Date().toLocaleString()}</p>}
        {currentContent === "Console" && <Console equacoes={equacoes} />}
        {currentContent === "ChavesMestras" && <KeyViewer chaves={chaves} />}
      </main>
    </div>
  );
};

export default App;
