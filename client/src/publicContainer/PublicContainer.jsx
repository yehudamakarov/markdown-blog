import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TitleBar from './TitleBar';

const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      height: '100%'
    }
})

class PublicContainer extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Typography
                    component="div"
                    
                >
                    <TitleBar />
                </Typography>
            </div>
            
        )
    }
}

export default withStyles(styles)(PublicContainer)
