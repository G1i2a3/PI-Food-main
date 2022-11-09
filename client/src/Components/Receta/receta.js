import React, {useState} from 'react';
import './receta.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addRecipeDetail, getRecipes, addRecipeFavorite } from '../../Redux/actions/index';
import {addRecipeFavorites} from "./funcionality"

// class Recipe extends React.Component {
  function Recipe (props) {

    // const [recipes, setRecipes] = useState([])

    // props.props.diets.includes()

    return (
        <div>
          <p>
            <br></br>
            <Link to= {`/${props.props.title}`}>
            <h1 className='titulo_receta' onClick={() => props.addRecipeDetail(props.props)}>{props.props.title}</h1>
            </Link>
            <button className='fav' onClick={()=> props.addRecipeFavorites(props.props)}>★</button>
          </p>
            <img className='foto1' src={props.props.image} alt=''/>
          <p>
            {props.props.diets.length > 0 && <div className='diet_type_div'> 
            <h2 className='tipo_dieta'>Diet type: </h2>
            <p className='diet1'>{props.props.diets.map(d => {
              // if (!d) {return "NO diets bitch"}
              if (props.props.diets[props.props.diets.length-1] === d){
                return d[0].toUpperCase() + d.substring(1)+"."
              } 
                return d[0].toUpperCase() + d.substring(1) + ", "
              })}  
            </p>
            </div>}
          </p>
        </div>
    );
}



function mapStateToProps(state){
  return {
    recipeDetail: state.recipeDetail
  }
}

function mapDispatchToProps(dispatch){
  return {
    addRecipeDetail: recetaEntera => dispatch(addRecipeDetail(recetaEntera)),
    addRecipeFavorites: recetaEntera => dispatch(addRecipeFavorites(recetaEntera))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
