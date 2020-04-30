import React, { Component } from 'react'

class ToggleGames extends Component {
    render() {
        return (
            <button onClick={this.props.handleToggle} value="Hide games"></button>
        )
    }
}

export default ToggleGames