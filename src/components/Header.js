import React from 'react';
import { history } from '../App';
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../App.css';
function Header() {
    const userName = localStorage.getItem('Name');
    const logout = () => {
        localStorage.clear()
        history.push('/')
        window.location.reload()
    }
    const cart = ()=>{
        history.push('/cart')
    }
    return (
        <header className="shopee-top shopee-top--sticky">
            <div className='navbar-wrapper container-wrapper'>
                <div className='container navbar'>
                    <div className='flex v-center _2oiwpp'>
                        <a href='' onClick={cart} className='_2QcfeN'><AiOutlineShoppingCart style={{'height':'29px','width':'76px'}}/></a>
                    </div>
                    <div className="navbar__spacer"></div>
                    <div className='navbar__links'>
                        <button className='btn btn-outline-warning button' type='button' onClick={logout}>LOGOUT</button>
                        <a className='App-text' >{userName}</a>
                    </div>
                </div>
            </div>         
        </header >
    );
}

export default Header;
