import React, { useEffect, useState } from 'react';

import PageTitle from '../../components/PageTitle';
import api from '../../services/api';

import './styles.css';

import Header from '../../components/Header';
import Modal from '../../components/Modal';

import { formatPrice } from '../../util/format';

function SalesHistory() {
  const [vendas, setVendas] = useState([]);
  const [vendaId, setVendasId] = useState();
  const [visible, setVisible] = useState(false);

  const handleVisible = (id) => {
    setVendasId(id);
    setVisible(!visible);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    api.get('/venda').then((response) => {
      const data = response.data.map((venda) => ({
        ...venda,
        dataFormatted: venda.data.split(' '),
      }));

      setVendas(data);
    });
  }, []);

  let venda = vendas.find((venda) => {
    const vendaFind = venda.id === vendaId;
    return vendaFind;
  });

  return (
    <>
      <Header />
      <PageTitle title="Vendas" subtitle="Totais" />

      <div className="container">
        <table className="vendas-table">
          <thead>
            <tr>
              <th>DATA</th>
              <th>HORA</th>
              <th>FORMA DE PAGAMENTO</th>
            </tr>
          </thead>
          <tbody>
            {vendas.map((venda) => (
              <tr key={venda.id}>
                <td>
                  <span>{venda.dataFormatted[0]}</span>
                </td>
                <td>
                  <span>{venda.dataFormatted[1]}</span>
                </td>
                <td>
                  <span>{venda.tipo_pagamento}</span>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleVisible(venda.id);
                    }}
                  >
                    Ver detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {visible ? (
          <Modal onClose={() => setVisible(false)}>
            <table className="venda-table">
              <thead>
                <tr>
                  <th>LIVRO</th>
                  <th>QUANTIDADE</th>
                  <th>PRECO UNIDADE</th>
                </tr>
              </thead>
              <tbody>
                {venda
                  ? venda.produtos.map((produto, index) => (
                      <tr key={index}>
                        <td>
                          <span>{produto.livro}</span>
                        </td>
                        <td>
                          <span>{produto.quantidade}</span>
                        </td>
                        <td>
                          <span>{produto.preco_item}</span>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
            <footer>
              <span>TOTAL: {formatPrice(venda.total)}</span>
              <sub>Desconto: {formatPrice(venda.desconto)}</sub>
            </footer>{' '}
          </Modal>
        ) : null}
      </div>
    </>
  );
}

export default SalesHistory;
