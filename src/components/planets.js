import React, { Component } from "react";

class Planets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            planets: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('https://swapi.dev/api/planets/')
        .then(res => res.json())
        .then(json => {
            this.setState ({
                isLoaded: true,
                planets: json,
            })
        })
    }

    render() {

        let { isLoaded, planets } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="App">
                    {/* Data has been loaded */}

                    <ul>
                        {planets.results.map(item => (
                            <li key={item.results} className="list">
                                Name: {item.name} | 
                                Rotation Time: {item.rotation_period} days |
                                Diameter: {item.diameter} km |
                                Climate: {item.climate}
                            </li>
                        ))}
                    </ul>

                    <button>Previous</button>
                    <button>Next</button>

                </div>
            )
        }
    }

    
}

export default Planets;