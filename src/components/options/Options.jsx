import React from 'react'
import './_options.scss'
import {optionsData} from './optionsData.js'
import OptionCard from './optionCard/OptionCard'

const Options = () => {
  return (
    <div className='options'>
        <div className='options__container'>
            {
                optionsData.map((item) => (
                    <OptionCard title = {item.title} imageUrl = {item.optionImage} />
                ))
            }
        </div>    
    </div>
  )
}

export default Options