import React from 'react'

class Button extends React.Component {
    render() {
        return (
            <button value={this.props.value} onClick={() => this.props.onChoice()}/>
        )
    }
}

export default Button