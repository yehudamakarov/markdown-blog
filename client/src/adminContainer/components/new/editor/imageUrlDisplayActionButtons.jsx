import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

function FloatingActionButtons(props) {
    const { url, onUrlPrepare, onUrlDelete, classes } = props;
    return (
        <div>
            <Button
                onClick={() => onUrlPrepare(url)}
                variant="fab"
                color="primary"
                aria-label="Add"
                className={classes.button}
            >
                <AddIcon />
            </Button>
            <Button
                onClick={() => {
                    onUrlDelete();
                }}
                variant="fab"
                aria-label="Delete"
                className={classes.button}
            >
                <DeleteIcon />
            </Button>
        </div>
    );
}

export default withStyles(styles)(FloatingActionButtons);
