import React, { Component } from "react";

class Species extends Component {

    constructor(props) {
        super(props);
        this.state = {
            species: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('https://swapi.dev/api/species/')
        .then(res => res.json())
        .then(json => {
            this.setState ({
                isLoaded: true,
                species: json,
            })
        })
    }

    render() {

        let { isLoaded, species } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="App">
                    {/* Data has been loaded */}

                    <ul>
                        {species.results.map(item => (
                            <li key={item.results} className="list">
                                Race: {item.name} | 
                                Average height: {item.average_height} cm |
                                Average lifespan: {item.average_lifespan} years |
                                Classification: {item.classification}
                            </li>
                        ))}
                    </ul>

                </div>
            )
        }
    }

    
}

export default Species;