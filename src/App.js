import React, { useState }from 'react';
import Characters from './components/Characters';
import Header from './components/Header';
import Planets from './components/Planets';
import Vehicles from './components/Vehicles';
import Starships from './components/Starships';
import Films from './components/Films';
import Species from './components/Species';


//import all the components
//using conditional ternary with state, to show the catagories
export default function App() {
    const [state, setState] = useState('');
    return (
    <div>
        <Header setState = {setState}/>
        <Characters state = {state}/>
        <Planets state = {state}/>
        <Films state = {state}/>
        <Species state = {state}/>
        <Vehicles state = {state}/>
        <Starships state = {state}/>
    </div>
    )
}