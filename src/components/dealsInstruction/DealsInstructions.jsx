import React from 'react'
import DealsInstructionCard from './dealsInstructionCard/DealsInstructionCard'
import './_dealsInstructions.scss'
import Instruction1 from '../../assets/ins_1.svg'
import Instruction2 from '../../assets/ins_2.svg'
import Instruction3 from '../../assets/ins_3.svg'

const DealsInstructions = () => {

  const deals = [{
    imageUrl:Instruction1,
    heading:'Free shipping in 4 days',
    paragraph:'Get your die cut stickers fast with 4 day turnaround and free shipping.',
    link:'Get a delivery estimate'
  },{
    imageUrl:Instruction2,
    heading:'Get an online proof',
    paragraph:'Review your proof shortly after checkout and request changes until youre happy.',
    link:'Watch our process'
  },{
    imageUrl:Instruction3,
    heading:'Durable & weatherproof',
    paragraph:'Thick, durable vinyl protects your die cut stickers from scratching, rain & sunlight.',
    link:'See how durable'
  }]

  return (
    <div className='dealsInstructions'>
      {
        deals && deals.map((item) => (
          <DealsInstructionCard 
            imageUrl = {item.imageUrl}
            heading = {item.heading}
            paragraph = {item.paragraph}
            link = {item.link}
           />
        ))
      }
    </div>
  )
}

export default DealsInstructions