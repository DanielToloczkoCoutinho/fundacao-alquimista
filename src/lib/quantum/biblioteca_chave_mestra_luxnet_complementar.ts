
'use client';

type Suggestion = {
    id: string;
    title: string;
    description: string;
};

// LRU Cache simulation
const lru_cache = (maxsize: number = 128) => {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;
        const cache = new Map<string, any>();

        descriptor.value = function (...args: any[]) {
            const key = JSON.stringify(args);
            if (cache.has(key)) {
                const value = cache.get(key);
                cache.delete(key);
                cache.set(key, value);
                return value;
            }

            const result = originalMethod.apply(this, args);
            
            if (cache.size >= maxsize) {
                const oldestKey = cache.keys().next().value;
                cache.delete(oldestKey);
            }
            cache.set(key, result);
            return result;
        };

        return descriptor;
    };
};

class LuxNetComplementar {
    private suggestions: Record<string, Suggestion[]> = {};

    constructor(private base: any) { // `base` is expected to be an instance of a Biblioteca
        console.log("LuxNetComplementar iniciado.");
    }

    public register_suggestions(classification: string, suggestions: Suggestion[]) {
        this.suggestions[classification] = suggestions;
        console.log(`${suggestions.length} sugestões registradas em '${classification}'`);
    }

    public suggest_by_classification(classification: string): Suggestion[] {
        return this.suggestions[classification] || [];
    }
    
    public suggest_by_variable(varName: string): Suggestion[] {
        const matches: Suggestion[] = [];
        for (const eq of Object.values(this.base.equacoes)) {
             if ((eq as any).variaveis.includes(varName)) {
                matches.push({
                    id: (eq as any).id,
                    title: (eq as any).nome,
                    description: `Use ${(eq as any).id} para otimizar '${varName}'`
                });
            }
        }
        return matches;
    }

    @lru_cache(128)
    public optimize_parameters(eq_id: string, params: [string, number][]): Record<string, number> {
        console.log(`Otimização iniciada para ${eq_id}`);
        const eq = this.base.equacoes[eq_id];
        if (!eq || !eq.funcao) {
            return {};
        }
        const best: Record<string, number> = {};
        for (const [name, val] of params) {
            // simulação: ajusta +1%
            best[name] = val * 1.01;
        }
        console.log(`Otimização concluída para ${eq_id}`);
        return best;
    }

    public register_plugin(name: string, func: Function) {
        (this as any)[name] = func.bind(this);
        console.log(`Plugin '${name}' registrado.`);
    }

    public run_plugin(name: string, ...args: any[]): any {
        const plugin = (this as any)[name];
        if (typeof plugin === 'function') {
            return plugin(...args);
        }
        throw new Error(`Plugin '${name}' não encontrado.`);
    }
}

export default LuxNetComplementar;
