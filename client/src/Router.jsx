import React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as ROUTES from './routes';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectedRoute from './routes/protectedRoutes';
import Upload from './pages/Upload';

function MainRouter() {
    return (
        <Switch>
            <Route path={ROUTES.SIGN_UP} component={SignUp} exact />
            <Route path={ROUTES.LOGIN} component={Login} exact />
            <Route path={ROUTES.HOME} component={Home} exact />
            <ProtectedRoute
                path={ROUTES.UPLOAD_MEME}
                component={Upload}
                exact
            />
        </Switch>
    );
}

export default MainRouter;
