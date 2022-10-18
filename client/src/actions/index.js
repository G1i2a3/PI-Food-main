export function getRecipe(input){
      return fetch(`http://www.omdbapi.com/?apikey=d1dcdf9c&s=${title}`)
      .then(response => response.json())
      .then(recetas => dispatch({type: 'GET_MOVIES', payload: recetas}));
}