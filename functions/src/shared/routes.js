"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Home = _interopRequireDefault(require("./components/Home"));

var _AboutNew = _interopRequireDefault(require("./components/AboutNew"));

var _Mission = _interopRequireDefault(require("./components/Mission"));

var _Vision = _interopRequireDefault(require("./components/Vision"));

var _Team = _interopRequireDefault(require("./components/Team"));

var _Model = _interopRequireDefault(require("./components/Model"));

var _History = _interopRequireDefault(require("./components/History"));

var routes = [{
  path: '/',
  exact: true,
  component: _Home["default"]
}, {
  path: '/about',
  component: _AboutNew["default"]
}, {
  path: '/mission',
  component: _Mission["default"]
}, {
  path: '/vision',
  component: _Vision["default"]
}, {
  path: '/team',
  component: _Team["default"]
}, {
  path: '/model',
  component: _Model["default"]
}, {
  path: '/history',
  component: _History["default"]
}];
var _default = routes;
exports["default"] = _default;