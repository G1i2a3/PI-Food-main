import React, {useState, useEffect} from 'react';
import './crearReceta.css';
import NavBar from '../NavBar/NavBar';
import { connect } from "react-redux";
import { createOwnRecipe } from '../../Redux/actions/index';
import { createRecipeOnDB } from '../CrearReceta/functionality';

// const specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";

function CrearReceta(props) {

  const [dishName, setDishName] = useState('')
  const [dishResume, setDishResume] = useState('')
  const [healthScore, setHealthScore] = useState()
  const [dietTypes, setDietTypes] = useState([])
  const [stepByStep, setStepByStep] = useState('')
  const [dishImage, setDishImage] = useState("")
  
  const handleChangeDishName = (dishNameInput) => {
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(dishNameInput)) {
      alert('Insert valid Dish name')
    }
    setDishName(dishNameInput)
  }  

  const handleChangeDishResume = (dishResumeInput) => {
    setDishResume(dishResumeInput)
  }

  const handleChangeHealthScore = (dishHealthScore) => {
    if (dishHealthScore < 0 || dishHealthScore >= 100)
    {
      alert('Insert valid health score')
    }
    setHealthScore(dishHealthScore)
  }

  const handleChangeStepByStep = (dishStepByStep) => {
    setStepByStep(dishStepByStep)
  }  

  const handleCheckDietTypes = (id) => {
    const indexEnDiets = dietTypes.indexOf(id)

    if (indexEnDiets > -1) {
      let aux = dietTypes
      aux.splice(indexEnDiets, 1)
      setDietTypes(aux)
    }

    if(indexEnDiets === -1) setDietTypes ([...dietTypes, id]) 
  }

  const handleChangeImage = (dishImageInput) => {
    setDishImage(dishImageInput)
  } 

  function addTextInput() {
    <input className='input_receta' type='large text' placeholder="Type here the first step..." onChange={e => handleChangeStepByStep(e.target.value)}/>
}
  
  return (  
    <div className='create_recipe'>
    <NavBar/>
    <br></br>
    <h1 className='main-title' onClick={()=>console.log(dietTypes)}>Create your recipe here</h1>
    <br></br>
    <br></br>
    <h3 className='input_title'>Dish name:</h3>
    <input className='input_receta' type='text' placeholder="Type dish name here..." onChange={e => handleChangeDishName(e.target.value)} required/>
    <h3 className='input_title'>Dish resume:</h3>
    <input className='input_receta' type='text' placeholder="Type dish resume here..." onChange={e => handleChangeDishResume(e.target.value)} required/>
    <h3 className='input_title'>Health score: (0-100)</h3>
    <input className='input_receta' type='number' placeholder="Insert health score here..." onChange={e => handleChangeHealthScore(e.target.value)}/>
    <br></br>
    <br></br>
    <button onClick={() => setDietTypes(!dietTypes)} className='diet_type'>Diet type</button>        
        {
        dietTypes &&
        <div className='checked_box' >
        <ul name="selectFilter" >
          <input type="checkbox" onChange={(e) => handleCheckDietTypes("gluten free")}/>Gluten Free
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheckDietTypes("ketogenic")}/>Ketogenic
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheckDietTypes("vegetarian")}/>Vegetarian
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheckDietTypes("lacto-vegetarian")}/>Lacto-Vegetarian
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheckDietTypes("ovo-vegetarian")}/>Ovo-Vegetarian
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheckDietTypes("vegan")}/>Vegan
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheckDietTypes("pescatarian")}/>Pescetarian
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheckDietTypes("paleo")}/>Paleo
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheckDietTypes("primal")}/>Primal
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheckDietTypes("low FODMAP")}/>Low FODMAP
          <br></br>
          <input type="checkbox" onChange={(e) => handleCheckDietTypes("whole30")}/>Whole30
        </ul> 
        </div>
        }
    <br></br>
    <h3 className='input_title'>Step by step</h3>
    <input className='input_receta' type='large text' placeholder="Type here all the steps separated by a coma" onChange={e => handleChangeStepByStep(e.target.value)}/>
    <br></br>
    <h3 className='input_title'>Paste image link</h3>
    <input type="text" id="image-input" onChange={e => handleChangeImage(e.target.value)}></input>
    <br></br>
    <br></br>
    <button className='create_button' onClick={e => createRecipeOnDB({dishName, dishResume, healthScore, dietTypes, stepByStep, dishImage})}>Create recipe</button>   
    </div>
  )

};
  
  
function mapStateToProps(state){
  return {
    recipeDetail: state.recipeDetail
  }
}

function mapDispatchToProps(dispatch){
  return {
    createOwnRecipe: wholeRecipe => dispatch(createOwnRecipe(wholeRecipe))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CrearReceta);