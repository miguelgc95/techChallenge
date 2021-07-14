import * as AuthTypes from './auth-types';
import api from '../../api';
import * as auth from '../../services/auth';

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

export function signUpWithEmailRequest(userInfo) {
    return async function signUpThunk(dispatch) {
        dispatch(signUpRequest());
        try {
            const { email, password, ...body } = userInfo;

            const { user } = await auth.signUpWithEmailAndPassword(
                email,
                password
            );

            const authorization = {
                Authorization: `Bearer ${user.za}`,
            };
            const { data } = await api.signUp(authorization, body);
            dispatch(signUpSuccess(data.data));
        } catch (error) {
            dispatch(signUpError(error.message));
        }
    };
}

export function logInWithEmailRequest(email, password) {
    return async function loginThunk(dispatch) {
        dispatch(signUpRequest());
        try {
            const response = await auth.logInWithEmailAndPassword(
                email,
                password
            );

            const authorization = {
                Authorization: `Bearer ${response.user.za}`,
            };
            const { data } = await api.signUp(authorization);
            dispatch(signUpSuccess(data.data));
        } catch (error) {
            console.log(error.message);
            dispatch(signUpError(error.message));
        }
    };
}
