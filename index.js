var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialText = '# Markdown Previewer\n## simple and quick\nEnter the Markdown text you want to preview\n- You can get it converted into `HTML` too\n- [GitHub](https://github.com/) Flavored Markdown supported';

var ControlledInput = function (_React$Component) {
  _inherits(ControlledInput, _React$Component);

  function ControlledInput(props) {
    _classCallCheck(this, ControlledInput);

    var _this = _possibleConstructorReturn(this, (ControlledInput.__proto__ || Object.getPrototypeOf(ControlledInput)).call(this, props));

    _this.state = {
      input: initialText,
      breaksOption: true
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.toggleBreaksOption = _this.toggleBreaksOption.bind(_this);
    return _this;
  }

  _createClass(ControlledInput, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
  }, {
    key: "toggleBreaksOption",
    value: function toggleBreaksOption() {
      this.setState(function (state) {
        return {
          breaksOption: !state.breaksOption
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      // preview
      document.getElementById("preview").innerHTML = marked(this.state.input, { breaks: this.state.breaksOption, gfm: true });
      // html
      document.getElementById("HTML").value = marked(this.state.input, { breaks: this.state.breaksOption, gfm: true });
      // editor
      return React.createElement(
        "div",
        null,
        React.createElement(
          "textarea",
          {
            name: "editor",
            id: "editor",
            className: "form-control",
            onChange: this.handleChange
          },
          this.state.input
        ),
        React.createElement(
          "div",
          { className: "mb-3 mt-3" },
          React.createElement(BreaksOptionSwitch, { breaksOption: this.state.breaksOption, onClick: this.toggleBreaksOption })
        )
      );
    }
  }]);

  return ControlledInput;
}(React.Component);

/**
 * Component for toggle switch of line break setting
 */


var BreaksOptionSwitch = function (_React$Component2) {
  _inherits(BreaksOptionSwitch, _React$Component2);

  function BreaksOptionSwitch(props) {
    _classCallCheck(this, BreaksOptionSwitch);

    return _possibleConstructorReturn(this, (BreaksOptionSwitch.__proto__ || Object.getPrototypeOf(BreaksOptionSwitch)).call(this, props));
  }

  _createClass(BreaksOptionSwitch, [{
    key: "render",
    value: function render() {
      var breaksOption = this.props.breaksOption;
      return React.createElement(
        "div",
        { id: "break-option" },
        React.createElement(
          "span",
          { id: "break-option-label" },
          "<br> by 2spaces\xA0\xA0"
        ),
        React.createElement(
          "label",
          { className: "switch" },
          breaksOption ? React.createElement("input", { type: "checkbox", checked: true }) : React.createElement("input", { type: "checkbox" }),
          React.createElement("span", { className: "slider round", onClick: this.props.onClick })
        ),
        React.createElement(
          "span",
          { id: "break-option-label" },
          "\xA0<br> by a line break "
        )
      );
    }
  }]);

  return BreaksOptionSwitch;
}(React.Component);

ReactDOM.render(React.createElement(ControlledInput, null), document.getElementById("editor-container"));