import React from 'react'
import DealsInstructionCard from './dealsInstructionCard/DealsInstructionCard'
import './_dealsInstructions.scss'

const DealsInstructions = () => {
  return (
    <div className='dealsInstructions'>
      <DealsInstructionCard />
      <DealsInstructionCard />
      <DealsInstructionCard />
    </div>
  )
}

export default DealsInstructions