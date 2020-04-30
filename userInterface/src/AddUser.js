import React, { Component } from 'react'
import UserInput from './UserInput'

class AddUser extends Component {
    render() {
        const { fname, lname, uname } = this.props.fields;
        return (
            <div className="add-user">
                <button onClick={this.props.click}></button>
            </div>
        )
    }
}

export default AddUser