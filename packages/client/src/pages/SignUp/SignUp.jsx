import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { LOGIN } from '../../routes';

import { signUpWithEmailRequest } from '../../redux/auth/auth-actions';

function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');

    const tryToSubmit = e => {
        dispatch(
            signUpWithEmailRequest({
                username,
                email,
                password,
            })
        );
    };

    return (
        <>
            <form
                className="form-container"
                onSubmit={handleSubmit(tryToSubmit)}
            >
                <label htmlFor="username">username</label>
                <input
                    {...register('username', { required: true })}
                    type="text"
                    id="username"
                    onChange={e => setUsername(e.target.value)}
                    placeholder="example@mail.com"
                    hasFeedback
                />
                {errors.username && <p>Please, enter a valid username</p>}

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

                <label htmlFor="password2">Repeat password</label>
                <input
                    {...register('password2', {
                        validate: value =>
                            value === password || 'The passwords do not match',
                    })}
                    type="password"
                    id="password2"
                    placeholder="*******"
                />
                {errors.password2 && <p>The passwords do not match</p>}
                <button type="submit">SignUp</button>
            </form>
            <p>Alredy have an account?</p>
            <NavLink to={LOGIN}>Login</NavLink>
        </>
    );
}

export default SignUp;
