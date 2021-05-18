import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useLazyLoading from '../../customHooks/useLazyLoading';
import { getGiphys } from '../../redux/memes/memes-actions';

import './styles.scss';

export default function MemesGrid() {
    const dispatch = useDispatch();
    // const [query, setQuery] = useState('');
    // useLazyLoading(query);

    const giphyMemes = useSelector(state => state.memes.giphyMemes);

    useEffect(() => {
        dispatch(getGiphys());
    }, [dispatch]);

    const scrollCheck = event => {
        console.log(event.target.scrollHeight);
        console.log(event.target.scrollTop);
        console.log(event.target.clientHeight);
        const bottom =
            event.target.scrollHeight - event.target.scrollTop <
            event.target.clientHeight;
        if (bottom) {
            console.log('At The Bottom'); //Add in what you want here
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
