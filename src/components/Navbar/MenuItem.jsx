
import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ title, path }) => {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `transition duration-300 hover:text-green-400 ${isActive
                    ? 'font-bold text-green-400'
                    : 'text-white'
                }`
            }
        >
            {title}
        </NavLink>
    );
};

export default MenuItem;
