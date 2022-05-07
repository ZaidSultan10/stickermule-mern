import React from 'react'
import './_navbar.scss'
import Logo from '../../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {

  const [toggleProductArrow,setToggleProductArrow] = React.useState(false)
  const [toggleToolsArrow,setToggleToolsArrow] = React.useState(false)

  return (
    <div className='navbar'>
        <div className='navbar__container'>
            <div className='navbar__left'>
                <img src={Logo} className='navbar__left__logo' />
                <p onClick={() => setToggleProductArrow(!toggleProductArrow)}>Products <span>{toggleProductArrow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon /> }</span></p>
                <p onClick={() => setToggleToolsArrow(!toggleToolsArrow)}>Tools <span>{toggleToolsArrow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon /> }</span></p>
                <a href='#'>Samples</a>
                <a href='#'>Deals</a>
            </div>
            <div className='navbar__right'>
                <ShoppingCartIcon className='navbar__right__cart' />
                <a href='#'>Log in</a>
                <a href='#'>Sign up</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar