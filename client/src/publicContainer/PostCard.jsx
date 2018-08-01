import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PostView from './PostView';

const styles = {
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
};

function SimpleMediaCard(props) {
    const { classes, id, title, slug, description, content, cover_image: coverImage, created_at } = props;
    return (
        <Grid item sm={6}>
            <Card className={classes.card}>
                <CardMedia image={coverImage}>
                    <img className={classes.media} src={coverImage} alt="" />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {title}
                    </Typography>
                    <Typography component="p">{description}</Typography>
                </CardContent>
                <CardActions>
                    <PostView description={description} title={title} content={content} />
                </CardActions>
            </Card>
        </Grid>
    );
}

export default withStyles(styles)(SimpleMediaCard);
