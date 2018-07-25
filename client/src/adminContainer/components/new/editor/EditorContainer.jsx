import React, { Fragment } from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import 'react-mde/lib/styles/css/react-mde-all.css';
import './customEditorStyle.css'
import { connect } from "react-redux";
import ImageUploader from "./ImageUploader";
import removeImagesWithUrlAction from '../../../../store/actions/removeImagesWithUrlAction';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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

const icons = {
    bold: <FormatBold />,
    heading: <FormatSize />,
    italic: <FormatItalic />,
    strikethrough: <FormatStrikethrough />,
    link: <InsertLink />,
    'quote-right': <FormatQuote />,
    code: <Code />,
    image: <InsertPhoto />,
    'list-ul': <FormatListBulleted />,
    'list-ol': <FormatListNumbered />,
    tasks: <CheckBox />,
  };
  
class MarkdownEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mdeState: {
                markdown: '# Enter markdown post...',
            },
            
        };
        this.converter = new Showdown.Converter({tables: true, simplifiedAutoLink: true});
        this.tagsLeftToChange = 0;
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
        },(result) => {
            if (this.state.mdeState.markdown.match(regex)) {
                this.tagsLeftToChange = this.state.mdeState.markdown.match(regex).length
            }
        });
    }

    render() {
        return (
            <Fragment>
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
                    <Grid item sm>
                        <ImageUploader />
                    </Grid>
                    <Grid item>
                        <Button fullWidth={true} variant='contained' color='primary' onClick={this.handleCorrectTags}>Correct Tags</Button>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        imagesWithUrl: state.imagesWithUrl
    }
}

export default connect(mapStateToProps, { removeImagesWithUrlAction })(MarkdownEditor);