import React from 'react'
//import Home.css
import './Home.css'
import Product from '../Product/Product'

function Home() {
  return (
    <div className='home'>
       
        {/*Create the Home container*/}
        <div className='home__container'>
            
            {/*Add home image*/}
            
            <img
                className='home__image'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                alt='Banner Image with advert'
            />

            {/*Add rows*/}

            <div className='home__row'>
                {/*Render product 1*/}
                <Product />

                {/*Render product 2*/}
                <Product />

            </div>

            <div className='home__row'>
                {/*Render product 3*/}
                <Product />

                {/*Render product 4*/}
                <Product />

                {/*Render product 5*/}
                <Product />

            </div>

            <div className='home__row'>
                {/*Render product 6*/}
                <Product />

            </div>
        </div>

    </div>
  )
}

export default Home