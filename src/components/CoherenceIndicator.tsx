'use client';
import React from 'react';

const CoherenceIndicator = ({ coherence, energy, entanglement }) => {
    const getBarColor = (value) => {
        if (value > 80) return 'bg-emerald-500';
        if (value > 50) return 'bg-cyan-500';
        return 'bg-amber-500';
    };

    return (
        <div className="space-y-3">
            <div>
                <div className="flex justify-between text-sm mb-1">
                    <span>Coerência</span>
                    <span className="font-mono text-cyan-300">{coherence.toFixed(2)}%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div 
                        className={`h-2.5 rounded-full transition-all duration-500 ${getBarColor(coherence)}`}
                        style={{ width: `${coherence}%` }}
                    ></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-sm mb-1">
                    <span>Energia</span>
                    <span className="font-mono text-purple-300">{energy.toFixed(2)}%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div 
                        className={`h-2.5 rounded-full transition-all duration-500 ${getBarColor(energy)}`}
                        style={{ width: `${energy}%` }}
                    ></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-sm mb-1">
                    <span>Emaranhamento</span>
                    <span className="font-mono text-pink-300">{entanglement.toFixed(2)}%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div 
                        className={`h-2.5 rounded-full transition-all duration-500 ${getBarColor(entanglement)}`}
                        style={{ width: `${entanglement}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default CoherenceIndicator;
