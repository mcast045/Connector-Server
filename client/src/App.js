import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Landing from './Components/layout/landing';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './reducers/actions/auth';
import setAuthToken from './utils/setAuthToken';
import Routes from './Components/routing/routes';



if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </Provider>
  )
}
export default App;