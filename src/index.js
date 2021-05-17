import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RegisterVideo from './pages/register/Video';
import RegisterCategory from './pages/register/Category';

const Page404 = () => (<div>Error 404!!</div>)

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/register/Video' component = {RegisterVideo} />
      <Route path='/register/Category' component = {RegisterCategory} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
