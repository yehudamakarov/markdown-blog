import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';
import './PostContent.css';
import './prism.css';
import Prism from 'prismjs';

const styles = theme => ({
    root: {
        fontSize: theme.typography.fontSize * 1.5,
    },
});

class PostContent extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        const { content, classes } = this.props;
        return (
            <Typography className={classes.root} component="div">
                <ReactMarkdown source={content} className="content" />
            </Typography>
        );
    }
}

export default withStyles(styles)(PostContent);
