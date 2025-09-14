import { NextResponse } from 'next/server';
import { modulesMetadata } from '@/lib/modules-metadata';

// Em um aplicativo real, isso seria um banco de dados como MongoDB, PostgreSQL ou Redis.
// Usamos um objeto simples para simulação, que será redefinido em cada requisição de API no ambiente serverless.
let energyStatus: { [key: string]: 'ativo' | 'inativo' | 'aguardando_aprovacao' } = {};
let approvals: { [key: string]: string[] } = {
  'M105': ['M29'], // Estado inicial simulado
};
let logs: any[] = [
    { _id: '1', timestamp: new Date().toISOString(), module: 'M307', action: 'ativo', operator: 'System' },
    { _id: '2', timestamp: new Date().toISOString(), module: 'M0', action: 'ativo', operator: 'System' },
];

function initializeState() {
    modulesMetadata.forEach(mod => {
        if (!energyStatus[mod.code]) {
            energyStatus[mod.code] = Math.random() > 0.3 ? 'ativo' : 'inativo';
        }
    });
    // Garante que o estado de exemplo crítico esteja sempre presente para a demo
    energyStatus['M105'] = 'aguardando_aprovacao';
}

// GET para buscar o estado atual do dashboard
export async function GET(request: Request) {
    initializeState();
    const data = {
        energyStatus,
        approvals,
        logs: logs.sort((a,b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 100),
    };
    return NextResponse.json(data);
}

// POST para atualizar o estado (intervenções, aprovações)
export async function POST(request: Request) {
    initializeState(); // Garante que o estado base existe antes de modificar
    const { type, payload } = await request.json();
    
    // A validação de token JWT aconteceria aqui em um app real
    // const token = request.headers.get('Authorization')?.split(' ')[1];
    // if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // const operator = decoded.operator;
    // ... lógica de autorização baseada no operador ...

    switch(type) {
        case 'UPDATE_STATUS':
            if (payload.code && payload.state) {
                energyStatus[payload.code] = payload.state;
                logs.unshift({
                    _id: Date.now().toString(),
                    timestamp: new Date().toISOString(),
                    module: payload.code,
                    action: `definido como ${payload.state}`,
                    operator: payload.operator,
                });
            } else {
                return NextResponse.json({ error: 'Payload inválido para UPDATE_STATUS' }, { status: 400 });
            }
            break;
            
        case 'APPROVE_MODULE':
             if (payload.module && payload.operator) {
                if (!approvals[payload.module]) {
                    approvals[payload.module] = [];
                }
                if (!approvals[payload.module].includes(payload.operator)) {
                    approvals[payload.module].push(payload.operator);
                    logs.unshift({
                        _id: Date.now().toString(),
                        timestamp: new Date().toISOString(),
                        module: payload.module,
                        action: `aprovado por ${payload.operator}`,
                        operator: payload.operator,
                    });
                }
            } else {
                 return NextResponse.json({ error: 'Payload inválido para APPROVE_MODULE' }, { status: 400 });
            }
            break;

        default:
            return NextResponse.json({ error: 'Tipo de ação inválido'}, { status: 400 });
    }

    // Lógica para broadcast via WebSocket seria adicionada aqui

    return NextResponse.json({ success: true, energyStatus, approvals, logs });
}
