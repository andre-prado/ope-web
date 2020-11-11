import React from 'react';

import { formatPrice } from '../../util/format';

import './styles.css';

const Modal = ({ vendas, vendaId, id = 'modal', onClose = () => {} }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  let venda = vendas.find((venda) => venda.id === vendaId);
  venda = {
    ...venda,
    priceFormatted: formatPrice(venda.total),
  };

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <button className="close" onClick={onClose} />
        <div className="content">
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
            <span>TOTAL: {venda.priceFormatted}</span>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Modal;
