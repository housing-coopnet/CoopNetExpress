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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _CarouselSlider = _interopRequireDefault(require("./CarouselSlider.js"));

var _NewsletterModal = _interopRequireDefault(require("./NewsletterModal"));

var _reactFullpage = _interopRequireDefault(require("@fullpage/react-fullpage"));

var _NavHeader = _interopRequireDefault(require("./NavHeader"));

var Link = require("react-router-dom").Link;

var Home =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Home, _Component);

  function Home(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Home);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Home).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "modalClose", function () {
      return _this.setState({
        modalShow: false
      });
    });
    _this.state = {
      modalShow: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Home, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(_reactBootstrap.Container, {
        fluid: true
      }, _react["default"].createElement("link", {
        rel: "stylesheet",
        href: "stylesheets/App.css"
      }), _react["default"].createElement("link", {
        rel: "stylesheet",
        href: "stylesheets/Home.css"
      }), _react["default"].createElement("link", {
        rel: "stylesheet",
        href: "stylesheets/Animations.css"
      }), _react["default"].createElement("link", {
        rel: "stylesheet",
        href: "stylesheets/Carousel.css"
      }), _react["default"].createElement(_NavHeader["default"], null), _react["default"].createElement(_reactFullpage["default"], {
        scrollBar: true,
        paddingTop: "74px",
        render: function render(_ref) {
          var state = _ref.state,
              fullpageApi = _ref.fullpageApi;
          return _react["default"].createElement(_reactFullpage["default"].Wrapper, null, _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            className: "section",
            style: {
              paddingBottom: "75px"
            }
          }, _react["default"].createElement(_CarouselSlider["default"], null), _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            className: "horizontalBar2"
          }, _react["default"].createElement("em", {
            className: "white body"
          }, " OWN A STAKE IN A HOUSING MOVEMENT "), _react["default"].createElement("br", null), _react["default"].createElement(_reactBootstrap.Button, {
            onClick: function onClick() {
              return _this2.setState({
                modalShow: true
              });
            },
            className: "blue"
          }, "Follow us"))), _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            className: "section",
            style: {
              paddingBottom: "230px"
            }
          }, _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            className: "section2Row"
          }, _react["default"].createElement(_reactBootstrap.Row, {
            style: {
              padding: "15px 0",
              height: "100%"
            }
          }, _react["default"].createElement(_reactBootstrap.Col, {
            md: true,
            className: "blurbContainer"
          }, _react["default"].createElement("p", {
            className: "p-shrink"
          }, "Working to create a network of diverse cooperative communities in which everyone has a place to call home."), _react["default"].createElement("br", null), _react["default"].createElement(Link, {
            to: "/about",
            style: {
              textDecoration: "none"
            }
          }, _react["default"].createElement(_reactBootstrap.Button, {
            style: {
              marginTop: "30px"
            }
          }, "ABOUT US"))), _react["default"].createElement(_reactBootstrap.Col, {
            md: true,
            className: "jumbo"
          }, _react["default"].createElement(_reactBootstrap.Image, {
            rounded: true,
            src: "images/landing.jpg"
          })))), _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            className: "horizontalBar3"
          }, _react["default"].createElement(_reactBootstrap.Row, {
            fluid: true,
            className: "badgeRow"
          }, _react["default"].createElement(_reactBootstrap.Col, {
            xs: {
              span: 4,
              order: 1
            },
            md: {
              span: 1,
              order: 1
            }
          }, _react["default"].createElement(_reactBootstrap.Image, {
            src: "images/forimpact.svg"
          })), _react["default"].createElement(_reactBootstrap.Col, {
            xs: {
              span: 4,
              order: 4
            },
            md: {
              span: 3,
              order: 2
            }
          }, _react["default"].createElement("em", {
            className: "title white"
          }, "AFFORDABLE")), _react["default"].createElement(_reactBootstrap.Col, {
            xs: {
              span: 4,
              order: 2
            },
            md: {
              span: 1,
              order: 3
            }
          }, _react["default"].createElement(_reactBootstrap.Image, {
            src: "images/sustainable.svg"
          })), _react["default"].createElement(_reactBootstrap.Col, {
            xs: {
              span: 4,
              order: 5
            },
            md: {
              span: 3,
              order: 4
            }
          }, _react["default"].createElement("em", {
            className: "title white"
          }, "SUSTAINABLE")), _react["default"].createElement(_reactBootstrap.Col, {
            xs: {
              span: 4,
              order: 3
            },
            md: {
              span: 1,
              order: 5
            }
          }, _react["default"].createElement(_reactBootstrap.Image, {
            src: "images/community.svg"
          })), _react["default"].createElement(_reactBootstrap.Col, {
            xs: {
              span: 4,
              order: 6
            },
            md: {
              span: 3,
              order: 6
            }
          }, _react["default"].createElement("em", {
            className: "title white"
          }, "COOPERATIVE")))), _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            className: "horizontalBar4"
          }, _react["default"].createElement(_reactBootstrap.Button, {
            className: "bar hvr-rectangle-out",
            onClick: function onClick() {
              return _this2.setState({
                modalShow: true
              });
            },
            fluid: true
          }, " SIGN UP FOR OUR NEWSLETTER"), _react["default"].createElement(_NewsletterModal["default"], {
            modalShow: _this2.state.modalShow,
            onClickAway: _this2.modalClose
          }))));
        }
      }));
    }
  }]);
  return Home;
}(_react.Component);

exports["default"] = Home;