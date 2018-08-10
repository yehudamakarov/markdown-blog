import React from 'react';
import { Route } from 'react-router-dom';
import PostList from './PostList';
import PostViewContainer from './PostViewContainer';

export default ({ match }) => (
    <div>
        <Route path={`${match.url === '/' ? '' : match.url}/tags/:tag`} component={PostList} />
        <Route exact path={`${match.url}`} component={PostList} />
        <Route exact path="/posts" component={PostList} />
        {/* insert routes for the view here. posts/:postslug */}
        <Route path={`${match.url === '/' ? '' : match.url}/posts/:post`} component={PostViewContainer} />
    </div>
);
