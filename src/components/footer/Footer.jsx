import React from 'react'
import './_footer.scss'
import {footerOption} from './footerData.js'
import FooterOptions from './footerOptions/FooterOptions.jsx'
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__container__top'>
          <div className='footer__container__topLeft'>
            {
              footerOption.map((item) => (
                <FooterOptions option={item.option} />
              ))
            }
          </div>
          <div className='footer__container__topRight'>
              <p>{`English (EN) $USD`}</p>
          </div>
        </div>
        <div className='footer__container__bottom'>
          <div className='footer__container__bottomLeft'>
              <YouTubeIcon className='footer__container__bottomLeft__icon' />
              <YouTubeIcon className='footer__container__bottomLeft__icon space'/>
              <YouTubeIcon className='footer__container__bottomLeft__icon space'/>
          </div>
          <div className='footer__container__bottomRight'>
              <p>
                {`© 2022 Sticker Mule`}
              </p>
              <div className='privacy__and__terms'>
                <p>{`Privacy`}<span>{` & `}</span>{`Terms`}</p>
              </div>
              <div className='sitemap'>
                <p>{`Sitemap`}</p>
              </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Footer