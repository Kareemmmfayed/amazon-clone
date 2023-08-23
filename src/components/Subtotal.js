import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <p>Subtotal ({basket?.length} items): <strong>${getBasketTotal(basket)}</strong> </p>
            <button>Proceed to Check Out</button>
        </div>
    )
}

export default Subtotal