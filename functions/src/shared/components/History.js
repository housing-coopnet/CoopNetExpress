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

var History =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(History, _Component);

  function History(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, History);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(History).call(this, props));
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

  (0, _createClass2["default"])(History, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(_reactBootstrap.Container, {
        fluid: true
      }, _react["default"].createElement("link", {
        rel: "stylesheet",
        href: "/stylesheets/App.css"
      }), _react["default"].createElement("link", {
        rel: "stylesheet",
        href: "/stylesheets/About.css"
      }), _react["default"].createElement(_NavHeader["default"], null), _react["default"].createElement(_reactBootstrap.Row, {
        style: {
          paddingTop: "100px"
        }
      }, _react["default"].createElement(_reactBootstrap.Col, {
        md: {
          span: 6,
          offset: 3
        }
      }, _react["default"].createElement("h1", null, "Our Story"), _react["default"].createElement("p", null, "CoopNet began with an experience familiar to many in the Bay Area--our members moved to Berkeley and had to find somewhere to live. Trying to decide between spending over $1,200 a month for a single or $800 to share a room with another student, we were already fed up with the ridiculousness of the housing crisis. As students we were also keenly aware that we were feeding into a system of gentrification and displacement that was continuously driving up rents for the long-term residents who formed the heart of our new community. We faced a choice: either ignore the injustice all around us and join the Bay\u2019s profit-driven treadmill or put our hearts and minds to use doing something to preserve everything we loved about our new home. Needless to say, our conscience triumphed."), _react["default"].createElement("p", null, "CoopNet was born from a simple question. Why do we only have two options for housing: renting or owning? Why do we have to pay over half or three-quarters of our income just to have a place to sleep? Isn\u2019t there another alternative to the rent-own dichotomy?"), _react["default"].createElement("p", null, "We found our answer in cooperative housing. Two of our members, Ramsay and Jinsu, were lucky enough to join the Berkeley Student Cooperative soon after moving to the Bay. The intentional community they found there inspired them with a new vision for living, and the affordability allowed them to focus on their education rather than worrying about how to pay the rent. The BSC seemed like a perfect solution to the housing crisis--so why didn\u2019t more people didn\u2019t start up housing cooperatives and take control of their own homes?"), _react["default"].createElement("p", null, "After dozens of conversations with housing co-ops across the Bay, we learned that organizing a cooperative wasn\u2019t as easy as we\u2019d thought. It took a group of potential coopers with the determination and patience to navigate legal complexities, form a new entity, locate a potential property, and raise the capital necessary for a down payment. Even with the help of local cooperative associations like the Bay Area Community Land Trust or Sustainable Economies Law Center, few people had thousands of dollars in savings necessary to secure a mortgage. Our vision of transforming the extractive rental market into communities of co-housing seemed doomed from the start--there just wasn\u2019t a way to make cooperatives an accessible option for everyone."), _react["default"].createElement("p", null, "The turning point in our story came like so many other community changing moments--we saw a flyer for a neighborhood meet-up in Oakland from the East Bay Permanent Real Estate Cooperative. The team at EBPREC had a vision for a different kind of co-op association, based on community ownership, resident control, and grassroots sources of local capital. They weren\u2019t the first to try crowdfunding for housing co-ops, but they had a vision for a scalable network of houses across the East Bay that preserved affordability and was intentional about economic justice. Thanks to a new California law, advocated for by the Sustainable Economies Law Center which incubated EBPREC, neighbors could contribute up to $1,000 to creating new housing co-ops that would remain permanently affordable for local residents. It was cooperative housing for a new generation, where inclusivity was built into the design."), _react["default"].createElement("p", null, "We started CoopNet as a group of friends in the fall of 2018 with the goal of creating a digital platform that could scale the crowdfunding of cooperative housing across the country. Our plan was to solve three challenges facing potential cooperatives: the difficulty of connecting with other coopers, the complexity of starting an organization, and the challenge of raising the first $100,000 in capital. We believe that anyone can come together to form a co-op, that existing cooperatives and their supporters can help guide a new generation, and that socially conscious neighbors can invest in preserving their own communities. All we want to do is build a platform and bring people together to make it happen."), _react["default"].createElement("iframe", {
        width: "320",
        height: "220",
        src: "https://www.youtube.com/embed/YbAypb8cTSY",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: true
      }))), _react["default"].createElement(_reactBootstrap.Container, {
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
  return History;
}(_react.Component);

var _default = History;
exports["default"] = _default;