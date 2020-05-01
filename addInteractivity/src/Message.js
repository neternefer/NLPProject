import React, { Component } from 'react'

class Message extends Component {

    render() {
        return (
                <li
                  key={this.props.key}
                  className={this.props.className}
                >
                  <p>{`${this.props.username}: ${this.props.text}`}</p>
                </li>
        )
    }
}

export default Message