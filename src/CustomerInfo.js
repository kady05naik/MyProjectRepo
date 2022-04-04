import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./CustomerInfo.css";
import logo from './logo.PNG';

function CustomerInfo() {
    const history=useHistory();
  return (
      <div className='customerinfo'>
          <div className='img'>
            <img className="login_logo" src={logo} /> 
        </div>
        <div className='newaccount_container'>
            <form autofill="off">
            <h1>Sign-up</h1>
            <hr/>

            

            <p>Full Name</p>                        
            <input type="text" placeholder='Full Name' />

            <p>Contact Number</p> 
            <input type="text" placeholder='Contact Number'/> 

            <button  type="submit" className='registerButton'>Register</button>
            <button onClick={e=>history.push('/')} className='backButton'>Cancel</button>

            <p>By signing-up you agree to SAMARTH ENTERPRISES Conditions of Use & Sale.Please see our Privacy Notice, our Cookies Notice and our Interest-Based ads Notice</p>
            </form>
        </div>
        
      </div>
    
  )
}

export default CustomerInfo