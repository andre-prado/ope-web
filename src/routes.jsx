import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Stock from './pages/Stock';
import Cart from './pages/Cart';
import SalesHistory from './pages/SalesHistory';
import SalesToday from './pages/SalesToday';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Stock}/>
      <Route path="/vendas-dia" component={SalesToday}/>
      <Route path="/vendas-historico" component={SalesHistory}/>
      <Route path="/carrinho" component={Cart}/>
    </BrowserRouter>
  );
}

export default Routes;