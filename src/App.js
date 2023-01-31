import React, { useState }from 'react';
import List from './components/Characters';
import Header from './components/Header';
import Planets from './components/planets';
import Vehicles from './components/Vehicles';
import Starships from './components/starships';
import Films from './components/Films';
import Species from './components/species';



export default function App() {
    const [state, setState] = useState('');
    return (
    <div>
        <Header setState = {setState}/>
        <List state = {state}/>
    <Planets state = {state}/>
    <Films state = {state}/>
    <Species state = {state}/>
        <Vehicles state = {state}/>
    <Starships state = {state}/>
    </div>
    )
}