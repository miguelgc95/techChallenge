import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import MemesGrid from '../../components/MemesGrid';

function Home() {
    return (
        <div>
            <MemesGrid />
        </div>
    );
}

export default Home;
