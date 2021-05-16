import React from 'react';
import Logo from '../../assets/img/Logo.png';
import {LogoImage, MenuWrapper } from './style.js';
import Button from '../Button';
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <MenuWrapper className='Menu'>
            <Link to='/'>
                <LogoImage src={Logo} alt='Logo' className='Logo' />
            </Link>

            <Button as={Link} className="ButtonLink" to='/register/Video'>
                Novo Vídeo!!
            </Button>
        </MenuWrapper>
    );
}

export default Menu;