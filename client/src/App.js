import React, { Component, Fragment } from 'react';
import TestLoginButton from './components/TestLoginButton';
import TestSessionButton from './components/TestSessionButton';
// <TestLoginButton aProp={{objKey: 'objValue'}} {...{propName: 'PropValue'}} />
// <TestSessionButton/>
import { 
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'

// soon to be redux store.
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signOut(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
}

const Public = () => <h3>Public Blog View Component</h3>
const Protected = () => (
  <div>
    <p>Protected Admin Dashboard that contains View Component</p>
    <LogOut />
  </div>
)
const LogOut = withRouter(({ history }) => (
  fakeAuth.isAuthenticated === true
    ? <button onClick={() => {
        fakeAuth.signOut(() => {
          history.push('/')
        })
      }}>LogOut</button>
    : null
))

class Login extends Component {

  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      })
    })
  }

  render() {
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer === true) {
        return <Redirect to='/admin' />
    }
    return (
      <div>
        <p>Please Login</p>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route exact { ...rest } render={(routeProps) => (
    // reduxstore.isLoggedIn
    fakeAuth.isAuthenticated === true
      ? <Component {...routeProps} />
      : <Redirect to={{
            pathname: '/login'
          }} 
        />
    )}
  />
)



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
        <Router>
          <Fragment>
            <Route exact path='/' component={Public} />
            <PrivateRoute exact path='/admin' component={Protected} />
            <Route exact path='/login' component={Login} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
