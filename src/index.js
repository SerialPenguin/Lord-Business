import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import List from './components/Characters';
import Header from './components/Header';
import Planets from './components/planets';
import Vehicles from './components/Vehicles';
import Starships from './components/starships';
import Films from './components/Films';
import Species from './components/species';

// import Test from './components/test'
// // import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Header/>
    {/* <App /> */}
    <List/>
    <Planets/>
    <Films/>
    <Species/>
    <Vehicles/>
    <Starships/>
    </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
