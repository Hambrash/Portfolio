
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'; // Import Link from React Router
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/App.css';

export const Navigation = () => {
    const [expanded, setExpanded] = useState(false); // State to track if the navbar is expanded
    const navbarRef = useRef(null); // Ref to track the navbar element

    // Function to handle closing the navbar when clicking outside
    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setExpanded(false);
        }
    };

    useEffect(() => {
        // Add event listener when component mounts
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Clean up the event listener when component unmounts
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
              <Navbar ref={navbarRef} fixed="top" expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)} className="bg">
            <Container>
                <Navbar.Brand href="#home" style={{ color: '#E9DCD6', fontSize: '30px' }}>
                    H a m b r a s h
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" style={{ color: '#E9DCD6' }} onClick={() => setExpanded(false)}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/About" style={{ color: '#E9DCD6' }} onClick={() => setExpanded(false)}>
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Project" style={{ color: '#E9DCD6' }} onClick={() => setExpanded(false)}>
                            Projects
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Experience" style={{ color: '#E9DCD6' }} onClick={() => setExpanded(false)}>
                            Experience
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Contact" style={{ color: '#E9DCD6' }} onClick={() => setExpanded(false)}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

           
        </>
    );
};

{/* <nav className="navbar fixed-top navbar-expand-lg bg">
                <div className="container-fluid">
                    <a className="navbar-brand fs-2" href="#" style={{color:'#E9DCD6'}}>
                        H a m b r a s h
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active me-2" aria-current="page" to="/Home" style={{ color: '#E9DCD6' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-2" aria-current="page" to="/About" style={{ color: '#E9DCD6' }}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-2" aria-current="page" to="/Projects" style={{ color: '#E9DCD6' }}>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-2" aria-current="page" to="/Experience" style={{ color: '#E9DCD6' }}>Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-2" aria-current="page" to="/Contact" style={{ color: '#E9DCD6' }}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}