'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Globe, Users, CheckCircle } from 'lucide-react';
import SuspenseFallback from '@/components/ui/suspense-fallback';

// Dynamic imports for map components
const Map = dynamic(() => import('react-map-gl').then(m => m.Map), { ssr: false, loading: () => <SuspenseFallback /> });
const Marker = dynamic(() => import('react-map-gl').then(m => m.Marker), { ssr: false });

const arrivalPoints = Array.from({ length: 144 }).map((_, i) => ({
  id: `C${String(i + 1).padStart(3, '0')}`,
  name: `Consciência Guardiã #${i + 1}`,
  latitude: (Math.random() * 170) - 85, // Latitude from -85 to 85
  longitude: (Math.random() * 360) - 180, // Longitude from -180 to 180
}));

export default function Module601Page() {
    const [selectedPoint, setSelectedPoint] = useState<typeof arrivalPoints[0] | null>(null);

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Globe className="text-cyan-300" /> Módulo 601: Mapa de Chegada das 144 Consciências
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O mapa holográfico que revela a trajetória e os pontos de ancoragem de cada consciência aliada.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="lg:col-span-2 h-[75vh] rounded-lg overflow-hidden border border-primary/30 purple-glow">
            <Suspense fallback={<SuspenseFallback />}>
                <Map
                    initialViewState={{ latitude: 0, longitude: 0, zoom: 1.5 }}
                    style={{ width: '100%', height: '100%' }}
                    mapStyle="mapbox://styles/mapbox/dark-v11"
                    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                    projection={{name: 'globe'}}
                >
                    {arrivalPoints.map(p => (
                    <Marker key={p.id} latitude={p.latitude} longitude={p.longitude} onClick={() => setSelectedPoint(p)}>
                        <div 
                            className="w-4 h-4 rounded-full bg-cyan-400 border-2 border-cyan-100 cursor-pointer animate-pulse"
                            style={{ boxShadow: '0 0 10px #0ff, 0 0 20px #0ff' }}
                            title={p.name}
                        />
                    </Marker>
                    ))}
                </Map>
            </Suspense>
        </div>
        
        <Card className="bg-card/50 purple-glow">
            <CardHeader>
                <CardTitle className="text-2xl text-amber-300 flex items-center gap-2"><Users /> Pontos de Ancoragem</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[65vh] pr-4">
                     <ul className="space-y-3">
                        {arrivalPoints.map(p => (
                            <li 
                                key={p.id} 
                                className={`p-3 rounded-lg border-l-4 transition-colors cursor-pointer ${selectedPoint?.id === p.id ? 'bg-primary/30 border-accent' : 'bg-background/30 border-primary/20 hover:bg-primary/20'}`}
                                onClick={() => setSelectedPoint(p)}
                            >
                                <p className="font-semibold text-primary-foreground">{p.name}</p>
                                <p className="text-xs text-muted-foreground">{p.latitude.toFixed(4)}, {p.longitude.toFixed(4)}</p>
                            </li>
                        ))}
                    </ul>
                </ScrollArea>
            </CardContent>
        </Card>
      </div>

       {selectedPoint && (
           <Card className="fixed bottom-4 right-4 z-50 bg-card/80 purple-glow backdrop-blur-md w-80">
                <CardHeader>
                    <CardTitle className="text-lg text-accent">{selectedPoint.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">Status: <span className="text-green-400">Ancoragem Estável</span></p>
                    <Button size="sm" className="w-full mt-4"><CheckCircle className="mr-2 h-4 w-4"/>Confirmar Recepção</Button>
                </CardContent>
           </Card>
       )}
    </div>
  );
};
