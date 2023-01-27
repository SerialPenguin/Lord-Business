import React from "react";
import Header from "./components/Header";
import People from "./components/people";
import Planets from "./components/planets";
import Species from "./components/species";
import "./App.css";
// import LoadCharacters from "./components/Fetchpeople";
//import background from "./assets/StarWarsDarth.png"

export default function App() {
    return (
    // <LoadCharacters />
        
        <div>
        <Header />
        <People />
        <Planets />
        <Species />
        </div>
    )
}

