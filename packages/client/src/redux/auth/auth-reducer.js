import * as AuthTypes from './auth-types';

export const AuthInitialState = {
    isSigningUp: false,
    signUpError: null,
    isSigningOut: false,
    signOutError: null,
    isAuthenticated: false,
    isLogingIn: false,
    currentUser: {
        email: null,
    },
};

const AuthReducer = (state = AuthInitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case AuthTypes.SIGN_UP_REQUEST: {
            return {
                ...state,
                signUpError: null,
                isSigningUp: true,
            };
        }
        case AuthTypes.SIGN_UP_ERROR: {
            return {
                ...state,
                isSigningUp: false,
                signUpError: payload,
            };
        }
        case AuthTypes.SIGN_UP_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                isSigningUp: false,
                signUpError: null,
                currentUser: {
                    email: payload.email,
                },
            };
        }
        case AuthTypes.LOGIN_REQUEST: {
            return {
                ...state,
                isLogingIn: true,
                loginError: null,
            };
        }
        case AuthTypes.LOGIN_ERROR: {
            return {
                ...state,
                isLogingIn: false,
                loginError: payload,
            };
        }
        case AuthTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                isLogingIn: false,
                loginError: null,
                currentUser: {
                    email: payload.email,
                },
            };
        }
        case AuthTypes.LOGOUT_REQUEST: {
            return {
                ...state,
                isSigningOut: true,
                signOutError: null,
            };
        }
        case AuthTypes.LOGOUT_ERROR: {
            return {
                ...state,
                isSigningOut: false,
                signOutError: payload,
            };
        }
        case AuthTypes.LOGOUT_SUCCESS: {
            return {
                ...state,
                isSigningOut: false,
                signOutError: null,
                isAuthenticated: false,
                currentUser: {
                    email: null,
                },
            };
        }
        case AuthTypes.RESET_AUTH_STATE: {
            return {
                ...state,
                isSigningUp: false,
                signUpError: null,
                isLogingIn: false,
                loginError: null,
                isSigningOut: false,
                signOutError: null,
                isSendingPasswordReset: false,
                passwordResetError: null,
                passwordResetSent: false,
            };
        }
        default: {
            return state;
        }
    }
};

export default AuthReducer;
