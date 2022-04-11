//Create Product component
import React from 'react'
//Create and import Product.css
import './Product.css'

function Product() {
  return (
    <div className='product'>
        {/*Create tiles for products__Info*/}
        <div className='product__info'>
            {/*The description*/}
            <p>The lean Start Up</p>
              {/*Create the product__price paragraph*/}
            <p className='product__price'>
              {/*Make the dolar sign small and the figures bold with strong*/}
              <small>$</small>
              <strong>19.99</strong>
            

            </p>


        </div>


    </div>
  )
}

export default Product