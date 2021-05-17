import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getGiphys } from '../../redux';

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGiphys());
    }, [dispatch]);

    return <h2>Home</h2>;
}

export default Home;
