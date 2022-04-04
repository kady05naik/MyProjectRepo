import React from 'react'
import "./Header.css";
import logo from './logo.PNG';
import SearchIcon from "@material-ui/icons/Search";
import CallIcon from "@material-ui/icons/Call";
import FilterFramesIcon from '@material-ui/icons/FilterFrames';
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src={logo} />            
            </Link>
            
            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <Link to ={!user && './login'}>
                <div onClick={handleAuthentication} className="header_option">
                    <span className="header_optionLineOne">Hello, {!user ? 'Guest' : user.email}</span>
                    <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In' }</span>
                </div>
                </Link>

                <Link to='about'>
                <div className="header_option">
                    <span className="header_optionLineOne">About</span>
                    <span className="header_optionLineTwo">Us</span>
                
                </div>
                </Link>
                                
                <div className="header_option">
                    <span className="header_optionLineOne">contact</span>
                    <span className="header_optionLineTwo"><CallIcon className="header_optionCall"/></span>
                    
                </div>

                <Link to='/orders'>
                <div className="header_option">
                    <span className="header_optionLineOne">Orders</span>
                    <span className="header_optionLineTwo"><FilterFramesIcon className="header_optionOrder"/></span>
                
                </div> 
                </Link>

                <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasket/>
                    <span className="header_BasketCount">{basket?.length}</span>  
                </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
