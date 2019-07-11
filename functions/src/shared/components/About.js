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

var _FAQ = _interopRequireDefault(require("../components/FAQ.js"));

//import Image from 'react-bootstrap/Image'
//import ListGroup from 'react-bootstrap/ListGroup'
var About =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(About, _Component);

  function About() {
    (0, _classCallCheck2["default"])(this, About);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(About).apply(this, arguments));
  }

  (0, _createClass2["default"])(About, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "App"
      }, _react["default"].createElement(_NavHeader["default"], null), _react["default"].createElement(_reactBootstrap.Container, null, _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement("p", null), _react["default"].createElement("h1", null, "About Us")))), _react["default"].createElement(_reactBootstrap.Container, null, _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement(_reactBootstrap.Jumbotron, {
        className: "introJumbo",
        fluid: true
      }, _react["default"].createElement("h2", null, "Our Mission"), _react["default"].createElement("p", null, "Our Mission is to make affordable cooperative housing accessible for everyone."))))), _react["default"].createElement(_reactBootstrap.Container, null, _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement("h2", null, "The Problem"), _react["default"].createElement("p", null, "Our urban communities have become inaccessible and exclusionary. Combined with many other factors, the high cost of property has made home-ownership an unattainable dream for most residents. Only 37% of Millennials own their own home in the United States, ", _react["default"].createElement("a", {
        href: ""
      }, " down from 45% for Baby Boomers when they were the same age "), ". In Alameda County, the median home value was $875,000 in 2018, requiring a minimum annual income of $181,130 to qualify for a mortgage2. As a result, more people are forced to rent housing from profit seeking landlords, driving up rental costs. The average rent for a one bedroom apartment in the City of Berkeley increased by 9.5% annually between 2011 and 2019, from $1,371 to $2,408 per month3. For Oakland the same unit increased from $1,264 to $2,567, representing a 12.9% annual increase4. Rising costs of living are not limited to the Bay Area. Across the United States inflation-adjusted rent increased by 12% between 2000 and 2010, while household incomes fell by 7%, causing half of all renters in the country to spend more than 30% of income on rent5.")), _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement("h2", null, "Our Vision"), _react["default"].createElement("p", null, "A network of diverse cooperative communities in which everyone has a place to call home."), _react["default"].createElement("p", null, " Benefits of Co-Op housing"), _react["default"].createElement("p", null, "Impact Model and Goals")))), _react["default"].createElement(_reactBootstrap.Container, null, _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement(_reactBootstrap.Jumbotron, {
        className: "introJumbo",
        fluid: true
      }, _react["default"].createElement("h2", null, "Our Team"), _react["default"].createElement("p", null, "Meet the team behind CoopNet ")))), _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, {
        xs: 8,
        md: 6
      }, _react["default"].createElement("img", {
        src: require('../images/aaron.jpeg'),
        roundedCircle: true,
        width: "250px"
      }), _react["default"].createElement("h3", null, " ", _react["default"].createElement("a", {
        href: "https://www.linkedin.com/in/aaron-scherf-60504873/"
      }, " Aaron Scherf "), " "), _react["default"].createElement("div", {
        "class": "title"
      }, _react["default"].createElement("h4", null, " Co-Founder, Finance and Development ")), _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Aaron believes in the power of technology and information to unify people and change the world. His passion for housing began in Cape Town, South Africa, where he developed data solutions for a microfinance organization which helped local residents of townships protect and improve their homes. Since then he has worked to support a variety of non-profit organizations and local governments on issues of affordable housing, historic preservation, and migrant rights. Aaron has also served as a researcher in the US House of Representatives, the Centre for European Economic Research, and LandLink Analytic Services--a company he founded during his undergraduate studies at Mercer University. After graduation from UC Berkeley, Aaron plans to begin a career as a Foreign Service Officer with USAID."), _react["default"].createElement("h5", null, "Education "), _react["default"].createElement("b", null, " UC Berkeley MDP \u201820 "), _react["default"].createElement("ul", null, _react["default"].createElement("li", null, " Goldman School of Public Policy"), _react["default"].createElement("li", null, " Division of Data Sciences")), _react["default"].createElement("b", null, " Universit\xE4t Heidelberg - Fulbright Research Scholar \u201818 "), " ", _react["default"].createElement("ul", null, _react["default"].createElement("li", null, " Audited Coursework for Master of Science in Economics ")), _react["default"].createElement("b", null, " Mercer University - Bachelor of Business Administration \u201817 "), _react["default"].createElement("ul", null, _react["default"].createElement("li", null, " Majors in International Business, Finance, and Economics "), _react["default"].createElement("li", null, "    Minors in Management and Global Development Studies ")))), _react["default"].createElement(_reactBootstrap.Col, {
        xs: 8,
        md: 6
      }, _react["default"].createElement("img", {
        src: require('../images/ramsay.jpeg'),
        roundedCircle: true,
        width: "250px"
      }), _react["default"].createElement("h3", null, " ", _react["default"].createElement("a", {
        href: "https://www.linkedin.com/in/ramsay-boly-637b82100/"
      }, " Ramsay Boly ")), _react["default"].createElement("h4", null, " Partnerships and Community Development "), _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Ramsay believes that social capital is a community\u2019s most valuable resource for development and sustainability. He\u2019s an advocate for mobilizing communities and restorative justice practices and Ramsay believes that breaking cycles of violence which define our cities requires collaboration across sectors. Ramsay\u2019s interest in conflict resolution began in his home of Burkina Faso whose current geopolitical situation has largely been influenced by a regional history of conflict and colonialism. Ramsay\u2019s diverse experiences include working for the Neighborhood Associates Corporation in Washington DC, a (year) practicing Qi Gong meditation in Taiwan, and helping to co-found a startup which utilized blockchain technology to ensure traceability of minerals in ethical supply chains. Since starting his graduate education at UC Berkeley, Ramsay has become an active leader in the Berkeley Student Cooperative, where he is currently living in the Afro House. Ramsay loves playing and coaching soccer which he calls the \u2018universal language\u2019 that he\u2019s used to connect with people across the globe."), _react["default"].createElement("h5", null, "Education"), _react["default"].createElement("b", null, " UC Berkeley - Master of Development Practice \u201820"), _react["default"].createElement("ul", null, _react["default"].createElement("li", null, " Concentration in Information Communications Technology ")), _react["default"].createElement("b", null, " George Mason University - Bachelor of Conflict Analysis and Resolution \u201815"), " ", _react["default"].createElement("ul", null, _react["default"].createElement("li", null, " Minor in Nonprofit Studies")))), _react["default"].createElement(_reactBootstrap.Col, {
        xs: 8,
        md: 6
      }, _react["default"].createElement("img", {
        src: require('../images/jinsu.jpeg'),
        roundedCircle: true,
        width: "250px"
      }), _react["default"].createElement("h3", null, " ", _react["default"].createElement("a", {
        href: "https://www.linkedin.com/in/jinsue/"
      }, " Jinsu Elhance "), "  "), _react["default"].createElement("h4", null, " Web Development "), _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Jinsu believes that democratizing technology can empower grassroots development around the world. His passion for computing and web development has been shaped by his experiences growing up in Kenya and Wales and eventually learning how to code in the Bay Area. Beyond his studies at Cal, Jinsu has worked as an editor for the United Youth Journalists and serves as Vice President at Codeology, a student organization dedicated to fostering mentorship and self-exploration among computer scientists. When he isn\u2019t building out a new web layout, Jinsu is out shooting landscapes or dreaming of \u201Ctiny homes\u201D."), _react["default"].createElement("h5", null, "Education  "), _react["default"].createElement("b", null, " UC Berkeley - Bachelor of Science \u201821"), _react["default"].createElement("ul", null, _react["default"].createElement("li", null, " Computer Science and Data Science "), _react["default"].createElement("li", null, " Emphasis in Social Policy and Law ")))), _react["default"].createElement(_reactBootstrap.Col, {
        xs: 8,
        md: 6
      }, _react["default"].createElement("img", {
        src: require('../images/cara.jpeg'),
        roundedCircle: true,
        width: "250px"
      }), _react["default"].createElement("h3", null, " ", _react["default"].createElement("a", {
        href: "https://www.linkedin.com/in/carawolfe/"
      }, "  Cara Wolfe ")), _react["default"].createElement("h4", null, " Web Development "), _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Cara is passionate about combining technology with community based work. She is interested in developing technologies with a social conscience and further exploring the societal implications of technology. At UC Berkeley, she is serving in several leadership positions in computer science and STEM education student organizations as the President of Engineering for Kids, the Mentorship Coordinator for the Association of Women in Electrical Engineering & Computer Science, and the Lead Organizer of CS KickStart. She is also conducting research on different cultural diasporas."), _react["default"].createElement("h5", null, "Education "), _react["default"].createElement("b", null, " UC Berkeley Computer Science \u201821")))), _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement("h2", null, "Board of Advisors"))), _react["default"].createElement(_reactBootstrap.Row, null), _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, {
        xs: 8,
        md: 6
      }, _react["default"].createElement("h3", null, "  Wintson Sale "), _react["default"].createElement("p", null, "Winston Sale is an attorney with over ten years of experience in affordable housing, community development, real estate finance, tax and banking law.  As an attorney for the U.S. Department of Housing and Urban Development, Mr. Sale oversaw the disbursement and use of billions of dollars in federal affordable housing grants, including the HOME program, BRAC and Community Development Block Grants.  In private practice, Mr. Sale has represented a wide variety institutional investors in Low Income Housing Tax Credit projects, closing hundreds of millions of dollars of equity investments in subsidized apartment complexes across the United States.  Mr. Sale currently serves as a federal regulatory attorney specializing in ensuring the safety and soundness of wholesale banking institutions that provide liquidity to the national mortgage finance system."))))), _react["default"].createElement("div", {
        ref: "team"
      }, _react["default"].createElement(_reactBootstrap.Container, null, _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement(_reactBootstrap.Jumbotron, {
        className: "introJumbo",
        fluid: true
      }, _react["default"].createElement("h2", null, "Our Model"), _react["default"].createElement("p", null, "A platform to connect, empower, and finance potential housing cooperatives with the support of socially conscious investors.")))), _react["default"].createElement(_reactBootstrap.Tab.Container, {
        id: "list-group-tabs-example",
        defaultActiveKey: "#faq1"
      }, _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, {
        sm: 4
      }, _react["default"].createElement(_reactBootstrap.ListGroup, null, _react["default"].createElement(_reactBootstrap.ListGroup.Item, {
        action: true,
        href: "#faq1"
      }, " What is cooperative housing? "), _react["default"].createElement(_reactBootstrap.ListGroup.Item, {
        action: true,
        href: "#faq2"
      }, " Why would people like in cooperatives? "), _react["default"].createElement(_reactBootstrap.ListGroup.Item, {
        action: true,
        href: "#faq3"
      }, " How does CoopNet come in?"), _react["default"].createElement(_reactBootstrap.ListGroup.Item, {
        action: true,
        href: "#faq4"
      }, " How do I join / form a cooperative?"), _react["default"].createElement(_reactBootstrap.ListGroup.Item, {
        action: true,
        href: "#faq5"
      }, " Why would people back a cooperative they aren\u2019t living in?"), _react["default"].createElement(_reactBootstrap.ListGroup.Item, {
        action: true,
        href: "#faq6"
      }, " How does CoopNet come in?"), _react["default"].createElement(_reactBootstrap.ListGroup.Item, {
        action: true,
        href: "#faq7"
      }, " How do I back a cooperative?"), _react["default"].createElement(_reactBootstrap.ListGroup.Item, {
        action: true,
        href: "#faq8"
      }, " Are there any limits for backers? What about regulations?"), _react["default"].createElement(_reactBootstrap.ListGroup.Item, {
        action: true,
        href: "#faq9"
      }, " How will my investment be treated for tax purposes?"))), _react["default"].createElement(_reactBootstrap.Col, {
        sm: 8
      }, _react["default"].createElement(_reactBootstrap.Tab.Content, null, _react["default"].createElement(_reactBootstrap.Tab.Pane, {
        eventKey: "#faq1"
      }, _react["default"].createElement("p", null, " What is cooperative housing?"), _react["default"].createElement(_FAQ["default"], null)), _react["default"].createElement(_reactBootstrap.Tab.Pane, {
        eventKey: "#faq2"
      }, _react["default"].createElement("p", null, " Why would people like in cooperatives? "), _react["default"].createElement(_FAQ["default"], null)), _react["default"].createElement(_reactBootstrap.Tab.Pane, {
        eventKey: "#faq3"
      }, _react["default"].createElement("p", null, " How does CoopNet come in? "), _react["default"].createElement(_FAQ["default"], null)), _react["default"].createElement(_reactBootstrap.Tab.Pane, {
        eventKey: "#faq4"
      }, _react["default"].createElement("p", null, " How do I join / form a cooperative? "), _react["default"].createElement(_FAQ["default"], null)), _react["default"].createElement(_reactBootstrap.Tab.Pane, {
        eventKey: "#faq5"
      }, _react["default"].createElement("p", null, " Why would people back a cooperative they aren\u2019t living in?"), _react["default"].createElement(_FAQ["default"], null)), _react["default"].createElement(_reactBootstrap.Tab.Pane, {
        eventKey: "#faq6"
      }, _react["default"].createElement("p", null, " How does CoopNet come in?"), _react["default"].createElement(_FAQ["default"], null)), _react["default"].createElement(_reactBootstrap.Tab.Pane, {
        eventKey: "#faq7"
      }, _react["default"].createElement("p", null, " How do I back a cooperative? "), _react["default"].createElement(_FAQ["default"], null)), _react["default"].createElement(_reactBootstrap.Tab.Pane, {
        eventKey: "#faq8"
      }, _react["default"].createElement("p", null, " Are there any limits for backers? What about regulations?"), _react["default"].createElement(_FAQ["default"], null)), _react["default"].createElement(_reactBootstrap.Tab.Pane, {
        eventKey: "#faq9"
      }, _react["default"].createElement("p", null, " How will my investment be treated for tax purposes?"), _react["default"].createElement(_FAQ["default"], null)))))))));
    }
  }]);
  return About;
}(_react.Component);

var _default = About;
exports["default"] = _default;