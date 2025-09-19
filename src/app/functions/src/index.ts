
import * as functions from 'firebase-functions';
import { executeEquation } from './equations/executeEquation';
import { triggerCeremony } from './ceremony/triggerCeremony';

// Exporta as funções para serem deployadas
export const runEquation = executeEquation;
export const performCeremony = triggerCeremony; // Nome mais cerimonial para a exportação

export const healthCheck = functions.https.onRequest((req, res) => {
  res.status(200).send('Altar das Equações Vivas está ativo');
});
