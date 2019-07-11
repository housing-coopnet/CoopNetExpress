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

require("../stylesheets/App.css");

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

var _Footer = _interopRequireDefault(require("../components/Footer.js"));

var _CarouselSlider = _interopRequireDefault(require("../components/CarouselSlider.js"));

var _NavHeader = _interopRequireDefault(require("../components/NavHeader.js"));

var popover = _react["default"].createElement(_reactBootstrap.Popover, {
  id: "popover-basic",
  title: "Member profiles are coming soon!"
}, "We are in the process of implementing a fully scalable and secure member registration system! Stay tuned.");

var carouselSlides = [{
  "key": 1,
  "header": "Slide 1",
  "text": "Take an interest",
  "button": "Sign up",
  "image": "../images/carousel1.jpg"
}, {
  "key": 2,
  "header": "Slide 2",
  "text": "Build a portfolio",
  "button": "Invest",
  "image": "../images/carousel2.jpg"
}, {
  "key": 3,
  "header": "Slide 3",
  "text": "Look at our projects",
  "button": "Explore",
  "image": "../images/carousel3.jpg"
}];
var projectTiles = [{
  "title": "Oakland City Residence",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis eros in euismod viverra. Sed vitae pulvinar nulla, sollicitudin euismod sem. ",
  "progress": 50,
  "source": '../images/tile1.jpg',
  "projectNumber": 1
}, {
  "title": "Berkeley Student Cooperative",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis eros in euismod viverra. Sed vitae pulvinar nulla, sollicitudin euismod sem. ",
  "progress": 2,
  "source": '../images/tile2.jpg',
  "projectNumber": 2
}, {
  "title": "Diablo Valley Affordable Homes",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis eros in euismod viverra. Sed vitae pulvinar nulla, sollicitudin euismod sem. ",
  "progress": 10,
  "source": '../images/tile3.jpg',
  "projectNumber": 3
}, {
  "title": "SF Roofing Act",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis eros in euismod viverra. Sed vitae pulvinar nulla, sollicitudin euismod sem. ",
  "progress": 20,
  "source": '../images/tile4.jpg',
  "projectNumber": 4
}];

function ProjectTile(props) {
  return _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement("a", {
    href: "/project"
  }, _react["default"].createElement("div", {
    "class": "tile"
  }, _react["default"].createElement("div", {
    "class": "tile-inner"
  }, _react["default"].createElement("div", {
    "class": "tile-front"
  }, console.log(process.cwd()), _react["default"].createElement("img", {
    src: require("../images/tile" + props.tile["projectNumber"] + ".jpg"),
    alt: ""
  })), _react["default"].createElement("div", {
    "class": "tile-back"
  }, _react["default"].createElement("h1", null, props.tile["title"]), _react["default"].createElement("p", null, props.tile["description"]), _react["default"].createElement("p", null, "Learn more"))), _react["default"].createElement(_reactBootstrap.ProgressBar, {
    variant: "success",
    "class": "projectProgress",
    animated: true,
    now: props.tile["progress"]
  }))));
}

var Home =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Home, _Component);

  function Home() {
    (0, _classCallCheck2["default"])(this, Home);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Home).apply(this, arguments));
  }

  (0, _createClass2["default"])(Home, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "App"
      }, _react["default"].createElement(_NavHeader["default"], null), _react["default"].createElement(_CarouselSlider["default"], {
        slides: carouselSlides
      }), _react["default"].createElement(_reactBootstrap.Container, {
        className: "introJumboContainer"
      }, _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement(_reactBootstrap.Jumbotron, {
        className: "introJumbo",
        fluid: true
      }, _react["default"].createElement("h1", null, "Housing for everyone."), _react["default"].createElement("p", null, "We are on a mission to bring direct investments from development-minded backers to our community in order to make affordable housing accessible to everyone."), _react["default"].createElement(_reactBootstrap.Button, {
        className: "introJumboButton",
        variant: "light",
        href: "/about"
      }, "Learn more about our mission"))), _react["default"].createElement(_reactBootstrap.Col, {
        xs: 5
      }, _react["default"].createElement(_reactBootstrap.Image, {
        roundedCircle: true,
        src: require('../images/introJumboImage.jpg')
      })))), _react["default"].createElement(_reactBootstrap.Container, {
        className: "tileContainer",
        fluid: true
      }, _react["default"].createElement(_reactBootstrap.Row, {
        className: "tileRow"
      }, projectTiles.map(function (tile) {
        return _react["default"].createElement(ProjectTile, {
          tile: tile
        });
      })), _react["default"].createElement(_reactBootstrap.Row, {
        className: "tileRow"
      }, projectTiles.map(function (tile) {
        return _react["default"].createElement(ProjectTile, {
          tile: tile
        });
      }))), _react["default"].createElement(_Footer["default"], null));
    }
  }]);
  return Home;
}(_react.Component);

var _default = Home;
exports["default"] = _default;