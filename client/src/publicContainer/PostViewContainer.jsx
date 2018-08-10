import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostView from './PostView';
import { fetchPosts, fetchTags } from '../store/actions/fetchActions';

export class PostViewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            content: '',
        };
    }

    componentDidMount() {
        const { fetchPosts, match } = this.props;
        fetchPosts().then(() => {
            const { posts } = this.props;
            const post = posts.find(postObject => postObject.slug === match.params.post);
            this.setState({
                title: post.title,
                description: post.description,
                content: post.content,
            });
        });
        // fetchTags();
    }

    handleBack = () => {
        const { history } = this.props;
        history.push('/');
    };

    render() {
        const { content, title, description } = this.state;
        return <PostView handleBack={this.handleBack} content={content} title={title} description={description} />;
    }
}

const mapStateToProps = state => ({
    posts: state.posts,
});

export default connect(
    mapStateToProps,
    { fetchPosts, fetchTags }
)(PostViewContainer);
