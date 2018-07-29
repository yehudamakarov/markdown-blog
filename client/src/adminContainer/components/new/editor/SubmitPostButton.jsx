import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceICon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
  button: {
    marginBottom: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

function SubmitPostButton(props) {
  const { onPostSubmit, classes } = props;
  return (
    <div>
      <Button fullWidth onClick={() => onPostSubmit()} variant="contained" color="secondary" className={classes.button}>
        Submit
        <CloudUploadIcon className={classes.rightIcon} />
      </Button>
    </div>
  );
}

export default withStyles(styles)(SubmitPostButton);