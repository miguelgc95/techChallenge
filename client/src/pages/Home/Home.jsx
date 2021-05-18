import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getGiphys } from '../../redux/memes/memes-actions';

import MemesGrid from '../../components/MemesGrid';

function Home() {
    return (
        <div>
            <MemesGrid />
        </div>
    );
}

export default Home;
