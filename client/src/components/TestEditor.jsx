import * as React from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import 'react-mde/lib/styles/css/react-mde-all.css';

export default class MarkdownEditor extends React.Component {

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

    render() {
        return (
            <div className="container">
                <ReactMde
                    buttonContentOptions={{
                        iconProvider: name => <i className={`fas fa-${name} fa-1x`} aria-hidden="true"/>,
                    }}
                    layout='horizontal'
                    onChange={this.handleValueChange}
                    editorState={this.state.mdeState}
                    generateMarkdownPreview={(markdown) => Promise.resolve(this.converter.makeHtml(markdown))}
                />
                <div>
                    
                </div>
            </div>
        );
    }
}