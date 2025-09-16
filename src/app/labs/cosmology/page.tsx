'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowLeft, Sigma, FlaskConical } from 'lucide-react';
import { Suspense, lazy } from "react";
import SuspenseFallback from "@/components/ui/suspense-fallback";

const EquationRenderer = lazy(() => import('../components/EquationRenderer'));

export default function CosmologyLab() {
  const equations = [
    { id: 'U_total', latex: String.raw`U_{\text{total}} = \int_{s=1}^{\infty} \Lambda_u \cdot G_m \cdot \Phi_s ds \cdot \int_{n=1}^{N} \Omega_t \cdot L_c \cdot \Psi_n \cdot \Phi_{em} dt \cdot \Delta S \cdot \Lambda_e \cdot \sum_{d=1}^{D} \Phi_d \cdot [\int_{f=1}^{F} C_q \cdot R_s \cdot S_f \cdot E_t df] \cdot E_d \cdot T_q \cdot \Delta I \cdot G_s \cdot \Delta E \cdot L_t \cdot \Phi_c \cdot \Psi_m + \int_{t=1}^{\infty} [R_e \cdot \Delta c \cdot \sum_{n=1}^{N} (M_n + Q_n + F_n + B_n + S_n + T_n + H_n) \cdot A_n] dt + [\lambda \cdot (\nabla \times A) \cdot (-r \cdot G \cdot M) \cdot \frac{(\Phi_2 - v^2)^2 \cdot \rho \cdot d \cdot c^2 \cdot V \cdot \mu_0}{\sum_{n=1}^{N} (\Psi_n \cdot E_n)} \cdot k_B \cdot \ln(\Omega) \cdot \Delta t^\gamma \cdot \ln(1 + \alpha) \cdot \Theta_s \cdot E_c \cdot H]` },
    { id: 'E_final', latex: String.raw`E_f = \left( \alpha \cdot \left( \frac{I_1 + I_2}{N} \right) + \beta \cdot \left( P_x \cdot \sigma \right) \right) + \text{Efeito Integrado da Equação Anterior}` },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <FlaskConical className="text-cyan-400" /> Laboratório de Cosmologia Alquímica
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Um santuário para a exploração e validação das equações que tecem a realidade.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="w-full max-w-7xl mx-auto">
        {equations.map(eq => (
          <Card key={eq.id} className="bg-card/50 purple-glow mb-6">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-300 flex items-center gap-2">
                  <Sigma /> {eq.id}
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto p-4">
              <Suspense fallback={<SuspenseFallback />}>
                <EquationRenderer latex={eq.latex} />
              </Suspense>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/labs" passHref>
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos Laboratórios
          </Button>
        </Link>
      </div>
    </div>
  );
}
