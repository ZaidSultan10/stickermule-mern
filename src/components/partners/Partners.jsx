import React from 'react'
import './_partners.scss'
import PartnersImage from '../../assets/partners.webp'
import PartnerImageResponsive from '../../assets/customers-grid.webp'

const Partners = ({video,heading,paragraph}) => {
  return (
    <div className='partners'>
        <div className='partners__container'>
            <div className='partners__container__top'>
                <div className='partners__container__topLeft'>
                    <iframe src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='partners__container__topRight'>
                    <h1>
                        {heading}
                    </h1>
                    <p>
                        {paragraph}
                    </p>
                </div>
            </div>
            <div className='partners__container__bottom'>
                <img className='partner__container__bottom__mainImage' src={PartnersImage} alt='partners' />
                <img className='partner__container__bottom__responsiveImage' src={PartnerImageResponsive} alt='partners' />
            </div>
        </div>    
    </div>
  )
}

export default Partners