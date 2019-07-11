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

function CarouselSlide(props) {
  console.log("Loading slide");
  console.log(props.slide);
  return _react["default"].createElement(_reactBootstrap.Carousel.Item, null, _react["default"].createElement("img", {
    className: "d-block w-100",
    src: "https://thecozyapron.com/wp-content/uploads/2018/03/dijon-roasted-potatoes_thecozyapron_1.jpg",
    alt: ""
  }), _react["default"].createElement(_reactBootstrap.Carousel.Caption, null, _react["default"].createElement("h3", null, props.slide.header), _react["default"].createElement("p", null, props.slide.text)));
}

var CarouselSlider =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(CarouselSlider, _Component);

  function CarouselSlider(props) {
    (0, _classCallCheck2["default"])(this, CarouselSlider);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CarouselSlider).call(this, props));
  }

  (0, _createClass2["default"])(CarouselSlider, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_reactBootstrap.Carousel, null, _react["default"].createElement(_reactBootstrap.Carousel.Item, null, _react["default"].createElement("img", {
        className: "carouselImage",
        src: "images/problem.jpg",
        alt: ""
      }), _react["default"].createElement(_reactBootstrap.Container, {
        className: "carouselCaption"
      }, _react["default"].createElement("h5", {
        className: "white"
      }, "Make affordable cooperative housing accessible for everyone"), _react["default"].createElement(_reactRouterDom.NavLink, {
        to: "/mission"
      }, _react["default"].createElement(_reactBootstrap.Button, {
        className: "blue"
      }, "Our Mission")))), _react["default"].createElement(_reactBootstrap.Carousel.Item, null, _react["default"].createElement("img", {
        className: "carouselImage",
        src: "images/aerial.jpg",
        alt: ""
      }), _react["default"].createElement(_reactBootstrap.Container, {
        className: "carouselCaption"
      }, _react["default"].createElement("h5", {
        className: "white"
      }, "A network of diverse cooperative communities to call home."), _react["default"].createElement(_reactRouterDom.NavLink, {
        to: "/vision"
      }, _react["default"].createElement(_reactBootstrap.Button, {
        className: "blue"
      }, "Our Vision")))), _react["default"].createElement(_reactBootstrap.Carousel.Item, null, _react["default"].createElement("img", {
        className: "carouselImage",
        src: "images/carouselHolder.jpg",
        alt: ""
      }), _react["default"].createElement(_reactBootstrap.Container, {
        className: "carouselCaption"
      }, _react["default"].createElement("h5", {
        className: "white"
      }, "Connect, Empower, and Finance housing cooperatives with socially conscious investors. "), _react["default"].createElement(_reactRouterDom.NavLink, {
        to: "/vision"
      }, _react["default"].createElement(_reactBootstrap.Button, {
        className: "blue"
      }, "Our Model")))));
    }
  }]);
  return CarouselSlider;
}(_react.Component);

var _default = CarouselSlider;
exports["default"] = _default;