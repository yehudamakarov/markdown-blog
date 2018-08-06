import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TitleBar from './TitleBar';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        height: '100%',
    },
});

class PublicContainer extends Component {
    render() {
        const { classes, match } = this.props;
        return (
            <div className={classes.root}>
                <Typography component="div">
                    <TitleBar match={match} />
                </Typography>
            </div>
        );
    }
}

export default withStyles(styles)(PublicContainer);
