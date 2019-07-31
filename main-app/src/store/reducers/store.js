import { userConstants } from '../constants';
import { createStore } from 'redux';

// User obtenido del localstorage para ver que esté logeado
let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { loggedIn: true, user } : {};

// Reducer de Authtentication
export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGOUT:
            return { loggedIn: false, user: null};
        default:
            return state
    }
}

export const storeInstance = createStore(authentication);