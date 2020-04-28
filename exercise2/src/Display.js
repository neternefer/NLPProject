import React, { Component } from 'react'
import Movie from './Movie'

class Display extends Component {
    constructor(props) {
        super(props);
        this.likedMovies = []
    }
    render(){
        const { profiles, users, movies } = this.props;
        profiles.map(profile => {
            if(!this.likedMovies.includes(profile.favoriteMovieID)) {
                this.likedMovies.push(profile.favoriteMovieID)
            }
        })
        const movieKeys = Object.keys(movies)
        return (
        movieKeys.map(key => {
            return(<Movie movie={movies[key]} profiles={profiles} users={users} likedMovies={this.likedMovies}/>)
        })
        )
    }
}

export default Display