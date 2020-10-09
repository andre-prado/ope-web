import React from 'react';
import Column from '../Column';
import Row from '../Row';


import './styles.css';


function BookStock(props) {
  return (
    <div className="book-stock">
      <div className="book-stock-container">
        {props.checkBox}
        <div className="book-img left-book">
          <img alt="Capa do livro" src="https://m.media-amazon.com/images/I/91jGmmp9ioL._AC_UY218_.jpg"/>
        </div>
        <div className="column left-book">
          <Column title="Qtd"/>
          <Column title="Título"/>
          <Column title="Autor"/>
          <Column title="Editora"/>
          <Column title="ISBN"/>
          <Column title="Preço"/>
        </div>
        <div className="row">
          <Row text={20}/>
          <Row text={"Introdução à Programação com Python: Algoritmos e Lógica de Programação Para Iniciantes"}/>
          <Row text={"Nilo Ney Coutinho Menezes"}/>
          <Row text={"Novatec Editora; 3ª Edição (8 janeiro 2019)"}/>
          <Row text={"978 – 85 – 333 – 0227 – 3"}/>
          <Row text={"R$"+ 62.5}/>
          {props.rowTime}
          {props.rowPayment}
        </div>
        {props.descount}
        {props.remove}
        
      </div>
      
    </div>
  );
}

export default BookStock;

