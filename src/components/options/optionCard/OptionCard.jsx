import React from 'react'
import './_optionCard.scss'

const OptionCard = ({title, imageUrl}) => {
  return (
    <div className='optionCard'>
        <img src={imageUrl} width={200} height={165} />
        <p>{title}</p>
    </div>
  )
}

export default OptionCard