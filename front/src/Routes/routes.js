import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Login from '../Pages/Login/index'
import Cadastro from '../Pages/Cadastro/index'
import  ConversorTemperatura from '../Pages/ConversorTemperatura/index'
import ConversorMoeda from '../Pages/ConversorMoeda/index'
import Home from '../Pages/Home/index'
import conversorNumerosRomanos from '../Pages/ConversorNumerosRomanos/index'




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
        <Route exact path="/temperatura" component= {ConversorTemperatura} />
        <Route exact path="/moeda" component= {ConversorMoeda} />
        <Route exact path="/romanos" component= {conversorNumerosRomanos} />
        

        <Route path="/login">
            {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
          </Route>

           <Route path="/register">
            {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Cadastro />}
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
