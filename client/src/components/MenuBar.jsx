import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

import { AuthContext } from '../context/auth'

const MenuBar = () => {
    const { user, logout } = useContext(AuthContext)
    const [activeItem, setActiveItem] = useState('home')
  
    const handleItemClick = (e, { name }) => setActiveItem(name)

    const menuBar = !user ? (
        <Menu pointing secondary size="massive" color="teal">
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
                as={NavLink}
                to="/"
            />
            
            <Menu.Menu position='right'>
                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={handleItemClick}
                    as={NavLink}
                    to="/login"
                />
                <Menu.Item
                    name='register'
                    active={activeItem === 'register'}
                    onClick={handleItemClick}
                    as={NavLink}
                    to="/register"
                />
            </Menu.Menu>
        </Menu>
    ) : (
        <Menu pointing secondary size="massive" color="teal">
            <Menu.Item
                name={user.username}
                as={NavLink}
                to="/"
            />
            
            <Menu.Menu position='right'>
                <Menu.Item
                    name='logout'
                    onClick={logout}
                />
            </Menu.Menu>
        </Menu>
    )

    return menuBar;
}


export default MenuBar