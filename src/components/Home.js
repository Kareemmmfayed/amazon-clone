import React from 'react'
import backgroundImg from './anirudh-wKeZstqxKTQ-unsplash.jpg'
import Product from './Product'
import sneaker from './assets/51KgK51W8yL._AC_UY575_.jpg'
import water from './assets/71xycA8zDDL._AC_SX466_.jpg'
import vitamin from './assets/51sX+0vlXbL._AC_SY300_SX300_.jpg'
import towel from './assets/81opUHsjLyL.__AC_SY300_SX300_QL70_FMwebp_.webp'
import watch from './assets/71ipGJ3iP0L._AC_SX466_.jpg'
import spider from './assets/81bFs5S0UDL._SX342_.jpg'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <img className='home__image' src={backgroundImg} alt='img'/>
            <div className='home__row'>
                <Product 
                    id='1'
                    title='Sneakers'
                    price={45}
                    rating={5}
                    image={sneaker}
                />
                <Product 
                    id='2'
                    title='Water Pressure Regulator'
                    price={10.22}
                    rating={4}
                    image={water}
                />
            </div>
            <div className='home__row'>
                <Product 
                    id='3'
                    title='Vitamin D3'
                    price={34}
                    rating={4}
                    image={vitamin}
                />
                <Product 
                    id='4'
                    title='Dry Bath Towels'
                    price={20}
                    rating={3}
                    image={towel}
                />
                <Product 
                    id='5'
                    title='Smart Watch for Android'
                    price={50}
                    rating={4}
                    image={watch}
                />
            </div>
            <div className='home__row'>
                <Product 
                    id='6'
                    title='Spider-Man: No Way Home [Blu-ray]'
                    price={11}
                    rating={5}
                    image={spider}
                />
            </div>
        </div>
    )
}

export default Home