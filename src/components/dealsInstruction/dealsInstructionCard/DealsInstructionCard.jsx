import React from 'react'
import './_dealsInstructionCard.scss'

const DealsInstructionCard = ({imageUrl,heading,paragraph,link}) => {
  return (
    <div className='dealsInstructionCard'>
        <div className='dealsInstructionCard__image'>
            <img src={imageUrl} alt='instruction' /> 
        </div>
        <div className='dealsInstructionCard__heading'>
            <h2>
                {heading}
            </h2>
        </div>
        <div className='dealsInstructionCard__para'>
            <p>
                {paragraph}
            </p>
        </div>
        <div className='dealsInstructionCard__link'>
            <a href=''>
                {link}
            </a>
        </div>
    </div>
  )
}

export default DealsInstructionCard