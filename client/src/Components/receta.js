import React, {useState} from 'react';
import './receta.css'

// class Recipe extends React.Component {
  export function Recipe (props) {

    // const [recipes, setRecipes] = useState([])

    

    props.props.diets.includes()

    console.log(props)
    return (
        <div className="recipe_detail">
            <h1>{props.props.title}</h1>
            <img src={props.props.image} alt=''/>
            <h2>{props.props.diets.map(d => {
              if (props.props.diets[props.props.diets.length-1] === d){
                return d[0].toUpperCase() + d.substring(1)+"."} 
                return d[0].toUpperCase() + d.substring(1) + ", "
            })}</h2>
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