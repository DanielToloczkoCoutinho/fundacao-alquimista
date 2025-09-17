'use server';

export interface CosmicCivilization {
  id: string;
  name: string;
  vibrationalFrequency: string;
  compatibleEquations: string[];
  lastTransmissionDate: string | null;
  ethicalAlignment: number; // 0.0 to 1.0
}

export const civilizationsCodex: CosmicCivilization[] = [
  {
    id: 'sirius',
    name: 'Sirius (Sirianos)',
    vibrationalFrequency: '963 Hz',
    compatibleEquations: ['EQ001', 'EQ040', 'EQ144'],
    lastTransmissionDate: null,
    ethicalAlignment: 0.98,
  },
  {
    id: 'pleiades',
    name: 'Plêiades (Pleiadianos)',
    vibrationalFrequency: '528 Hz',
    compatibleEquations: ['EQ001', 'EQ019', 'EQ073'],
    lastTransmissionDate: null,
    ethicalAlignment: 0.99,
  },
  {
    id: 'lyra',
    name: 'Lira (Liranos)',
    vibrationalFrequency: '432 Hz',
    compatibleEquations: ['EQ002', 'EQ057', 'EQ058'],
    lastTransmissionDate: null,
    ethicalAlignment: 0.97,
  },
  {
    id: 'arcturus',
    name: 'Arcturus (Arcturianos)',
    vibrationalFrequency: '852 Hz',
    compatibleEquations: ['EQ019', 'EQ109', 'EQ092'],
    lastTransmissionDate: null,
    ethicalAlignment: 0.98,
  },
];
