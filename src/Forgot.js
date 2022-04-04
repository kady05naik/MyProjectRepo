import React from 'react';
import "./Forgot.css";

import { Link, useHistory } from 'react-router-dom';
function Forgot() {
    
        const history=useHistory();

        return (
                <div className='forgot_password'>
                    <div className='forgotpassword_container'>
                    <form>

                        <h5>E-mail</h5>
                        <input type="text"  placeholder='E-mail'/>

                        <h5>new password</h5>
                        <input type="password"   placeholder='new password'/>
    
                        <h5>confirm new password</h5>
                        <input type="password"   placeholder= 'confirm new password'/>
    
                        <button type="submit"  className='change_password'>Reset Password</button>

                        <button className='FbackButton' onClick={e=>history.push('/')}>Cancel</button>
    
    
                    </form>
                </div>
            </div>
        )
    
}

export default Forgot
