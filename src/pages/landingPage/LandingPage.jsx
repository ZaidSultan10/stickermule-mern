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
        <Partners video={`https://www.youtube.com/embed/wS24KZon9Io`} 
        heading = {`Free shipping, free online proofs, fast turnaround.`}
        paragraph = {`Sticker Mule is the fastest and easiest way to buy custom printed products. Order in 60 seconds and we'll turn your designs and illustrations into custom stickers, magnets, buttons, labels and packaging in days. We offer free online proofs, free worldwide shipping and super fast turnaround.`} />
        <Footer />
    </div>
  )
}

export default LandingPage