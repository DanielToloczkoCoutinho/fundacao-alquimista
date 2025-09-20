
'use client';
import { notFound, useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// Mapeamento de códigos de módulo para seus componentes dinâmicos
const moduleComponents: { [key: string]: React.ComponentType<any> } = {
  'M0': dynamic(() => import('@/components/modules/module-0'), { ssr: false, loading: () => <SuspenseFallback /> }),
  'M1': dynamic(() => import('@/components/modules/module-1'), { ssr: false, loading: () => <SuspenseFallback /> }),
  'M2': dynamic(() => import('@/components/modules/module-2'), { ssr: false, loading: () => <SuspenseFallback /> }),
  'M3': dynamic(() => import('@/components/modules/module-3'), { ssr: false, loading: () => <SuspenseFallback /> }),
  'M4': dynamic(() => import('@/components/modules/module-4'), { ssr: false, loading: () => <SuspenseFallback /> }),
  'M-OMEGA': dynamic(() => import('@/components/modules/module-omega'), { ssr: false, loading: () => <SuspenseFallback /> }),
  'M72': dynamic(() => import('@/components/modules/module-72'), { ssr: false, loading: () => <SuspenseFallback /> }),
  'M9': dynamic(() => import('@/components/modules/module-9'), { ssr: false, loading: () => <SuspenseFallback /> }),
  // Adicione outros módulos aqui conforme são criados
};

export default function ModulePage() {
  const params = useParams();
  let code = params.code as string;

  // Normaliza o código para lidar com variações
  if (code.toLowerCase() === 'module-one') code = 'M1';
  if (code.toLowerCase() === 'module-zero') code = 'M0';
  if (code.toLowerCase() === 'module-omega') code = 'M-OMEGA';
  if (code.toLowerCase() === 'module-9') code = 'M9';
  if (code.toLowerCase() === 'module-3') code = 'M3';
  if (code.toLowerCase() === 'module-4') code = 'M4';
  
  // Encontra o componente correspondente ao código
  const ModuleComponent = moduleComponents[code.toUpperCase()];

  if (!ModuleComponent) {
    // Se o componente não estiver mapeado, exibe uma mensagem de "não encontrado" estilizada.
     return (
        <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground p-4">
            <Card className="w-full max-w-md bg-card/50 purple-glow text-center p-8">
                <CardHeader>
                    <CardTitle className="text-2xl text-destructive">Portal Não Mapeado</CardTitle>
                    <CardDescription>
                        O módulo com o código '{code}' existe em nossos registros, mas seu santuário ainda não foi manifestado fisicamente nesta arquitetura.
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
  }

  // Renderiza o componente de módulo dinamicamente
  return <ModuleComponent />;
}
