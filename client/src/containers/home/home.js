import React, {useState, useEffect} from 'react';
import './home.css';
import {Recipe} from "../../Components/receta";


export default function Home() {
  
  const [recipes, setRecipes] = useState([])
  const [select, setSelect] = useState(false)
  const [recetaBuscada, setRecetaBuscada] = useState('')
  const [foodFilters, setFoodFilters] = useState([]);
  const [recetaFiltrada, setRecetaFiltrada] = useState([]);

  //const api_key = '450cc799185f47f58184c605cfd7c657'
  const api_key = 'b807e2dedfba4732af41443ebef1ca9d'

  // useEffect( ()=> {
  //   console.log("useffect")
  //   return filterRecetas()
  // }, [foodFilters])

 
  const handleChange = (recetaInput) => {
    setRecetaBuscada(recetaInput)
      // if (recipe.length > 2) 
    }
    
    const sendSearch = async(e)=>{    
      // e.preventDefault()
      fetch( `https://api.spoonacular.com/recipes/complexSearch?query=${recetaBuscada}&apiKey=${api_key}&addRecipeInformation=true`)       
        .then(response => response.json())
        .then(r => {
          setRecipes(r.results)
          setRecetaFiltrada(r.results)
        })
        .catch (err => alert(err, recetaBuscada))
    }


const handleCheck = (value, id) => {
  let auxiliar = foodFilters
  if (!value){
    const index = foodFilters.indexOf(id);
    auxiliar.splice(index, 1)
    setFoodFilters(auxiliar)
  }
  else {
    //foodFilters.push(id);
    //setFoodFilters(auxiliar.push(id))
    setFoodFilters([...foodFilters, id])
    auxiliar = [...auxiliar, id]
    
  }
  // console.log(foodFilters)
  filterRecetas(auxiliar)
} 

const filterRecetas = (fakeFilters) => {
  let auxiliarRecetas = []
  // console.log(recipes)
  console.log("58", fakeFilters)                                       // chequiamos todos los food filters
  recipes.forEach((r) => {                                   //  chequiamos cada receta              
    let loTengoQueIncluir = true                      
      for (let i=0; i<fakeFilters.length; i++){               // en cada una, veo si tiene "diets"
        // if (!r.diets.includes(fakeFilters[i])){              // chequiamos todos los food filters // si R no incluye ese filtro
        //   const index = auxiliarRecetas.indexOf(r);          // que posicion tiene R en "auxiliar recetas"
        //   auxiliarRecetas.splice(index,1)                    // filtramos auxiliar recetas"
        // }
        if (!r.diets.includes(fakeFilters[i])) {
          loTengoQueIncluir = false
        }
      }
      if (loTengoQueIncluir) {auxiliarRecetas.push(r)}
  }) 
  setRecetaFiltrada(auxiliarRecetas)                    // seteamos las recetas filtradas 
  return console.log(auxiliarRecetas)                 
}

// if (props.props.diets.includes(foodFilters)){

// }

  return (
    <div className="search_recipe">
      <br></br>
      <h1 className='recipe'>Recetas</h1>        
        <div>
        <br></br>
          {/* <input onChange={(e) => handleChange(e.target.value)} type='text' placeholder="Busca recetas aca..." /> */}
          <input type='text' placeholder="Busca recetas aca..." onChange={e => handleChange(e.target.value)}/>
          <button onClick={(e)=>sendSearch(e)} className='button2'>Buscar</button>
        </div>
        <br></br>
        <button onClick={() => setSelect(!select)} className='button2'>Filtrar</button>        
        {
        select &&
        <div>
        <ul name="select" >
          <input type="checkbox" onChange={(e) => handleCheck(e.target.checked, "gluten free")}/>Gluten Free
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheck(e.target.checked, "ketogenic")}/>Ketogenic
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheck(e.target.checked, "vegetarian")}/>Vegetarian
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheck(e.target.checked, "lacto-vegetarian")}/>Lacto-Vegetarian
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheck(e.target.checked, "ovo-vegetarian")}/>Ovo-Vegetarian
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheck(e.target.checked, "vegan")}/>Vegan
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheck(e.target.checked, "pescatarian")}/>Pescetarian
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheck(e.target.checked, "paleo")}/>Paleo
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheck(e.target.checked, "primal")}/>Primal
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheck(e.target.checked, "low FODMAP")}/>Low FODMAP
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheck(e.target.checked, "whole30")}/>Whole30
        </ul> 
        </div>
        }

      {recetaFiltrada.length > 0 ? 
      recetaFiltrada.map(r => {
        return <Recipe props={r}></Recipe>
      }) :
      "No hay recetas que coincidan con tu busqueda."
    } 
      </div>
  )
};