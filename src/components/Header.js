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
    const login = () => {
        history.push('/login')
        window.location.reload()
    }
    const register = () => {
        history.push('/register')
        window.location.reload()
    }
    const cart = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('You must be login !!!')
            history.push('/')
        } else {
            history.push('/cart')
        }
    }
    if (userName == null) {
        return (
            <header className="p-3 mb-3 border-bottom" style={{ 'backgroundColor': '#f53d2d' }}>
                <div className="container" >
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" >
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                            <img src="https://www.freepnglogos.com/uploads/shopee-logo/shopee-circle-logo-design-shopping-bag-13.png" alt="mdo" width="50" height="50" className="rounded-circle" />
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
                            <li><a href="" onClick={cart} className="nav-link px-2 text-white">Cart</a></li>
                        </ul>
                        <div className="dropdown text-end">
                            <div className='navbar__links'>
                                <button className='btn btn-outline-warning button' type='button' onClick={login}>Login</button>
                                <button className='btn btn-outline-warning button' type='button' onClick={register}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <header className="p-3 mb-3 border-bottom" style={{ 'backgroundColor': '#f53d2d' }}>
                <div className="container" >
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" >
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                            <img src="https://www.freepnglogos.com/uploads/shopee-logo/shopee-circle-logo-design-shopping-bag-13.png" alt="mdo" width="50" height="50" className="rounded-circle" />
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
                            <li><a href="/cart" className="nav-link px-2 text-white">Cart</a></li>
                        </ul>
                        <div className="dropdown text-end">
                            <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                                {userName}
                            </a>
                            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item" onClick={logout}>Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

}

export default Header;
