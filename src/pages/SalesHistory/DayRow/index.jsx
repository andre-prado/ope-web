import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


function DayRow(props) {
  return(
    <div className="day-row-container">
      <div className="day-row">
        <div className="day-row-day day-row-standart">
          {props.day}
        </div>
        <div className="day-row-amount day-row-standart">
          {props.amount}
        </div>
        <div className="day-row-value day-row-standart">
          R${props.value}
        </div>
          <Link to="/vendas-dia">
            <button type="button" className="day-row-end day-row-standart">Ver dia completo</button>
          </Link>
        </div>
    </div>
  );
}

export default DayRow;