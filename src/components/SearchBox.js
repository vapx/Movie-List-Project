import React from "react";
import Form from 'react-bootstrap/Form'

function SearchBox(){
    return(
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Search a movies.." />
            </Form.Group>
        </Form>
    )
    
}

export default SearchBox;
