import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

import './styles.css';

function Login({ history }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    if (usuario === 'exitus' && password === 'admin123') {
      localStorage.setItem('@SuaAplicacao:JWT_TOKEN', 'seutokenjwt');

      history.push('/home');
    } else {
      alert('Usuário inválido!');
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div className="login-pass">
          <div className="login-icon">
            <FaUserCircle size={70} color="#174569" />
          </div>
          <label htmlFor="usuario">Usuário</label>
          <input
            id="usuario"
            type="text"
            name="usuario"
            onChange={(e) => setUsuario(e.target.value)}
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
