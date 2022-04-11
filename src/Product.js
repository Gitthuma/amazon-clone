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

        </div>


    </div>
  )
}

export default Product