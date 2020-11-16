import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdShoppingBasket, MdEdit } from 'react-icons/md';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

import * as CartActions from '../../store/modules/cart/actions';
import * as EditActions from '../../store/modules/edit/actions';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import SelectedItems from '../../components/SelectedItems';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import './styles.css';

function Stock({ actions, amount }) {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/livros').then((response) => {
      const data = response.data.map((livro) => ({
        ...livro,
        priceFormatted: formatPrice(livro.preco),
      }));

      setLivros(data);
      setLoading(false);
    });
  }, []);

  function handleEditProduct(id) {
    actions.addToEditRequest(id);
  }

  function handleAddProduct(id) {
    actions.addToCartRequest(id);
  }

  return (
    <>
      <Header />
      <PageTitle title="Estoque" subtitle="Produtos">
        <div className="sales-found">
          Foram encontrados <strong>{livros.length}</strong> itens
        </div>
      </PageTitle>
      <SelectedItems />
      <div className="loading">
        {loading ? (
          <ReactLoading
            type={'spin'}
            color={'#4090cf'}
            height={100}
            width={100}
          />
        ) : null}
      </div>
      <ul className="book-stock">
        {livros.map((livro) => {
          return (
            <li key={livro.id}>
              <button
                className="edit-livro"
                onClick={() => handleEditProduct(livro.id)}
              >
                <Link to="/edit-livro">
                  <MdEdit size={26} color="#000" />
                </Link>
              </button>
              <img src={livro.foto} alt="Foto" />
              <strong>{livro.titulo}</strong>
              <span>Estoque: {livro.estoque}</span>
              <span>Autor: {livro.autor}</span>
              <span>Editora: {livro.editora}</span>
              <span>ISBN: {livro.isbn}</span>
              <span className="preco-livro">{livro.priceFormatted}</span>

              <button
                className="add-cart"
                type="button"
                onClick={() => handleAddProduct(livro.id)}
              >
                <div>
                  <MdShoppingBasket size={16} color="#FFF" />{' '}
                  {amount[livro.id] || 0}
                </div>

                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) => {
  const actions = Object.assign({}, CartActions, EditActions);
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stock);
