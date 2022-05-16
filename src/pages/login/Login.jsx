import React from 'react'
import LoginCard from '../../components/loginCard/LoginCard'

const Login = () => {
  return (
    <div className='login'>
        <LoginCard signupFlag={false} />
    </div>
  )
}

export default Login