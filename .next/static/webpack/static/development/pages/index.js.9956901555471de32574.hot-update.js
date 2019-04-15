webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/quote.js":
/*!*****************************!*\
  !*** ./components/quote.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/home/khalil/next.js/culturedechaleur/components/quote.js";

var PATWISDOM = ["There are only two options regarding commitment; you’re either in or you’re out.", "Don't let other people tell you what you want.", "Excellence happens when you try each day to both do and be, a little better than you were yesterday!", "Anytime you stop striving to get better, you're bound to get worse.", "The most DIFFICULT thing for individuals to do when they become part of a team is to sacrifice, it is much EASIER to be selfish.", "Hard work doesn't guarantee anything, but without it you don't have a chance.", "There's no such thing as coulda, shoulda, or woulda. If you shoulda and coulda, you woulda done it.", "No rebounds, no rings.", "You're either in or out. There's no in between.", "After his last two stops he might not be in Miami Heat condition. I told him, 'You just ate your last meal with pancakes and syrup and strawberries. You're back on veggies.", "Giving yourself permission to lose guarantees a loss."];

var RandomQuoteMachine =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RandomQuoteMachine, _Component);

  function RandomQuoteMachine() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RandomQuoteMachine);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RandomQuoteMachine)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      quote: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getRandomQuote", function () {
      var randQuote = PATWISDOM[Math.floor(Math.random() * PATWISDOM.length)];

      _this.setState({
        quote: randQuote
      });

      return randQuote;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changeQuote", function () {
      _this.setState({
        quote: _this.getRandomQuote()
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RandomQuoteMachine, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getRandomQuote();
    }
  }, {
    key: "render",
    value: function render() {
      var quote = this.state.quote;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "quote-box",
        style: {
          'border': '3px solid black;',
          'backgroundColor': 'black'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(QuoteBox, {
        author: "Pat Riley",
        quote: quote,
        changeQuote: this.changeQuote,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }));
    }
  }]);

  return RandomQuoteMachine;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

function QuoteBox(_ref) {
  var quote = _ref.quote,
      changeQuote = _ref.changeQuote,
      author = _ref.author;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "quotes",
    style: {
      'color': '#41B6E6'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    id: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, quote), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AuthorBox, {
    author: author,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Tweet, {
    quote: quote,
    author: author,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
    style: {
      'color': '#DB3EB1',
      'backgroundColor': 'black'
    },
    id: "new-quote",
    onClick: changeQuote,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "New Quote"));
}

function Tweet(_ref2) {
  var quote = _ref2.quote,
      author = _ref2.author;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    className: "tweet",
    href: "https://twitter.com/intent/tweet?text= ".concat(encodeURIComponent(quote + '-' + author)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
    style: {
      'color': '#DB3EB1',
      'backgroundColor': 'black'
    },
    id: "tweet-quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Tweet"));
}

function AuthorBox(_ref3) {
  var author = _ref3.author;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    id: "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, author));
}

/* harmony default export */ __webpack_exports__["default"] = (RandomQuoteMachine);

/***/ })

})
//# sourceMappingURL=index.js.9956901555471de32574.hot-update.js.map