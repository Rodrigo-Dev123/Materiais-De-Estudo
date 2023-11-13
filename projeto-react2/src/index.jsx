import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import { App } from './templates/App/index';
import { Abc } from './templates/Abc';
import { Menu } from './components/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/abc" component={Abc} exact />
        <Route path="/" component={App} exact />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
