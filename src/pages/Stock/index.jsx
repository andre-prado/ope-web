import React from 'react';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import BasicPagination from '../../components/BasicPagination';
import SelectedItems from '../../components/SelectedItems';
import StockSearch from '../../components/StockSearch';


import './styles.css';
import BookStock from '../../components/BookStock';

function Stock() {
  return (
    <>
      <Header />
      <PageTitle title="Estoque" subtitle="Produtos">
        <div className="sales-found">
          Foram encontrados <strong>{2000}</strong> itens
        </div>
      </PageTitle>
      <StockSearch link="/carrinho" name="Carrinho" quantidadeItens={2} valorTotal={120.5} />
      <SelectedItems />
      <BasicPagination />
      <BookStock
        checkBox={
          <div className="check-box">
            <input type="checkbox"></input>
          </div>
        }

        descount={
          <>
          <div className="cart-discount">
              <div className="add-cart">Adicionar ao carrinho</div>
              <div className="input-box">
                  Desconto?
                <input type="text" placeholder="R$ 0.00" className="descount"/>
              </div>
          </div>
          </>
        }
      />

    </>
  );
}

export default Stock;