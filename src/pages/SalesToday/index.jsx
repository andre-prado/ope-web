import React from 'react';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import EndDay from '../../components/EndDay';
import Sale from '../../components/Sale';


function SalesToday() {
  return (
    <>
      <Header />
      <PageTitle title="Hoje" subtitle="Vendas"/>
      <EndDay quantidade={22} valor={320.5}/>
      <Sale />
    </>
  );
}

export default SalesToday;