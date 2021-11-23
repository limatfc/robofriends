import React, { Component } from "react";
import CardList from "./CardList"
import SearchBox from "./SearchBox"
import "./App.css"
import Scroll from "./Scroll"


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
           return response.json();
        })
        .then(jsonResponse => {
            this.setState({ robots: jsonResponse })
        })
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

        // console.log(filteredRobots)
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div className="tc">
                <h1 className="f-subheadline lh-title">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }
}

export default App;