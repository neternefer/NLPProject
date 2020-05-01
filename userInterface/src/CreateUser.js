import React, { Component } from 'react'
import AddUser from './AddUser';

class CreateUser extends Component {
    state = {
        player: {
            firstName: '',
            lastName: '',
            username: ''
        },
        playerExists: false
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value)
        this.setState((oldState) => ({
            ...oldState,
            player: {
                ...oldState.player,
                [name]: value
            }
        }))
    };

    playerExists = (newUsername) => {
        for(const player of this.props.players) {
            console.log(this.props.players)
            if(player.username === newUsername) {
                return true;
            }
        }
        return false;
    };

    isEmpty = () => {
        for(const player in this.props.players) {
           return(player.firstName === '' || player.lastName === '' || player.username === '')
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const playerExists = this.playerExists(this.state.player.username)
        if(!playerExists) {
            this.props.newPlayer(this.state.player)
        }
        this.setState(() => ({
            playerExists,
        }))
    };

    render() {
        return (
            <div className="create-user">
                <form className="user-input" onSubmit={this.handleSubmit}>
                    <label htmlFor="firstname">Enter your first name</label>
                    <input id="firstname"
                    name="firstName" value={this.state.player.firstName}
                    onChange={this.handleChange}></input>
                    <label htmlFor="lastname">Enter your last name</label>
                    <input id="lastname"
                    name="lastName" value={this.state.player.lastName}
                    onChange={this.handleChange}></input>
                     <label htmlFor="username">Enter your username</label>
                    <input id="username"
                    name="username" value={this.state.player.username}
                    onChange={this.handleChange}></input>
                    <AddUser disabled={this.isEmpty}/>
                </form>
                {console.log(this.state.playerExists)}
                    {this.state.playerExists
                    ? (<p>This username is already taken</p>)
                    : ('')}
            </div>

        )
    }
}

export default CreateUser