import React, { Component } from 'react'
import UserInput from './UserInput'

class UserInputs extends Component {
    render() {
        return (
            <div className="user-input">
                {this.props.map((input, id) => {
                    <input type="text" value={input} onChange={}>Enter {this.props[id]}></input>
                })}
            </div>
        )
    }
}

export default UserInputs