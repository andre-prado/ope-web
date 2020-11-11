import React, { useEffect, useState } from 'react';

import PageTitle from '../../components/PageTitle';
import api from '../../services/api';

import './styles.css';

import Modal from '../../components/Modal/Modal';

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

      console.log(data);
      setVendas(data);
    });
  }, []);

  return (
    <>
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
          <Modal
            vendas={vendas}
            vendaId={vendaId}
            onClose={() => setVisible(false)}
          />
        ) : null}
      </div>
    </>
  );
}

export default SalesHistory;
