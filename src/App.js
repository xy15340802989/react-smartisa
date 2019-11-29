import React, { Component } from 'react'
import {RouteConfig} from "router"
import routerEach from "utils/routeEach"
import {HashRouter as Hash,Switch,Redirect} from "react-router-dom"
export default class App extends Component {
  render() {
    return (
      <Hash>
        <Switch>
          {routerEach(RouteConfig)}
          <Redirect from="/" to ="/home" exact></Redirect>
        </Switch>
        
      </Hash>
    )
  }
  
}









// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// // hooks

// export default App;
