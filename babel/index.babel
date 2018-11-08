const initialText = '# Markdown Previewer\n## simple and quick\nEnter the Markdown text you want to preview\n- You can get it converted into `HTML` too\n- [GitHub](https://github.com/) Flavored Markdown supported';

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: initialText
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    // preview
    document.getElementById("preview").innerHTML = marked(this.state.input);
    // html
    document.getElementById("HTML").innerText = marked(this.state.input);
    // editor
    return (
      <div>
        {/* Editor */}
        <textarea
          name="editor"
          id="editor"
          className="form-control"
          onChange={this.handleChange}
        >
          {this.state.input}
        </textarea>
      </div>
    );
  }
}

ReactDOM.render(
  <ControlledInput />,
  document.getElementById("editor-container")
);
