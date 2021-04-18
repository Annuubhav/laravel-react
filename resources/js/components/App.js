import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import MainApp from './MainApp';
import { configureStore } from '../store'

export default class App extends React.Component {
    render() {
        return (
          <Provider store={configureStore()}>
            <Router>
              <div className="App">
                <Switch>
                  <Route path="/" component={MainApp} />
                </Switch>
              </div>
            </Router>
          </Provider>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
