import * as AuthTypes from './auth-types';
import api from '../../api';

export const signUpRequest = () => ({
    type: AuthTypes.SIGN_UP_REQUEST,
});

export const signUpSuccess = user => ({
    type: AuthTypes.SIGN_UP_SUCCESS,
    payload: user,
});

export const signUpError = message => ({
    type: AuthTypes.SIGN_UP_ERROR,
    payload: message,
});

export const loginRequest = () => ({
    type: AuthTypes.LOGIN_REQUEST,
});

export const loginSuccess = () => ({
    type: AuthTypes.LOGIN_SUCCESS,
});

export const loginError = message => ({
    type: AuthTypes.LOGIN_ERROR,
    payload: message,
});

export const logOutRequest = () => ({
    type: AuthTypes.LOGOUT_REQUEST,
});

export const logOutSuccess = () => ({
    type: AuthTypes.LOGOUT_SUCCESS,
});

export const logOutError = message => ({
    type: AuthTypes.LOGOUT_ERROR,
    payload: message,
});
