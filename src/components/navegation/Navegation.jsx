import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';


export default function Navegation() {

return  <nav className='menu' id='menu'>
            <Link className='nav-menu-items' to="/">Home</Link>
            <Link className='nav-menu-items' to="/about">about Binca</Link>
            <Link className='nav-menu-items' to="/">works</Link>
            <Link className='nav-menu-items' to="/archive">archive</Link>
            <Link className='nav-menu-items' to="/#contact">contact</Link>
        </nav>
}
