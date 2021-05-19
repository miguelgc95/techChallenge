import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGiphys } from '../../redux/memes/memes-actions';

import './styles.scss';

export default function MemesGrid() {
    const dispatch = useDispatch();

    const { giphyMemes, offset } = useSelector(state => state.memes);

    useEffect(() => {
        dispatch(getGiphys(offset)); // eslint-disable-next-line
    }, [dispatch]);

    const scrollCheck = event => {
        const bottom =
            event.target.scrollHeight - event.target.scrollTop <
            event.target.clientHeight;
        if (bottom) {
            dispatch(getGiphys(offset));
        }
    };

    return (
        <div className="wrapper" onScroll={event => scrollCheck(event)}>
            {giphyMemes &&
                giphyMemes.map(meme => {
                    return (
                        <img
                            key={meme.id}
                            src={
                                meme &&
                                meme.images &&
                                meme.images.original &&
                                meme.images.original.url &&
                                meme.images.original.url
                            }
                            alt="meme"
                        />
                    );
                })}
        </div>
    );
}
