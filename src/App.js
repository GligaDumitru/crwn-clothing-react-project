import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import './styles/index.scss';
import Header from './components/header/header.component';
import Session from './pages/session/session.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
const NotFoundPage = () => (
  <div>
    <h1>Page Not Found - 404</h1>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribleFromAuth = null;

  componentDidMount() {
    this.unsubscribleFromAuth = auth.onAuthStateChanged(async userAuth => {


      if (!!userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({
          currentUser: userAuth
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribleFromAuth();
  }


  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/account' component={Session} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
