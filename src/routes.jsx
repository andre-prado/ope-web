import React from 'react';
import { Switch } from 'react-router-dom';

import Stock from './pages/Home';
import Cart from './pages/Cart';
import SalesHistory from './pages/SalesHistory';
import EditLivro from './pages/EditLivro';
import Login from './pages/Login';

import Route from './routes/Route';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Stock} isPrivate />
      <Route path="/vendas-historico" component={SalesHistory} isPrivate />
      <Route path="/carrinho" component={Cart} isPrivate />
      <Route path="/edit-livro" component={EditLivro} isPrivate />
    </Switch>
  );
}

export default Routes;
