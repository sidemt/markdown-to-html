const initialText = '# Markdown Previewer\n## simple and quick\nEnter the Markdown text you want to preview\n- You can get it converted into `HTML` too\n- [GitHub](https://github.com/) Flavored Markdown supported';

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: initialText,
      breaksOption: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleBreaksOption = this.toggleBreaksOption.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  toggleBreaksOption() {
    this.setState((state)=>({
      breaksOption: !state.breaksOption
    }))
  }

  render() {
    const rawHTML = marked.parse(this.state.input, { breaks: this.state.breaksOption, gfm: true });
    const formattedHtml = html_beautify(rawHTML, { indent_size: 2 });
    console.log('formattedHtml', formattedHtml)
    // preview
    document.getElementById("preview").innerHTML = rawHTML;
    // html
    document.getElementById("HTML").value = formattedHtml;
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
        <div className="mb-3 mt-3">
          <BreaksOptionSwitch breaksOption={this.state.breaksOption} onClick={this.toggleBreaksOption} />
        </div>
      </div>
    );
  }
}

/**
 * Component for toggle switch of line break setting
 */
class BreaksOptionSwitch extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var breaksOption = this.props.breaksOption;
    return(
        <div id="break-option">
          <span id="break-option-label">&lt;br&gt; by 2spaces&nbsp;&nbsp;</span>
          <label className="switch">
            {breaksOption ? <input type="checkbox" checked /> : <input type="checkbox" />}
            <span className="slider round" onClick={this.props.onClick}></span>
          </label>
          <span id="break-option-label">&nbsp;&lt;br&gt; by a line break </span>
        </div>
    );
  }
}

ReactDOM.render(
  <ControlledInput />,
  document.getElementById("editor-container")
);
