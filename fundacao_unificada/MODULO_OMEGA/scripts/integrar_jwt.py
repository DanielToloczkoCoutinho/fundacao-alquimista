
import subprocess
import os

def integrar_jwt():
    print("⚙️  Integrando JSON Web Token (JWT)...")
    project_path = "MODULO_9"

    # Instalar dependências
    subprocess.run(["npm", "install", "jsonwebtoken", "@types/jsonwebtoken"], check=True, cwd=project_path)

    # Criar diretório de autenticação
    auth_path = os.path.join(project_path, "auth")
    os.makedirs(auth_path, exist_ok=True)

    # Criar arquivo de segredo JWT
    secret_content = """// Este é um segredo simples para fins de exemplo.
// Em um ambiente de produção, use uma variável de ambiente ou um serviço de gerenciamento de segredos.
export const JWT_SECRET = 'segredo-super-secreto-da-grande-obra';
"""
    with open(os.path.join(auth_path, "jwt-secret.js"), "w", encoding="utf-8") as f:
        f.write(secret_content)

    # Criar utilitário JWT
    jwt_util_content = """import jwt from 'jsonwebtoken';
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
"""
    with open(os.path.join(auth_path, "jwt.js"), "w", encoding="utf-8") as f:
        f.write(jwt_util_content)

    print("✅  JWT integrado com sucesso. Utilitários e segredo criados em MODULO_9/auth.")

if __name__ == "__main__":
    integrar_jwt()
