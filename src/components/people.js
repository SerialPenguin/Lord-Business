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
                            <li key={item.results}>
                                Results: 
                                <br></br>
                                Name: {item.name}
                                <br></br>
                                Height: {item.height}
                                <br></br>
                                Weight: {item.mass}
                            </li>
                        ))}
                    </ul>

                </div>
            )
        }


    }
}


export default People;