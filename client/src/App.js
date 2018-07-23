import React, { Component, Fragment } from 'react';
import PublicContainer from './publicContainer/PublicContainer'
import AdminContainer from './adminContainer/AdminContainer'
import Login from './adminContainer/components/Login';
import PrivateRoute from './adminContainer/utilities/PrivateRoute';
import { 
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
        <Router>
          <Fragment>
            <Link to='/admin'>Admin</Link>
            <Link to='/login'>Login</Link>
            <Link to='/'>Home</Link>
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
