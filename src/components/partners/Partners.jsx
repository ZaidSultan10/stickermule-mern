import React from 'react'
import './_partners.scss'
import PartnersImage from '../../assets/partners.webp'
import PartnerImageResponsive from '../../assets/customers-grid.webp'

const Partners = () => {
  return (
    <div className='partners'>
        <div className='partners__container'>
            <div className='partners__container__top'>
                <div className='partners__container__topLeft'>
                    <iframe src="https://www.youtube.com/embed/wS24KZon9Io" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='partners__container__topRight'>
                    <h1>
                        {`Free shipping, free online proofs, fast turnaround.`}
                    </h1>
                    <p>
                        {`Sticker Mule is the fastest and easiest way to buy custom printed products. Order in 60 seconds and we'll turn your designs and illustrations into custom stickers, magnets, buttons, labels and packaging in days. We offer free online proofs, free worldwide shipping and super fast turnaround.`}
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