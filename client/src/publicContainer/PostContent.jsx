import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown';
import './PostContent.css';
import './prism.css';
import Prism from 'prismjs';

class PostContent extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        const { content } = this.props;
        return (
            <Typography component="div">
                <ReactMarkdown source={content} className="content" />
            </Typography>
        );
    }
}

export default PostContent;
