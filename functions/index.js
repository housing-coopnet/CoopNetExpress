"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoopNet = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var functions = _interopRequireWildcard(require("firebase-functions"));

var _reactDom = require("react-dom");

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./src/shared/App"));

var _testFacts = _interopRequireDefault(require("./src/shared/components/testFacts"));

var _routes = _interopRequireDefault(require("./src/shared/routes"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

// This is the index for the server side handling
// SSR Tutorial Additions
var admin = require('firebase-admin');

var SENDGRID_API_KEY = functions.config().sendgrid.key;

var sgMail = require('@sendgrid/mail');

sgMail.setApiKey(SENDGRID_API_KEY);

var fs = require('fs').promises;

var _require = require("react-router-dom"),
    StaticRouter = _require.StaticRouter,
    matchPath = _require.matchPath;

function getIndex() {
  return _getIndex.apply(this, arguments);
}

function _getIndex() {
  _getIndex = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var index;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fs.readFile(__dirname + '/index.html', 'utf8');

          case 2:
            index = _context.sent;
            return _context.abrupt("return", index);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getIndex.apply(this, arguments);
}

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"]["static"]("public"));
app.get("**", function (req, res, next) {
  var activeRoute = _routes["default"].find(function (route) {
    return matchPath(req.url, route);
  }) || {};
  console.log("About to get markup : SERVER");
  var markup = (0, _server.renderToString)(_react["default"].createElement(StaticRouter, {
    location: req.url
  }, _react["default"].createElement(_App["default"], {
    redirect: req.url
  })));
  console.log(req.url);
  var index = getIndex().then(function () {
    var finalmarkup = index.replace('COOPNET----GOES----HERE', markup);
  });
  res.set('Cache-Control', 'public, max-age=200, s-maxage=500');
  res.send(finalmarkup);
});
var CoopNet = functions.https.onRequest(app);
exports.CoopNet = CoopNet;
exports.firestoreEmail = functions.firestore.document('userData/{userId}').onCreate(function (event) {
  var userId = event.id;
  var db = admin.firestore();
  return db.collection('userData').doc(userId).get().then(function (doc) {
    var user = doc.data();
    console.log("Sending email to " + user.first_name + " at " + user.email);
    var msg = {
      to: user.email,
      from: 'Jinsu@housingcoop.net',
      // custom templates
      templateId: functions.config().sendgrid.template,
      substitutionWrappers: ['{{', '}}'] //TODO: Need to find a way to pass user's name into mail template
      // substitutions: {
      //   name: toString(user.first_name)
      //   // and other custom properties here
      // }

    };
    return sgMail.send(msg);
  }).then(function () {
    return console.log('email sent!');
  })["catch"](function (err) {
    return console.log(err);
  });
});