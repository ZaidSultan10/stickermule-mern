import React from 'react'
import Banner from '../../components/banner/Banner'
import Options from '../../components/options/Options'
import Partners from '../../components/partners/Partners'

const LandingPage = () => {
  return (
    <div className='landingPage'>
        <Banner />
        <Options />
        <Partners />
    </div>
  )
}

export default LandingPage