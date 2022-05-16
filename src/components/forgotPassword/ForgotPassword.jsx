import React from 'react'
import './_forgotPassword.scss'
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    let navigate = useNavigate();
  return (
    <div className='forgotPassword'>
        <div className='forgotPassword__container'>
            <div className='forgotPassword__container__heading'>
                <h2>{`Reset your password`}</h2>
            </div>
            <div className='forgotPassword__container__paragraph'>
                <p>{`We’ll email you a link to reset your password.`}</p>
            </div>
            <div className={`forgotPassword__container__card__email`}>
                <div className='forgotPassword__container__card__email__heading'>
                    <h5>
                        {`Email *`}
                    </h5>
                </div>
                <div className='forgotPassword__container__card__email__input'>
                    <input placeholder='Email' onChange={() => {}} />
                </div>
            </div>
            <div className='forgotPassword__container__card__emailButton'>
                <button>
                    {`Send Reset Link`}
                </button>
            </div>
            <div className='loginCardComponent__container__card__createAccount'>
                <p>
                    {`or`} <span onClick={() => navigate('/login')}>{`back to login`}</span>
                </p>
            </div>
        </div> 
    </div>
  )
}

export default ForgotPassword