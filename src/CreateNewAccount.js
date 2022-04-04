import React, { useEffect, useState } from 'react';
import logo from './logo.PNG';
import { Link, useHistory } from 'react-router-dom';
import "./CreateNewAccount.css";
import { db } from './firebase';
import { useStateValue } from './StateProvider';

//import {collection, getDocs} from "firebase/firestore";

function CreateNewAccount() {
    const history=useHistory();
    const [user] = useStateValue();
    const[name, setcust_name]=useState("")
    const [cno, setcust_cno]=useState(0)
    //const[cust_loginid, setcust_loginid]=useState("")


    
    const [customers,setCustomers]=useState([]);
    //const customersCollectionRef=collection(db,"customers");
    //const createCustomers=async()=>{
     //   await addDoc(customersCollectionRef,{cust_name:name,cust_cno:cno });
    //};
    
    useEffect(()=> {
    if(user){
        db.collection('customer').doc(user?.uid).collection('customer').orderBy('created','desc').onSnapshot(snapshot=>(
          setCustomers(snapshot.docs.map(doc=>({
            id: doc.id,
            data: doc.data()
          })))
        ))
      }
      else{
        setCustomers([])
      }
      
    },[user]  )
/*
    useEffect(()=>{
        const getCustomers=async() => {
            const data= await getDocs(customersCollectionRef);
            setCustomers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));

        };
        getCustomers();
    }, [])
*/
    return (
        <div>
            <div className='createnewaccount'>
                
                <div className='newaccount_container'>
                <h5>Please fill in this form to create an account.</h5>
                <hr/>
                    <form autoComplete="off">
                        
                        
                        <p>E-mail</p> 
                        <input type="text" placeholder='E-mail' />

                        <p>Password</p> 
                        <input type="password" placeholder= 'Password' />

                        <p>Confirm Password</p> 
                        <input type="password" placeholder= 'Confirm Password' />

                    
                        <button  type="submit" className='signUpButton'>Sign Up</button>
                        <button onClick={e=>history.push('/')} className='backButton'>Cancel</button>

                        
                    </form>
                    
                </div>

            </div>
        </div>
    )
}

export default CreateNewAccount
