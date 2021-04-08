import React, { useContext } from 'react';
import {Navbar, Nav,} from 'react-bootstrap';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    
    return (
        <div className="header">
          <Navbar expand="lg" className="container">
            <Navbar.Brand href="/" className="logo">Gadget Mart</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navbarNav">
                 <Nav.Link href="/home" className="navItem">Home</Nav.Link>
                 <Nav.Link href="/order" className="navItem">Orders</Nav.Link>
                 <Nav.Link href="/admin" className="navItem">Admin</Nav.Link>
                 <Nav.Link href="/deal" className="navItem">Deals</Nav.Link>
                 {
                     loggedInUser.name ? <img className="img-fluid userPhoto" src={loggedInUser.photo} alt={loggedInUser.name}/>
                     :
                     <Nav.Link href="/Login" className="navItem loginBtn">Login</Nav.Link>
                 }
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;