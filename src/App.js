import React from 'react';

import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import SignInUpPage from './pages/sign-in-up/sign-in-up'
import Header from './components/header/header'

import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInUpPage} />
      </Switch>
    </div>
  );
}

export default App;
