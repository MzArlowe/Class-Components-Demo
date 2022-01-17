import React, { Component } from 'react';

export default class ClassComponentProps extends Component {
    constructor(props) {
        super(props);
            this.state = { 
            fruitBowl: ["Banana", "Apple", "Pear", "Peach", "Kiwi"],
            newFruit: "",
        };
    }
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <form>
                        <input type="text"
                        value={this.state.newFruit} />
                        <button type="submit">Add Fruit</button>
                    </form>
                </div>
                
            
            </div>
        )
    }
}