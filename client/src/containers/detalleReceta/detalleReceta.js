import React, {useState} from 'react';
import './detalleReceta.css';
import { connect } from 'react-redux';
import { geRecipeDetail } from '../../actions/index';


  export default function RecipeDetail () {
    // props.props.includes()

    return (
        <div>
          <p>
            <br></br>
            <h1 className='titulo_receta'>Titulo</h1>
          </p>
            {/* <img className='foto1' src={props.props.image} alt=''/> */}
          <p>
            {/* <h2 className='diet1'>{props.props.diets.map(d => {
              if (props.props.diets[props.props.diets.length-1] === d){
                return d[0].toUpperCase() + d.substring(1)+"."
              } 
                return d[0].toUpperCase() + d.substring(1) + ", "
              })}
            </h2> */}
          </p>
        </div>
    );
}