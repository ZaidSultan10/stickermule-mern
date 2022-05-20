import React from 'react'
import Banner from '../../components/banner/Banner.jsx'
import Footer from '../../components/footer/Footer.jsx'
import Partners from '../../components/partners/Partners.jsx'
import DealsInstructions from '../../components/dealsInstruction/DealsInstructions.jsx'

const DealsPage = () => {
  return (
    <div className='dealsPage'>
        <Banner />
        <DealsInstructions />
        <Partners video={`https://www.youtube.com/embed/UKpBGft3UNQ`} 
        heading = {`A key upgrade.`}
        paragraph = {`Put your brand in your customers' pockets with custom acrylic keychains. Upload your artwork and we'll create quality keychains that can be printed in full color and die cut to any shape. Lightweight, durable, and easy to carry around, custom keychains are the perfect promotional item for your business or event.`} />
        <Footer />
    </div>
  )
}

export default DealsPage