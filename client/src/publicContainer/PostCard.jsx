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
import PostView from './PostView';
import PostEdit from './PostEdit';

const styles = theme => ({
    card: {
        // margin: 'auto',
        // marginTop: 'auto',
        // marginBottom: 'auto',
        // minHeight: '100%',
    },
    media: {
        display: 'block',
        margin: 'auto',
        maxWidth: '100%',
    },
    chip: {
        margin: theme.spacing.unit / 2,
    },
});

function PostCard({
    match,
    classes,
    id,
    tags,
    title,
    slug,
    description,
    content,
    cover_image: coverImage,
    created_at,
}) {
    return (
        <Grid item xs={10} lg={6}>
            <Card className={classes.card}>
                <CardMedia image={coverImage}>
                    <img className={classes.media} src={coverImage} alt="" />
                </CardMedia>
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
                            <PostView description={description} title={title} content={content} />
                        </Grid>
                        <Grid item>
                            <PostEdit title={title} />
                            <Button size="small" color="primary">
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default withStyles(styles)(PostCard);
