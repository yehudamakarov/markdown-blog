import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const styles = {
    moveIcon: {
        paddingLeft: '8px',
    },
    title: {
        paddingLeft: '10%',
        marginTop: '2%',
    },
    appBar: {
        position: 'fixed',
    },
    flex: {
        flex: 1,
    },
    contentAppBarFix: {
        paddingTop: '64px',
    },
    inlineButton: {
        display: 'inline',
    },
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class PostEdit extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, title } = this.props;
        const { open } = this.state;
        return (
            <div className={classes.inlineButton}>
                <Button size="small" color="primary" onClick={this.handleClickOpen}>
                    Edit
                </Button>
                <Dialog fullScreen open={open} onClose={this.handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar className={classes.moveIcon}>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                Editing: {title}
                            </Typography>
                            <Button color="secondary" onClick={this.handleClose}>
                                Delete
                            </Button>
                            <Button color="inherit" onClick={this.handleClose}>
                                Save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <Paper className={classes.contentAppBarFix}>
                        <Typography>Editor with filled state</Typography>
                    </Paper>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(PostEdit);
