import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Row from "react-bootstrap/Row";
import MovieListHeading from "./components/MovieListHeading";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";

function App() {
  const [ movies,setMovies ] = useState([]);

  function getMovieRequest(){
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://www.omdbapi.com/?i=tt3896198&apikey=d67b18cd&s=avengers'
    };
    
    axios(config)
    .then(function (response) {
      setMovies(response.data.Search);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  
	useEffect(() => {
		getMovieRequest();
	}, []);

  return (
    <div className="container-fluid">
      <div className=" row d-flex align-items-center m-4">
        <MovieListHeading heading="Movies"/>
        <SearchBox/>
      </div> 
      <div className="row scroll">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
