import React from 'react';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing.unit,
        maxWidth: '49%',
    },
});

class MouseOverPopover extends React.Component {
    state = {
        anchorEl: null,
    };

    handlePopoverOpen = event => {
        this.setState({ anchorEl: event.target });
    };

    handlePopoverClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes, src, onClick } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <IconButton onClick={onClick}>
                <DeleteOutlineIcon onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose} />
                <Popover
                    className={classes.popover}
                    classes={{
                        paper: classes.paper,
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    onClose={this.handlePopoverClose}
                    disableRestoreFocus
                >
                    <img style={{ maxWidth: '100%', height: 'auto' }} src={src} alt="" />
                </Popover>
            </IconButton>
        );
    }
}

export default withStyles(styles)(MouseOverPopover);
