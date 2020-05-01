import React, { Component } from 'react'

class InputGroup extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMessage(this.props.message);
    }
    render() {
        return (
            <div>
              <form className="input-group" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control"
                placeholder="Enter your message..."
                value={this.props.message.text}
                onChange={this.props.handleChange}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.props.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
        )
    }
}

export default InputGroup