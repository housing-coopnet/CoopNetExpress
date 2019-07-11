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

var _NavHeader = _interopRequireDefault(require("../components/NavHeader.js"));

function SignupSidebar(props) {
  return _react["default"].createElement(_reactBootstrap.Tab.Container, {
    id: "left-tabs-example",
    defaultActiveKey: "first"
  }, _react["default"].createElement(_reactBootstrap.Row, {
    className: "signupTabs"
  }, _react["default"].createElement(_reactBootstrap.Col, {
    sm: 3
  }, _react["default"].createElement(_reactBootstrap.Nav, {
    variant: "pills",
    className: "flex-column"
  }, _react["default"].createElement(_reactBootstrap.Nav.Item, {
    className: "signupTab"
  }, _react["default"].createElement(_reactBootstrap.Nav.Link, {
    className: "signupTabLink",
    eventKey: "first"
  }, "Your Profile")), _react["default"].createElement(_reactBootstrap.Nav.Item, {
    className: "signupTab"
  }, _react["default"].createElement(_reactBootstrap.Nav.Link, {
    className: "signupTabLink",
    eventKey: "second"
  }, "Identity Verification")))), _react["default"].createElement(_reactBootstrap.Col, {
    sm: 9
  }, _react["default"].createElement(_reactBootstrap.Tab.Content, null, _react["default"].createElement(_reactBootstrap.Tab.Pane, {
    eventKey: "first"
  }, _react["default"].createElement(SignupSidebar, null)), _react["default"].createElement(_reactBootstrap.Tab.Pane, {
    eventKey: "second"
  })))));
}

function BasicInfo(props) {
  return _react["default"].createElement("div", null, _react["default"].createElement(_reactBootstrap.Form, null, _react["default"].createElement(_reactBootstrap.Form.Group, {
    controlId: "formBasicEmail"
  }, _react["default"].createElement(_reactBootstrap.Form.Label, null, "Email address"), _react["default"].createElement(_reactBootstrap.Form.Control, {
    type: "email",
    placeholder: "Enter email"
  }), _react["default"].createElement(_reactBootstrap.Form.Text, {
    className: "text-muted"
  }, "We'll never share your email with anyone else.")), _react["default"].createElement(_reactBootstrap.Form.Group, {
    controlId: "formBasicPassword"
  }, _react["default"].createElement(_reactBootstrap.Form.Label, null, "Password"), _react["default"].createElement(_reactBootstrap.Form.Control, {
    type: "password",
    placeholder: "Password"
  })), _react["default"].createElement(_reactBootstrap.Form.Group, {
    controlId: "formBasicChecbox"
  }, _react["default"].createElement(_reactBootstrap.Form.Check, {
    type: "checkbox",
    label: "Check me out"
  })), _react["default"].createElement(_reactBootstrap.Button, {
    variant: "primary",
    type: "submit"
  }, "Submit")), ";");
}

var Signup =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Signup, _Component);

  function Signup() {
    (0, _classCallCheck2["default"])(this, Signup);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Signup).apply(this, arguments));
  }

  (0, _createClass2["default"])(Signup, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        id: "Signup",
        className: "Signup"
      }, _react["default"].createElement(_NavHeader["default"], null), _react["default"].createElement(SignupSidebar, null), _react["default"].createElement(_Footer["default"], null));
    }
  }]);
  return Signup;
}(_react.Component);

var _default = Signup;
exports["default"] = _default;