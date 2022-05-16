import React from 'react'
import './_loginCardComponent.scss'
import GoogleLogoImage from '../../../assets/google-logo.png'
import { useNavigate } from "react-router-dom";

const LoginCardComponent = ({signupFlag}) => {
    let navigate = useNavigate();
  return (
    <div className='loginCardComponent'>
        <div className='loginCardComponent__container'>
            <div className='loginCardComponent__container__card'>
                <div className='loginCardComponent__container__card__googleLogin'>
                    <div className='loginCardComponent__container__card__googleLogin__logo'>
                        <img src={GoogleLogoImage} alt='googleLogo' />
                    </div>
                    <div className='loginCardComponent__container__card__googleLogin__heading'>
                        <h4>{signupFlag ? `Sign up with google` : `Log in with google`}</h4>
                    </div>
                </div>
                <div className='loginCardComponent__container__card__breakpoint'>
                    <span className='line'>
                        {''}
                    </span>
                    <p>{`or`}</p>
                    <span className='line'>
                        {''}
                    </span>
                </div>
                {
                    signupFlag && (
                        <div className='loginCardComponent__container__card__name'>
                            <div className='loginCardComponent__container__card__name__heading'>
                                <h5>
                                    {`Name *`}
                                </h5>
                            </div>
                            <div className='loginCardComponent__container__card__name__input'>
                                <input placeholder='Name' onChange={() => {}} />
                            </div>
                        </div>
                    )
                }
                <div className={signupFlag ? `loginCardComponent__container__card__email login__space` : `loginCardComponent__container__card__email`}>
                    <div className='loginCardComponent__container__card__email__heading'>
                        <h5>
                            {`Email *`}
                        </h5>
                    </div>
                    <div className='loginCardComponent__container__card__email__input'>
                        <input placeholder='Email' onChange={() => {}} />
                    </div>
                </div>
                <div className='loginCardComponent__container__card__password'>
                    <div className='loginCardComponent__container__card__password__heading'>
                        <h5>
                            {`Password *`}
                        </h5>
                        { !signupFlag && (<h5 onClick={() => navigate('/password/recover')} className='forgot__link'>
                            {
                                'Forgot Password?'
                            }
                        </h5>)}
                    </div>
                    <div className='loginCardComponent__container__card__password__input'>
                        <input placeholder={signupFlag ? `Password (6 characters minimum)` : `Password`} onChange={() => {}} />
                    </div>
                </div>
                <div className='loginCardComponent__container__card__loginButton'>
                    <button>
                        {signupFlag ? `Sign up` : `Log in`}
                    </button>
                </div>
                <div className='loginCardComponent__container__card__createAccount'>
                    <p>
                        {`or`} <span onClick={() => signupFlag ? navigate('/login') :navigate(`/signup`)}>{signupFlag ? `log in` :`create an account`}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginCardComponent