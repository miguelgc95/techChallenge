import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getGiphys } from '../../redux/memes/memes-actions';

import Navbar from '../../components/Navbar';
import MemesGrid from '../../components/MemesGrid';

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGiphys());
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <MemesGrid />
        </>
    );
}

export default Home;
