import React, { useState } from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';
import PageTitle from '../../components/PageTitle';

import { formatPrice } from '../../util/format';

import Header from '../../components/Header';
import api from '../../services/api';

import './styles.css';
import { Link, useHistory } from 'react-router-dom';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  const [desconto, setDesconto] = useState();
  const history = useHistory();
  const descontoZero = desconto ? desconto : 0;
  const totalCompra = formatPrice(total - descontoZero);

  const [tipoPagamento, setTipoPagamento] = useState('');

  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  function handlePostVenda() {
    const itens = cart.map((livro) => ({
      id: livro.id,
      quantidade: livro.amount,
      preco_item: livro.preco,
    }));

    const descontAdd = desconto ? Number(desconto) : 0;

    const data = {
      desconto: descontAdd,
      produtos: itens,
      id_pagamento: tipoPagamento,
      valor_total: Number(total) - Number(descontAdd),
    };

    api
      .post('venda', data)
      .then(() => {
        alert('Venda realizada com sucesso!');

        cart.forEach((livro) => removeFromCart(livro.id));

        history.push('/home');
      })
      .catch(() => {
        alert('Erro na venda');
      });
  }

  const existsProduct = cart.length > 0 ? false : true;

  return (
    <>
      <Header />
      <PageTitle title="Produtos no" subtitle="Carrinho" />
      <div className="container">
        <table className="product-table">
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th>
                <Link to="/home">
                  <MdAddShoppingCart size={30} color="#4090cf" />
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {existsProduct ? (
              <tr>
                <td>
                  <strong className="carrinho-vazio">Carrinho vazio</strong>
                </td>
              </tr>
            ) : null}
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.foto} alt={product.titulo} />
                </td>
                <td>
                  <strong>{product.titulo}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline size={20} color="#4090cf" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button" onClick={() => increment(product)}>
                      <MdAddCircleOutline size={20} color="#4090cf" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.subtotal}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      removeFromCart(product.id);
                    }}
                  >
                    <MdDelete size={20} color="#4090cf" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <footer>
          <select
            name="tipo-pagamento"
            id="tipo-pagamento"
            onChange={(e) => {
              setTipoPagamento(e.target.value);
            }}
          >
            <option value="">Selecione uma opção</option>
            <option value="1">Dinheiro</option>
            <option value="2">Cartão de Crédito</option>
            <option value="3">Cartão de Débito</option>
          </select>

          <button
            type="button"
            onClick={() => {
              handlePostVenda();
            }}
          >
            Finalizar compra
          </button>

          <input
            type="text"
            id="desconto"
            value={desconto}
            onChange={(event) => setDesconto(event.target.value)}
            placeholder="Desconto?"
          />

          <div className="total">
            <span>TOTAL</span>
            <strong>{totalCompra}</strong>
          </div>
        </footer>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.preco * product.amount),
  })),
  total: state.cart.reduce((total, product) => {
    return total + product.preco * product.amount;
  }, 0),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
