import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const styles = theme => ({
    button: {
        marginBottom: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

function SubmitPostButton(props) {
    const { isEditing, onPostSubmit, classes } = props;
    return (
        <div>
            <Button
                fullWidth
                onClick={() => onPostSubmit()}
                variant="contained"
                color="secondary"
                className={classes.button}
            >
                {isEditing ? 'Update' : 'Submit'}
                <CloudUploadIcon className={classes.rightIcon} />
            </Button>
        </div>
    );
}

export default withStyles(styles)(SubmitPostButton);
