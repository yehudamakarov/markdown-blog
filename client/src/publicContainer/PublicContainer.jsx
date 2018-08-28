import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TitleSideBar from './TitleSideBar';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        height: '100%',
    },
});

const PublicContainer = ({ classes, match }) => (
    <div className={classes.root}>
        <Typography component="div">
            <TitleSideBar match={match} />
        </Typography>
    </div>
);

export default withStyles(styles)(PublicContainer);
