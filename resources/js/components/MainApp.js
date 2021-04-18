import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import { connect } from 'react-redux'

const InitialPath = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
)

@connect(({ auth, settings }) => {
  const { user } = auth

  return { user, settings }
})
export default class MainApp extends React.Component {
    render() {
        const { location, match, user } = this.props

        if (location.pathname === '/') {
          if (user === null) {
            return <Redirect to={'/login'} />
          } else {
            return <Redirect to={'/app/home'} />
          }
        } else if (user && location.pathname === '/login') {
          return <Redirect to={'/app/home'} />
        }

        return (
          <div>
                <InitialPath
                    path={`${match.url}app`}
                    user={user}
                    component={Home}
                />
                <Route path='/login' component={Login}/>
            </div>
        );
    }
}
