import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Home from './containers/home/home';
import crearReceta from './containers/crearReceta/crearReceta';

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
      <Link to="/misRecetas" className='button1'>MIS RECETAS</Link>
      <Link to="/crearReceta" className='button1'>CREAR RECETA</Link>
      </p>
      <h1 className='App-header'>Bienvenidos!</h1>
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