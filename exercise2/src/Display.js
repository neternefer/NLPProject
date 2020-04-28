import React, { Component } from 'react'
import Movie from './Movie'

class Display extends Component {
    render(){
        const { users, movies, likedMovies } = this.props;
        const movieKeys = Object.keys(movies);
        const movieList = movieKeys.map(id =>(
            <Movie key={id} movieData={movies[id]} users={users} likedUsers={likedMovies[id]}/>
        ));
        return (
            <ul>{movieList}</ul>
        )
    }
}

export default Display