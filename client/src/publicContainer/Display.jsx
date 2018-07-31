import React from 'react';
import { Route } from 'react-router-dom';
import PostList from './PostList';

export default ({ match }) => (
    <div>
        <Route path={`${match.url === '/' ? '' : match.url}/tags/:tag`} component={PostList} />
        <Route exact path={`${match.url}`} component={PostList} />
    </div>
);
