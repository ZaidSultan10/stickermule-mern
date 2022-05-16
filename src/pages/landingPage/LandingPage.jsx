import React from 'react'
import Banner from '../../components/banner/Banner'
import Options from '../../components/options/Options'
import Partners from '../../components/partners/Partners'
import Footer from '../../components/footer/Footer.jsx'

const LandingPage = () => {
  return (
    <div className='landingPage'>
        <Banner />
        <Options />
        <Partners />
        <Footer />
    </div>
  )
}

export default LandingPage