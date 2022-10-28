import React from 'react';
import NavBar from '../NavBar/NavBar';
import { addRecipeDetail, getRecipes, addRecipeFavorite } from '../../Redux/actions/index';
import Recipe from '../../Components/receta';
import { connect } from 'react-redux';



function FavoriteRecipes (props) {

  return (
      <div>
        <NavBar/>
          <h1 className='titulo_receta'>Your favorite Recipes</h1>

          {props.recipesFavorites.length > 0 && 
      props.recipesFavorites.map(r => {
        return <Recipe props={r}></Recipe>
      })} 

      </div>
  );
}

function mapStateToProps(state){
  return {
    recipesFavorites: state.recipesFavorites
  }
}

function mapDispatchToProps(dispatch){
  return {
    addRecipeDetail: recetaEntera => dispatch(addRecipeDetail(recetaEntera)),
    addRecipeFavorite: recetaEntera => dispatch(addRecipeFavorite(recetaEntera))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteRecipes);

