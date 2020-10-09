import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom';

import './styles.css';

export default class SelectedItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible : false
    }
  }

  openModal() {
    this.setState({
      visible : true
    });
  }

  closeModal() {
    this.setState({
      visible : false
    });
  }

  render() {
    return(
    <div className="selected-items">
      <div className="selected-items-content">
        <div className="checkbox-container">
          <div className="checkbox-text">
            <input type="checkbox"/>
            <div className="selected-text">
              <p>Selecionar</p>
              <p>todos</p>
            </div>
          </div>
            <div className="buttons-conteiner">
              <button>Alterar</button>
              <button>Excluir</button>
            </div>
        </div>
        <div className="button-add buttons-conteiner">
          <button onClick={() => this.openModal()}>+ Produto</button>
          <Modal visible={this.state.visible} width="700" height="650" effect="fadeInUp" onClickAway={() => this.closeModal()}>
            <div className="form-add-item">
              <div className="register-book-title">
                Cadastrar Livro
              </div>
              <form onSubmit={this.sendForm}>
                        <label for="email">Título</label>
                    <div>
                        <input type="text" value={this.state.email}/>
                    </div>

                        <label for="cnpj">Autor</label>
                    <div>
                        <input type="text" value={this.state.cnpj}/>
                    </div>

                        <label for="codigo">Editora</label>
                    <div>
                        <input type="text" value={this.state.codigo}/>
                    </div>      
                        <label for="codigo">Imagem</label>
                    <div>
                        <input type="text" value={this.state.codigo}/>
                    </div>

                        <label for="codigo">ISBN</label>
                    <div>
                        <input type="text" value={this.state.codigo}/>
                    </div>

                        <label for="codigo">Preço</label>
                    <div>
                        <input type="text" value={this.state.codigo}/>
                    </div>

                        <label for="codigo">Qtd</label>
                    <div>
                        <input type="text" value={this.state.codigo}/>
                    </div>
                    <div className="register-book-buttons">
                      <Link to="/" onClick={() => this.closeModal()}>
                          <button>Cadastrar</button>
                      </Link>
                      
                      <Link to="/" onClick={() => this.closeModal()}>
                        <button>Fechar</button>
                      </Link>
                  </div>
                </form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
    )
  }
}