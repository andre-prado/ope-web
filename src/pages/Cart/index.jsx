import React from 'react';


import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import StockSearch from '../../components/StockSearch';
import BookStock from '../../components/BookStock';

function Cart() {
  return (
    <>
      <Header />
      <PageTitle title="Produtos no" subtitle="Carrinho"/>
      <StockSearch  linkHome="/" quantidadeItens={2} valorTotal={125.5} name="Vender"
        addItem={<button>+ itens</button>} removeItem={<button>Remover</button>}
      />
      <BookStock 
        checkBox={
          <div className="check-box left-book">
            <input type="checkbox"></input>
          </div>
        }
      />
    </>
  );
}

export default Cart;