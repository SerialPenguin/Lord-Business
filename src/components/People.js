import {useState, useEffect} from 'react';

function App() {

    const [name, setName] = useState([]);

useEffect(() => {
    names()
}, [])

const names = async () => {
    const response = await fetch ('https://swapi.dev/api/people/');

    setName(await response.json())
}


return (
    <div>

    <h1>Hello</h1>
    <ol className="list-group list-group-numbered">

        {name.map((data) => {
            return(
                <li classname="list-group-item" key={data.id}> {data.title} </li>
            )
        })}
    </ol>

    </div>
)

}

export default App;