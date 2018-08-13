import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import PostContent from './PostContent';

const styles = {
    moveIcon: {
        paddingLeft: '8px',
    },
    description: {
        paddingLeft: '8px',
        marginTop: '2%',
    },
    appBar: {
        position: 'static',
    },
    flex: {
        flex: 1,
    },
    contentAppBarFix: {
        paddingTop: '64px',
    },
    container: {
        maxWidth: '1020px',
        margin: 'auto',
    },
};

const PostView = ({ classes, handleBack, content, title, description }) => (
    <div className={classes.container}>
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.moveIcon}>
                {/* make into a back button */}
                <IconButton color="inherit" onClick={handleBack} aria-label="Back">
                    <CloseIcon />
                </IconButton>
                <Typography variant="title" color="inherit" className={classes.flex}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
        <Paper>
            <Typography className={classes.description} variant="headline">
                {description}
            </Typography>
            <Divider />
            <PostContent content={content} />
        </Paper>
    </div>
);

export default withStyles(styles)(PostView);
