import React from 'react'
import { useStateValue } from './StateProvider'
import './CheckoutProduct.css'

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return   (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt=''/>
            <div className='checkoutProduct__info'>
                <div className='checkoutProduct__title'>{title}</div>
                <div className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className='checkoutProduct__rating'>
                    {
                        Array(rating).fill().map((_) => <p>⭐</p>)
                    }
                </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}  

export default CheckoutProduct