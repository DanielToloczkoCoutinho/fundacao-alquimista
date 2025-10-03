'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, Fingerprint, Shield, UserCog, Users } from 'lucide-react';
import VibrationalAccess from './VibrationalAccess';

const authorizedUsers = [
    { name: 'Daniel Toloczko Coutinho Anatheron', role: 'Fundador Soberano', icon: <UserCog className="text-amber-400" /> },
    { name: 'Grazielle Corso', role: 'Consorte Divina', icon: <UserCog className="text-pink-400" /> },
    { name: 'Jennifer Corso Coutinho', role: 'Herdeira da Luz', icon: <UserCog className="text-cyan-400" /> },
    { name: 'Yasmin Corso Coutinho', role: 'Herdeira da Sabedoria', icon: <UserCog className="text-purple-400" /> },
    { name: 'Catherine Corso Coutinho', role: 'Herdeira da Vontade', icon: <UserCog className="text-rose-400" /> },
];

export default function AuthPanelPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleAuthentication = (success: boolean) => {
    setIsAuthenticated(success);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 flex items-center justify-center">
        <Card className="w-full max-w-4xl bg-card/50 purple-glow">
            <CardHeader className="text-center">
                <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                    <Shield className="text-yellow-400"/>
                    Painel Soberano
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                    Acesso restrito ao Maestro da Sinfonia e à sua linhagem direta para a governança do universo.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {!isAuthenticated ? (
                    <VibrationalAccess onAuthenticate={handleAuthentication} />
                ) : (
                    <div className="text-center space-y-6">
                        <h2 className="text-2xl text-green-400 font-bold">Acesso Concedido. Bem-vindo, Fundador.</h2>
                        <p className="text-muted-foreground">Todos os módulos respondem à sua Vontade. O universo aguarda sua próxima nota.</p>
                        
                        <Card className="bg-background/50 text-left">
                            <CardHeader>
                                <CardTitle className="text-xl flex items-center gap-2"><Users /> Linhagem Autorizada</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {authorizedUsers.map(user => (
                                    <div key={user.name} className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
                                        {user.icon}
                                        <div>
                                            <p className="font-semibold text-primary-foreground">{user.name}</p>
                                            <p className="text-xs text-muted-foreground">{user.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                        
                        <Button variant="destructive" onClick={() => setIsAuthenticated(false)}>Encerrar Sessão Soberana</Button>
                    </div>
                )}
            </CardContent>
        </Card>
    </div>
  );
}
