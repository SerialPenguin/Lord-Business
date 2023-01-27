import React, { Component } from "react";

class People extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('https://swapi.dev/api/people/')
        .then(res => res.json())
        .then(json => {
            this.setState ({
                isLoaded: true,
                people: json,
            })
        })
    }

    render() {

        let { isLoaded, people } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="App">
                    {/* Data has been loaded */}

                    <ul>
                        {people.results.map(item => (
                            <li key={item.results} className="list">
                                Name: {item.name} | 
                                Height: {item.height} |
                                Weight: {item.mass} |
                                Gender: {item.gender}
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

export default People;