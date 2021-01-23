import React from "react";

function MovieList(props){

    return(
        <>
            {props.movies && props.movies.map((movie) => 
                <div className=" image-container d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt="movie" />
                    <div className="overlay  d-flex align-items-center justify-content-center">Add to Favorites</div>
                </div>
            )}
        </>

    )
}

export default MovieList;