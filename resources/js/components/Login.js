import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { loginUser } from '../reducers/actions'

@connect(
  state => ({
    auth: state.auth,
    message: state.message
  }),
  { loginUser }
)
export default class Login extends React.Component {
    constructor() {
        super();

        this.state = {
          email: '',
          password: '',
          message: ''
        }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth) {
      this.setState(prevState => ({
        prevState,
        message: nextProps.auth.message,
      }))
    }
  }
    
    handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password,
        }

        this.props.loginUser(userData, this.props.history)
    }

    render() {
        const { email, password, message } = this.state;

        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {message && (<div>{message}</div>)}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={this.onChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.onChange}
                        required
                    />
                    <button type="submit">Login</button>  
                </form>
            </div>
        );
    }
}