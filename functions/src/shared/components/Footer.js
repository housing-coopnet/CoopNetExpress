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

var Footer =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Footer, _Component);

  function Footer() {
    (0, _classCallCheck2["default"])(this, Footer);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Footer).apply(this, arguments));
  }

  (0, _createClass2["default"])(Footer, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_reactBootstrap.Container, {
        className: "footer",
        fluid: true
      }, _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement(_reactBootstrap.Jumbotron, {
        className: "footerJumbo",
        fluid: true
      }, _react["default"].createElement("h1", null, "CoopNet"))), _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement("h2", null, "Get started"), _react["default"].createElement("ul", {
        className: "footerLinks"
      }, _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "#index"
      }, "INVESTMENTS")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "#index"
      }, "OUR IMPACT")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "#index"
      }, "HOW IT WORKS")))), _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement("h2", null, "Company"), _react["default"].createElement("ul", {
        className: "footerLinks"
      }, _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "#index"
      }, "ABOUT")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "#index"
      }, "CAREERS")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "#index"
      }, "COOPTALK")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "#index"
      }, "CONTACT")))), _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement("h2", null, "Legal"), _react["default"].createElement("ul", {
        className: "footerLinks"
      }, _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "#index"
      }, "DISCLAIMER")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "#index"
      }, "T&CS")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "#index"
      }, "ISA T&CS")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "#index"
      }, "COMPLAINTS")))), _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement("h2", null, "Support"), _react["default"].createElement("ul", {
        className: "footerLinks"
      }, _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "#index"
      }, "HELP CENTER")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
        href: "#index"
      }, "ISSUER ENQUIRIES"))))));
    }
  }]);
  return Footer;
}(_react.Component);

var _default = Footer;
exports["default"] = _default;