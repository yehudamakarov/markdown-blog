import React from 'react';
import { Route } from 'react-router-dom';

export default ({ match }) => (
    <div>
        <Route path={`${match.url === '/' ? '' : match.url}/tags/:tag`} />
        <Route exact path={`${match.url}`} />
    </div>
);
