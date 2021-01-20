import React from "react";

function MovieList(props){

    return(
        <>
            {props.movies && props.movies.map((movie) => 
                <div className="d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt="movie" />
                </div>
            )}
        </>

    )
}

export default MovieList;