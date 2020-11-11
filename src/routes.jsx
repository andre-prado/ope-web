import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Stock from './pages/Home';
import Cart from './pages/Cart';
import SalesHistory from './pages/SalesHistory';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Stock} />
      <Route path="/vendas-historico" component={SalesHistory} />
      <Route path="/carrinho" component={Cart} />
    </Switch>
  );
}

export default Routes;
