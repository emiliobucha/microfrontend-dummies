import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as singleSpa from 'single-spa';
import { registerReactApp } from "./apps/register-react-app";



ReactDOM.render(<App />, document.getElementById('root'));


registerReactApp();
singleSpa.start();


serviceWorker.unregister();
