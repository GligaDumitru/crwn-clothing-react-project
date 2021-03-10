import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

const NotFoundPage = () => (
  <div>
    <h1>Page Not Found - 404</h1>
  </div>
)
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
