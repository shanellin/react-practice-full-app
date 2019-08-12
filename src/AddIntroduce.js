import React, { Component } from 'react'

class AddIntroduce extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addIntroduce(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label>Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label>Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddIntroduce