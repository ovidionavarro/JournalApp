import React from 'react'
import { Link } from 'react-router-dom'
import { UseForm } from '../../hooks/UseForm'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/auth'

export const LoginScreen = () => {


  const dispatch=useDispatch()
    
  // como  utilizar el hook form##########################
  const [formValues,handleInputChange]=UseForm({
    email:'ovidionavarro@gmail.com',
    password:'ovidionav'
  })

  const {email,password} =formValues

  const handleLogin=(e)=>{
    e.preventDefault()
    console.log(email,password)
    dispatch(login(1234,"ovidio"))
  }

  
  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="email" name='email' className='auth__input' value={email}               onChange={handleInputChange
          
        }/>
        <input type="password" placeholder="password" name='password' className='auth__input'  value={password} onChange={handleInputChange
          
        }/>
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
