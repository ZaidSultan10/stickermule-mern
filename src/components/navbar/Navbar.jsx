import React from 'react'
import './_navbar.scss'
import Logo from '../../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import StickerLogo from '../../assets/sticker_logo.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const [toggleProductArrow,setToggleProductArrow] = React.useState(false)
  const [toggleToolsArrow,setToggleToolsArrow] = React.useState(false)
  let navigate = useNavigate();

  const productMenu = [{
    label:'Stickers',
    value:'Stickers'
  },{
    label:'Labels',
    value:'Labels'
  },{
    label:'Magnets',
    value:'Magnets'
  },{
    label:'Buttons',
    value:'Buttons'
  },{
    label:'Packaging',
    value:'Packaging'
  },{
    label:'T-Shirts',
    value:'T-Shirts'
  },{
    label:'More',
    value:'More'
  }]

  return (
    <div className='navbar'>
        <div className='navbar__container'>
            <div className='navbar__left'>
                <img onClick={() => navigate(`/`)} src={Logo} className='navbar__left__logo' />
                <p onClick={() => setToggleProductArrow(!toggleProductArrow)}>Products <span>{toggleProductArrow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon /> }</span></p>
                <p onClick={() => setToggleToolsArrow(!toggleToolsArrow)}>Tools <span>{toggleToolsArrow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon /> }</span></p>
                <a href='#'>Samples</a>
                <a href='#'>Deals</a>
                <MenuIcon className='navbar__left__hamburger' />
            </div>
            <div className='navbar__center'>
              <img className='navbar__center__image' src={StickerLogo} />
            </div>
            <div className='navbar__right'>
                <ShoppingCartIcon className='navbar__right__cart' />
                <a href='#' onClick={() => navigate(`/login`)}>Log in</a>
                <a href='#'>Sign up</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar