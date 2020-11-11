import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdShoppingBasket } from 'react-icons/md';
import { TiDeleteOutline } from 'react-icons/ti';
import ReactLoading from 'react-loading';

import * as CartActions from '../../store/modules/cart/actions';

import PageTitle from '../../components/PageTitle';
import SelectedItems from '../../components/SelectedItems';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import './styles.css';

function Stock({ addToCartRequest, amount }) {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);

  function deleteLivro(livroId) {
    const id = Number(livroId);
    if (window.confirm('Tem certeza que deseja excluir o livro?')) {
      api
        .delete(`/livro/${id}`)
        .then(() => {
          alert('Livro deletado!');
          window.location.reload();
        })
        .catch(() => {
          alert('Erro ao deletar o livro');
        });
    } else {
      return;
    }
  }

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

  function handleAddProduct(id) {
    addToCartRequest(id);
  }

  return (
    <>
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
                type="button"
                className="delete-button"
                onClick={() => deleteLivro(livro.id)}
              >
                <TiDeleteOutline size={20} color={'#F85B48'} />
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Stock);
