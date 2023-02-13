import React from 'react';
import { Link } from "react-router-dom";
// eslint-disable-next-line

export default function Navbar() {
    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href=' '>Jaston_Ruggy</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav me-auto mb-2 mb-md-0">

                                <li className='nav-item'>
                                    <Link to="/" className="active nav-link btn btn-primary btn-sm oza">HOME</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to="/adduser" className="active nav-link btn btn-success btn-sm oza">Add User</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <h1>hgfg</h1>
        </div>
    )
}

