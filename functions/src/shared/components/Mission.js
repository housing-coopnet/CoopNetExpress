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

var _NavHeader = _interopRequireDefault(require("../components/NavHeader.js"));

var _NewsletterModal = _interopRequireDefault(require("./NewsletterModal"));

var Link = require("react-router-dom").Link;

var Mission =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Mission, _Component);

  function Mission(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Mission);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Mission).call(this, props));
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

  (0, _createClass2["default"])(Mission, [{
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
        href: "stylesheets/About.css"
      }), _react["default"].createElement(_reactBootstrap.Row, {
        style: {
          paddingTop: "100px"
        }
      }, _react["default"].createElement(_reactBootstrap.Col, {
        md: {
          span: 6,
          offset: 3
        }
      }, _react["default"].createElement("h1", null, "The Problem"), _react["default"].createElement("p", null, "Our urban communities have become inaccessible and exclusionary. The high cost of property has made home-ownership an unattainable dream for most residents.", _react["default"].createElement("a", {
        href: "https://www.urban.org/urban-wire/state-millennial-homeownership"
      }, "Only 37% of Millennials own their own home in the United States, down from 45% for Baby Boomers when they were the same age"), ". In Alameda County,", _react["default"].createElement("a", {
        href: "https://www.car.org/aboutus/mediacenter/newsreleases/2018releases/1qtr2018hai"
      }, " the median home value was $875,000 in 2018"), ", requiring a minimum annual income of $181,130 to qualify for a mortgage. As a result, more people are forced to rent housing from profit seeking landlords, driving up rental costs. "), _react["default"].createElement("br", null), _react["default"].createElement("p", null, "The average rent for a one bedroom apartment in the City of Berkeley", _react["default"].createElement("a", {
        href: "https://www.rentjungle.com/average-rent-in-oakland-rent-trends/"
      }, "increased from $1,371 to $2,408 per month between 2011 and 2019 (9.5% annually)"), ". Over the same period, in Oakland the same style of unit increased from", _react["default"].createElement("a", {
        href: "https://www.apartmentlist.com/rentonomics/rent-growth-since-1960/"
      }, "$1,264 to $2,567 (12.9% annually)"), ". Rising costs of living are not limited to the Bay Area. Across the United States inflation-adjusted rent increased by 12% between 2000 and 2010, while household incomes fell by 7%, causing half of all renters in the country to spend more than 30% of income on rent."), _react["default"].createElement("h4", null, "So how do we go about solving this?"), _react["default"].createElement(Link, {
        to: "/vision"
      }, _react["default"].createElement("a", {
        className: "cta"
      }, "Learn More about our platform")))), _react["default"].createElement(_reactBootstrap.Container, {
        fluid: true,
        className: "stickyBottom"
      }, _react["default"].createElement(_reactBootstrap.Button, {
        className: "stickyBottom-button",
        onClick: function onClick() {
          return _this2.setState({
            modalShow: true
          });
        },
        fluid: true
      }, " SIGN UP FOR OUR NEWSLETTER"), _react["default"].createElement(_NewsletterModal["default"], {
        modalShow: this.state.modalShow,
        onClickAway: this.modalClose
      })));
    }
  }]);
  return Mission;
}(_react.Component);

var _default = Mission;
exports["default"] = _default;