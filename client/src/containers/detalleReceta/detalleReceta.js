import React, {useState} from 'react';
import './detalleReceta.css';
import { connect } from 'react-redux';
import { addRecipeDetail } from '../../Redux/actions/index';

  function DetalleReceta (props) {
    // props.props.includes()

    return (
        <div>
          <p>
            {/* // flecha button link to Home  */}
            <br></br>
            <h1 className='titulo_receta'>{props.recipeDetail.title}</h1>
          </p>
            <img className='foto1' src={props.recipeDetail.image} alt=''/>
          <p>
            <h2 className='diet1'>Diet type: {props.recipeDetail.diets.map(d => {
              if (props.recipeDetail.diets[props.recipeDetail.diets.length-1] === d){
                return d[0].toUpperCase() + d.substring(1)+"."
              } 
                return d[0].toUpperCase() + d.substring(1) + ", "
              })}
            </h2> 
          </p>
          <h2 className='diet1'>health Score: {props.recipeDetail.healthScore}</h2>
          <br></br>
          
          <h2 className='diet1'>Recipe summary: {props.recipeDetail.summary}</h2>
          <br></br>
          <h2 className='diet1'>Step by step: </h2>
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
