import React from 'react';

class Echo extends React.Component {
    state = {
        typed: '',
      };

    inputChange = (e) => {
        this.setState(
            { typed: e.target.value }
        );
      };

    render() {
        return (
            <div className="container">
                <input type="text" value={this.state.typed} placeholder="Say Something"
                onChange={this.inputChange}/>
                <p className="echo">Echo:</p>
                <p>{this.state.typed}</p>
            </div>
        )
    }
};

export default Echo;