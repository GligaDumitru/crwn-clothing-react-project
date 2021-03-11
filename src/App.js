import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import './styles/index.scss';
import Header from './components/header/header.component';
import Session from './pages/session/session.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

const NotFoundPage = () => (
  <div>
    <h1>Page Not Found - 404</h1>
  </div>
);

class App extends Component {
  unsubscribleFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribleFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!!userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribleFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route
            exact
            path='/account'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <Session />
            }
          />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
