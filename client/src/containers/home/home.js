import React, {useState} from 'react';
import './home.css';
import {Recipe} from "../../Components/receta";


export default function Home() {

  
  const [recipes, setRecipes] = useState([])
  const [select, setSelect] = useState(false)

  const api_key = '450cc799185f47f58184c605cfd7c657'

  const handleChange = (recipe) => {
    // function getRecipe(title){
      setSelect(true)
      if (recipe.length > 3) {
        return fetch( `https://api.spoonacular.com/recipes/complexSearch?query=${recipe}&apiKey=${api_key}&addRecipeInformation=true`)       

        .then(response => response.json())
        .then(r => setRecipes(r.results))
        .catch (err => console.log(err, recipe))
      }
    // }
  }

  return (
    <div className="search_recipe">
      <h1 className='home-header'>Recetas</h1>
        <form>
          <input onChange={(e) => handleChange(e.target.value)} type='text' placeholder="Busca recetas aca..." />
        </form>
        <button onClick={() => setSelect(!select)}>Filtrar</button>
        {
        select &&
        <div>
        <ul name="select">
          <input type="checkbox"/>Gluten Free
          <br></br>
          <input type="checkbox"/>Ketogenic
          <br></br>
          <input type="checkbox"/>Vegetarian
          <br></br>
          <input type="checkbox"/>Lacto-Vegetarian
          <br></br>
          <input type="checkbox"/>Ovo-Vegetarian
          <br></br>
          <input type="checkbox"/>Vegan
          <br></br>
          <input type="checkbox"/>Pescetarian
          <br></br>
          <input type="checkbox"/>Paleo
          <br></br>
          <input type="checkbox"/>Primal
          <br></br>
          <input type="checkbox"/>Low FODMAP
          <br></br>
          <input type="checkbox"/>Whole30
        </ul>
        </div>
        }

      {recipes.length > 0 && 
      recipes.map(r => {
        return <Recipe props={r}></Recipe>
      })} 
      </div>
  )
};