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
      }), _react["default"].createElement(_NavHeader["default"], null), _react["default"].createElement(_reactBootstrap.Row, {
        style: {
          paddingTop: "100px"
        }
      }, _react["default"].createElement(_reactBootstrap.Col, {
        md: {
          span: 6,
          offset: 3
        }
      }, _react["default"].createElement("h1", null, "The Platform"), _react["default"].createElement("p", null, "Cooperatives are a unique form of affordable housing because they alter the fundamental structure of property ownership. Residents control their property and all decisions associated with it, including the costs set for members to cover things like mortgage payments, taxes, and maintenance. There is no landlord seeking to maximize profits as an intermediary between the source of capital (often a bank or credit union) and the residents. While the underlying drivers of housing cost--land valuation on a private market, assessed property taxes, debt service on initial acquisition or development expenses, insurance, and repairs--are similar, the removal of the unnecessary intermediary makes a house more affordable as a cooperative than it would be in a traditional rental system."), _react["default"].createElement("p", null, "In addition to the cost-savings of direct ownership, cooperatives provide residents with several benefits: security, equity, transferability, and opportunities for subsidy."), _react["default"].createElement("h4", null, "Benefits of Cooperatives"), _react["default"].createElement("p", null, "Joint-ownership means that residents are not at risk of eviction by a landlord. As long as the cooperative can cover the cost of the mortgage and taxes, every resident contributing their fair share is guaranteed long-term security in housing. Cooperatives have no reason to eject members simply because the local cost of rent is increasing, unlike landlords, and can elect to formalize this promise of security and long-term affordability by organizing as a limited-equity co-op."), _react["default"].createElement("p", null, "Another benefit of resident-ownership is that members accrue equity through the co-op in the property as their mortgage is paid off. Just like a traditional homeowner, cooperatives build up a greater ownership stake in the property as the principal is paid off their debt. Members each receive a portion of this equity through their ownership of shares in the co-op, thereby building savings which can be transferred to their children or sold later on. Limited-equity cooperatives, as the name suggests, restrict how much this ownership stake changes in value over time, to prevent the rapid appreciation in land values which drive up the cost of housing in high-demand real estate markets. Members\u2019 shares are less \u2018profitable\u2019 as a result, but the co-op remains affordable for future residents."), _react["default"].createElement("p", null, "Residents are guaranteed a place to live in the cooperative through a long-term lease agreement, which is tied to their ownership share in the organization. Members can transfer their shares as well as their lease to another person or family, including their own friends or relatives, thereby enabling cooperatives to remain locally owned within a community. Cooperatives often limit the transferability of these rights based on prior association, income status, or other qualifiers in order to preserve the mission of the organization, but these restrictions are decided entirely by the democratic vote of the founding members."), _react["default"].createElement("p", null, "Finally, cooperatives can benefit from many public and nonprofit subsidies that further reduce long-term costs. Many cities and states have funding set aside specifically for cooperatives which serve low-income communities. Co-ops qualify for federal housing subsidies as well, including those restricted to promoting homeownership. Since many co-ops are committed to perpetual affordability, they are also a natural partner for land banks and community land trusts (CLTs), which act as  stewards of the underlying land and often receive support from city governments."), _react["default"].createElement("h4", null, "Solutions"), _react["default"].createElement("p", null, "One model which can rapidly create deeply affordable housing that many cities are employing is the donation of public land to a CLT and subsequent conversion or construction of a housing cooperative. This system separates the land, which can fluctuate in value according to markets, from the house itself, which remains relatively stable; members of the cooperative then only have to make monthly payments on the value of the house, which is typically a fraction of the value of underlying land."))), _react["default"].createElement(_reactBootstrap.Container, {
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