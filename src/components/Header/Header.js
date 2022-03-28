import React from 'react';
import CustomLink from './CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/AboutUs">About</CustomLink>
            <CustomLink to="/Blog">Blog</CustomLink>
            <CustomLink to="/Fiends">Friends</CustomLink>
        </div>
    );
};

export default Header;