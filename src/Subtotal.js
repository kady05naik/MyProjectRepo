import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Subtotal() {
    const history=useHistory();
    const [{ basket, user }, dispatch] = useStateValue();
    return (
    
    <div className='subtotal'>
        
        <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>
                        {/*Part of homework*/}
                        Subtotal({basket?.length} items): <strong>{value}</strong>
                    </p> 
                    <small className="subtotal_gift">
                        <input type="checkbox"/>This order contains a gift
                    </small>
                </>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)}  /*Part of homework*/
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
       />
        <Link to ={!user && './login'}>
             <button style={{color: "white", backgroundColor: "#192537" ,width: "100%",  height: "30px",  border: "1px solid", borderRadius: "2px"}}  onClick={e=>history.push('/payment')}>Proceed to checkout</button>
        </Link>

       
      </div> 
       
    );
}

export default Subtotal
