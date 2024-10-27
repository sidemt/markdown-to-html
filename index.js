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
    this.setState(state => ({
      breaksOption: !state.breaksOption
    }));
  }
  render() {
    const rawHTML = marked.parse(this.state.input, {
      breaks: this.state.breaksOption,
      gfm: true
    });
    const formattedHtml = html_beautify(rawHTML, {
      indent_size: 2
    });

    // preview
    document.getElementById("preview").innerHTML = rawHTML;
    // html
    document.getElementById("HTML").value = formattedHtml;
    // editor
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("textarea", {
      name: "editor",
      id: "editor",
      className: "form-control",
      onChange: this.handleChange
    }, this.state.input), /*#__PURE__*/React.createElement("div", {
      className: "mb-3 mt-3"
    }, /*#__PURE__*/React.createElement(BreaksOptionSwitch, {
      breaksOption: this.state.breaksOption,
      onClick: this.toggleBreaksOption
    })));
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
    return /*#__PURE__*/React.createElement("div", {
      id: "break-option"
    }, /*#__PURE__*/React.createElement("span", {
      id: "break-option-label"
    }, "<br> by 2spaces\xA0\xA0"), /*#__PURE__*/React.createElement("label", {
      className: "switch"
    }, breaksOption ? /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: true
    }) : /*#__PURE__*/React.createElement("input", {
      type: "checkbox"
    }), /*#__PURE__*/React.createElement("span", {
      className: "slider round",
      onClick: this.props.onClick
    })), /*#__PURE__*/React.createElement("span", {
      id: "break-option-label"
    }, "\xA0<br> by a line break "));
  }
}
ReactDOM.render(/*#__PURE__*/React.createElement(ControlledInput, null), document.getElementById("editor-container"));