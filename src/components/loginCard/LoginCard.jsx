import React from 'react'
import LoginCardComponent from './loginCardComponent/LoginCardComponent'
import './_loginCard.scss'

const LoginCard = ({signupFlag}) => {
  return (
    <div className='loginCard'>
        <LoginCardComponent signupFlag={signupFlag} />    
    </div>
  )
}

export default LoginCard