import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FloatingActionButtons from './imageUrlDisplayActionButtons';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function UploadedImageUrlPreview(props) {
  const {onUrlPrepare, onUrlDelete, url, classes } = props;

  return (
    
        
        <Paper className={classes.root} elevation={8}>
            <FloatingActionButtons url={url} onUrlPrepare={onUrlPrepare} onUrlDelete={onUrlDelete}/>
            <Typography variant="headline" component="h5">
                {url.url}
            </Typography>
            <hr/>
            <img style={{maxWidth: '49%'}} src={url.url} />
            <Typography component="p">
                {url.filename}
            </Typography>
        </Paper>
    
  );
}

export default withStyles(styles)(UploadedImageUrlPreview);