import React from 'react';
import "./Checkout.css";
import banner from "./checkout_banner.PNG";
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const [{basket, user}, dispatch]=useStateValue();

    return (
        <div className='checkout'> 
            <div className="checkout_left">
                <div>
                <img className="image" src={banner}/> 
                </div>
                    
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout_title'> Your Shopping Basket</h2>
                    {basket.map(item=>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        />

                    ))}               
                
                </div>
            </div> 

            <div className='checkout_right'>
                <Subtotal/>
              
            </div>

       </div>


    )
}

export default Checkout
