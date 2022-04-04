import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch,Route}
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import CreateNewAccount from "./CreateNewAccount";
import Forgot from "./Forgot";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";
import CustomerInfo from "./CustomerInfo";

const promise=loadStripe("pk_test_51KUafTSCmKYAYW8vhP1WfhFIcQAQZQps81UHwcVqKGEUjTz09QgpxPCAOAyLVReyWoBHkByk6EHRRM6hFOIdG6oK00SYy0ExJB");

function App() {

  const [{}, dispatch] =useStateValue();
  
  useEffect( () =>{
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS>>> ', authUser);

      if(authUser){
        //the user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [] )

  return (
    //BEM
    <Router>
      <div className="app">
  
        <Switch>
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
            
          <Route path="/about">
            
          </Route>

          <Route path="/customerinfo">
            <CustomerInfo/>
          </Route>

          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/createnewaccount">
            <CreateNewAccount/>
          </Route>

          <Route path="/forgot_password">
            <Forgot/>
          </Route>

          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>    
            </Elements>        
          </Route>
                
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
    
        </Switch>        
      </div> 
    </Router>

   
  );
}

export default App;
