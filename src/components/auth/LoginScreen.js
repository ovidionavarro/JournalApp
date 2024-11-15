import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    
  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form>
        <input type="text" placeholder="email" name='email' className='auth__input' />
        <input type="password" placeholder="password" name='password' className='auth__input' />
        <button className='btn btn-primary btn-block'  type="submit">Login</button>
        
        <div className='auth__social-networks' >
          <p>Login with social networks</p>

          <div 
              className="google-btn">
              <div className="google-icon-wrapper">
                <img className="google-icon" src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="google button" />

              </div>
              <p className="btn-text">
                  <b>Sign in with google</b>
              </p>
          </div>
        </div>
       <Link to='/auth/register' className='link'>
        Create new account
       </Link>
      </form>
    </>
  )
}
