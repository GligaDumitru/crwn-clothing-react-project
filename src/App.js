import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import './styles/index.scss';
import Header from './components/header/header.component';

const NotFoundPage = () => (
  <div>
    <h1>Page Not Found - 404</h1>
  </div>
)


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
