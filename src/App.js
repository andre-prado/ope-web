import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import Header from '../src/components/Header';
import Routes from './routes';

import store from './store';

import 'react-toastify/dist/ReactToastify.min.css';
import './assets/styles/global.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
