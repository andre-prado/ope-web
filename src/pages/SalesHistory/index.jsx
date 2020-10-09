import React from 'react';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';

import DayRow from './DayRow';

import './styles.css';

function SalesHistory() {
  return (
    <>
      <Header />
      <PageTitle title="Agosto" year="2020" subtitle="Vendas"/>
      
      <div className="sales-history-container">
        <div className="sales-history">
          <div className="day sales-history-color">
            Dia
          </div>
          <div className="amount-items sales-history-color">
            Vendas
          </div>
          <div className="value sales-history-color">
            Receita 
          </div>
        </div>
      </div>

      <DayRow day={1} amount={22} value={125.5}/>
      <DayRow day={2} amount={20} value={100.3}/>
      <DayRow day={3} amount={19} value={127.5}/>
      <DayRow day={4} amount={25} value={200.1}/>
      <DayRow day={5} amount={21} value={180.6}/>
      <DayRow day={6} amount={24} value={300.1}/>
      <DayRow day={7} amount={17} value={78.5}/>
      <DayRow day={8} amount={8} value={125.8}/>
    </>
  );
}

export default SalesHistory;