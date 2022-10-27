import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
// import Home from './containers/home/home';
// import crearReceta from './containers/crearReceta/crearReceta';

//import { Link } from 'react-router-dom';

function App() {
  // const redirect = () => {
  // }
  // function NavBar(){
  return (
    <div className="App">
      <br></br>
      <p>
      <Link to="/home" className='button1'>HOME</Link>
      <Link to="/myRecipes" className='button1'>MY RECIPES</Link>
      <Link to="/createRecipe" className='button1'>CREATE RECIPE</Link>
      <Link to="/favoriteRecipes" className='button1'>FAVORITE RECIPES</Link>
      </p>
      <h1 className='App-header'>WELCOME!</h1>
    </div>

  );}
// }

export default App;


// function App() {
//   return (
//       <React.Fragment>
//           <NavBar />
//           <Route exact path="/" component={Buscador} />
//           <Route path="/favs" component={Favorites} />
//           <Route path="/movie/:id" component={Movie} />
//       </React.Fragment>
//   );
// }