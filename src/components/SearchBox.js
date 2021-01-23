import React from "react";
import Form from 'react-bootstrap/Form'

function SearchBox(props){
    return(
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control 
                value={props.value}
                onChange={(event)=> props.setSearchValue(event.target.value)}
                type="email" 
                placeholder="Search a movies.." />
            </Form.Group>
        </Form>
    )
    
}

export default SearchBox;
