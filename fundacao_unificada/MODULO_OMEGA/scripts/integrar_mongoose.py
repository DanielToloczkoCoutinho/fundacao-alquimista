import subprocess
import os

def integrar_mongoose():
    print("⚙️  Integrando Mongoose...")
    project_path = "MODULO_9"

    # Instalar Mongoose
    subprocess.run(["npm", "install", "mongoose"], check=True, cwd=project_path)

    # Criar diretório de modelos
    modelos_path = os.path.join(project_path, "mongodb", "modelos")
    os.makedirs(modelos_path, exist_ok=True)

    # Criar arquivo de modelo de exemplo
    modelo_content = """import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'O nome é obrigatório.'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'O email é obrigatório.'],
    unique: true,
    lowercase: true,
    trim: true
  },
  criadoEm: {
    type: Date,
    default: Date.now
  }
});

// Evita a recriação do modelo se ele já existir
const Usuario = mongoose.models.Usuario || mongoose.model('Usuario', usuarioSchema);

export default Usuario;
"""
    with open(os.path.join(modelos_path, "modelo_usuario.js"), "w", encoding="utf-8") as f:
        f.write(modelo_content)

    print("✅  Mongoose integrado com sucesso. Modelo de exemplo criado em MODULO_9/mongodb/modelos.")

if __name__ == "__main__":
    integrar_mongoose()
