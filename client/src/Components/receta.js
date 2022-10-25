import React, {useState} from 'react';
import './receta.css';
import { Link } from 'react-router-dom';

// class Recipe extends React.Component {
  export function Recipe (props) {

    // const [recipes, setRecipes] = useState([])

    props.props.diets.includes()

    return (
        <div>
          <p>
            <br></br>
            <Link to= {`/${props.props.title}`}>
            <h1 className='titulo_receta'>{props.props.title}</h1>
            </Link>
          </p>
            <img className='foto1' src={props.props.image} alt=''/>
          <p>
            <h2 className='diet1'>{props.props.diets.map(d => {
              // if (!d) {return "NO diets bitch"}
              if (props.props.diets[props.props.diets.length-1] === d){
                return d[0].toUpperCase() + d.substring(1)+"."
              } 
                return d[0].toUpperCase() + d.substring(1) + ", "
              })}
            </h2>
          </p>
        </div>
    );
}



// {recipes.length > 0 && 
//   recipes.map(r => {
//     return <Recipe props={r}></Recipe>
//   })} 
//   </div>
// )
// };