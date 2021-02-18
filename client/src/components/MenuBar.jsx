import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const MenuBar = () => {
    const [activeItem, setActiveItem] = useState('home')
  
    const handleItemClick = (e, { name }) => setActiveItem(name)

    return (
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
    )
}


export default MenuBar