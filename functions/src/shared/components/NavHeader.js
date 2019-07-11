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

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

var popover = _react["default"].createElement(_reactBootstrap.Popover, {
  id: "popover-basic",
  title: "Member profiles are coming soon!"
}, "We are in the process of implementing a fully scalable and secure member registration system! Stay tuned.");

var NavHeader =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(NavHeader, _Component);

  function NavHeader(props) {
    (0, _classCallCheck2["default"])(this, NavHeader);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(NavHeader).call(this, props));
  }

  (0, _createClass2["default"])(NavHeader, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_reactBootstrap.Navbar, {
        className: "navBar",
        sticky: "top",
        expand: "md"
      }, _react["default"].createElement("link", {
        rel: "stylesheet",
        href: "stylesheets/App.css"
      }), _react["default"].createElement("link", {
        rel: "stylesheet",
        href: "stylesheets/NavHeader.css"
      }), _react["default"].createElement(_reactRouterDom.NavLink, {
        to: "/"
      }, _react["default"].createElement(_reactBootstrap.Navbar.Brand, {
        className: "homeNav",
        href: "/"
      }, _react["default"].createElement(_reactBootstrap.Image, {
        width: "70",
        height: "70",
        className: "d-inline-block align-top",
        src: "images/Logo.png"
      }))), _react["default"].createElement(_reactRouterDom.NavLink, {
        to: "/",
        className: "noUnderline"
      }, _react["default"].createElement("h3", {
        className: "navTitle"
      }, "COOPNET")), _react["default"].createElement(_reactBootstrap.Navbar.Toggle, {
        "aria-controls": "basic-navbar-nav"
      }), _react["default"].createElement(_reactBootstrap.Navbar.Collapse, {
        className: "headerCollapse",
        id: "basic-navbar-nav"
      }, _react["default"].createElement(_reactBootstrap.Nav, {
        className: "mr-auto"
      }, _react["default"].createElement(_reactBootstrap.NavDropdown, {
        className: "navButton",
        title: "ABOUT",
        id: "basic-nav-dropdown"
      }, _react["default"].createElement(_reactBootstrap.NavDropdown.Item, null, _react["default"].createElement(_reactRouterDom.NavLink, {
        to: "/about"
      }, "ABOUT US")), _react["default"].createElement(_reactBootstrap.NavDropdown.Divider, null), _react["default"].createElement(_reactBootstrap.NavDropdown.Item, null, _react["default"].createElement(_reactRouterDom.NavLink, {
        to: "/mission"
      }, "MISSION")), _react["default"].createElement(_reactBootstrap.NavDropdown.Item, null, _react["default"].createElement(_reactRouterDom.NavLink, {
        to: "/vision"
      }, "VISION")), _react["default"].createElement(_reactBootstrap.NavDropdown.Item, null, _react["default"].createElement(_reactRouterDom.NavLink, {
        to: "/model"
      }, "MODEL")), _react["default"].createElement(_reactBootstrap.NavDropdown.Item, null, _react["default"].createElement(_reactRouterDom.NavLink, {
        to: "/history"
      }, "HISTORY")), _react["default"].createElement(_reactBootstrap.NavDropdown.Item, null, _react["default"].createElement(_reactRouterDom.NavLink, {
        to: "/about#team"
      }, "TEAM")))), _react["default"].createElement(_reactBootstrap.Nav, {
        className: "navButton"
      }, _react["default"].createElement(_reactBootstrap.Nav.Link, {
        href: "https://www.facebook.com/HousingCoopNet/"
      }, _react["default"].createElement(_reactBootstrap.Image, {
        width: "30",
        height: "30",
        src: "images/facebook.svg"
      })), _react["default"].createElement(_reactBootstrap.Nav.Link, {
        href: "https://twitter.com/HousingCoopNet"
      }, _react["default"].createElement(_reactBootstrap.Image, {
        width: "30",
        height: "30",
        src: "images/twitter.svg"
      })), _react["default"].createElement(_reactBootstrap.Nav.Link, {
        href: "https://www.linkedin.com/company/housing-coopnet"
      }, _react["default"].createElement(_reactBootstrap.Image, {
        width: "30",
        height: "30",
        src: "images/linkedin.svg"
      })), _react["default"].createElement(_reactBootstrap.Nav.Link, {
        href: "https://medium.com/@CoopNetHousing"
      }, _react["default"].createElement(_reactBootstrap.Image, {
        width: "30",
        height: "30",
        src: "images/medium.svg"
      })))));
    }
  }]);
  return NavHeader;
}(_react.Component);

var _default = NavHeader;
exports["default"] = _default;