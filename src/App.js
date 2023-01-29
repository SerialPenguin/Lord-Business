// import React from "react";
// // import Header from "./components/Header";
// import "./App.css";
// import List from './components/List';
// import {useState, useEffect} from "react";
// // import Test from './components/test';




// class App extends React.Component {

    
//   componentDidMount(){
//     this.fetchData();
//   }

//   async fetchData(){
//     const url = 'https://swapi.dev/api/people/';
//     return fetch(url)
//         .then(response => response.json())
//         .then(parsedJSON => this.setState({results: parsedJSON.results}))
//         .catch(error => console.log(error));
        
// }

    

// render() {
//     const data =[{"name": "test1"},{"name":"test2"}];
//     return (
//       <div>
//       {data.map(function(d, idx){
//          return (<li key={idx}>{d.name}</li>)
//        })}
//       </div>
//     );
//   }
// }
// export default App