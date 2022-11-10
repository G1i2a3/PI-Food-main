import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./containers/home/home"
import CrearReceta from './containers/CrearReceta/crearReceta';
import MisRecetas from './containers/misRecetas/misRecetas';
import DetalleReceta from './containers/detalleReceta/detalleReceta';
import FavoriteRecipes from './containers/favoriteRecipes/favoriteRecipes';
import { Provider } from 'react-redux';
import store from "./Redux/store/index"

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//     <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// ); //==> venia hecho

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>,
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/createRecipe",
    element: <CrearReceta/>
  },
  {
    path: "/myRecipes",
    element: <MisRecetas/>
  },
  // {
  //   path: "/favoriteRecipes",
  //   element: <FavoriteRecipes/>
  // },
  {
    path: "/:id",
    element: <DetalleReceta/>
  }
  
]);


ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
