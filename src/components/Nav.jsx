import React from 'react'
import CartButton from './CartButton'

import logo from '../assets/logo.svg'
import './nav.css'
import NavList from './NavList'

import avatar from '../assets/image-avatar.png'

export default function Nav() {
    return (
        <ul className='barra-nav'>
            <div className='block1'>
                <img src={logo} alt="logo" />
                <NavList />
            </div>
            <div className='boton-avatar'>
                <CartButton />
                <img src={avatar} alt="avatar" />
            </div>
        </ul>
    )
}
