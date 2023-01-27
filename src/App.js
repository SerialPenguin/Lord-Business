import React from "react";
import Header from "./components/Header";
// import Characters from "./components/Characters";
import People from "./components/people";
import Planets from "./components/planets";
import Species from "./components/species";
// import Starships from "./components/starships"
import AppTwo from "./components/AppTwo"
//import "./App.css";
//import background from "./assets/StarWarsDarth.png"

export default function App() {
    return (
        
        <div>
        <Header />
        <People />
        <Planets />
        <Species />
        <AppTwo />
        
        
        </div>
    )
}

