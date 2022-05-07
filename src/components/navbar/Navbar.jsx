import React from 'react'
import './_navbar.scss'
import Logo from '../../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__container'>
            <div className='navbar__left'>
                <img src={Logo} className='navbar__left__logo' />
                <a href='#'>Samples</a>
                <a href='#'>Deals</a>
            </div>
            <div className='navbar__right'>
                <ShoppingCartIcon className='navbar__right__cart' />
                <a href='#'>Login</a>
                <a href='#'>Sign up</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar