import React from 'react'
import LoginCard from '../../components/loginCard/LoginCard'

const Signup = () => {
  return (
    <div className='signup'>
        <LoginCard signupFlag={true} />    
    </div>
  )
}

export default Signup