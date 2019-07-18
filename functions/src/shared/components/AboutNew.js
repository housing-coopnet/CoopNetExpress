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

var teamJson = require("../components/placeholders/team.json");

var Link = require("react-router-dom").Link;

var TeamTag = function TeamTag(props) {
  return props.team.map(function (person) {
    return _react["default"].createElement(_reactBootstrap.Col, {
      style: {
        alignItems: "center"
      },
      className: "teamTag"
    }, _react["default"].createElement(Link, {
      to: {
        pathname: "/team",
        state: {
          person: person
        }
      }
    }, _react["default"].createElement(_reactBootstrap.Image, {
      roundedCircle: true,
      fluid: true,
      src: 'images/' + person.image
    })), _react["default"].createElement("h6", null, person.name), _react["default"].createElement("p", {
      style: {
        fontSize: "12px"
      }
    }, person.role));
  });
};

var About =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(About, _Component);

  function About(props) {
    (0, _classCallCheck2["default"])(this, About);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(About).call(this, props));
  }

  (0, _createClass2["default"])(About, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_reactBootstrap.Container, {
        fluid: true
      }, _react["default"].createElement("link", {
        rel: "stylesheet",
        href: "/stylesheets/App.css"
      }), _react["default"].createElement("link", {
        rel: "stylesheet",
        href: "/stylesheets/About.css"
      }), _react["default"].createElement(_NavHeader["default"], null), _react["default"].createElement(_reactFullpage["default"], {
        scrollBar: true,
        render: function render(_ref) {
          var state = _ref.state,
              fullpageApi = _ref.fullpageApi;
          return _react["default"].createElement(_reactFullpage["default"].Wrapper, null, _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            className: "section"
          }, _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            style: {
              height: "100%"
            },
            className: "section2Row"
          }, _react["default"].createElement(_reactBootstrap.Row, {
            style: {
              height: "100%"
            }
          }, _react["default"].createElement(_reactBootstrap.Col, {
            md: true,
            offset: 1,
            className: "about-info-container"
          }, _react["default"].createElement("h2", null, "The Problem"), _react["default"].createElement("p", null, "Our urban communities have become inaccessible and exclusionary. The high cost of property has made home-ownership an unattainable dream for most residents. "), _react["default"].createElement("br", null), _react["default"].createElement(Link, {
            to: "/mission",
            style: {
              textDecoration: "none"
            }
          }, _react["default"].createElement(_reactBootstrap.Button, null, "Our Mission"))), _react["default"].createElement(_reactBootstrap.Col, {
            md: true,
            className: "jumbo"
          }, _react["default"].createElement(_reactBootstrap.Image, {
            rounded: true,
            src: "images/problem.jpg"
          }))))), _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            className: "section"
          }, _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            style: {
              height: "100%"
            },
            className: "section2Row"
          }, _react["default"].createElement(_reactBootstrap.Row, {
            style: {
              height: "100%"
            }
          }, _react["default"].createElement(_reactBootstrap.Col, {
            sm: {
              span: 12,
              order: 1
            },
            md: {
              span: 6,
              order: 1
            },
            className: "jumbo"
          }, _react["default"].createElement(_reactBootstrap.Image, {
            rounded: true,
            src: "images/vision.jpg"
          })), _react["default"].createElement(_reactBootstrap.Col, {
            sm: {
              span: 12,
              order: 2
            },
            md: {
              span: 5,
              order: 2
            },
            className: "about-info-container"
          }, _react["default"].createElement("h2", null, "Our Vision"), _react["default"].createElement("p", null, "We are building a platform to host a network of diverse cooperative communities in which everyone has a place to call home. "), _react["default"].createElement("br", null), _react["default"].createElement(Link, {
            to: "/vision",
            style: {
              textDecoration: "none"
            }
          }, _react["default"].createElement(_reactBootstrap.Button, null, "Our Vision")))))), _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            className: "section"
          }, _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            style: {
              height: "100%"
            },
            className: "section2Row"
          }, _react["default"].createElement(_reactBootstrap.Row, {
            style: {
              height: "100%"
            }
          }, _react["default"].createElement(_reactBootstrap.Col, {
            md: true,
            offset: 1,
            className: "about-info-container"
          }, _react["default"].createElement("h2", null, "Our Model"), _react["default"].createElement("p", null, "The nature of cooperatives can be difficult to understand, take a look at some frequently asked questions and get a better understanding of our goals.  "), _react["default"].createElement("br", null), _react["default"].createElement(Link, {
            to: "/model",
            style: {
              textDecoration: "none"
            }
          }, _react["default"].createElement(_reactBootstrap.Button, null, "Our Model"))), _react["default"].createElement(_reactBootstrap.Col, {
            md: true,
            className: "jumbo"
          }, _react["default"].createElement(_reactBootstrap.Image, {
            rounded: true,
            src: "images/introJumboImage.jpg"
          }))))), _react["default"].createElement(_reactBootstrap.Container, {
            id: "team",
            fluid: true,
            className: "section"
          }, _react["default"].createElement(_reactBootstrap.Row, {
            style: {
              paddingLeft: "20px",
              paddingRight: "20px"
            }
          }, _react["default"].createElement(TeamTag, {
            team: teamJson.team
          }))), _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            className: "section"
          }, _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            style: {
              height: "100%"
            },
            className: "section2Row"
          }, _react["default"].createElement(_reactBootstrap.Row, {
            style: {
              height: "100%"
            }
          }, _react["default"].createElement(_reactBootstrap.Col, {
            sm: {
              span: 12,
              order: 1
            },
            md: {
              span: 6,
              order: 1
            },
            className: "jumbo"
          }, _react["default"].createElement(_reactBootstrap.Image, {
            rounded: true,
            src: "images/oa.jpg"
          })), _react["default"].createElement(_reactBootstrap.Col, {
            sm: {
              span: 12,
              order: 2
            },
            md: {
              span: 5,
              order: 2
            },
            className: "about-info-container"
          }, _react["default"].createElement("h2", null, "Our Story"), _react["default"].createElement("p", null, "CoopNet began with an experience familiar to many in the Bay Area--our members moved to Berkeley and had to find somewhere to live.  "), _react["default"].createElement("br", null), _react["default"].createElement(Link, {
            to: "/history",
            style: {
              textDecoration: "none"
            }
          }, _react["default"].createElement(_reactBootstrap.Button, null, "Read More")))))), _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            className: "section"
          }, _react["default"].createElement(_reactBootstrap.Tab.Container, {
            fluid: true,
            style: {
              height: "100%"
            },
            className: "section2Row",
            defaultActiveKey: "1"
          }, _react["default"].createElement(_reactBootstrap.Row, {
            style: {
              height: "100%"
            }
          }, _react["default"].createElement(_reactBootstrap.Col, {
            sm: 3
          }, _react["default"].createElement(_reactBootstrap.Nav, {
            variant: "pills",
            className: "flex-column"
          }, _react["default"].createElement(_reactBootstrap.Nav.Item, null, _react["default"].createElement(_reactBootstrap.Nav.Link, {
            eventKey: "1"
          }, "Question 1")), _react["default"].createElement(_reactBootstrap.Nav.Item, null, _react["default"].createElement(_reactBootstrap.Nav.Link, {
            eventKey: "2"
          }, "Question 2")))), _react["default"].createElement(_reactBootstrap.Col, {
            sm: 9
          }, _react["default"].createElement(_reactBootstrap.Tab.Content, null, _react["default"].createElement(_reactBootstrap.Tab.Pane, {
            eventKey: "1"
          }, _react["default"].createElement("h1", null, "Text number 1")), _react["default"].createElement(_reactBootstrap.Tab.Pane, {
            eventKey: "2"
          }, _react["default"].createElement("h1", null, "Text number 2"))))))));
        }
      }));
    }
  }]);
  return About;
}(_react.Component);

var _default = About;
exports["default"] = _default;