import React from 'react';
import "./CheckoutProduct.css";
import { StateContext } from './StateProvider';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image,title,price,hideButton}) {
    const [{basket}, dispatch]=useStateValue();

    const removeFromBasket=()=>{
        //remove the item from Basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
                    id: id,
        })
    }
    return (
        
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image}/>

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                {!hideButton && (<button onClick={removeFromBasket}>Remove from Basket</button>
                )}
                
            </div>
        </div>
    )
}

export default CheckoutProduct
