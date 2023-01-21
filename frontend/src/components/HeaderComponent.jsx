import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }
    render() {
        return (
            <div>
                {/* <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div>
                            <a href="http://" className='navbar-brand'>Employee System</a>
                        </div>
                    </nav>
                </header> */}

                <div>
                    <header>
                        <h1>This is the home page</h1>
                        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                            <Link to="">Home Page</Link> <br />
                            <Link to="/employee">List Employee</Link>
                        </nav>
                    </header>
                </div>

            </div>
        );
    }
}

export default HeaderComponent;
