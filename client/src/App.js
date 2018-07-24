import React, { Component, Fragment } from 'react';
import PublicContainer from './publicContainer/PublicContainer'
import AdminContainer from './adminContainer/AdminContainer'
import Login from './adminContainer/components/Login';
import PrivateRoute from './adminContainer/utilities/PrivateRoute';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Router>
            <Fragment>
              <Route exact path='/' component={PublicContainer} />
              { /*<PrivateRoute exact path='/admin' component={AdminContainer} /> */}
              <Route exact path='/admin' component={AdminContainer} />
              <Route exact path='/login' component={Login} />
            </Fragment>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
