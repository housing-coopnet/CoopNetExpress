"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _reactAwesomeModal = _interopRequireDefault(require("react-awesome-modal"));

require("firebase/firestore");

var functions = _interopRequireWildcard(require("firebase-functions"));

var firebase = _interopRequireWildcard(require("firebase/app"));

firebase.initializeApp(functions.config().firebase);
var db = firebase.firestore;

var NewsletterModal =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(NewsletterModal, _Component);

  function NewsletterModal(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, NewsletterModal);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(NewsletterModal).call(this, props));
    _this.state = {
      email: '',
      first_name: '',
      last_name: '',
      emailUnique: false // Connect to firebase userData Collection

    };
    _this.userData = db.collection("userData");
    return _this;
  }

  (0, _createClass2["default"])(NewsletterModal, [{
    key: "validEmail",
    value: function () {
      var _validEmail = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _this2 = this;

        var emailQueryPromise, emailQuery;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                emailQueryPromise = this.userData.where("email", "==", this.state.email);
                _context.next = 3;
                return emailQueryPromise;

              case 3:
                emailQuery = _context.sent;
                emailQuery.get().then(function (querySnapshot) {
                  console.log(querySnapshot);

                  if (querySnapshot.empty) {
                    // this.setState({ emailUnique: true })
                    console.log(_this2.state.email + " is a new email address and should be added.");
                    return true;
                  } else {
                    // this.setState({ emailUnique: false })
                    console.log(_this2.state.email + " is already an email in the database.");
                    return false;
                  }
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function validEmail() {
        return _validEmail.apply(this, arguments);
      }

      return validEmail;
    }()
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this3 = this;

      var form = event.currentTarget;
      this.setState({
        email: form.formEmail.value,
        first_name: form.formFirst.value,
        last_name: form.formLast.value
      }, function () {
        console.log(_this3.state);

        if (_this3.validEmail()) {
          // Create entry in userData triggers email send through firebase function firestoreEmail via sendgrid
          _this3.userData.add({
            email: _this3.state.email,
            first_name: _this3.state.first_name,
            last_name: _this3.state.last_name
          }).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
          })["catch"](function (error) {
            console.error("Error adding document: ", error);
          });
        } else {
          alert("This email address is already on the newsletter!");
          return;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react["default"].createElement(_reactAwesomeModal["default"], (0, _extends2["default"])({
        visible: this.props.modalShow,
        effect: "fadeInUp"
      }, this.props), _react["default"].createElement(_reactBootstrap.Container, null, _react["default"].createElement("link", {
        rel: "stylesheet",
        href: "stylesheets/Modal.css"
      }), _react["default"].createElement("p", {
        className: "formHeader"
      }, "Sign up for our newsletter! We're super excited to be expanding our community of storytellers, residents, advocates and backers!"), _react["default"].createElement(_reactBootstrap.Form, {
        className: "form",
        onSubmit: function onSubmit(e) {
          return _this4.handleSubmit(e);
        }
      }, _react["default"].createElement(_reactBootstrap.Form.Group, {
        controlId: "formFirst"
      }, _react["default"].createElement(_reactBootstrap.Form.Label, null, "First Name"), _react["default"].createElement(_reactBootstrap.Form.Control, {
        required: true,
        type: "text",
        placeholder: "Enter First Name"
      })), _react["default"].createElement(_reactBootstrap.Form.Group, {
        controlId: "formLast"
      }, _react["default"].createElement(_reactBootstrap.Form.Label, null, "Last Name"), _react["default"].createElement(_reactBootstrap.Form.Control, {
        required: true,
        type: "text",
        placeholder: "Enter Last Name"
      })), _react["default"].createElement(_reactBootstrap.Form.Group, {
        controlId: "formEmail"
      }, _react["default"].createElement(_reactBootstrap.Form.Label, null, "Email address"), _react["default"].createElement(_reactBootstrap.Form.Control, {
        required: true,
        type: "email",
        placeholder: "Enter Email"
      }), _react["default"].createElement(_reactBootstrap.Form.Text, {
        className: "text-muted"
      }, "We'll send you a welcome email!"), _react["default"].createElement(_reactBootstrap.Form.Control.Feedback, {
        type: "invalid"
      }, "Please provide a valid email address.")), _react["default"].createElement(_reactBootstrap.Button, {
        style: {
          borderRadius: "20px 20px"
        },
        className: "formButton",
        type: "submit"
      }, "Sign Up"))));
    }
  }]);
  return NewsletterModal;
}(_react.Component);

exports["default"] = NewsletterModal;