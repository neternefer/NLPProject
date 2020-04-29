import React from 'react'

class Button extends React.Component {
    render() {
        return (
            <button value={this.props.value} onClick={this.props.play()}/>
        )
    }
}

export default Button