import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudDoneIcon from '@material-ui/icons/CloudDone';

const styles = theme => ({
    button: {
        marginBottom: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

function SubmitPostButton({ isGreen, isEditing, onPostSubmit, classes }) {
    const buttonValue = isEditing ? 'Update' : 'Submit';
    return (
        <div>
            <Button
                fullWidth
                onClick={() => onPostSubmit()}
                variant="contained"
                color="secondary"
                disabled={isGreen}
                className={classes.button}
            >
                {isGreen ? 'Nice!' : buttonValue}
                {isGreen ? (
                    <CloudDoneIcon className={classes.rightIcon} />
                ) : (
                    <CloudUploadIcon className={classes.rightIcon} />
                )}
            </Button>
        </div>
    );
}

export default withStyles(styles)(SubmitPostButton);
