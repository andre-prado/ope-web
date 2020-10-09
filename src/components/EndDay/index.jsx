import React from 'react';

import './styles.css';

function EndDay(props) {
  return(
    <div className="end-day-container">
      <div className="end-day">
        <div className="resume-sales">
          <p>Itens: {props.quantidade}</p>
          <p>Valor Total: R${props.valor}</p>
        </div>
        <div className="end-day-button">
          <button>
            Finalizar Dia
          </button>
        </div>
      </div>
    </div>
  )
}

export default EndDay;
