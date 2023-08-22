import React from 'react'
import { useStateValue } from './StateProvider'
import ad from './assets/fox-60CpKQ7u-yE-unsplash.jpg'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import './Checkout.css'

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left' >
                <img className='checkout__ad' src={ad} alt='ad'/>

                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is empty</h2>
                        <p>You have no items in your shopping basket, To buy one or more items, Click the "Add to basket" next to the item.</p>
                    </div>
                ): (
                    <div>
                        <h2>Your shopping basket</h2>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket?.length > 0 && (
                <div className='checkout__right'>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout