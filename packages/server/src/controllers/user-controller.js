import Repo from '../repositories/index.js';

const UserRepo = new Repo('User');

async function signUp(req, res, next) {
    const { uid, email } = req.user;
    const { body } = req;

    try {
        const response = await UserRepo.findOne({ _id: uid });

        if (response.error) return res.status(400).send(response);
        if (response.data) return res.status(202).send(response);

        const user = await UserRepo.create({
            _id: uid,
            email: email,
            ...body,
        });

        if (user.data) return res.status(202).send(user);
    } catch (error) {
        next(error);
    }
}

async function signOut(req, res) {
    req.signOut();

    res.status(200).send({
        data: 'OK',
        error: null,
    });
}

async function getUserInfo(req, res, next) {
    const { uid } = req.user;

    try {
        const response = await UserRepo.findOne({
            _id: uid,
        });

        if (response.error) return res.status(400).send(response);
        if (!response.data) return res.status(404).send(response);

        res.status(200).send(response);
    } catch (error) {
        next(error);
    }
}

async function deleteUser(req, res, next) {
    try {
        const { uid } = req.user;

        const response = await UserRepo.findByIdAndDelete({ _id: uid });

        if (response.error) return res.status(400).send(response);
        if (!response.data) return res.status(404).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (error) {
        next(error);
    }
}

export { signUp, signOut, deleteUser, getUserInfo };
