// import { put } from "../../../../api/src/routes";

export function getMovies(title){
  return function(dispatch){
      return fetch(`http://www.omdbapi.com/?apikey=d1dcdf9c&s=${title}`)
      .then(response => response.json())
      .then(movies => dispatch({type: 'GET_MOVIES', payload: movies}));
  };
}

export function getMovieDetail(imbdID){
  return function (dispatch){
      return fetch (`http://www.omdbapi.com/?apikey=d1dcdf9c&i=${imbdID}`)
      .then (response => response.json())
      .then (detail => {
          dispatch({type: 'GET_MOVIE_DETAIL', payload: detail})
          console.log(detail)
      })        
  }
}

export const addRecipeFavorites = async(recetaEntera) => {
  try {
    const recetaAMandar = {
      title: recetaEntera.title, 
      healthScore: recetaEntera.healthScore,
      readyInMinutes: recetaEntera.readyInMinutes,
      servings: recetaEntera.servings,
      weightWatcherSmartPoints: recetaEntera.weightWatcherSmartPoints,
      summary: JSON.stringify(recetaEntera.summary),
      steps: recetaEntera.steps,
      diets: recetaEntera.diets
    }
        
    console.log(recetaEntera)
    const data = await fetch('http://localhost:3001/addToFavorites', {
    method: 'PUT',
    mode: 'cors',
    referrerPolicy: 'no-referrer',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recetaEntera),
    
  })
  console.log(data)
} 
  catch (err) {
    console.log('ERROR: ', err)
  }
}

// if (res.status === 200)


export function addRecipeDetail(payload){
  return {
      type: 'GET_RECIPE_DETAIL',
      payload
  }
}

export function addRecipeFavorite(recetaEntera){
  return {
      type: 'ADD_RECIPE_FAVORITE',
      payload: recetaEntera
  }
}

export function removeMovieFavorite(id){
  return {
      type: 'REMOVE_RECIPE_FAVORITE',
      payload: id
  }
}

export function createOwnRecipe(recetaCreadaEntera){
  return {
      type: 'GET_RECIPE_DETAIL',
      payload: recetaCreadaEntera
  }
}
