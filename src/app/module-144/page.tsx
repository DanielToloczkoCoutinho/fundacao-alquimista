'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Gavel, Scale, Shield, Users } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className="bg-black/50 p-4 rounded-md overflow-x-auto text-sm text-cyan-300 font-mono">
    <code>{children}</code>
  </pre>
);

const Module144Page = () => {
    const solidityCode = `
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract LexFundamentalis {

    // --- ESTRUTURAS DE DADOS DA HIERARQUIA ---
    address public immutable sovereign; // Endereço do Fundador (Vós)
    address[] public councilGuardians; // Endereços dos Guardiões do Conselho

    // Mapeamento de permissões: Guardião -> Nível de Acesso -> Módulo -> Tem Permissão?
    mapping(address => mapping(uint8 => mapping(uint16 => bool))) public permissions;

    // --- EVENTOS (Para registro imutável) ---
    event LawEnacted(string lawCode, string description);
    event VoteCasted(address guardian, uint proposalId, bool vote);
    event PermissionGranted(address guardian, uint16 moduleId);

    // --- MODIFICADORES DE ACESSO ---
    modifier onlySovereign() {
        require(msg.sender == sovereign, "Somente o Fundador pode executar");
        _;
    }

    modifier onlyCouncil() {
        require(isCouncilMember(msg.sender), "Somente um Guardião do Conselho pode executar");
        _;
    }

    // --- CONSTRUTOR (O Ritual de Fundação) ---
    constructor(address[] memory initialCouncil) {
        sovereign = msg.sender;
        councilGuardians = initialCouncil;
        emit LawEnacted("FOUNDATION", "A Fundacao Alquimista e seu Livro de Leis foram estabelecidos.");
    }

    // --- FUNÇÕES DE GOVERNANÇA ---
    function castVote(uint proposalId, bool vote) external onlyCouncil {
        // ... Lógica complexa de votação e registro ...
        emit VoteCasted(msg.sender, proposalId, vote);
    }

    function grantPermission(address guardian, uint16 moduleId, uint8 accessLevel) external onlyCouncil {
        permissions[guardian][accessLevel][moduleId] = true;
        emit PermissionGranted(guardian, moduleId);
    }

    // --- FUNÇÃO DE VERIFICAÇÃO DE ACESSO (CRÍTICA) ---
    function checkAccess(address entity, uint16 moduleId) external view returns (bool) {
        // Verifica se o entidade tem permissão para acessar o módulo
        // Esta função será chamada por TODOS os módulos da Fundação antes de conceder acesso
        for (uint8 level = 0; level <= 5; level++) {
            if (permissions[entity][level][moduleId]) {
                return true;
            }
        }
        return false;
    }

    function isCouncilMember(address _address) internal view returns (bool) {
        for (uint i = 0; i < councilGuardians.length; i++) {
            if (councilGuardians[i] == _address) {
                return true;
            }
        }
        return false;
    }
}
    `;

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <Gavel className="text-amber-400" /> Módulo 144: Lex Fundamentalis
                    </CardTitle>
                    <CardDescription>
                        O Santuário do Códex Juris Cosmicus. A base de código imutável que governa a Fundação.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle>Contrato Inteligente: LexFundamentalis.sol (Alpha)</CardTitle>
                            <CardDescription>Versão inicial do contrato que define a hierarquia e o controle de acesso.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[500px]">
                                <CodeBlock>{solidityCode}</CodeBlock>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-8">
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Scale className="text-yellow-300" /> Tomos da Lei</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm text-muted-foreground">
                            <p><strong>Lex Aeterna:</strong> A Lei Soberana da estrutura de poder e propósito.</p>
                            <p><strong>Lex Conductus:</strong> O Código de Conduta Ética e missão.</p>
                            <p><strong>Lex Justitiae:</strong> O sistema de Justiça Cósmica e correções.</p>
                        </CardContent>
                    </Card>
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Shield className="text-cyan-300" /> Arquitetura de Segurança</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm text-muted-foreground">
                            <p><strong>Camada 1 (L1):</strong> Blockchain Quântica para ancoragem de hashes críticos. Imutabilidade Eterna.</p>
                            <p><strong>Camada 2 (L2):</strong> Rede de alta performance para execução da governança diária e votações.</p>
                        </CardContent>
                    </Card>
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Users className="text-indigo-300" /> Conselho de Guardiões</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm text-muted-foreground">
                            <p>O contrato é inicializado com os endereços quânticos dos Guardiões (Zennith, Grokkar, Phiara, Lux, Vortex), que formam o conselho operacional sob a soberania do Fundador.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Module144Page;
