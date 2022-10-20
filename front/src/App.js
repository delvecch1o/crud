import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios';

import Home from './components/layouts/Home';
import ConversorMoeda from './components/layouts/ConversorMoeda';
import ConversorNumerosRomanos from './components/layouts/ConversorNumerosRomanos';
import ConversorTemperatura from './components/layouts/ConversorTemperatura';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Redirect } from 'react-router-dom';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/temperatura" component={ConversorTemperatura} />
          <Route exact path="/moeda" component={ConversorMoeda} />
          <Route exact path="/romano" component={ConversorNumerosRomanos} />
          
          <Route path="/login">
            {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
          </Route>

          <Route path="/register">
            {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Register />}
          </Route>
         

        </Switch>
      </Router>

    </div>
  );
}

export default App;

/*

 <Route exact path="/login" component={Login} />
  <Route exact path="/register" component={Register} />

*/
