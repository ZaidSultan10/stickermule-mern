import React from 'react'
import './_dealsInstructionCard.scss'
import Instruction1 from '../../../assets/ins_1.svg'

const DealsInstructionCard = () => {
  return (
    <div className='dealsInstructionCard'>
        <div className='dealsInstructionCard__image'>
            <img src={Instruction1} alt='instruction' /> 
        </div>
        <div className='dealsInstructionCard__heading'>
            <h2>
                {`Free shipping in 4 days`}
            </h2>
        </div>
        <div className='dealsInstructionCard__para'>
            <p>
                {`Get your die cut stickers fast with 4 day turnaround and free shipping.`}
            </p>
        </div>
        <div className='dealsInstructionCard__link'>
            <a href=''>
                {`Get a delivery estimate`}
            </a>
        </div>
    </div>
  )
}

export default DealsInstructionCard