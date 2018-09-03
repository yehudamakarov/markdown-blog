import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { CopyToClipboard } from 'react-copy-to-clipboard';

class CopyMarkdown extends React.Component {
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
        const { content } = this.props;
        const { open } = this.state;
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
                    View Markdown Content
                </Button>
                <Dialog open={open} onClose={this.handleClose} scroll="paper" aria-labelledby="markdown-content">
                    <DialogTitle id="markdown-dontent">Markdown Content</DialogTitle>
                    <DialogContent>
                        <DialogContentText> {content} </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <CopyToClipboard text={content}>
                            <Button onClick={this.handleClose} color="primary">
                                Copy To Clipboard
                            </Button>
                        </CopyToClipboard>
                        <Button onClick={this.handleClose} color="primary">
                            Back
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default CopyMarkdown;
