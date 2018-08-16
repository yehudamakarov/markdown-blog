import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostView from './PostView';

class PostViewContainer extends Component {
    handleBack = () => {
        const { history } = this.props;
        history.goBack();
    };

    render() {
        const { posts, match } = this.props;
        const post = posts.find(postObject => postObject.slug === match.params.post);
        return <PostView handleBack={this.handleBack} post={post} />;
    }
}

const mapStateToProps = state => ({
    posts: state.posts,
});

export default connect(mapStateToProps)(PostViewContainer);
