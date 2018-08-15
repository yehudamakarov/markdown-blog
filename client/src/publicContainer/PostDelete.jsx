import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { destroyPostAction } from '../store/actions/postActions';

const styles = theme => ({
    inlineButton: {
        display: 'inline',
        marginLeft: theme.spacing.unit * 2,
    },
});

class PostDelete extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    delete = () => {
        const { destroyPostAction, id } = this.props;
        destroyPostAction(id);
    };

    preserve = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        const { classes } = this.props;
        return (
            <div className={classes.inlineButton}>
                <Button onClick={this.handleClickOpen} variant="contained" size="small" color="secondary">
                    Delete
                </Button>
                <Dialog
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Delete This Post?</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            This action cannot be reversed without a time machine. Please be sure you know what you are
                            doing.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.preserve} color="primary" autoFocus>
                            Preserve
                        </Button>
                        <Button onClick={this.delete} color="secondary">
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(
    connect(
        null,
        { destroyPostAction }
    )(PostDelete)
);
