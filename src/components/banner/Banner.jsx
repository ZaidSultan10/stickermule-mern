import React from 'react'
import './_banner.scss'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner__container'>
            <div className='banner__container__heading'>
                <h1>
                    {`Custom printing that kicks ass`}
                </h1>
            </div>
            <div className='banner__container__para'>
               <p> {`Easy online ordering, 4 day turnaround and free online proofs. Free shipping.`}</p>
            </div>
            <div className='banner__container__options'>
                <button className='banner__container__options__shopNow'>
                    {'Shop Now'}
                </button>
                <button className='banner__container__options__samples'>
                    {'Get Samples'}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Banner