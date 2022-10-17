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
    element: <Home/>
  }
  
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
