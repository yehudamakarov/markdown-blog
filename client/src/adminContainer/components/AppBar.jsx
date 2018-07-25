import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Dashboard from '../components/new/Dashboard';
import PublicContainer from '../../publicContainer/PublicContainer';
import Logout from '../components/Logout'
import Toolbar from '@material-ui/core/Toolbar';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 24 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  flex: {
    flexGrow: 1,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Grid container justify='center'>
            <Grid item sm={10}>
              <Toolbar>
                  <Tabs className={classes.flex} value={value} onChange={this.handleChange}>
                    <Tab label="New" />
                    <Tab label="Edit" />
                  </Tabs>
                  <Logout />
              </Toolbar>
            </Grid>
          </Grid>
        </AppBar>
        <Grid container justify='center'>
          <Grid item sm={10}>
            {value === 0 && 
                <TabContainer>
                    <Dashboard />
                </TabContainer>
            }
            {value === 1 && 
                <TabContainer>
                    <PublicContainer />
                </TabContainer>
            }
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleTabs);