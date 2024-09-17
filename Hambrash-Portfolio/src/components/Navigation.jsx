import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

import '../css/App.css';

export const Navigation = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg bg">
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
                                <Link className="nav-link active me-2" aria-current="page" to="/" style={{ color: '#E9DCD6' }}>Home</Link>
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
            </nav>
        </>
    );
};
