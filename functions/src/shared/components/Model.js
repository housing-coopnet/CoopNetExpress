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

var Model =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Model, _Component);

  function Model(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Model);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Model).call(this, props));
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

  (0, _createClass2["default"])(Model, [{
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
      }, _react["default"].createElement("h1", null, "Our Model"), _react["default"].createElement("h4", null, "What is cooperative housing?"), _react["default"].createElement("p", null, "Housing co-ops are legal entities organized to own and manage a property (or properties) on behalf of their members. Members are typically also residents but this isn\u2019t necessarily required. The co-op, as an organization, owns the property while the members own shares in the co-op, and therefore vote as a group on how the property is run. "), _react["default"].createElement("p", null, "This can provide many benefits in the flexibility of ownership, as members aren\u2019t tied to the property like they would be if they took a mortgage themselves, while also maintaining affordability, since there is no landlord extracting profits from ever-increasing rents."), _react["default"].createElement("h4", null, "What is a limited equity cooperative?"), _react["default"].createElement("p", null, "Limited Equity Housing Cooperatives, or LEHC's, are affordable housing owned jointly by the residents. Each individual or family purchases a share in the nonprofit corporation that owns the property, and has the right to occupy an individual unit. Each household builds a small amount of equity on their share, usually tied to inflation, but by law, no more than 10% per year. Because the increase in equity is limited, the buy-in cost and monthly payments remain well below market rates.  This makes home ownership available for lower-income individuals and families who otherwise could never afford to buy homes."), _react["default"].createElement("h4", null, "Why would people live in cooperatives?"), _react["default"].createElement("p", null, "Aside from the social value of living and working beside people who share a communal (rather than solitary) vision of what home can mean, we believe there are six benefits of cooperative housing:"), _react["default"].createElement("em", {
        className: "title"
      }, "Security of Tenancy:"), _react["default"].createElement("p", null, "As long as a member pays monthly assessment and does not violate basic co-op agreements, (s)he can live there permanently without fear of eviction."), _react["default"].createElement("em", {
        className: "title"
      }, "Control Over Living Space: "), _react["default"].createElement("p", null, "There is much greater flexibility in making alterations in interior and exterior space, than with a rented home."), _react["default"].createElement("em", {
        className: "title"
      }, "Stability of Rents: "), _react["default"].createElement("p", null, "With careful budgeting, a co-op can keep rents very stable.  When rents are raised, it is for a specific reason (such as to pay for increased costs) not for landlord profit."), _react["default"].createElement("em", {
        className: "title"
      }, "Make Your Own Rules"), _react["default"].createElement("p", null, "Each co-op operates slightly differently, based on the physical layout, people living there, etc.  No landlord can tell you what to do."), _react["default"].createElement("em", {
        className: "title"
      }, "Tax Benefits: "), _react["default"].createElement("p", null, "A member can deduct a percentage of the mortgage interest and property taxes from income taxes, if (s)he itemizes deductions."), _react["default"].createElement("em", {
        className: "title"
      }, "Equity Build-up: "), " ", _react["default"].createElement("p", null, "Members receive interest annually on the initial share investment."), _react["default"].createElement("h4", null, "What if I don\u2019t want to be surrounded by people all the time?"), _react["default"].createElement("p", null, "Cooperative doesn\u2019t mean constant contact. Depending on how you structure your co-op and which property you live in, members can each have their own rooms, bathrooms, or other designated spaces. Co-ops come in all shapes and sizes, from individual units with shared gardens to single houses with a communal kitchen. What makes a home a co-op is how it\u2019s owned and operated rather than the physical space. Many cooperatives have a particular vision for the type of community they want but we here at CoopNet believe everyone should be free to organize their own style of co-housing."), _react["default"].createElement("h4", null, "How does CoopNet come in?"), _react["default"].createElement("p", null, "CoopNet aims to support the creation and growth of cooperatives in all of our partner communities. We plan to provide information on cooperative housing, legal templates and resources, and a complete listing of co-ops and supportive organizations. In addition, we are developing an active community board of co-op listings and vacancies, as well as a chat-forum for current and potential coopers to discuss their journey as members and organizations. Finally, we are developing a crowdfunding platform to help new cooperatives raise the initial capital required to leverage financing for their new home. We hope to unite all supporters of the cooperative movement in one place and create opportunities for anyone, regardless of their background, to join us in creating a more equitable, democratic future!"), _react["default"].createElement("h4", null, "How do I join / form a cooperative?"), _react["default"].createElement("p", null, "Sign up for our newsletter to get updates on new cooperatives and vacancies listed on our site! Once a coop has openings, we\u2019ll post the details of their listing and contact information for their board. Hopefully we can help you join a co-op community soon!"), _react["default"].createElement("p", null, "Forming a new cooperative can be a long and complex process. That said, we fully believe that it is something that anyone can and should do! First, check out ", _react["default"].createElement("a", {
        href: "https://www.shareable.net/how-to-start-a-housing-co-op/"
      }, "this article"), " on how to start a housing co-op from our friends at Shareable and see if it\u2019s right for you. Then, if you\u2019re still interested, please reach out to us by email or social media using the links below and we can discuss how to move forward!"), _react["default"].createElement("h4", null, "Why would people back a cooperative they aren\u2019t living in?"), _react["default"].createElement("em", {
        className: "title"
      }, "How do I back a cooperative?"), _react["default"].createElement("p", null, "Sadly our crowdfunding portal isn\u2019t yet open--it takes a surprising amount of web development and legal filings to start one--but if you\u2019re interested in backing a local cooperative in the Bay Area check out our friends at the ", _react["default"].createElement("a", {
        href: "https://ebprec.org/"
      }, "East Bay Permanent Real Estate Cooperative!"), " They\u2019re doing some amazing things to preserve communities in Oakland and could definitely use your support!"), _react["default"].createElement("p", null, "Our plan is to create a platform for new cooperatives to promote their Direct Public Offerings to backers on our site by January 2020. Sign up for our newsletter and follow us on social media to be the first to hear about our progress!"), _react["default"].createElement("h4", null, "Are there any limits for backers? What about regulations?"), _react["default"].createElement("p", null, "Yes, there are certainly legal regulations surrounding the investment in cooperatives, just like any organization. Most investments (whether debt or equity) have to be registered with the Securities and Exchange Commission, including the form that we think works best for housing co-ops, ", _react["default"].createElement("a", {
        href: "https://www.cuttingedgecapital.com/direct-public-offering/"
      }, "Direct Public Offerings "), ". The SEC has a ", _react["default"].createElement("a", {
        href: "https://www.sec.gov/smallbusiness/exemptofferings/regcrowdfunding"
      }, "separate set of guidelines for regulation crowdfunding "), "which is actively being updated."), _react["default"].createElement("p", null, "Interested in learning more about Direct Public Offerings and how they can support cooperatives? Check out this ", _react["default"].createElement("a", {
        href: "https://medium.com/fifty-by-fifty/real-pickles-dpo-how-workers-raised-half-a-million-dollars-to-buy-a-business-c470049ee590"
      }, "Medium article on how Real Pickles raised $500,000 from their community of supporters!"), " Or read about the ", _react["default"].createElement("a", {
        href: "https://www.cuttingedgecapital.com/dpos-and-crowdfunding-whats-the-difference/"
      }, "differences between DPOs and crowdfunding"), " from our friends at Cutting Edge Capital!"), _react["default"].createElement("h4", null, "How will my investment be treated for tax purposes?"), _react["default"].createElement("p", null, "That will likely depend on a lot of details: from where you live to where the cooperative is based, as well as what type of investment it is. Generally speaking, it will probably be treated like most other investments in securities, where the profits generated are taxed as either income or capital gains. We cannot provide official legal advice, however, so we highly advise anyone making an investment (in a co-op or otherwise) to speak to an accountant and an attorney."), _react["default"].createElement("p", null, "In case you were wondering, investments in cooperatives are not usually tax deductible. If you wanted to make a donation, on the other hand, we can certainly recommend plenty of nonprofit 501(c)(3) organizations such as the ", _react["default"].createElement("a", {
        href: "http://bayareaclt.org/"
      }, "Bay Area Community Land Trust"), " who can help you support cooperatives and make tax-deductible charitable donations."))), _react["default"].createElement(_reactBootstrap.Container, {
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
  return Model;
}(_react.Component);

var _default = Model;
exports["default"] = _default;