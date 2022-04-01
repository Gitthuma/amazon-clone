import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>

        <img 
            className='header__logo' /*change to header logo*/ 
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />

        <div className='header_search'>
            <input 
                className='header__SearchInpit' 
                type='text'/>

        </div>

        <div className='header_nav'>

            <div className='header__navOption'>
                <span className='heade__navOptionLine1'>Hello Guest</span>
                <span className='heade__navOptionLine2'>Sign in</span>
            </div>

            <div className='header__navOption'>
                <span className='heade__navOptionLine1'>Returns</span>
                <span className='heade__navOptionLine2'>& Orders</span>

            </div>

            <div className='header__navOption'>
                <span className='heade__navOptionLine1'>Your</span>
                <span className='heade__navOptionLine2'>Prime</span>

            </div>

        </div>

    </div>
  )
}

export default Header