import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='Banner'>
            <Link to={'/projets'}>
                <h3>Mes Projets</h3>
            </Link>
            
        </div>
    );
};

export default Banner;