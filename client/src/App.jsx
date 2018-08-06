import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PublicContainer from './publicContainer/PublicContainer';
import AdminContainer from './adminContainer/AdminContainer';
import Login from './adminContainer/components/Login';
import PrivateRoute from './adminContainer/utilities/PrivateRoute';
import './App.css';

const App = () => (
    <div>
        <Router>
            <Switch>
                <PrivateRoute path="/admin" component={AdminContainer} />
                <Route exact path="/login" component={Login} />
                <Route path="/" component={PublicContainer} />
            </Switch>
        </Router>
    </div>
);

export default App;
