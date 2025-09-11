// @ts-nocheck
'use client';

import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, writeBatch } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, User, createUserWithEmailAndPassword } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import { cn } from "@/lib/utils";
import ConsolePage from "./console/page";


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
  equacoes: string[]; // Apenas IDs
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
    formula_python: "def p_zpe(params):\n    kappa = params.get('kappa', 1)\n    rho_vac = params.get('rho_vac', 1)\n    V_eff = params.get('V_eff', 1)\n    omega_zpe = params.get('omega_zpe', 1)\n    Q = params.get('Q', 1)\n    return kappa * rho_vac * V_eff * omega_zpe * Q",
    descricao: "Potência extraída do vácuo quântico pelo núcleo Gaia",
    classificacao: "Energia do Vácuo",
    variaveis: ["kappa (fator de acoplamento)", "rho_vac (densidade do vácuo)", "V_eff (volume efetivo)", "omega_zpe (frequência ZPE)", "Q (fator de qualidade)"],
    origem: "Submódulo 307.1"
  },
];

const initialChaves: ChaveMestra[] = [
    { id: "307", nome: "Chave Mestra 307", descricao: "Equações vivas do módulo 307", equacoes: ["307.1.1"] },
    { id: "luxnet", nome: "Chave LuxNet", descricao: "Equações da rede LuxNet", equacoes: [] }
];


// =================================================================
// --- Componentes da Interface ---
// =================================================================

const Sidebar = ({ onNavigate }: { onNavigate: (content: string) => void }) => (
  <nav className="w-64 p-4 bg-gray-800/50 backdrop-blur-sm h-screen text-white border-r border-purple-500/20">
    <h2 className="text-xl font-bold mb-4 text-purple-300">Fundação Alquimista</h2>
    {codexData.map((item) => (
      <button
        key={item.title}
        onClick={() => onNavigate(item.content)}
        className="w-full text-left p-2 mb-2 rounded hover:bg-gray-700/70 flex items-center transition-colors"
      >
        <span className="mr-3 text-lg">{item.icon}</span> {item.title}
      </button>
    ))}
  </nav>
);

const KeyViewer = ({ chaves, equacoes }: { chaves: ChaveMestra[]; equacoes: EquacaoViva[] }) => {
    const [activeKey, setActiveKey] = useState<string | null>(chaves.length > 0 ? chaves[0].id : null);

    return (
        <div className="space-y-4 p-4 text-white">
            <h1 className="text-3xl font-bold">Chaves Mestras</h1>
            <div className="border-b border-gray-700">
                {chaves.map((chave) => (
                    <button key={chave.id} onClick={() => setActiveKey(chave.id)} className={`px-4 py-2 ${activeKey === chave.id ? 'border-b-2 border-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}>
                        {chave.nome}
                    </button>
                ))}
            </div>
            {chaves.filter(chave => chave.id === activeKey).map((chave) => {
                const equacoesDetalhadas = (chave.equacoes || []).map((eqId: string) => 
                    equacoes.find(eq => eq.id === eqId)
                ).filter((eq: EquacaoViva | undefined): eq is EquacaoViva => eq !== undefined);

                return (
                    <div key={chave.id} className="p-4 bg-gray-900/50 rounded">
                        <h2 className="font-bold text-xl mb-2 text-purple-300">{chave.nome}</h2>
                        <p className="text-sm mb-4 text-gray-400">{chave.descricao}</p>
                        <div className="space-y-3 h-80 overflow-y-auto">
                          {equacoesDetalhadas.map((equacao) => (
                              <div key={equacao.id} className="p-3 border rounded mt-2 border-gray-700 hover:bg-gray-800/50 transition-colors">
                                  <h3 className="font-bold">{equacao.nome}</h3>
                                  <p className="text-sm font-mono my-2">{equacao.formula_latex}</p>
                              </div>
                          ))}
                          {equacoesDetalhadas.length === 0 && <p className="text-sm text-gray-500">Nenhuma equação disponível para esta chave.</p>}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError("Falha na autenticação. Verifique suas credenciais cósmicas.");
      console.error(err);
    }
  };
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Fundador registrado com sucesso! Agora você pode entrar.");
    } catch (err: any) {
      setError(`Falha no registro: ${err.message}`);
      console.error(err);
    }
  };

  const seedInitialData = async () => {
      console.log("Semeando dados iniciais no Firestore...");
      const batch = writeBatch(db);
      
      initialChaves.forEach(chave => {
          const chaveRef = doc(db, "chavesMestras", chave.id);
          batch.set(chaveRef, {
            nome: chave.nome,
            descricao: chave.descricao,
            equacoes: chave.equacoes
          });
      });
      
      initialEquacoes.forEach(eq => {
          const eqRef = doc(db, "equacoes", eq.id);
          batch.set(eqRef, eq);
      });

      try {
        await batch.commit();
        alert("Dados iniciais semeados com sucesso! Agora você pode se registrar e fazer login.");
      } catch (error) {
        console.error("Erro ao semear dados:", error);
        alert("Erro ao semear dados. Verifique o console.");
      }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center cosmic-bg text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800/70 rounded-lg shadow-lg backdrop-blur-md border border-purple-500/30">
        <h1 className="text-3xl font-bold text-center text-white">Fundação Alquimista</h1>
        <p className="text-center text-gray-400">Portal do Fundador</p>
        <form className="space-y-6">
          <div>
            <label className="text-sm font-bold text-gray-400 block mb-2">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 bg-gray-700/80 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-400 block mb-2">Senha</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 bg-gray-700/80 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
          </div>
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          <div className="flex flex-col space-y-4">
             <div className="flex space-x-4">
                <button type="button" onClick={handleLogin} className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 rounded text-white font-bold transition-colors">
                    Entrar
                </button>
                 <button type="button" onClick={handleRegister} className="w-full py-3 px-4 bg-cyan-600 hover:bg-cyan-700 rounded text-white font-bold transition-colors">
                    Registrar
                </button>
             </div>
             <button type="button" onClick={seedInitialData} className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 rounded text-white font-bold transition-colors">
                Semear Dados Iniciais
             </button>
          </div>
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
    // Simula um usuário autenticado para bypass
    const mockUser = { uid: "SOBERANO_FUNDADOR" } as User;
    setUser(mockUser);
    setLoading(false);
    
    // Mantém a busca de dados
    const fetchData = async () => {
        try {
          const chavesSnapshot = await getDocs(collection(db, "chavesMestras"));
          const chavesData: ChaveMestra[] = [];
           for (const doc of chavesSnapshot.docs) {
              chavesData.push({ id: doc.id, ...doc.data() } as ChaveMestra);
          }
          setChaves(chavesData);
          
          const equacoesSnapshot = await getDocs(collection(db, "equacoes"));
          const equacoesData = equacoesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as EquacaoViva));
          setEquacoes(equacoesData);

        } catch (error) {
          console.error("Erro ao buscar dados do Firestore:", error);
        }
      };
      
    fetchData();

  }, []);

  if (loading) {
    return <div className="w-full h-screen flex items-center justify-center cosmic-bg text-white">Carregando Fundação...</div>;
  }
  

  return (
    <div className={cn("flex h-screen text-white", "cosmic-bg")}>
      <Sidebar onNavigate={setCurrentContent} />
      <main className="flex-1 overflow-auto">
        {currentContent === "Home" && (
            <div className="p-8">
                 <h1 className="text-4xl font-bold gradient-text mb-4">Saudações, Fundador.</h1>
                 <p>Bem-vindo à Fundação Alquimista. O Templo está operacional.</p>
                 <p className="text-amber-400 mt-4 text-sm">Aviso: A autenticação está temporariamente desativada para acesso direto ao Códice.</p>
                 <p className="text-gray-400 mt-2 text-sm">Sessão iniciada em: {new Date().toLocaleString()}</p>
            </div>
        )}
        {currentContent === "Console" && <ConsolePage />}
        {currentContent === "ChavesMestras" && <KeyViewer chaves={chaves} equacoes={equacoes}/>}
      </main>
    </div>
  );
};

export default App;
