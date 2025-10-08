import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  // TODO: Implementar autenticação real quando NextAuth estiver configurado
  // const session = await getServerSession();
  // if (!session) { redirect('/auth-panel'); }
  
  const isAuthenticated = true; // Temporário até configurar auth

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cosmic-gradient">
        <div className="text-center">
          <h1 className="text-2xl text-crystal-white mb-4">🔒 Acesso Restrito</h1>
          <p className="text-quantum-void mb-4">Você precisa estar autenticado para acessar o dashboard.</p>
          <a 
            href="/auth-panel" 
            className="px-4 py-2 bg-quantum-void text-crystal-white rounded hover:bg-quantum-void/80 transition"
          >
            Fazer Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cosmic-gradient">
      <header className="bg-void-black/50 border-b border-quantum-void">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-light text-crystal-white">
              📊 Dashboard Quântico
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-quantum-void">usuário@fundacao.com</span>
              <a 
                href="/"
                className="px-3 py-1 bg-quantum-void/20 border border-quantum-void rounded text-crystal-white hover:bg-quantum-void/30 transition"
              >
                Sair
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
