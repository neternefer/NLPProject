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
        const value = e.target.value;
        console.log(value)
        this.setState({
            ...this.state.player,
            [e.target.name]: value
        })
    };

    playerExists = (username) => {
        for(const player in this.props.players) {
            console.log(this.props.players)
            if(player.username === username) {
                return true;
            }
        }
        return false;
    };

    isEmpty = () => {
        for(const player in this.props.players) {
            if(!player.firstName || !player.lastName || !player.username) {
                return true;
            }
        }
        return false;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const playerExists = this.playerExists(this.state.player.username)
        if(!playerExists) {
            this.props.newPlayer(this.state.player)
            console.log(this.props.players)
        }
        this.setState(() => ({
            playerExists
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
                    {this.state.playerExists
                    ? <p>This username is already taken</p>
                    : ''}
                </form>
            </div>

        )
    }
}

export default CreateUser