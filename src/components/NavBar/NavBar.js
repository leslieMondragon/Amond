import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <nav>
                <div className='navbar'>
                    <Link to="/">
                            <img src="https://i.ibb.co/crN29HS/logo.png" alt="Logo" className="logo"/>
                    </Link>
                    <ul>
                    <li><NavLink to="/category/dama">Dama</NavLink></li>
                    <li><NavLink to="/category/caballero">Caballero</NavLink></li>
                    <li><NavLink to="/category/smartwatch">SmartWatch</NavLink></li>
                        <li><Link to="/cart"><CartWidget/></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;
