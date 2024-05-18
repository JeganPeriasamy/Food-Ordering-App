import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {
    
    const navigate = useNavigate();
    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
    
    const logout = ()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate('/')
    }


    return (
        <div className='navbar'>
            <Link to="/"><img className="logo" src={assets.logo} alt="Logo"></img></Link>
            <ul className='navbar-menu'>
                <Link to="/"onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href="#explore-menu"onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href="#app-download"onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
                <a href="#footer"onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="Search Icon"></img>
                <div className='navbar-search-icon'>
                    <Link to="./cart"><img src={assets.basket_icon} alt="Basket Icon"></img></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                {!token?<button onClick={()=>setShowLogin(true)}className='navbar-button'>Sign IN</button>:
                
                <div className='navbar-profile'>
                    <img src={assets.profile_icon} alt=""></img>
                    <ul className="navbar-profile-dropdown">
                        <li onClick={()=>navigate('/myorders')}>
                            <img src={assets.bag_icon} alt="" />
                            <p>Orders</p>                      
                        </li>
                        <hr/>
                        <li onClick={logout}>
                            <img src={assets.logout_icon} alt="" />
                            <p>LogOut</p>   
                        </li>
                    </ul>
                    
                </div>}
            
        </div>
        </div>
    );
}

export default Navbar;
