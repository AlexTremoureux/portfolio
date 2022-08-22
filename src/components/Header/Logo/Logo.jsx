import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/logo.png"

const Logo = () => {
    return (
        <h1 className='Logo'>
            <Link to={'/'}>
            <img src={logo} alt="logo" className='imgLogo' />
            </Link>
        </h1>
    );
};

export default Logo;