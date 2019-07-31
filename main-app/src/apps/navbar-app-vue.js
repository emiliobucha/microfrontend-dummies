import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "./utils";
import {userConstants} from '../store/constants';

const loadVueApp = async () => {
    await runScript('http://localhost:3004/build.js');
    return window.navbarvueApp;
};


export const registerNavbarAppVue = (globalEventDistributor) => {
    const customProps = {
        globalEventDistributor: globalEventDistributor,
        constants: userConstants
    };
    singleSpa.registerApplication('navbar-app-vue', loadVueApp, matchingPathname(['/navbar', '/home']),customProps);
};