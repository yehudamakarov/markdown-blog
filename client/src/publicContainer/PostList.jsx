import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import fetchPosts from '../store/actions/fetchPosts';
import PostCard from './PostCard';

class PostList extends Component {
    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
    }

    render() {
        const { match, posts } = this.props;
        return (
            <Grid container direction="row" spacing={16}>
                {posts.map(post => (
                    <PostCard
                        match={match}
                        key={post.slug}
                        id={post.id}
                        title={post.title}
                        slug={post.slug}
                        description={post.description}
                        content={post.content}
                        cover_image={post.cover_image}
                        created_at={post.created_at}
                    />
                ))}
            </Grid>
        );
    }
}

const mapStateToProps = state => ({ posts: state.posts });

export default connect(
    mapStateToProps,
    { fetchPosts }
)(PostList);