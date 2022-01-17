import React, { Component } from 'react';

export default class ClassComponentProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruitBowl: ["Banana", "Apple", "Pear", "Peach", "Kiwi"],
            newFruit: "",
        };
        this.addFruit = this.addFruit.bind(this);
    }

    addFruit(event) { //this is the event where a user "adds" fruit into the array
        event.preventDefault();
        this.setState({
            fruitBowl: [...this.state.fruitBowl, this.state.newFruit],
            newFruit: "",
        });
    }

    changeHandler(event) {
        this.setState({ newFruit: event.target.value });
    }

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <form onSubmit={this.addFruit}>
                        <input type="text"
                            value={this.state.newFruit}
                            onChange={(event) => this.changeHandler(event)}
                        />
                        <button type="submit">Add Fruit</button>
                    </form>
                </div>
            </div>
        );
    }
}


class FruitBowl extends Component {
    render() {
        return (
            <div>
                {this.props.fruits.map((fruit) => {
                    return <Fruit passingFruit = {fruit} />
                })}
            </div>
        );
    }
}

const Fruit = (props) => {
    return (
        <div>
            <h3>{props.passingFruit}</h3>
        </div>
    );
};