import React, { useState } from 'react';
import Modal from 'react-awesome-modal';

import api from '../../services/api';

import './styles.css';

const SelectedItems = () => {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => setVisible(!visible);

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');
  const [foto, setFoto] = useState('');
  const [isbn, setIsbn] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [categoria, setCategoria] = useState('');

  function handleCreateLivro(event) {
    event.preventDefault();

    api
      .post('livro', {
        titulo,
        autor,
        editora,
        foto,
        isbn,
        preco: Number(preco),
        estoque: Number(estoque),
        categoria,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso!');
        window.location.reload();
      })
      .catch(() => {
        alert('Erro no cadastro');
      });
  }

  return (
    <div className="selected-items">
      <div className="selected-items-content">
        <div className="button-add buttons-conteiner">
          <button onClick={handleVisible}>+ Produto</button>
          <Modal
            visible={visible}
            width="700"
            height="700"
            effect="fadeInUp"
            onClickAway={handleVisible}
          >
            <div className="form-add-item">
              <div className="register-book-title">Cadastrar Livro</div>
              <form onSubmit={handleCreateLivro}>
                <label htmlFor="titulo">Título</label>
                <div>
                  <input
                    id="titulo"
                    type="text"
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                  />
                </div>

                <label htmlFor="autor">Autor</label>
                <div>
                  <input
                    id="autor"
                    type="text"
                    value={autor}
                    onChange={(event) => setAutor(event.target.value)}
                  />
                </div>

                <label htmlFor="editora">Editora</label>
                <div>
                  <input
                    id="editora"
                    type="text"
                    value={editora}
                    onChange={(event) => setEditora(event.target.value)}
                  />
                </div>

                <label htmlFor="foto">Imagem(URL)</label>
                <div>
                  <input
                    id="foto"
                    type="text"
                    value={foto}
                    onChange={(event) => setFoto(event.target.value)}
                  />
                </div>

                <label htmlFor="isbn">ISBN</label>
                <div>
                  <input
                    id="isbn"
                    type="text"
                    value={isbn}
                    onChange={(event) => setIsbn(event.target.value)}
                  />
                </div>

                <label htmlFor="categoria">Categoria</label>
                <div>
                  <input
                    id="categoria"
                    type="text"
                    value={categoria}
                    onChange={(event) => setCategoria(event.target.value)}
                  />
                </div>

                <label htmlFor="preco">Preço</label>
                <div>
                  <input
                    id="preco"
                    type="text"
                    value={preco}
                    onChange={(event) => setPreco(event.target.value)}
                  />
                </div>

                <label htmlFor="estoque">Qtd</label>
                <div>
                  <input
                    id="estoque"
                    type="text"
                    value={estoque}
                    onChange={(event) => setEstoque(event.target.value)}
                  />
                </div>
                <div className="register-book-buttons">
                  <button type="submit" onClick={handleVisible}>
                    Cadastrar
                  </button>

                  <button type="button" onClick={handleVisible}>
                    Fechar
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SelectedItems;
