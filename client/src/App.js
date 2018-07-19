import React, { Component, Fragment } from 'react';
import PublicContainer from './publicContainer/PublicContainer'
import AdminContainer from './adminContainer/AdminContainer'
import Login from './adminContainer/Login';
import PrivateRoute from './adminContainer/PrivateRoute';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
        <Router>
          <Fragment>
            <Route exact path='/' component={PublicContainer} />
            <PrivateRoute exact path='/admin' component={AdminContainer} />
            <Route exact path='/login' component={Login} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
