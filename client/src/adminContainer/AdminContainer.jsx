import React from 'react';
import { connect } from 'react-redux';
import AppBar from './components/AppBar';

const AdminContainer = ({ match }) => (
    <div>
        <AppBar match={match} />
    </div>
);

export default connect(null)(AdminContainer);
