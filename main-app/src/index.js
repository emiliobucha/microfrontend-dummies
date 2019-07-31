import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as singleSpa from 'single-spa';
import { registerLoginAppReact } from "./apps/login-app-react";
import {storeInstance} from "./store/reducers/store"
import {GlobalEventDistributor} from "./store/globalEventDistributor";
import {Provider, connect} from 'react-redux';
import { userConstants } from './store/constants';
import { registerAngularApp } from "./apps/register-angular-app";
import { registerNavbarAppVue } from "./apps/navbar-app-vue";

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
        document.getElementById('root')
        );

const globalEventDistributor = new GlobalEventDistributor();

globalEventDistributor.registerStore(storeInstance,userConstants.STORE_AUTH);

registerAngularApp();
registerLoginAppReact(globalEventDistributor);
registerNavbarAppVue(globalEventDistributor);
singleSpa.start();


serviceWorker.unregister();
