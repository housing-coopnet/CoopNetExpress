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

require("../stylesheets/Landing.css");

var _NavHeader = _interopRequireDefault(require("./NavHeader"));

var _reactBootstrap = require("react-bootstrap");

var _fbConfig = _interopRequireDefault(require("../config/fbConfig"));

var _reactFullpage = _interopRequireDefault(require("@fullpage/react-fullpage"));

var db = _fbConfig["default"].firestore();

var Landing =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Landing, _Component);

  function Landing(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Landing);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Landing).call(this, props));
    _this.state = {
      email: ""
    };

    function emailIsValid(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    _this.handleChange = function (event) {
      _this.setState({
        email: event.target.value
      });

      if (emailIsValid(_this.state.email)) {
        event.target.style.borderColor = "#59af22";
      } else {
        event.target.style.borderColor = "#3d3d3d";
      }

      if (event.target.style.borderColor == "rgb(204, 86, 86)") {
        event.target.style.borderColor = "#3d3d3d";
      }
    };

    _this.handleSubmit = function (event) {
      var emailInput = document.getElementById("emailInput");
      var submitButton = document.getElementById("submitButton");

      if (emailIsValid(_this.state.email)) {
        var userData = db.collection("userData");
        var query = userData.where("email", "==", _this.state.email);
        query.get().then(function (querySnapshot) {
          if (querySnapshot.empty) {
            userData.add({
              email: _this.state.email
            }).then(function (docRef) {
              console.log("Document written with ID: ", docRef.id);
            })["catch"](function (error) {
              console.error("Error adding document: ", error);
            });
            emailInput.value = "";
            submitButton.innerText = "DONE";
            submitButton.disabled = true;
            emailInput.disabled = true;
            emailInput.style.borderColor = "#3d3d3d";
          } else {
            alert("This email address is already on the list");
          }
        });
      } else {
        emailInput.style.borderColor = "#cc5656";
      }
    }; // this.adjustHeight = () => {
    //      let infoContainer = document.getElementsByClassName("jumbo")
    //      return (window.innerHeight - infoContainer.style.height - 173);
    // }


    return _this;
  }

  (0, _createClass2["default"])(Landing, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(_reactBootstrap.Container, {
        fluid: true,
        noGutters: true
      }, _react["default"].createElement(_NavHeader["default"], null), _react["default"].createElement(_reactFullpage["default"], {
        render: function render(_ref) {
          var state = _ref.state,
              fullpageApi = _ref.fullpageApi;
          return _react["default"].createElement(_reactFullpage["default"].Wrapper, null, _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            className: "section"
          }, _react["default"].createElement(_reactBootstrap.Row, {
            style: {
              paddingTop: "6%",
              paddingBottom: "3%",
              paddingLeft: "3%",
              paddingRight: "3%",
              height: window.innerHeight - 173
            }
          }, _react["default"].createElement(_reactBootstrap.Col, {
            lg: true
          }, _react["default"].createElement(_reactBootstrap.Row, {
            className: "titleContainer"
          }, _react["default"].createElement("h1", null, " COOPNET ")), _react["default"].createElement(_reactBootstrap.Row, {
            className: "blurbContainer"
          }, _react["default"].createElement("p", null, "A network of diverse cooperative communities in which everyone has a place to call home."))), _react["default"].createElement(_reactBootstrap.Col, {
            className: "jumbo",
            lg: true
          }, _react["default"].createElement(_reactBootstrap.Image, {
            fluid: true,
            rounded: true,
            src: require('../images/landing.jpg')
          }))), _react["default"].createElement(_reactBootstrap.Row, {
            className: "horizontalBar"
          }, _react["default"].createElement("h1", null, "JOIN THE MOVEMENT THAT IS REDEFINING COOPERATIVE HOUSING"))), _react["default"].createElement(_reactBootstrap.Container, {
            fluid: true,
            className: "section"
          }, _react["default"].createElement(_reactBootstrap.Container, {
            id: "infoContainer",
            style: {
              height: "100%"
            },
            className: "infoContainer",
            fluid: true
          }, _react["default"].createElement(_reactBootstrap.Row, {
            style: {
              paddingTop: "12%",
              paddingBottom: "3%"
            },
            fluid: true,
            className: "tileContainer"
          }, _react["default"].createElement(_reactBootstrap.Col, {
            xs: 6,
            md: true,
            style: {
              paddingTop: 40
            }
          }, " ", _react["default"].createElement(_reactBootstrap.Image, {
            fluid: true,
            className: "tile",
            src: require("../images/tile1.jpg"),
            rounded: true
          })), _react["default"].createElement(_reactBootstrap.Col, {
            xs: 6,
            md: true,
            style: {
              paddingTop: 40
            }
          }, " ", _react["default"].createElement(_reactBootstrap.Image, {
            fluid: true,
            className: "tile",
            src: require("../images/tile2.jpg"),
            rounded: true
          })), _react["default"].createElement(_reactBootstrap.Col, {
            xs: 6,
            md: true,
            style: {
              paddingTop: 40
            }
          }, " ", _react["default"].createElement(_reactBootstrap.Image, {
            fluid: true,
            className: "tile",
            src: require("../images/tile3.jpg"),
            rounded: true
          })), _react["default"].createElement(_reactBootstrap.Col, {
            xs: 6,
            md: true,
            style: {
              paddingTop: 40
            }
          }, " ", _react["default"].createElement(_reactBootstrap.Image, {
            fluid: true,
            className: "tile",
            src: require("../images/tile4.jpg"),
            rounded: true
          }))), _react["default"].createElement(_reactBootstrap.Row, {
            className: "grabber"
          }, _react["default"].createElement("h1", null, "Are you interested in joining, starting, or funding a co-op?", _react["default"].createElement("br", null), "Follow the movement with our newsletter.")), _react["default"].createElement(_reactBootstrap.Row, {
            className: "formContainer"
          }, _react["default"].createElement(_reactBootstrap.Col, {
            className: "emailContainer"
          }, _react["default"].createElement("input", {
            id: "emailInput",
            spellCheck: "false",
            placeholder: "Your Email",
            autoComplete: true,
            className: "emailInput",
            type: "email",
            onChange: function onChange(event) {
              return _this2.handleChange(event);
            }
          }), " "), _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement(_reactBootstrap.Button, {
            id: "submitButton",
            className: "submitButton",
            onClick: function onClick(event) {
              return _this2.handleSubmit(event);
            }
          }, "SIGN UP"))))));
        }
      }));
    }
  }]);
  return Landing;
}(_react.Component);

var _default = Landing;
exports["default"] = _default;