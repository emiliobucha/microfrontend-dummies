import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/bootstrap/bootstrap.min.css';

import { Login } from './Login'

function App(props) {
  return (
      <Login {...props} />
  )
}

export default App;
