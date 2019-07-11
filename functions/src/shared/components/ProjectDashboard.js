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

var _Footer = _interopRequireDefault(require("./Footer"));

var _NavHeader = _interopRequireDefault(require("./NavHeader"));

var _FollowProject = _interopRequireDefault(require("./FollowProject"));

function ProjectJumbo(props) {
  return _react["default"].createElement(_reactBootstrap.Jumbotron, {
    fluid: true,
    className: "projectJumbo"
  }, _react["default"].createElement(_reactBootstrap.Image, {
    fluid: true,
    className: "projectJumboImage",
    src: require("../images/projectDash.png")
  }));
}

function ProjectSummary(props) {
  return _react["default"].createElement(_reactBootstrap.Jumbotron, {
    fluid: true,
    className: "projectSummary"
  }, _react["default"].createElement(_reactBootstrap.ProgressBar, {
    variant: "success",
    "class": "projectProgress",
    animated: true,
    now: 50
  }), _react["default"].createElement("div", {
    className: "projectSummaryText"
  }, _react["default"].createElement("h1", null, "$123,456"), _react["default"].createElement("p", null, "Already invested into Oakland Housing Association"), _react["default"].createElement("h2", null, "900"), _react["default"].createElement("p", null, "Socially concious investors"), _react["default"].createElement("h3", null, "$1000"), _react["default"].createElement("p", null, "Minimum investment package")));
}

function ProjectTitle(props) {
  return _react["default"].createElement(_reactBootstrap.Jumbotron, {
    className: "projectTitle"
  }, _react["default"].createElement("h1", null, "Oakland Home"), _react["default"].createElement("p", null, "The Oakland Housing Association is acquiring a new property and we're getting them the money. "));
}

function ProjectAbout(props) {
  return _react["default"].createElement(_reactBootstrap.Jumbotron, {
    className: "projectContent"
  }, _react["default"].createElement("h1", null, "Roof and Seed"), _react["default"].createElement("p", null, "A combination of housing and community gardens... "), _react["default"].createElement("p", null, "\u2003Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat dictum convallis. Vestibulum porttitor placerat erat id egestas. Mauris scelerisque, sem ac sagittis fringilla, justo diam facilisis augue, sed lobortis dolor libero sed dui. Aenean auctor purus vel erat porttitor, ac pellentesque ipsum pellentesque. Aliquam dapibus convallis nunc, eu vulputate dui molestie sit amet. Nulla facilisi. Sed sed lacus in arcu consequat tincidunt nec at libero. Ut condimentum tincidunt sem, vitae bibendum tortor suscipit non. Praesent iaculis, neque a ultrices luctus, libero felis accumsan dolor, ut lobortis dolor ante at ex. Praesent sit amet lectus ut purus imperdiet pretium. Maecenas posuere enim sem, sed scelerisque nisi mollis eu. Ut luctus risus ac nunc mattis, vel auctor dolor porta. Nullam porta semper convallis. Etiam vulputate tempor ex, eget tincidunt nibh. Phasellus in sem id sapien commodo laoreet."), _react["default"].createElement("p", null, "\u2003Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat dictum convallis. Vestibulum porttitor placerat erat id egestas. Mauris scelerisque, sem ac sagittis fringilla, justo diam facilisis augue, sed lobortis dolor libero sed dui. Aenean auctor purus vel erat porttitor, ac pellentesque ipsum pellentesque. Aliquam dapibus convallis nunc, eu vulputate dui molestie sit amet. Nulla facilisi. Sed sed lacus in arcu consequat tincidunt nec at libero. Ut condimentum tincidunt sem, vitae bibendum tortor suscipit non. Praesent iaculis, neque a ultrices luctus, libero felis accumsan dolor, ut lobortis dolor ante at ex. Praesent sit amet lectus ut purus imperdiet pretium. Maecenas posuere enim sem, sed scelerisque nisi mollis eu. Ut luctus risus ac nunc mattis, vel auctor dolor porta. Nullam porta semper convallis. Etiam vulputate tempor ex, eget tincidunt nibh. Phasellus in sem id sapien commodo laoreet."), _react["default"].createElement("p", null, "\u2003Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat dictum convallis. Vestibulum porttitor placerat erat id egestas. Mauris scelerisque, sem ac sagittis fringilla, justo diam facilisis augue, sed lobortis dolor libero sed dui. Aenean auctor purus vel erat porttitor, ac pellentesque ipsum pellentesque. Aliquam dapibus convallis nunc, eu vulputate dui molestie sit amet. Nulla facilisi. Sed sed lacus in arcu consequat tincidunt nec at libero. Ut condimentum tincidunt sem, vitae bibendum tortor suscipit non. Praesent iaculis, neque a ultrices luctus, libero felis accumsan dolor, ut lobortis dolor ante at ex. Praesent sit amet lectus ut purus imperdiet pretium. Maecenas posuere enim sem, sed scelerisque nisi mollis eu. Ut luctus risus ac nunc mattis, vel auctor dolor porta. Nullam porta semper convallis. Etiam vulputate tempor ex, eget tincidunt nibh. Phasellus in sem id sapien commodo laoreet."), _react["default"].createElement("p", null, "\u2003Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat dictum convallis. Vestibulum porttitor placerat erat id egestas. Mauris scelerisque, sem ac sagittis fringilla, justo diam facilisis augue, sed lobortis dolor libero sed dui. Aenean auctor purus vel erat porttitor, ac pellentesque ipsum pellentesque. Aliquam dapibus convallis nunc, eu vulputate dui molestie sit amet. Nulla facilisi. Sed sed lacus in arcu consequat tincidunt nec at libero. Ut condimentum tincidunt sem, vitae bibendum tortor suscipit non. Praesent iaculis, neque a ultrices luctus, libero felis accumsan dolor, ut lobortis dolor ante at ex. Praesent sit amet lectus ut purus imperdiet pretium. Maecenas posuere enim sem, sed scelerisque nisi mollis eu. Ut luctus risus ac nunc mattis, vel auctor dolor porta. Nullam porta semper convallis. Etiam vulputate tempor ex, eget tincidunt nibh. Phasellus in sem id sapien commodo laoreet."));
}

function ProjectCommunity(props) {
  return _react["default"].createElement(_reactBootstrap.Jumbotron, {
    className: "projectContent"
  }, _react["default"].createElement("h1", null, "Stories from Oakland"), _react["default"].createElement("p", null, "The Oakland community most directly affected by the presence and preservation of this estate ...."), _react["default"].createElement("p", null, "\u2003Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat dictum convallis. Vestibulum porttitor placerat erat id egestas. Mauris scelerisque, sem ac sagittis fringilla, justo diam facilisis augue, sed lobortis dolor libero sed dui. Aenean auctor purus vel erat porttitor, ac pellentesque ipsum pellentesque. Aliquam dapibus convallis nunc, eu vulputate dui molestie sit amet. Nulla facilisi. Sed sed lacus in arcu consequat tincidunt nec at libero. Ut condimentum tincidunt sem, vitae bibendum tortor suscipit non. Praesent iaculis, neque a ultrices luctus, libero felis accumsan dolor, ut lobortis dolor ante at ex. Praesent sit amet lectus ut purus imperdiet pretium. Maecenas posuere enim sem, sed scelerisque nisi mollis eu. Ut luctus risus ac nunc mattis, vel auctor dolor porta. Nullam porta semper convallis. Etiam vulputate tempor ex, eget tincidunt nibh. Phasellus in sem id sapien commodo laoreet."));
}

function ProjectActions(props) {
  return _react["default"].createElement(_reactBootstrap.Container, null, _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, {
    xs: 10
  }, _react["default"].createElement(_reactBootstrap.Button, {
    block: true,
    variant: "info"
  }, "CONTRIBUTE TO THIS PROJECT"))), _react["default"].createElement(_reactBootstrap.Row, {
    className: "actionButtons"
  }, _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement(_FollowProject["default"], null)), _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement(_reactBootstrap.Image, {
    className: "socialButtons",
    src: "http://uwc.211ct.org/wp-content/uploads/2017/07/socialmediabar-768x199.png"
  }))));
}

var ProjectDashboard =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ProjectDashboard, _Component);

  function ProjectDashboard() {
    (0, _classCallCheck2["default"])(this, ProjectDashboard);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ProjectDashboard).apply(this, arguments));
  }

  (0, _createClass2["default"])(ProjectDashboard, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "ProjectDashboard"
      }, _react["default"].createElement(_NavHeader["default"], null), _react["default"].createElement(ProjectTitle, null), _react["default"].createElement(_reactBootstrap.Table, {
        fluid: true
      }, _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, {
        xs: 8
      }, _react["default"].createElement(ProjectJumbo, null)), _react["default"].createElement(_reactBootstrap.Col, null, _react["default"].createElement(ProjectSummary, null), _react["default"].createElement(ProjectActions, null)))), _react["default"].createElement(_reactBootstrap.Container, {
        className: "projectTabs"
      }, _react["default"].createElement(_reactBootstrap.Tabs, {
        defaultActiveKey: "about",
        id: "projectTabs"
      }, _react["default"].createElement(_reactBootstrap.Tab, {
        className: "projectTab",
        eventKey: "about",
        title: "About"
      }, _react["default"].createElement(ProjectAbout, null)), _react["default"].createElement(_reactBootstrap.Tab, {
        className: "projectTab",
        eventKey: "community",
        title: "Community"
      }, _react["default"].createElement(ProjectCommunity, null)))), _react["default"].createElement(_Footer["default"], null));
    }
  }]);
  return ProjectDashboard;
}(_react.Component);

var _default = ProjectDashboard;
exports["default"] = _default;