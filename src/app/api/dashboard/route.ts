import { NextResponse } from 'next/server';
import { modulesMetadata } from '@/lib/modules-metadata';

// This is a mock database/state manager. In a real app, this would be Redis, PostgreSQL, etc.
let energyStatus: { [key: string]: string } = {};
let approvals: { [key: string]: string[] } = { 'M105': ['M29'] }; // Initial mock state
let logs: any[] = [
    { _id: '1', timestamp: new Date().toISOString(), module: 'M307', action: 'ativo', operator: 'System' },
    { _id: '2', timestamp: new Date().toISOString(), module: 'M0', action: 'ativo', operator: 'System' },
];

modulesMetadata.forEach(mod => {
    if (!energyStatus[mod.code]) {
        energyStatus[mod.code] = Math.random() > 0.3 ? 'ativo' : 'inativo';
    }
});
energyStatus['M105'] = 'aguardando_aprovacao';


export async function GET(request: Request) {
    // In a real-world scenario, you would fetch this data from your database.
    const data = {
        energyStatus,
        approvals,
        logs: logs.sort((a,b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 100),
    };
    return NextResponse.json(data);
}

// In a real app, you would have separate routes for actions, but for simplicity:
export async function POST(request: Request) {
    const { type, payload } = await request.json();
    
    switch(type) {
        case 'UPDATE_STATUS':
            energyStatus[payload.code] = payload.state;
            logs.unshift({
                _id: Date.now().toString(),
                timestamp: new Date().toISOString(),
                module: payload.code,
                action: payload.state,
                operator: payload.operator,
            });
            break;
        case 'APPROVE_MODULE':
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
            // Check if all approvals are met
            const required = ['M29', 'M45'];
            const isApproved = required.every(op => approvals[payload.module]?.includes(op));
            if (isApproved) {
                 energyStatus[payload.module] = 'ativo';
            }
            break;
        default:
            return NextResponse.json({ error: 'Invalid action type'}, { status: 400 });
    }

    return NextResponse.json({ success: true });
}
