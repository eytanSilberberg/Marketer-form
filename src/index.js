import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/root.reducer';
import App, { RootCmp } from './root.cmp';
import './assets/style/style.scss';
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <RootCmp />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals