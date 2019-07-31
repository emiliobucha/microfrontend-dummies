import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as singleSpa from 'single-spa';
import { registerReactApp } from "./apps/register-react-app";
import { registerAngularApp } from "./apps/register-angular-app";


ReactDOM.render(<App />, document.getElementById('root'));


registerAngularApp();
registerReactApp();
singleSpa.start();


serviceWorker.unregister();
