
import React, { useState } from 'react';
import { useAuth } from '../utils/auth';

const LoginPage = () => {
  const [operator, setOperator] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(operator, password);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Acesso à Fundação Alquimista</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          placeholder="Operador (ex: M9)"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button type="submit">Autenticar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
