import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function NavBar() {
  return (
    <header className="navbar">
      <nav>
      <div className="App">
<p>
<NavLink to="/home" className='button1'>HOME</NavLink>
<NavLink to="/myRecipes" className='button1'>MY RECIPES</NavLink>
<NavLink to="/createRecipe" className='button1'>CREATE RECIPE</NavLink>
<NavLink to="/favoriteRecipes" className='button1'>FAVORITE RECIPES</NavLink>
</p>
</div>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/" >Home</NavLink>
            <NavLink to="/favs" >Favoritas</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

