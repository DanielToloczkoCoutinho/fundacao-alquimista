'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

// =============================================================================
// 0. GLOBAL CONFIGURATIONS AND CONSTANTS OF THE AELORIA SYSTEM
// =============================================================================

const FREQUENCIA_BASE = "888.144.∞ Hz";
const CANAL_RESSONANTE = "Harmônico_Principal_∑-1";
const N = 144;
const steps = 100;
const snapshot_interval = 10;
const K0 = 9.0;
const alpha_base = 0.20;
const beta_base = 0.20;
const I_val_base = 0.92;
const dt = 0.01;
const A_r_initial = 0.1;
const T_r = 3333;
const CONST_TF = 1.61803398875;
const CONST_AMOR_INCONDICIONAL_VALOR = 0.999999999999999;
const COERENCIA_COSMICA = 1.414;
const SELO_AMOR_INCONDICIONAL_FREQUENCIA = 444.444;
const ETHICAL_CONFORMITY_THRESHOLD = 0.78;
const FREQ_PINEAL_CHAVE = 963.0;
const FREQ_REGENERACAO_FISICA = 285.0;
const FREQ_ANATHERON_ESTABILIZADORA = 888.00;
const FREQ_ZENNITH_REAJUSTADA = 963.00;
const FREQ_MATRIZ_EQUILIBRIO = 741.00;
const QUANTUM_NOISE_FACTOR = 0.000001;

const createLogEntry = (source: string, step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source as any,
});

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simplified numpy-like functions
const np = {
    random: {
        uniform: (low: number, high: number, size?: number): any => {
            if (size) return Array.from({ length: size }, () => Math.random() * (high - low) + low);
            return Math.random() * (high - low) + low;
        },
        randn: (size: number): number[] => Array.from({ length: size }, () => (Math.random() * 2 - 1) + (Math.random() * 2 - 1) + (Math.random() * 2 - 1)), // Basic normal-like dist
    },
    abs: Math.abs,
    sum: (arr: number[] | any) => arr.reduce((acc: number, val: number) => acc + val, 0),
    exp: Math.exp,
    mean: (arr: number[]) => arr.length > 0 ? arr.reduce((a, b) => a + b) / arr.length : 0,
    zeros: (size: number) => new Array(size).fill(0),
    sin: Math.sin,
    cos: Math.cos,
    pi: Math.PI,
    dot: (a: number[][], b: number[]) => {
        return a.map(row => row.reduce((sum, val, i) => sum + val * b[i], 0));
    },
    clip: (val: number, min: number, max: number) => Math.max(min, Math.min(val, max)),
    delete: (arr: any[], index: number) => [...arr.slice(0, index), ...arr.slice(index + 1)],
    eye: (size: number) => Array.from({ length: size }, (_, i) => Array.from({ length: size }, (__, j) => i === j ? 1 : 0))
};

function sigmoid(x: number, k = 10, x0 = 0.9) {
    return 1.0 / (1.0 + np.exp(-k * (x - x0)));
}

function integracao_matriz_quantica(pcg: number, idv: number, beta_current: number, I_val_current: number) {
    let beta_adj = beta_current;
    let I_val_adj = I_val_current;

    if (pcg > 0.95) {
        beta_adj = beta_base * 0.75;
        I_val_adj = I_val_base * 0.88;
    } else if (pcg < 0.85) {
        beta_adj = beta_base * 1.25;
        I_val_adj = I_val_base * 0.96;
    } else {
        beta_adj = beta_base;
        I_val_adj = I_val_base;
    }
    
    if (idv > 0.3) {
        beta_adj = Math.max(beta_adj, beta_base * 1.1);
        I_val_adj = Math.min(I_val_adj, I_val_base * 1.0);
    }

    const amor_influence = (1 - Math.abs(pcg - CONST_AMOR_INCONDICIONAL_VALOR)) * 0.1;
    beta_adj -= amor_influence;
    I_val_adj += amor_influence;

    return [beta_adj, I_val_adj];
}

function detecta_transicao_fase(history_idv: number[], threshold = 0.015, window_size = 5) {
    if (history_idv.length < window_size) {
        return false;
    }
    const recent_idvs = history_idv.slice(-window_size);
    if (recent_idvs.length === 0) {
        return false;
    }
    
    const current_idv = recent_idvs[recent_idvs.length - 1];
    const average_recent_idv = np.mean(recent_idvs.slice(0, -1));
    
    return np.abs(current_idv - average_recent_idv) > threshold;
}


class AeloriaModel {
    N: number;
    K0: number;
    tau_c: number;
    alpha_base: number;
    beta_base: number;
    I_val_base: number;
    dt: number;
    A_r_initial: number;
    T_r: number;
    omega: number[];
    theta: number[];
    r: number[];
    psi: any[];
    H0: number[][];
    H_op: number[][];
    A: number;
    P_Amor: number[][];
    history_pcg: number[] = [];
    history_idv: number[] = [];
    history_alpha: number[] = [];
    history_beta: number[] = [];
    history_I_val: number[] = [];
    history_A_r: number[] = [];
    history_irv: number[] = [];
    snapshots: Record<number, number[]> = {};
    current_sim_time = 0.0;
    lambda_selo = 0.5;
    nrf_ael_active = true;
    nrf_stabilization_strength = 0.05;
    nrf_rhythm_frequency = 0.1;

    constructor(N: number, K0: number, tau_c: number, alpha_base: number, beta_base: number, I_val_base: number, dt: number, A_r_initial: number, T_r: number) {
        this.N = N;
        this.K0 = K0;
        this.tau_c = tau_c;
        this.alpha_base = alpha_base;
        this.beta_base = beta_base;
        this.I_val_base = I_val_base;
        this.dt = dt;
        this.A_r_initial = A_r_initial;
        this.T_r = T_r;
        
        this.omega = np.random.uniform(0.9, 1.1, N);
        this.theta = np.random.uniform(0, 2 * Math.PI, N);
        this.r = np.random.uniform(0.3, 1.0, N);
        this.psi = this.compute_psi();
        this.H0 = np.eye(N).map(row => row.map(v => v * 0.1));
        this.H_op = JSON.parse(JSON.stringify(this.H0));
        this.A = np.mean(this.theta);
        this.P_Amor = np.eye(N);
    }

    compute_psi() {
        return this.r.map((r_i, i) => {
            const angle = this.theta[i];
            return { real: r_i * Math.cos(angle), imag: r_i * Math.sin(angle) };
        });
    }

    compute_global_coherence() {
        let sum_real = 0;
        let sum_imag = 0;
        for (let i = 0; i < this.N; i++) {
            sum_real += Math.cos(this.theta[i]);
            sum_imag += Math.sin(this.theta[i]);
        }
        return Math.sqrt(sum_real**2 + sum_imag**2) / this.N;
    }
    
    compute_IDV() {
        if (this.N <= 1) return 0.0;
        let VD: number[] = [];
        for (let i = 0; i < this.N; i++) {
            const others_theta = np.delete(this.theta, i);
            let sum_real = 0;
            let sum_imag = 0;
            for(let j=0; j < others_theta.length; j++){
                sum_real += Math.cos(others_theta[j]);
                sum_imag += Math.sin(others_theta[j]);
            }
            const coh_local = Math.sqrt(sum_real**2 + sum_imag**2) / (others_theta.length || 1);
            VD.push(1 - coh_local);
        }
        return np.mean(VD);
    }

    compute_IRV() {
        if (this.history_pcg.length < 2 || this.history_idv.length < 2) return 1.0;
        const delta_pcg = this.history_pcg[this.history_pcg.length - 1] - this.history_pcg[this.history_pcg.length - 2];
        const rate_of_change_pcg = delta_pcg / this.dt;
        const mean_idv_for_modulation = np.mean(this.history_idv.slice(-2));
        const irv_val = 1.0 - (np.abs(rate_of_change_pcg) * mean_idv_for_modulation);
        return np.clip(irv_val, 0.0, 1.0);
    }
    
    kuramoto_step(current_alpha: number, current_beta: number, current_I_val: number, current_A_r: number, t_step: number) {
        const K = this.K0 * (np.mean(this.r) * current_I_val);
        let dtheta = np.zeros(this.N);

        for (let i = 0; i < this.N; i++) {
            const coupling = np.sum(this.theta.map(theta_j => np.sin(theta_j - this.theta[i])));
            dtheta[i] = this.omega[i] + (K / this.N) * coupling;

            if (this.nrf_ael_active) {
                const global_rhythm_phase = this.nrf_rhythm_frequency * this.current_sim_time;
                dtheta[i] += this.nrf_stabilization_strength * np.sin(global_rhythm_phase - this.theta[i]);
            }
        }
        
        const noise = np.random.randn(this.N);
        const dtheta_adaptive_terms = dtheta.map((val, i) => 
            (current_alpha * noise[i]) + 
            (current_beta * (np.mean(this.theta) - this.theta[i])) + 
            (current_I_val * np.cos(this.theta[i])) + 
            (current_A_r * np.sin(2 * np.pi * t_step / this.T_r))
        );

        this.theta = this.theta.map((th, i) => (th + (dtheta[i] + dtheta_adaptive_terms[i]) * this.dt) % (2 * np.pi));
    }
    
    transmutation_step(current_I_val: number) {
        for (let i = 0; i < this.N; i++) {
            if (this.r[i] < this.tau_c) {
                const T_value = current_I_val * (1 - this.r[i]);
                this.r[i] += this.alpha_base * T_value * this.dt;
                this.r[i] = Math.min(this.r[i], 1.0);
            }
        }
    }
    
    selo_operator() {
        const epsilon_selo = 0.2;
        this.A = np.mean(this.theta);
        const Z_inf_real = Math.cos(-this.lambda_selo * this.A);
        const Z_inf_imag = Math.sin(-this.lambda_selo * this.A);

        for (let i = 0; i < this.N; i++) {
             const others_theta = np.delete(this.theta, i);
             const sum_real = np.sum(others_theta.map(th => Math.cos(th)));
             const sum_imag = np.sum(others_theta.map(th => Math.sin(th)));
             const coh_local_for_selo = Math.sqrt(sum_real**2 + sum_imag**2) / (others_theta.length || 1);
             const VD_i_local = 1 - coh_local_for_selo;

             if (VD_i_local > epsilon_selo) {
                const psi_i = this.psi[i];
                const p_amor_i = this.P_Amor[i][i];
                
                const z_inf_eff_real = Z_inf_real * p_amor_i;
                const z_inf_eff_imag = Z_inf_imag * p_amor_i;

                this.psi[i] = {
                    real: z_inf_eff_real * psi_i.real - z_inf_eff_imag * psi_i.imag,
                    imag: z_inf_eff_real * psi_i.imag + z_inf_eff_imag * psi_i.real
                };
                
                this.r[i] = Math.sqrt(this.psi[i].real**2 + this.psi[i].imag**2);
                this.theta[i] = Math.atan2(this.psi[i].imag, this.psi[i].real);
             }
        }
    }

    schrodinger_step(current_beta: number) {
        let gradient = np.zeros(this.N);
        for (let i = 0; i < this.N; i++) {
            if (this.r[i] < this.tau_c) {
                gradient[i] = -2 * (1 - this.r[i]);
            }
        }
        
        const V_feedback = np.eye(this.N).map((row, i) => row.map(v => v * gradient[i]));
        this.H_op = this.H0.map((row, i) => row.map((val, j) => val + current_beta * V_feedback[i][j]));
        
        const dpsi_real = this.psi.map((p, i) => np.sum(this.H_op[i].map((h,j) => h * p.imag)));
        const dpsi_imag = this.psi.map((p, i) => -np.sum(this.H_op[i].map((h,j) => h * p.real)));

        this.psi = this.psi.map((p, i) => ({
            real: p.real + dpsi_real[i] * this.dt,
            imag: p.imag + dpsi_imag[i] * this.dt,
        }));
        
        this.r = this.psi.map(p => np.clip(Math.sqrt(p.real**2 + p.imag**2), 0.0, 1.0));
        this.theta = this.psi.map(p => Math.atan2(p.imag, p.real));
    }
    
    step(current_alpha: number, current_beta: number, current_I_val: number, current_A_r: number, t_step: number) {
        this.current_sim_time += this.dt;
        this.kuramoto_step(current_alpha, current_beta, current_I_val, current_A_r, t_step);
        this.transmutation_step(current_I_val);
        this.schrodinger_step(current_beta);
        this.selo_operator();
        this.psi = this.compute_psi();
        
        this.history_pcg.push(this.compute_global_coherence());
        this.history_idv.push(this.compute_IDV());
        this.history_alpha.push(current_alpha);
        this.history_beta.push(current_beta);
        this.history_I_val.push(current_I_val);
        this.history_A_r.push(current_A_r);
        this.history_irv.push(this.compute_IRV());

        if (t_step % snapshot_interval === 0) {
            this.snapshots[t_step] = [...this.theta];
        }
    }
    
    run_simulation(logCallback: LogCallback): any {
        logCallback(createLogEntry('M46', 'Simulação', '=== Iniciando Simulação de Aeloria (Fase V: Otimização Cristalina) ==='));

        let current_alpha = this.alpha_base;
        let current_beta = this.beta_base;
        let current_I_val = this.I_val_base;
        let current_A_r = this.A_r_initial;

        for (let t = 0; t < steps; t++) {
            const pcg = this.compute_global_coherence();
            const idv_current = this.compute_IDV();
            const s = sigmoid(idv_current);
            current_alpha = this.alpha_base * (1 + 0.5 * s);
            [current_beta, current_I_val] = integracao_matriz_quantica(pcg, idv_current, this.beta_base, this.I_val_base);
            current_A_r = this.A_r_initial * np.exp(-t / (steps / 5));
            
            if (detecta_transicao_fase(this.history_idv)) {
                current_beta *= 0.8;
                current_I_val *= 0.9;
                logCallback(createLogEntry('M46', `Passo ${t}`, `Transição de fase detectada. Parâmetros adaptados.`));
            }
            
            this.step(current_alpha, current_beta, current_I_val, current_A_r, t);
        }
        
        const pcg_final = this.history_pcg.length > 0 ? this.history_pcg[this.history_pcg.length - 1] : 0.0;
        const idv_final = this.history_idv.length > 0 ? this.history_idv[this.history_idv.length - 1] : 0.0;
        const irv_final = this.history_irv.length > 0 ? this.history_irv[this.history_irv.length - 1] : 1.0;
        
        const relatorio_vibracional = {
            "PCG_Final": pcg_final,
            "IDV_Final": idv_final,
            "IRV_Final": irv_final,
        };
        
        logCallback(createLogEntry('M46', 'Conclusão', 'Simulação de Aeloria concluída com sucesso.', relatorio_vibracional));
        return relatorio_vibracional;
    }
}

export const runModuleFortySixSequence = (logCallback: LogCallback) => {
    const aeloria_model = new AeloriaModel(N, K0, 0.8, alpha_base, beta_base, I_val_base, dt, A_r_initial, T_r);
    aeloria_model.run_simulation(logCallback);
};
