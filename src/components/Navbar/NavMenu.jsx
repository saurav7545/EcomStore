
import React from 'react';
import MenuItem from './MenuItem';

const NavMenu = ({ nav }) => {
    return (
        <div className="flex items-center gap-6">

            {nav.map((items) => (
                <MenuItem
                    key={items.id}
                    title={items.title}
                    path={items.path}
                />
            ))}

        </div>
    );
};

export default NavMenu;
