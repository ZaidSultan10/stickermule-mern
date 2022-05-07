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
            </div>
            <div className='navbar__right'>
                <ShoppingCartIcon className='navbar__right__cart' />
            </div>
        </div>
    </div>
  )
}

export default Navbar