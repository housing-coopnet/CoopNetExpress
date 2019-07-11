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

var _Footer = _interopRequireDefault(require("../components/Footer.js"));

var _CarouselSlider = _interopRequireDefault(require("../components/CarouselSlider.js"));

var _NavHeader = _interopRequireDefault(require("../components/NavHeader.js"));

var CoopTalk =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(CoopTalk, _Component);

  function CoopTalk() {
    (0, _classCallCheck2["default"])(this, CoopTalk);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CoopTalk).apply(this, arguments));
  }

  (0, _createClass2["default"])(CoopTalk, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "App"
      }, _react["default"].createElement(_NavHeader["default"], null), _react["default"].createElement(_reactBootstrap.Container, null, _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement("p", null), _react["default"].createElement("h1", null, "CoopTalk")))), _react["default"].createElement(_reactBootstrap.Container, null, _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement(_reactBootstrap.Jumbotron, {
        className: "introJumbo",
        fluid: true
      }, _react["default"].createElement("h2", null, "CoopTalk "), _react["default"].createElement("p", null, "Stay up to date on all the latest news from CoopNet.")))))), _react["default"].createElement("div", {
        ref: "footer"
      }, _react["default"].createElement(_Footer["default"], null)));
    }
  }]);
  return CoopTalk;
}(_react.Component);

var _default = CoopTalk;
exports["default"] = _default;