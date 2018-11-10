import React, { Component } from 'react';
import './EssayForm.css'

class EssayForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Write about JavaScript.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //  listen for changes and set state for every change made to the textarea
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        alert(`An essay was submitted: ${this.state.value}`)
        event.preventDefault();
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
              <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default EssayForm