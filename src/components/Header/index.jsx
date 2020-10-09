import React from 'react';

import {Link} from 'react-router-dom';

import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="dropdown">
        <div className="material-icons dropbtn menu-close">menu</div>
        <div className="material-icons dropbtn menu-open">menu_open</div>
        <div className="dropdown-content">
          <Link to="/">Estoque</Link>
          <Link to="/vendas-dia">Vendas: Dia</Link>
          <Link to="/vendas-historico">Vendas: Histórico</Link>
          <Link to="/carrinho">Carrinho</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;