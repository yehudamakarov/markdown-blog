import React, { Fragment } from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import 'react-mde/lib/styles/css/react-mde-all.css';
import { connect } from "react-redux";
import ImageUploader from "./ImageUploader";

class MarkdownEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mdeState: {
                markdown: '# Enter markdown post...',
            },
        };
        this.converter = new Showdown.Converter({tables: true, simplifiedAutoLink: true});
    }

    handleValueChange = (mdeState) => {
        this.setState({ mdeState });
    }

    handleCorrectTags = () => {
        const { images } = this.props;
        const regex = /\(resources([^\)]+)\)/g;
        const correctedMarkdown = this.state.mdeState.markdown.replace(
            regex,
            (match) => {
                const correspondingImageObject = images.find((imageObject) => {
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
        });
    }

    render() {
        return (
            <Fragment>
                <ReactMde
                    buttonContentOptions={{
                        iconProvider: name => <i className={`fas fa-${name} fa-1x`} aria-hidden="true"/>,
                    }}
                    layout='horizontal'
                    onChange={this.handleValueChange}
                    editorState={this.state.mdeState}
                    generateMarkdownPreview={(markdown) => Promise.resolve(this.converter.makeHtml(markdown))}
                />
                <ImageUploader />
                <button onClick={this.handleCorrectTags}>Correct Tags</button>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        images: state.imagesForPost
    }
}

export default connect(mapStateToProps)(MarkdownEditor);