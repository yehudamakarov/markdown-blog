import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPosts from '../store/actions/fetchPosts';

class PostList extends Component {
    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
    }

    render() {
        const { match } = this.props;
        return (
            <div>
                <h1>Post List</h1>
                <p>{match.params.tag}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({ posts: state.posts });

export default connect(
    mapStateToProps,
    { fetchPosts }
)(PostList);
