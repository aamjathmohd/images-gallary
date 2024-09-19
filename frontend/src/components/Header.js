import React from "react";
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

const Header=(props)=>{
    const {title}=props;
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">{props.title}</Navbar.Brand>         
            </Container>
        </Navbar>
    )
};
export default Header;