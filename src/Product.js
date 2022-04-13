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
            
            {/*Add div for product__rating*/}
            <div className='product__rating'>
              <p>🔆</p>
              {/*Remove two star paragraphs*/}
            </div>

            {/*Add Product Image*/}
            <img 
              className='product__image' 
              src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
              alt='Product Image'
            />

            {/*Add an Add to Busket button*/}
            <button className='add__toBusket'>Add to Busket</button>

        </div>

    </div>
  );
  
}

export default Product