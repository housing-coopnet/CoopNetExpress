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

var _NavHeader = _interopRequireDefault(require("../components/NavHeader.js"));

var _reactFullpage = _interopRequireDefault(require("@fullpage/react-fullpage"));

function Education(props) {
  return props.education.map(function (ed) {
    return _react["default"].createElement(_reactBootstrap.Col, {
      md: {
        span: 6,
        offset: 3
      }
    }, _react["default"].createElement("h2", null, ed.school), _react["default"].createElement("h3", null, ed.degree + " " + ed.grad), _react["default"].createElement("h4", null, ed.info));
  });
}

function Work(props) {
  return props.work.map(function (wrk) {
    return _react["default"].createElement(_reactBootstrap.Col, {
      md: {
        span: 6,
        offset: 3
      }
    }, _react["default"].createElement("h2", null, wrk.employer), _react["default"].createElement("h4", null, wrk.role));
  });
}

var Team =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Team, _Component);

  function Team(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Team);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Team).call(this, props));
    _this.state = {
      person: props.location.state.person
    };
    return _this;
  }

  (0, _createClass2["default"])(Team, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_reactBootstrap.Container, {
        fluid: true
      }, _react["default"].createElement("link", {
        rel: "stylesheet",
        href: "stylesheets/App.css"
      }), _react["default"].createElement("link", {
        rel: "stylesheet",
        href: "stylesheets/About.css"
      }), _react["default"].createElement(_NavHeader["default"], null), _react["default"].createElement(_reactBootstrap.Row, {
        style: {
          paddingTop: "100px"
        }
      }, _react["default"].createElement(_reactBootstrap.Col, {
        md: {
          span: 6,
          offset: 3
        }
      }, _react["default"].createElement(_reactBootstrap.Image, {
        width: "250px",
        height: "250px",
        src: "images/" + this.state.person.image
      }), _react["default"].createElement("h1", null, this.state.person.name), _react["default"].createElement("h2", null, this.state.person.role), _react["default"].createElement(_reactBootstrap.Button, {
        style: {
          marginBottom: "20px"
        },
        href: this.state.person.link
      }, "LinkedIn"), _react["default"].createElement("p", null, this.state.person.description))), _react["default"].createElement(Education, {
        education: this.state.person.education
      }), _react["default"].createElement(Work, {
        work: this.state.person.work
      }));
    }
  }]);
  return Team;
}(_react.Component);

var _default = Team;
exports["default"] = _default;