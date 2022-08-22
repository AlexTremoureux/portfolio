import React from 'react';
import Logo from './Logo/Logo';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className='Header'>
            <Logo />
            <Navigation />
            
        </div>
    );
};

export default Header;