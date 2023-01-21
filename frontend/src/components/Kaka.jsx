import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Kaka extends Component {
    render() {
        return (
            <div>
                <h1>This is the kaka page</h1>
                <Link to="../">Go back home</Link>
            </div>
        );
    }
}

export default Kaka;
