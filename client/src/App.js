import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Home from './containers/home/home';

//import { Link } from 'react-router-dom';


function App() {
  // const redirect = () => {
  // }
  return (

    <div className="App">
      <h1 className='App-header'>Bienvenidos!</h1>
      <Link to="/home">HOME</Link>
    </div>

  );
}

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