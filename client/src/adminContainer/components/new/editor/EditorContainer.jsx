import React, { Fragment } from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import 'react-mde/lib/styles/css/react-mde-all.css';
import './customEditorStyle.css'
import { connect } from "react-redux";
import ImageUploader from "./ImageUploader";
import CoverImageUploader from './CoverImageUploader'
import removeCoverImageWithUrlAction from '../../../../store/actions/removeCoverImageWithUrlAction';
import ChipInput from 'material-ui-chip-input'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
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


const resizeIcons = { fontSize: '2.1em' }

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
  
class MarkdownEditor extends React.Component {

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
        };
        this.converter = new Showdown.Converter({tables: true, simplifiedAutoLink: true});
    }

    handleValueChange = (mdeState) => {
        this.setState({ mdeState });
    }

    handleCorrectTags = () => {
        const { imagesWithUrl } = this.props;
        const regex = /\(resources([^\)]+)\)/g;
        const correctedMarkdown = this.state.mdeState.markdown.replace(
            regex,
            (match) => {
                const correspondingImageObject = imagesWithUrl.find((imageObject) => {
                    return match === `(resources/${Object.keys(imageObject)[0]})`
                })
                if (correspondingImageObject) {
                    return `(${correspondingImageObject[Object.keys(correspondingImageObject)[0]]})`
                } else {
                    return match;
                }
            }
        );
        this.setState({
            mdeState: {
                markdown: correctedMarkdown
            }
        },() => {
            if (this.state.mdeState.markdown.match(regex)) {
                this.tagsLeftToChange = this.state.mdeState.markdown.match(regex).length
            }
        });
    }

    handleFormChange = ({ target }) => {
        this.setState({
            ...this.state,
            [target.name]: target.value
        })
    }

    handleAddTag = tag => {
        this.setState({
            ...this.state,
            tags: [
                ...this.state.tags,
                tag
            ]
        })
    }

    handleDeleteTag = (tag, index) => {
        this.setState({
            ...this.state,
            tags: [
                ...this.state.tags.slice(0, index),
                ...this.state.tags.slice(index + 1)
            ]
        })
    }

    onUrlDelete = (url) => {
        // take url out of state, make paper disappear
        // remove   picture
    }

    onUrlPrepare = (url) => {
        console.log('Hey');
        
        // remove preview image, put string of url in state
        this.setState({
            ...this.state,
            coverImage: url.url
        })
    }

    render() {
        const style = this.state.coverImage
            ?   {
                    borderStyle: 'solid', borderRadius: '4px', borderColor: '#689f38'
            }
            :   {

            }
        return (
            <div style={{height: '100vh'}}>
                <Grid container direction='row' spacing={16}>
                    <Grid item sm={7}>
                        <form>
                            <TextField
                                onChange={this.handleFormChange}
                                name='title'
                                style={{marginRight: '3vh', width: '90%'}}
                                label='Title'
                            />
                            <TextField
                                onChange={this.handleFormChange}
                                name='description'
                                style={{marginRight: '3vh', marginTop: '3vh', width: '90%' }}
                                label="Description"
                                multiline
                                rowsMax="4"
                            />
                            <ChipInput
                                style={{marginRight: '3vh',marginTop: '3vh',  marginBottom: '3vh', width: '90%' }}
                                value={this.state.tags}
                                label='Tags'
                                onAdd={(tag) => this.handleAddTag(tag)}
                                onDelete={(tag, index) => this.handleDeleteTag(tag, index)}
                            />
                        </form>
                    </Grid>
                    <Grid item sm={5}>
                        <CoverImageUploader style={style} onUrlPrepare={this.onUrlPrepare} onUrlDelete={this.onUrlDelete} />
                    </Grid>
                </Grid>
                <Grid container direction='column' spacing={16} >
                    <Grid item>
                        <ReactMde
                            buttonContentOptions={{
                                iconProvider: name => icons[name]
                            }}
                            layout='horizontal'
                            onChange={this.handleValueChange}
                            editorState={this.state.mdeState}
                            generateMarkdownPreview={(markdown) => Promise.resolve(this.converter.makeHtml(markdown))}
                        />
                    </Grid>
                    <Grid item>
                        <Button fullWidth={true} variant='contained' color='primary' onClick={this.handleCorrectTags}>Correct Tags</Button>
                    </Grid>
                    <Grid item>
                        <ImageUploader />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        imagesWithUrl: state.imagesWithUrl,
        coverImagesWithUrl: state.coverImagesWithUrl
    }
}

export default connect(mapStateToProps, { removeCoverImageWithUrlAction })(MarkdownEditor);