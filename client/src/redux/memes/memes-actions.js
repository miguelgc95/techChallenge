import * as MemesTypes from './memes-types';
import { getMemes } from '../../services/giphy';

export const memesRequest = () => ({
    type: MemesTypes.MEMES_REQUEST,
});

export const memesSucces = () => ({
    type: MemesTypes.MEMES_SUCCES,
});

export const memesRequestError = error => ({
    type: MemesTypes.MEMES_ERROR,
    error,
});

export function getGiphys() {
    return async function giphyMemesThunk(dispatch) {
        dispatch(memesRequest());
        try {
            const momardos = await getMemes();
            console.log(momardos.data.data);
            dispatch(memesSucces());
        } catch (error) {
            dispatch(memesRequestError(error.message));
        }
    };
}
