import React, { Component } from 'react'
import AddUser from './AddUser';
import UserInputs from './UserInputs'

class CreateUser extends Component {
    state = {
        firstName: '',
        lastName: '',
        username: ''
    };


    render() {
        return (
            <div className="create-user">
                <form className="user-input">
                    <label htmlFor="firstname">Enter your first name</label>
                    <input id="firstname" type="text" value={this.state.firstName}
                    onChange={(e) => this.handleFname(e.target.value)}></input>
                    <label htmlFor="lastname">Enter your last name</label>
                    <input id="lastname" type="text" value={this.state.lastName}
                    onChange={(e) => this.handleLname(e.target.value)}></input>
                     <label htmlFor="username">Enter your username</label>
                    <input id="username" type="text" value={this.state.username}
                    onChange={(e) => this.handleUname(e.target.value)}></input>
                    <AddUser fields={this.state.player} click={this.addNewPlayer} disabled={this.correctInput}/>
                </form>
            </div>

        )
    }
}

export default CreateUser