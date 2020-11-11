import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import './styles.css';

function Header({ cartSize }) {
  return (
    <header className="header">
      <div className="dropdown">
        <div className="material-icons dropbtn menu-close">menu</div>
        <div className="material-icons dropbtn menu-open">menu_open</div>
        <div className="dropdown-content">
          <Link to="/">Estoque</Link>
          <Link to="/vendas-historico">Vendas: Histórico</Link>
          <Link to="/carrinho">Carrinho</Link>
        </div>
      </div>

      <Link to="carrinho" className="cart-itens">
        <div>
          <strong>Carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Link>
    </header>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
