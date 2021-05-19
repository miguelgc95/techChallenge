import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useLazyLoading from '../../customHooks/useLazyLoading';
import { getGiphys } from '../../redux/memes/memes-actions';

import './styles.scss';

export default function MemesGrid() {
    const dispatch = useDispatch();
    // const [query, setQuery] = useState('');
    // useLazyLoading(query);

    const { giphyMemes, offset } = useSelector(state => state.memes);

    useEffect(() => {
        dispatch(getGiphys(offset));
    }, [dispatch]);

    const scrollCheck = event => {
        const bottom =
            event.target.scrollHeight - event.target.scrollTop <
            event.target.clientHeight;
        if (bottom) {
            console.log('At The Bottom');
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
