import React from 'react';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';
import './customEditorStyle.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormatBold from '@material-ui/icons/FormatBold';
import FormatSize from '@material-ui/icons/FormatSize';
import FormatItalic from '@material-ui/icons/FormatItalic';
import FormatStrikethrough from '@material-ui/icons/FormatStrikethrough';
import InsertLink from '@material-ui/icons/InsertLink';
import FormatQuote from '@material-ui/icons/FormatQuote';
import Code from '@material-ui/icons/Code';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import FormatListNumbered from '@material-ui/icons/FormatListNumbered';
import CheckBox from '@material-ui/icons/CheckBox';
import removeCoverImageWithUrlAction from '../../../../store/actions/removeCoverImageWithUrlAction';
import addPostAction from '../../../../store/actions/addPostAction';
import updatePostAction from '../../../../store/actions/updatePostAction';
import CoverImageUploader from './CoverImageUploader';
import ImageUploader from './ImageUploader';
import SubmitPostButton from './SubmitPostButton';
import fetchTags from '../../../../store/actions/fetchTags';
import fetchPosts from '../../../../store/actions/fetchPosts';

const resizeIcons = { fontSize: '2.1em' };

const icons = {
    bold: <FormatBold style={resizeIcons} />,
    heading: <FormatSize style={resizeIcons} />,
    italic: <FormatItalic style={resizeIcons} />,
    strikethrough: <FormatStrikethrough style={resizeIcons} />,
    link: <InsertLink style={resizeIcons} />,
    'quote-right': <FormatQuote style={resizeIcons} />,
    code: <Code style={resizeIcons} />,
    image: <InsertPhoto style={resizeIcons} />,
    'list-ul': <FormatListBulleted style={resizeIcons} />,
    'list-ol': <FormatListNumbered style={resizeIcons} />,
    tasks: <CheckBox style={resizeIcons} />,
};

class EditorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mdeState: {
                markdown: '# Enter markdown post...',
            },
            title: '',
            description: '',
            tags: [],
            coverImage: '',
            success: false,
        };
        this.converter = new Showdown.Converter({ tables: true, simplifiedAutoLink: true });
    }

    componentDidMount() {
        const { fetchTags, isEditing } = this.props;
        fetchTags();
        if (isEditing) {
            const { title, description, tags, content, coverImage } = this.props;
            const tagNames = tags.map(tagObject => tagObject.title);
            this.setState({ mdeState: { markdown: content }, title, description, tags: tagNames, coverImage });
        }
    }

    onPostSubmit = () => {
        const { fetchPosts, fetchTags, isEditing, addPostAction, updatePostAction, id } = this.props;
        const {
            title,
            description,
            tags,
            coverImage,
            mdeState: { markdown: content },
        } = this.state;
        if (isEditing) {
            updatePostAction(
                {
                    post: {
                        title,
                        description,
                        tags,
                        cover_image: coverImage,
                        content,
                    },
                },
                id
            )
                .then(resp => {
                    console.log('resp :', resp);
                    fetchTags();
                })
                .catch(error => {
                    console.log('error.response :', error.response);
                });
        } else {
            addPostAction({
                post: {
                    title,
                    description,
                    tags,
                    cover_image: coverImage,
                    content,
                },
            })
                .then(() => {
                    fetchTags();
                    fetchPosts();
                    this.setState({
                        mdeState: {
                            markdown: '# Enter markdown post...',
                        },
                        title: '',
                        description: '',
                        tags: [],
                        coverImage: '',
                        success: true,
                    });
                    setTimeout(() => {
                        this.setState({
                            success: false,
                        });
                    }, 2000);
                })
                .catch(error => {
                    console.log('error.response :', error.response);
                });
            // .then(resp => {
            // On success, can set the state to have property that evaluates to
            // true. And a property with the new post's slug. and render a
            // redirect component down below. On the state update, component
            // will rerender the redirect to the new route.
            // console.log('resp :', resp);
            // })
            // .catch(error => {
            // On error, everything should rerender but with appropriate error
            // message. which means set a state with error properties.
            // console.log('error :', error);
            // console.log('error.response :', error.response);
            // });
        }
    };

    onUrlDelete = () => {
        this.setState(
            prevState => ({
                ...prevState,
                coverImage: '',
            }),
            () => {
                const { removeCoverImageWithUrlAction } = this.props;
                removeCoverImageWithUrlAction();
            }
        );
    };

    onUrlPrepare = url => {
        this.setState(prevState => ({
            ...prevState,
            coverImage: url.url,
        }));
    };

    handleAddTag = tag => {
        this.setState(prevState => ({
            ...prevState,
            tags: [...prevState.tags, tag],
        }));
    };

    handleDeleteTag = (tag, index) => {
        this.setState(prevState => ({
            ...prevState,
            tags: [...prevState.tags.slice(0, index), ...prevState.tags.slice(index + 1)],
        }));
    };

    handleFormChange = ({ target }) => {
        this.setState(prevState => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    handleCorrectTags = () => {
        const { imagesWithUrl } = this.props;
        const { mdeState } = this.state;
        // eslint-disable-next-line no-useless-escape
        const regex = /\(resources([^\)]+)\)/g;
        const correctedMarkdown = mdeState.markdown.replace(regex, match => {
            const correspondingImageObject = imagesWithUrl.find(
                imageObject => match === `(resources/${Object.keys(imageObject)[0]})`
            );
            if (correspondingImageObject) {
                return `(${correspondingImageObject[Object.keys(correspondingImageObject)[0]]})`;
            }
            return match;
        });
        this.setState(
            {
                mdeState: {
                    markdown: correctedMarkdown,
                },
            },
            () => {
                if (mdeState.markdown.match(regex)) {
                    this.tagsLeftToChange = mdeState.markdown.match(regex).length;
                }
            }
        );
    };

    handleValueChange = mdeState => {
        this.setState({ mdeState });
    };

    render() {
        const { success, mdeState, title, description, tags, coverImage } = this.state;
        const { isEditing, tagNames, coverImagesWithUrl } = this.props;
        const previewUrl = coverImagesWithUrl[0] // eslint-disable-next-line no-unused-vars
            ? Object.entries(coverImagesWithUrl[0]).map(([filename, url]) => url)[0]
            : null;
        const style =
            coverImage === previewUrl
                ? {
                      borderStyle: 'solid',
                      borderRadius: '4px',
                      borderColor: '#689f38',
                  }
                : {};
        return (
            <div style={{ height: '100%' }}>
                <Grid container direction="row" spacing={16}>
                    <Grid item sm={7}>
                        <form>
                            <TextField
                                onChange={this.handleFormChange}
                                name="title"
                                style={{ marginRight: '3vh', width: '90%' }}
                                label="Title"
                                value={title}
                            />
                            <TextField
                                onChange={this.handleFormChange}
                                name="description"
                                style={{ marginRight: '3vh', marginTop: '3vh', width: '90%' }}
                                label="Description"
                                multiline
                                rowsMax="4"
                                value={description}
                            />
                            <ChipInput
                                style={{ marginRight: '3vh', marginTop: '3vh', width: '90%' }}
                                value={tags}
                                label="Tags"
                                onAdd={tag => this.handleAddTag(tag)}
                                onDelete={(tag, index) => this.handleDeleteTag(tag, index)}
                                dataSource={tagNames}
                            />
                            <TextField
                                onChange={this.handleFormChange}
                                name="coverImage"
                                style={{ marginRight: '3vh', marginTop: '3vh', width: '90%', marginBottom: '3vh' }}
                                label="Cover Image URL"
                                value={coverImage}
                            />
                        </form>
                    </Grid>
                    <Grid item sm={5}>
                        <CoverImageUploader
                            style={style}
                            onUrlPrepare={this.onUrlPrepare}
                            onUrlDelete={this.onUrlDelete}
                        />
                    </Grid>
                </Grid>
                <SubmitPostButton isGreen={success} isEditing={isEditing} onPostSubmit={this.onPostSubmit} />
                <Grid container direction="column" spacing={16}>
                    <Grid item>
                        <ReactMde
                            buttonContentOptions={{
                                iconProvider: name => icons[name],
                            }}
                            layout="horizontal"
                            onChange={this.handleValueChange}
                            editorState={mdeState}
                            generateMarkdownPreview={markdown => Promise.resolve(this.converter.makeHtml(markdown))}
                        />
                    </Grid>
                    <Grid item>
                        <Button fullWidth variant="contained" color="primary" onClick={this.handleCorrectTags}>
                            Correct Tags
                        </Button>
                    </Grid>
                    <Grid item>
                        <ImageUploader />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    imagesWithUrl: state.imagesWithUrl,
    coverImagesWithUrl: state.coverImagesWithUrl,
    tagNames: state.tags.map(tagObject => tagObject.title),
    isEditing: state.isEditing,
});

export default connect(
    mapStateToProps,
    { fetchPosts, fetchTags, removeCoverImageWithUrlAction, addPostAction, updatePostAction }
)(EditorContainer);
