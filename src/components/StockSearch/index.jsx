import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function StockSearch(props) {
  return (
    <div className="stock-search">
      <div className="stock-search-content">
        <div className="input">
          <input type="text" placeholder="Procurar"/>
          {props.removeItem}
        </div>
        <div className="shop-cart">
          <div className="material-icons">shopping_cart</div>
          <div className="itens">
            <p>itens: {props.quantidadeItens}</p>
          </div>
          <div className="value">Valor total: R$ {props.valorTotal}</div>
        </div>
        <Link to={props.linkHome}>
          {props.addItem}
        </Link>
        <div className="button">
          <Link to={props.link}>
            <button className="cart">{props.name}</button>
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default StockSearch;