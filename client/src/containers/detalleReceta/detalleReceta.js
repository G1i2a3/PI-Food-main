import React, {useState, useEffect} from 'react';
import './detalleReceta.css';
import { connect } from 'react-redux';
import { addRecipeDetail } from '../../Redux/actions/index';
import NavBar from '../NavBar/NavBar';


function DetalleReceta (props) {

  const [steps, setSteps] = useState(props.recipeDetail.analyzedInstructions[0].steps) // 
  const [summary, setSummary] = useState(props.recipeDetail.summary)
  
  
  useEffect( ()=> { 
    const htmlObjectSummary = document.getElementById('p1')
    htmlObjectSummary.innerHTML = summary
  }, [])

    // var summary = props.recipeDetail.summary;
    // var htmlObjectSummary = document.getElementById('p1');
    // htmlObjectSummary.innerHTML = summary;

    // props.props.includes()
    // console.log(steps)

    return (
        <div className='cuerpo'>
          <NavBar/>
            <h1 className='titulo_receta'>{props.recipeDetail.title}</h1>
          <br></br>
          <br></br>
            <img className='foto2' src={props.recipeDetail.image} alt=''/>
            <br></br>
            <br></br>
            <div className='summary_div'>
            <h2 className='step_size'>Diet type:</h2> 
            <p>{props.recipeDetail.diets.map(d => {
              if (props.recipeDetail.diets[props.recipeDetail.diets.length-1] === d){
                return d[0].toUpperCase() + d.substring(1)+"."
              } 
              return d[0].toUpperCase() + d.substring(1) + ", "
            })}
            </p> 
            </div>
          <div className='summary_div'>
          <h2 className='step_size'>Health Score:</h2>
          <p>{props.recipeDetail.healthScore}</p>
          </div>
          <div className='summary_div'>
          <h2 className='step_size'>Time needed:</h2>
          <p>{props.recipeDetail.readyInMinutes} Min.</p>
          </div>
          <div className='summary_div'>
          <h2 className='step_size'>Servings:</h2>
          <p>{props.recipeDetail.servings}</p>
          </div>
          <div className='summary_div'>
          <h2 className='step_size'>Smart Points: </h2>
          <p>{props.recipeDetail.weightWatcherSmartPoints}</p>
          </div>
          <br></br>
          <br></br>
          <div className='summary_div'>
          <h2 className='step_size'>Recipe summary:</h2>
          {/* <p id='p1' className=''>{props.recipeDetail.summary.replace(/<[^>]*>/g, '')}</p> */}
          <p id='p1' ></p>
          </div>
          <br></br>
          <br></br>
          <div className='summary_div'>
          <h2 className='step_size'>Step by step: </h2>
          {/* if has own roperty cheap hacer asi como esta abajo, sino, si es de mi DB pongo directo el texto ya que no es HTML */}
          <p>{steps.map(s => <p className=''>{steps.indexOf(s)+1}- {s.step}</p>)}</p>
          </div>
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
