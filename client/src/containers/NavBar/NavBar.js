import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function NavBar() {
  return (
    <header className="navbar">
      <nav>
        <div className="App">
          <NavLink to="/home" className='button1'>HOME</NavLink>
          <NavLink to="/myRecipes" className='button1'>MY RECIPES</NavLink>
          <NavLink to="/createRecipe" className='button1'>CREATE RECIPE</NavLink>
          <NavLink to="/favoriteRecipes" className='button1'>FAVORITE RECIPES</NavLink>
        </div>
      </nav>
    </header>
  )
};

