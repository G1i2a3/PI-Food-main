import React, {useState} from 'react';
import './detalleReceta.css';
import { connect } from 'react-redux';
import { addRecipeDetail } from '../../Redux/actions/index';
// import { NavBar } from '../NavBar/NavBar'

  function DetalleReceta (props) {
    // props.props.includes()

    return (
        <div>
          {/* <NavBar /> */}
            <h1 className='titulo_receta'>{props.recipeDetail.title}</h1>
          <br></br>
          <br></br>
            <img className='foto1' src={props.recipeDetail.image} alt=''/>
          <p>
            <h2 className='mini_titulos'>Diet type:</h2> 
            <p className='diet1'>{props.recipeDetail.diets.map(d => {
              if (props.recipeDetail.diets[props.recipeDetail.diets.length-1] === d){
                return d[0].toUpperCase() + d.substring(1)+"."
              } 
                return d[0].toUpperCase() + d.substring(1) + ", "
              })}
            </p> 
          </p>
          <h2 className='mini_titulos'>health Score:</h2>
          <p className='diet1'>{props.recipeDetail.healthScore}</p>
          <br></br>
          <h2 className='mini_titulos'>Recipe summary:</h2>
          <p className='diet1'>{props.recipeDetail.summary}</p>
          <br></br>
          <h2 className='mini_titulos'>Step by step:</h2>
          <p className='diet1'>Step by step: </p>
        </div>
    );
}

// configuracion redux para leer store (las 3 funciones)

function mapStateToProps(state){
  return {
    recipeDetail: state.recipeDetail
  }
}

function mapDispatchToProps(dispatch){
  return {
    addRecipeDetail: title => dispatch(addRecipeDetail(title))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetalleReceta);
