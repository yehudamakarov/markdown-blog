import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import isEditingAction from '../store/actions/isEditingAction';
import isNotEditingAction from '../store/actions/isNotEditingAction';
import MarkdownEditor from '../adminContainer/components/new/editor/EditorContainer';

const styles = theme => ({
    moveIcon: {
        paddingLeft: '8px',
    },
    title: {
        paddingLeft: '10%',
        marginTop: '2%',
    },
    appBar: {
        position: 'static',
    },
    flex: {
        flex: 1,
    },
    inlineButton: {
        display: 'inline',
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        height: '100%',
        paddingTop: '64px',
    },
});

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class PostEdit extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        const { isEditingAction } = this.props;
        this.setState({ open: true });
        isEditingAction();
    };

    handleClose = () => {
        const { isNotEditingAction } = this.props;
        this.setState({ open: false });
        isNotEditingAction();
    };

    render() {
        const { classes, title, description, tags, content, coverImage, id } = this.props;
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
                            <Button variant="contained" color="secondary" onClick={this.handleClose}>
                                Delete
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <Paper style={{ paddingTop: '64px' }}>
                        <Grid container justify="center">
                            <Grid item sm={9}>
                                <Typography component="div">
                                    <div style={{ padding: 24 }}>
                                        <MarkdownEditor
                                            id={id}
                                            title={title}
                                            description={description}
                                            tags={tags}
                                            content={content}
                                            coverImage={coverImage}
                                        />
                                    </div>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isEditing: state.isEditing,
});

export default withStyles(styles)(
    connect(
        mapStateToProps,
        { isEditingAction, isNotEditingAction }
    )(PostEdit)
);
