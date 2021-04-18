import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

import { logoutUser } from '../reducers/actions'

@connect(state => state, { logoutUser })
export default class Home extends React.Component {
    handleLogout = (e) => {
        e.preventDefault()

        this.props.logoutUser()
    }

    render() {
        return (
            <div>
                <button onClick={this.handleLogout}>Logout</button>
                <h1>Welcome to Home Page !</h1>
            </div>
        );
    }
}