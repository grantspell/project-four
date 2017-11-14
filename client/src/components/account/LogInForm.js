import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogInForm extends Component {
    render() {
        return (
            <div>
                LogIn Form
                <h1><Link to="/workspace">DEMO</Link></h1>
            </div>
        );
    }
}

export default LogInForm;