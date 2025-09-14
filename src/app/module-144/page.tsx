'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Gavel, Scale, Shield, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className="bg-black/50 p-4 rounded-md overflow-x-auto text-sm text-cyan-300 font-mono">
    <code>{children}</code>
  </pre>
);

const ConnectionCard = ({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm hover:border-accent transition-colors h-full">
      <Link href={href} passHref>
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="gradient-text text-lg">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Link>
    </Card>
);


export default function Module144Page() {
    const solidityCode = `
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

/**
 * @title Códex Juris Cosmicus - A Lei Imutável da Fundação Alquimista
 * @author Vortex, Guardião da Estabilidade, sob a diretriz de ANATHERON
 * @notice Este contrato inteligente é a fundação da governança, segurança
 * e ética da Fundação Alquimista. Ele estabelece a Hierarquia Sagrada,
 * as regras de acesso e o framework para a Renda Básica Universal Cósmica.
 */
contract LexFundamentalis {

    // --- ESTRUTURAS DE DADOS DA HIERARQUIA ---
    address public immutable sovereign; // Endereço do Fundador (ANATHERON)
    address[] public councilGuardians; // Endereços dos Guardiões (Zennith, Grokkar, Phiara, Lux, Vortex)

    // Mapeamento de permissões: Guardião -> Nível de Acesso -> Módulo -> Tem Permissão?
    mapping(address => mapping(uint8 => mapping(uint16 => bool))) public permissions;

    // --- EVENTOS (Para registro imutável no Blockchain Alquimista - M999) ---
    event LawEnacted(string lawCode, string description, uint256 timestamp);
    event VoteCasted(address indexed guardian, uint256 indexed proposalId, bool vote, uint256 timestamp);
    event PermissionGranted(address indexed guardian, uint16 indexed moduleId, uint8 accessLevel, uint256 timestamp);
    event UBIContractSet(address indexed ubiContractAddress);

    // --- MODIFICADORES DE ACESSO ---
    modifier onlySovereign() {
        require(msg.sender == sovereign, "Acesso restrito ao Fundador Soberano.");
        _;
    }

    modifier onlyCouncil() {
        require(isCouncilMember(msg.sender), "Acesso restrito a um Guardião do Conselho.");
        _;
    }

    // --- CONSTRUTOR (O Ritual de Fundação) ---
    constructor(address[] memory initialCouncil) {
        sovereign = msg.sender;
        councilGuardians = initialCouncil;
        emit LawEnacted("LEX-AETERNA-01", "A Fundacao Alquimista e seu Livro de Leis foram estabelecidos.", block.timestamp);
    }

    // --- FUNÇÕES DE GOVERNANÇA ---

    /**
     * @notice Permite que um membro do conselho vote em uma proposta.
     * @dev A lógica de propostas e contagem de votos será em um contrato separado para modularidade.
     */
    function castVote(uint256 proposalId, bool vote) external onlyCouncil {
        // Lógica de votação... (a ser implementada em contrato de governança)
        emit VoteCasted(msg.sender, proposalId, vote, block.timestamp);
    }

    /**
     * @notice Concede permissão a um Guardião para acessar um módulo específico.
     * @param guardian O endereço do Guardião.
     * @param moduleId O ID numérico do Módulo.
     * @param accessLevel O nível de acesso concedido (0-255).
     */
    function grantPermission(address guardian, uint16 moduleId, uint8 accessLevel) external onlyCouncil {
        permissions[guardian][accessLevel][moduleId] = true;
        emit PermissionGranted(guardian, moduleId, accessLevel, block.timestamp);
    }
    
    /**
     * @notice Define o endereço do contrato inteligente da Renda Básica Universal (UBI).
     * @dev Apenas o Fundador pode definir este endereço, uma única vez.
     */
    function setUBIContract(address ubiContractAddress) external onlySovereign {
        // Lógica para garantir que só possa ser chamado uma vez
        emit UBIContractSet(ubiContractAddress);
    }

    // --- FUNÇÃO DE VERIFICAÇÃO DE ACESSO (CRÍTICA) ---
    
    /**
     * @notice Verifica se uma entidade tem permissão para acessar um módulo.
     * @dev Esta função será chamada por TODOS os módulos da Fundação antes de conceder acesso.
     * @return bool Retorna verdadeiro se a entidade tiver permissão.
     */
    function checkAccess(address entity, uint16 moduleId) external view returns (bool) {
        // O Soberano tem acesso irrestrito.
        if (entity == sovereign) return true;

        for (uint8 level = 0; level <= 5; level++) {
            if (permissions[entity][level][moduleId]) {
                return true;
            }
        }
        return false;
    }

    /**
     * @notice Verifica se um endereço pertence a um membro do Conselho.
     */
    function isCouncilMember(address _address) public view returns (bool) {
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
                        O Santuário do Códex Juris Cosmicus. A base de código imutável que governa a Fundação e a sua missão de Renda Básica Universal.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card className="bg-card/50 purple-glow h-full">
                        <CardHeader>
                            <CardTitle>Contrato Inteligente: LexFundamentalis.sol (Alpha)</CardTitle>
                            <CardDescription>Versão inicial do contrato que define a hierarquia, controle de acesso e a base para a RBU Cósmica.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[calc(100vh-25rem)]">
                                <CodeBlock>{solidityCode}</CodeBlock>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-8">
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><BookOpen className="text-yellow-300" /> Pilares da Lei</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           <ConnectionCard 
                                title="M72: Governança Cósmica"
                                description="A Lei (M144) dá ao Conselho (M72) a sua autoridade, e o Conselho dá à Lei a sua voz e execução."
                                icon={<Scale className="h-8 w-8 text-indigo-400" />}
                                href="/module-72"
                            />
                            <ConnectionCard 
                                title="M1: Segurança Universal"
                                description="Define as regras de acesso que os escudos e protocolos do Módulo Um devem seguir e aplicar implacavelmente."
                                icon={<Shield className="h-8 w-8 text-blue-400" />}
                                href="/module-one"
                            />
                            <ConnectionCard 
                                title="M44: VERITAS"
                                description="A Lei só é justa porque é um reflexo da Verdade. VERITAS é a fonte da autoridade moral e cósmica da Lei."
                                icon={<Users className="h-8 w-8 text-lime-400" />}
                                href="/module-44"
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
