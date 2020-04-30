import React, { Component } from 'react'
import UserInput from './UserInput'

class AddUser extends Component {
    render() {
        return (
            <div className="add-user">
                <button onClick={this.props.click} disabled={this.props.correctInput}></button>
            </div>
        )
    }
}

export default AddUser