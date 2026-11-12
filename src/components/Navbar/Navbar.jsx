
import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';

const Navbar = () => {

    const nav = [
        { id: 1, path: '/', title: 'Home' },
        { id: 2, path: '/product', title: 'Product' },
        { id: 3, path: '/contact', title: 'Contact' },
    ];

    return (
        <nav className="flex items-center justify-between bg-gray-900 px-8 py-5 text-white">

            <Logo />

            <NavMenu nav={nav} />

        </nav>
    );
};

export default Navbar;
