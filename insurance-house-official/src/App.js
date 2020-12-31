import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Insurance from './components/Insurance/Insurance'
import './App.scss';

function App () {
  return (
    <BrowserRouter>
    <Switch>
    <Route path='/insurance-house-official' component={Home} exact/>
    <Route path='/login' component={Login}/>
    <Route path='/:name' render={(props) => <Insurance {...props} key={props.location.key}/>}/>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
