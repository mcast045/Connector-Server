import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Landing from './Components/layout/landing';
import Register from './Components/auth/register';
import Login from './Components/auth/login';
import Alert from './Components/layout/Alert';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './reducers/actions/auth';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './Components/dashboard/Dashboard';
import PrivateRoute from './Components/routing/PrivateRoute';
import CreateProfile from './Components/profile-form/CreateProfile';

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
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <PrivateRoute path='/dashboard' component={Dashboard} />
              <PrivateRoute path='/create-profile' component={CreateProfile} />
            </Switch>
          </section>
        </Fragment>
      </BrowserRouter>
    </Provider>
  )
}
export default App;