import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "./utils";
import {userConstants} from '../store/constants';

const loadReactApp = async () => {

    await runScript('http://localhost:3002/static/js/main.js');
    return window.loginApp;
};


export const registerLoginAppReact = (globalEventDistributor) => {
    const customProps = {
        globalEventDistributor: globalEventDistributor,
        constants: userConstants
    };
    singleSpa.registerApplication('login-app-react', loadReactApp, matchingPathname(['/login', '/']),customProps);
};