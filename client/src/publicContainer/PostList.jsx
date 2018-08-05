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
        const filteredPosts = match.params.tag
            ? posts.filter(post => {
                  const tagNames = post.tags.map(tag => tag.name);
                  return tagNames.includes(match.params.tag);
              })
            : posts;
        return (
            <Grid container justify="space-around" alignItems="center" direction="column" spacing={16}>
                {filteredPosts.map(post => (
                    <PostCard
                        tags={post.tags}
                        match={match}
                        key={post.slug}
                        id={post.id}
                        title={post.title}
                        slug={post.slug}
                        description={post.description}
                        content={post.content}
                        coverImage={post.cover_image}
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
