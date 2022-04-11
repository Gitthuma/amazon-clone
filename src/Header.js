import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'

function Header() {
  return (
    <div className='header'>

        <img 
            className='header__logo' /*change to header logo*/ 
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />

        <div className='header__search'>
            <input 
                className='header__SearchInput' 
                type='text'/>
            <SearchIcon 
            className='header__searchIcon'/>
        </div>

        <div className='header_nav'>

            <div className='header__navOption'>
                <span className='header__navOptionLine1'>Hello Guest</span>
                <span className='header__navOptionLine2'>Sign in</span>
            </div>

            <div className='header__navOption'>
                <span className='header__navOptionLine1'>Returns</span>
                <span className='header__navOptionLine2'>& Orders</span>

            </div>

            <div className='header__navOption'>
                <span className='header__navOptionLine1'>Your</span>
                <span className='header__navOptionLine2'>Prime</span>

            </div>

            {/*Add shopping basket*/}
            <div className='header__optionBasket'>
                <ShoppingBasketIcon />
                <span className='header__navOptionLine2 header__baskectCount'>0</span>

            </div>

        </div>

    </div>
  )
}

export default Header