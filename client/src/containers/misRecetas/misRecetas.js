import React, {useState} from 'react';
import NavBar from '../NavBar/NavBar';
import './misRecetas.css'


export default function crearReceta() {

  return (
    <div className='my_recipes'>
      <NavBar/>
      <br></br>
    <h1 className='title_my_recetas'>Your created recipes</h1>
    </div>
  )

};