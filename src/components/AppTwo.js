import { useEffect, useState } from "react";

function Characters() {
    function loadCharacters() {
        fetch("https://swapi.dev/api/people/")
            .then((response) => response.json())
            .then((data) => setCharacter(data.name));
    }

const [name, setCharacter] = useState([]);
useEffect(() => {
    loadCharacters();
}, []);

return (
    <div>
<p></p>
<button onClick={loadCharacters}>Load Characters</button>
</div>
)

}

export default Characters