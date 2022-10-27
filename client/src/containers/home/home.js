import React, {useState, useEffect} from 'react';
import './home.css';
import Recipe from "../../Components/receta";
import { addRecipeDetail } from '../../Redux/actions/index'
import { connect } from "react-redux";

function Home(props) {
  
  const [recipes, setRecipes] = useState([])
  const [selectOrderBy, setSelectOrderBy] = useState(false)
  const [recetaMostrada, setRecetaMostrada] = useState([]);
  const [selectFilter, setSelectFilter] = useState(false);
  const [recetaBuscada, setRecetaBuscada] = useState('');
  const [foodFilters, setFoodFilters] = useState([]);
  const [numeroDePagina, setNumeroDePagina] = useState(0);
  // const [recetaFiltrada, setRecetaFiltrada] = useState([]);
  // const [recetasOrdenadas, setRecetasOrdenadas] = useState([]);

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

  const irAAnteriorPagina = () => {
    if (numeroDePagina - 1 === 0){
      throw alert ("You are on the first page")
    } else {
      setNumeroDePagina (numeroDePagina -1)
    }
  }

  const irASiguientePagina = () => {
    if (numeroDePagina + 1 > Math.ceil(recetaMostrada.length/9)){
      throw alert ("You are on the last page")
    } else {
      setNumeroDePagina (numeroDePagina +1)
    }
  }
  
  const sendSearch = async(e)=>{    
    // e.preventDefault()
    fetch( `https://api.spoonacular.com/recipes/complexSearch?query=${recetaBuscada}&apiKey=${api_key}&addRecipeInformation=true`)       
    .then(response => response.json())
    .then(r => {
      setRecipes(r.results)
      setRecetaMostrada(r.results)
      // console.log((numeroDePagina-1)*9, ((numeroDePagina-1)*9)+9)
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

    ////////////--------------------     a.sort((a, b) => a.healthScore-b.healthScore)

const ordenarComida = (id) => {
  let recetasOrdenadas = []
  if (id === "a-z"){
    recipes.sort((a,b) => a.title.localeCompare(b.title))
  }
  if (id === "z-a"){
    recipes.sort((a,b) => b.title.localeCompare(a.title))
  }
  if (id === "hScorel-h"){
    recipes.sort((a,b) => a.healthScore-b.healthScore)
  }
  if (id === "hScoreh-l"){
    recipes.sort((a,b) => b.healthScore-a.healthScore)
  }
  setRecetaMostrada(recetasOrdenadas)
}

const filterRecetas = (fakeFilters) => {
  let auxiliarRecetas = []
  // console.log(recipes)
  // console.log("58", fakeFilters)                                       // chequiamos todos los food filters
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
  setRecetaMostrada(auxiliarRecetas)                    // seteamos las recetas filtradas 
  return console.log(auxiliarRecetas)                 
}

// }

  return (
    <div className="search_recipe">
      <br></br>
      <h1 className='home-header' onClick={() => {
        props.addRecipeDetail({detalle: "dettallazzo"})
        console.log("store", props.recipeDetail )
        }}>Recipes</h1>        
        <div>
        <br></br>
          {/* <input onChange={(e) => handleChange(e.target.value)} type='text' placeholder="Busca recetas aca..." /> */}
          <input type='text' placeholder="Type recipe here..." onChange={e => handleChange(e.target.value)}/>
          <button onClick={(e)=>sendSearch(e)} className='button2'>Search</button>
          <button onClick={() => setSelectFilter(!selectFilter)} className='button3'>Filter</button>        
        {
        selectFilter &&
        <div className='checked_box' >
        <ul name="selectFilter" >
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
        <button onClick={() => setSelectOrderBy(!selectOrderBy)} className='button3'>Order by</button>               
        </div>
        {
        selectOrderBy &&
        <div className='checked_box' >
        <ul name="select" >
          <input type="checkbox" id='a-z' onClick={(e) => ordenarComida('a-z')}/>Alphabetically A - Z
          <br></br>
          <input type="checkbox" id='z-a' onClick={(e) => ordenarComida('z-a')}/>Alphabetically Z - A
          <br></br>
          <input type="checkbox" id='hScorel-h' onClick={(e) => ordenarComida('hScorel-h')}/>Health Score: Low to High
          <br></br>
          <input type="checkbox" id='hScoreh-l' onClick={(e) => ordenarComida('hScoreh-l')}/>Health Score: High to Low
          <br></br>
        </ul> 
        </div>
        }
        <br></br>
       
      {/* {foodFilters.length > 0 && recetaFiltrada.length < 0}
      {"No hay recetas que coincidan con tu busqueda."}
       */}
          
      {/* {recetaFiltrada.length > 0 && 
      recetaFiltrada.map(r => {
        return <Recipe props={r}></Recipe>
      })}  */}

      {recetaMostrada.length > 0 && 
      recetaMostrada.slice(numeroDePagina*9, (numeroDePagina+1)*9).map(r => {
        return <Recipe props={r}></Recipe>
      })} 

      <div>
        <button className='button4' onClick={() => irAAnteriorPagina()}>back</button>
        <button className='pie_pagina'>Page {numeroDePagina+1}</button>
        <button className='button4' onClick={() => irASiguientePagina()}>next</button>
      </div>

      </div>
      // "No hay recetas que coincidan con tu busqueda."
  )
};


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

export default connect(mapStateToProps, mapDispatchToProps)(Home);