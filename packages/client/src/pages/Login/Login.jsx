import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';
import { NavLink, Redirect } from 'react-router-dom';
import { HOME, SIGN_UP } from '../../routes';

import { logInWithEmailRequest } from '../../redux/auth/auth-actions';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');

    const { isAuthenticated } = useSelector(store => store.auth);

    const tryToSubmit = e => {
        // e.preventDefault(); // I think there is no need to preventDefault when using useForm
        dispatch(logInWithEmailRequest(email, password));
    };

    if (isAuthenticated) {
        return <Redirect to={HOME} />;
    }

    return (
        <>
            <form
                className="form-container"
                onSubmit={handleSubmit(tryToSubmit)}
            >
                <label htmlFor="email">email</label>
                <input
                    {...register('email', { required: true })}
                    type="text"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="example@mail.com"
                    hasFeedback
                />
                {errors.email && <p>Please, enter a valid email</p>}

                <label htmlFor="password">password</label>
                <input
                    {...register('password', { required: true })}
                    type="password"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                    placeholder="*******"
                />
                {errors.password && <p>Please, enter a valid password</p>}

                <button type="submit">Login</button>
            </form>
            <p>Don't you have an account yet??</p>
            <NavLink to={SIGN_UP}>Create account</NavLink>
            <p>
                Create an acount to share your mmes and gifs with the comunity
            </p>
        </>
    );
}

export default Login;
