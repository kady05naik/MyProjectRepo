import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Login.css";
import logo from './logo.PNG';
import { auth } from './firebase';

function Login() {

    const history=useHistory();

    const [email,setEmail] = useState('');
    
    const [password, setPassword] = useState('');
   
    const signIn= e =>{
        e.preventDefault(); 

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')

            })
            .catch(error => alert(error.message)) 
        //some fancy firebase logins
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                //it successfully created new user with email and password
                console.log(auth);

                if (auth) {
                    history.push('/')
                
                }
            })
            .catch(error => alert(error.message))
        //firebase reg
    }

    return (
        <div className='login'>
            <Link to="/">
            <div className='img'>
            <img className="login_logo" src={logo} /> 
            </div>
            </Link>
             
        <div className='login_container'>
            <h1>Sign-in</h1>
            <hr/>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='E-mail'/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder= 'Password'/>

                <Link to="/forgot_password">
                <p>forgot password?</p>
                </Link>
                

                

                <button type="submit" onClick={signIn} className='login_signInButton'>Sign In</button>

                <button className='backButton' onClick={e=>history.push('/')}>Cancel</button>

            </form>
            <p>By signing-in you agree to SAMARTH ENTERPRISES Conditions of Use & Sale.
                Please see our Privacy Notice, our Cookies Notice and our Interest-Based ads Notice
            </p>

            <Link to ="/createnewaccount">
                <button onClick={e=>history.push('/createnewaccount')}className='login_registerButton'>Create new Account</button>
            </Link>
            
        </div>

        </div>

    )
}

export default Login
