import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Toolbar from '@material-ui/core/Toolbar';
import Dashboard from './new/Dashboard';
import PublicContainer from '../../publicContainer/PublicContainer';
import Logout from './Logout';

function TabContainer(props) {
    return <Typography component="div">{props.children}</Typography>;
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        height: '100%',
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
        const { classes, match } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="sticky">
                    <Grid container justify="center">
                        <Grid item sm={9}>
                            <Toolbar variant="dense">
                                <Tabs className={classes.flex} value={value} onChange={this.handleChange}>
                                    <Tab label="New" />
                                    <Tab label="Edit" />
                                </Tabs>
                                <Logout />
                            </Toolbar>
                        </Grid>
                    </Grid>
                </AppBar>
                <Grid container justify="center">
                    {value === 0 && (
                        <Grid item sm={9}>
                            <TabContainer>
                                <div style={{ height: '100vh', padding: 24 }}>
                                    <Dashboard />
                                </div>
                            </TabContainer>
                        </Grid>
                    )}
                    {value === 1 && <PublicContainer match={match} />}
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(SimpleTabs);
