import os

def integrar_rota_usuario():
    print("⚙️ Integrando rota de Usuário ao Módulo 9...")

    os.makedirs("MODULO_9/src/routes", exist_ok=True)
    os.makedirs("MODULO_9/src/controllers", exist_ok=True)
    os.makedirs("MODULO_9/src/models", exist_ok=True)

    # Modelo de Usuário (Mongoose)
    modelo = """import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Usuario', UsuarioSchema);
"""
    with open("MODULO_9/src/models/Usuario.ts", "w", encoding="utf-8") as f:
        f.write(modelo)

    # Controlador de Usuário
    controlador = """import Usuario from '../models/Usuario';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const registrar = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const senhaHash = await bcrypt.hash(senha, 10);
    const usuario = await Usuario.create({ nome, email, senha: senhaHash });
    res.status(201).json(usuario);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });

    const valido = await bcrypt.compare(senha, usuario.senha);
    if (!valido) return res.status(401).json({ erro: 'Credenciais inválidas' });

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
"""
    with open("MODULO_9/src/controllers/usuarioController.ts", "w", encoding="utf-8") as f:
        f.write(controlador)

    # Rotas de Usuário
    rotas = """import express from 'express';
import { registrar, login } from '../controllers/usuarioController';

const router = express.Router();

router.post('/registrar', registrar);
router.post('/login', login);

export default router;
"""
    with open("MODULO_9/src/routes/usuario.ts", "w", encoding="utf-8") as f:
        f.write(rotas)

    print("✅ Rotas, controlador e modelo de Usuário criados com sucesso.")

if __name__ == "__main__":
    integrar_rota_usuario()
