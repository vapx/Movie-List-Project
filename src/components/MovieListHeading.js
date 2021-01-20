import React from "react";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function MovieListHeading(props){
    return(
        <Col>
            <h1 className="text-white">{props.heading}</h1>
        </Col>
    )
}

export default MovieListHeading;