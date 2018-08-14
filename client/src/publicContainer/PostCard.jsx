import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import PostEdit from './PostEdit';
import PostDelete from './PostDelete';

const styles = theme => ({
    media: {
        display: 'block',
        margin: 'auto',
        maxWidth: '100%',
        height: 0,
        backgroundPosition: 'top',
        paddingTop: '71%',
    },
    chip: {
        margin: theme.spacing.unit / 2,
    },
});

const PostCard = ({ isLoggedIn, slug, match, classes, id, tags, title, description, content, coverImage }) => (
    <Grid item xs={6} lg={4}>
        <Card className={classes.card}>
            {coverImage ? <CardMedia className={classes.media} image={coverImage} /> : null}

            <CardContent>
                <Grid container justify="space-between">
                    <Grid item className={classes.chip}>
                        <Typography gutterBottom variant="headline" component="h2">
                            {title}
                        </Typography>
                        <Typography component="p">{description}</Typography>
                    </Grid>
                    <Grid item>
                        {tags.map(tagObject => (
                            <Chip
                                key={tagObject.slug}
                                label={tagObject.title}
                                className={classes.chip}
                                component={Link}
                                to={`${match.url.includes('/admin') ? '/admin' : ''}/tags/${tagObject.slug}`}
                                clickable
                            />
                        ))}
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Grid container justify="space-between" className={classes.chip}>
                    <Grid item>
                        <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to={`${isLoggedIn ? '/admin' : ''}/posts/${slug}`}
                        >
                            View
                        </Button>
                    </Grid>
                    {isLoggedIn && (
                        <Grid item>
                            <PostEdit
                                id={id}
                                title={title}
                                description={description}
                                tags={tags}
                                content={content}
                                coverImage={coverImage}
                            />
                            <PostDelete id={id} />
                        </Grid>
                    )}
                </Grid>
            </CardActions>
        </Card>
    </Grid>
);

const mapStateToProps = state => ({ isLoggedIn: state.auth.isLoggedIn });

export default withStyles(styles)(connect(mapStateToProps)(PostCard));
