import React from 'react';
import SaleRow from './saleRow';


import './styles.css';


function Sale(props) {
  return(
    <div className="sale-container">
      <div className="sale-columns">
        <div className="book-title sale-columns-style">Título</div>
        <div className="book-isbn sale-columns-style">ISBN</div>
        <div className="payment-method sale-columns-style">Pagamento</div>
        <div className="sale-hour sale-columns-style">Horário</div>
        <div className="book-price sale-columns-style">Preço</div>
      </div>
      <SaleRow 
        title={"Python for begginers"}
        isbn={"1234-56789-9874-12354"}
        payment={"Dinheiro"}
        hour={"14:55"}
        price={125.5}
      />
      <SaleRow 
        title={"Python for begginers"}
        isbn={"1234-56789-9874-12354"}
        payment={"Dinheiro"}
        hour={"14:55"}
        price={125.5}
      />
      <SaleRow 
        title={"Python for begginers"}
        isbn={"1234-56789-9874-12354"}
        payment={"Dinheiro"}
        hour={"14:55"}
        price={125.5}
      />
      <SaleRow 
        title={"Python for begginers"}
        isbn={"1234-56789-9874-12354"}
        payment={"Dinheiro"}
        hour={"14:55"}
        price={125.5}
      />
      <SaleRow 
        title={"Python for begginers"}
        isbn={"1234-56789-9874-12354"}
        payment={"Dinheiro"}
        hour={"14:55"}
        price={125.5}
      />
    </div>
    
);
}

export default Sale;