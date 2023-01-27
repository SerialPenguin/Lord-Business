import React, { useCallback, useEffect, useState } from "react";

const URL = "https://swapi.dev/api/people/"

const getPeople = async () =>{
    const peopleArr = [];
    const response = await fetch(URL);
    
    const body = await response.json();
    for(let i = 0; i < body.results.length; i ++){
        peopleArr.push(('Name: ' + body.results[i].name))
    }
    //console.log('Name: ' + body.results[i].name)
            return peopleArr
            
}


export default function Test(){

    const [person, setPerson] = useState([]);

    const onClickHandler = async () => {
        const testPerson = await getPeople();
        setPerson(prevPerson => prevPerson + testPerson)
     }


    const fetchOnMount = useCallback (async () => {
        const person = await getPeople();
    },[])
/*
    useEffect(() =>{
        onClickHandler()
    },[])

*/
    return (
        <div>
            <button onClick={onClickHandler}>Click me</button>
            <p>{person}</p>
        </div>
    )
}

/*
import React, { useCallback, useEffect, useState } from "react";

const URL = "https://swapi.dev/api/people/"

const getRandomDog = async () =>{
    const response = await fetch(URL);
    
    const body = await response.json();
   return(body.url)
}


export default function Test(){

    const [url, setUrl] = useState(null);

    const onClickHandler = async () => {
        const url = await getRandomDog();
        setUrl(url)
     }


    const fetchOnMount = useCallback (async () => {
        const url = await getRandomDog();
    },[])

    useEffect(() =>{
        onClickHandler()
    },[])

  
    return (
        <div>
            <button onClick={onClickHandler}>Click me</button>
            <img src={url} />
        </div>
    )
}
*/