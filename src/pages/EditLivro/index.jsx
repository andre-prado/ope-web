import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Modal from '../../components/Modal';

import api from '../../services/api';

import './styles.css';

function EditLivro({ livro }) {
  const history = useHistory();

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');
  const [foto, setFoto] = useState('');
  const [isbn, setIsbn] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [categoria, setCategoria] = useState('');

  function handleUpdateLivro(event) {
    event.preventDefault();

    api
      .put(`livro/${livro.id}`, {
        titulo: titulo ? titulo : livro.titulo,
        autor: autor ? autor : livro.autor,
        editora: editora ? editora : livro.editora,
        foto: foto ? foto : livro.foto,
        isbn: isbn ? isbn : livro.isbn,
        preco: preco ? Number(preco) : Number(livro.preco),
        estoque: estoque ? Number(estoque) : Number(livro.estoque),
        categoria: categoria ? categoria : livro.categoria,
      })
      .then(() => {
        alert('Livro alterado com sucesso!');

        history.push('/home');
      })
      .catch(() => {
        alert('Erro ao alterar livro');
      });
  }

  return (
    <div className="container-edit">
      <Modal>
        <div className="edit-content">
          <form onSubmit={handleUpdateLivro}>
            <h2>Editar livro</h2>
            <label htmlFor="titulo">Título</label>
            <div>
              <input
                id="titulo"
                type="text"
                value={titulo ? titulo : livro.titulo}
                onChange={(event) => setTitulo(event.target.value)}
              />
            </div>

            <label htmlFor="autor">Autor</label>
            <div>
              <input
                id="autor"
                type="text"
                value={autor ? autor : livro.autor}
                onChange={(event) => setAutor(event.target.value)}
              />
            </div>

            <label htmlFor="editora">Editora</label>
            <div>
              <input
                id="editora"
                type="text"
                value={editora ? editora : livro.editora}
                onChange={(event) => setEditora(event.target.value)}
              />
            </div>

            <label htmlFor="foto">Imagem(URL)</label>
            <div>
              <input
                id="foto"
                type="text"
                value={foto ? foto : livro.foto}
                onChange={(event) => setFoto(event.target.value)}
              />
            </div>

            <label htmlFor="isbn">ISBN</label>
            <div>
              <input
                id="isbn"
                type="text"
                value={isbn ? isbn : livro.isbn}
                onChange={(event) => setIsbn(event.target.value)}
              />
            </div>

            <label htmlFor="categoria">Categoria</label>
            <div>
              <input
                id="categoria"
                type="text"
                value={categoria ? categoria : livro.categoria}
                onChange={(event) => setCategoria(event.target.value)}
              />
            </div>

            <label htmlFor="preco">Preço</label>
            <div>
              <input
                id="preco"
                type="text"
                value={preco ? preco : livro.preco}
                onChange={(event) => setPreco(event.target.value)}
              />
            </div>

            <label htmlFor="estoque">Qtd</label>
            <div>
              <input
                id="estoque"
                type="text"
                value={estoque ? estoque : livro.estoque}
                onChange={(event) => setEstoque(event.target.value)}
              />
            </div>
            <div className="edit-button">
              <button type="submit">Alterar</button>
              <button type="button" onClick={() => history.push('/home')}>
                Voltar
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  livro: state.edit,
});

export default connect(mapStateToProps)(EditLivro);
