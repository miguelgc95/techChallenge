import { Router } from 'express';

import {
    signUp,
    signOut,
    deleteUser,
    getUserInfo,
} from '../../controllers/user-controller.js';

const userRouter = Router();

userRouter.post('/sign-up', signUp);
userRouter.post('/sign-out', signOut);
userRouter.delete('/user/delete', deleteUser);
userRouter.get('/user', getUserInfo);

export default userRouter;
