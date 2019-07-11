"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

require("../stylesheets/App.css");

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

var FollowProject =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(FollowProject, _Component);

  function FollowProject() {
    var _this;

    (0, _classCallCheck2["default"])(this, FollowProject);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(FollowProject).call(this));
    _this.state = {
      active: false
    };
    return _this;
  }

  (0, _createClass2["default"])(FollowProject, [{
    key: "changeState",
    value: function changeState() {
      this.setState({
        state: !this.state.active
      });
    }
  }, {
    key: "render",
    value: function render() {
      var btn_state = this.state.active ? "success" : "outline-success";
      var btn_text = this.state.active ? "FOLLOWING" : "FOLLOW PROJECT";
      return _react["default"].createElement("div", null, _react["default"].createElement(_reactBootstrap.Button, {
        block: true,
        onClick: this.changeState.bind(this),
        variant: btn_state
      }, btn_text));
    }
  }]);
  return FollowProject;
}(_react.Component);

var _default = FollowProject;
exports["default"] = _default;