import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';

import './Menu.css';

function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img src={Logo} alt='Logo' className='Logo' />
            </a>

            <Button as='a' className="ButtonLink" href="/">
                Novo Vídeo!!
            </Button>
        </nav>
    );
}

export default Menu;