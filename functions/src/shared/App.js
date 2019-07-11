"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _routes = _interopRequireDefault(require("./routes"));

var _reactRouterDom = require("react-router-dom");

var _NoMatch = _interopRequireDefault(require("./NoMatch"));

var _NavHeader = _interopRequireDefault(require("./components/NavHeader.js"));

var App =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(App, _Component);

  function App(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, App);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(App).call(this, props));
    _this.redirect = props.redirect;
    return _this;
  }

  (0, _createClass2["default"])(App, [{
    key: "BrowserRedirect",
    value: function BrowserRedirect() {
      if (this.props.redirect) {
        return _react["default"].createElement(_reactRouterDom.Redirect, {
          to: this.props.redirect
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement(BrowserRedirect, null), _react["default"].createElement(_reactRouterDom.Switch, null, _routes["default"].map(function (_ref) {
        var path = _ref.path,
            exact = _ref.exact,
            Component = _ref.component,
            rest = (0, _objectWithoutProperties2["default"])(_ref, ["path", "exact", "component"]);
        return _react["default"].createElement(_reactRouterDom.Route, {
          key: path,
          path: path,
          exact: exact,
          render: function render(props) {
            return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, rest));
          }
        });
      }), _react["default"].createElement(_reactRouterDom.Route, {
        render: function render(props) {
          return _react["default"].createElement(_NoMatch["default"], props);
        }
      })));
    }
  }]);
  return App;
}(_react.Component);

var _default = App;
exports["default"] = _default;