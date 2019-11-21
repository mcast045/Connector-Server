import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Landing from './Components/layout/landing';
import Register from './Components/auth/register';
import Login from './Components/auth/login';
import { Provider } from 'react-redux';
import store from './store';


const App = () =>
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
          </Switch>
        </section>
      </Fragment>
    </BrowserRouter>
  </Provider>

export default App;