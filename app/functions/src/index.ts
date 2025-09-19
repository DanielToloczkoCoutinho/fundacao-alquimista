
import * as functions from 'firebase-functions';
import { executeEquation } from './equations/executeEquation';

export const runEquation = executeEquation;

export const healthCheck = functions.https.onRequest((req, res) => {
  res.status(200).send('Altar das Equações Vivas está ativo');
});
