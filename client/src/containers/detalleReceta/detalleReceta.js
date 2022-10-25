import React, {useState} from 'react';
import './detalleReceta.css';
import { connect } from 'react-redux';
import { addRecipeDetail } from '../../Redux/actions/index'


  function DetalleReceta (props) {
    // props.props.includes()

    return (
        <div>
          <p>
            {/* // flecha button link to Home  */}
            <br></br>
            <h1 className='titulo_receta'>{props.recipeDetail.title}</h1>
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
