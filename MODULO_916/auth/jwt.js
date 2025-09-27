import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './jwt-secret';

/**
 * Gera um token JWT para um usuário.
 * @param {object} payload - O payload a ser incluído no token (ex: { userId: '123' }).
 * @param {string} expiresIn - A duração do token (ex: '1h', '7d').
 * @returns {string} - O token JWT gerado.
 */
export function gerarToken(payload, expiresIn = '1h') {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

/**
 * Verifica um token JWT.
 * @param {string} token - O token a ser verificado.
 * @returns {object | null} - O payload decodificado se o token for válido, caso contrário null.
 */
export function verificarToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.error("Falha na verificação do token:", error.message);
    return null;
  }
}
