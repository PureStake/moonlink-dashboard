webpackHotUpdate_N_E("pages/index",{

/***/ "./components/DataFeed.js":
/*!********************************!*\
  !*** ./components/DataFeed.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_feed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/feed */ \"./ethereum/feed.js\");\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/alberto/data/presentations/ChainlinkHackathon/moonlink-oracles/components/DataFeed.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar addresses = __webpack_require__(/*! ../ethereum/addresses */ \"./ethereum/addresses.json\");\n\nvar Table = /*#__PURE__*/function (_Component) {\n  Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Table, _Component);\n\n  var _super = _createSuper(Table);\n\n  function Table() {\n    var _this;\n\n    Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, Table);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"state\", {\n      btcusd: 'N/A',\n      updated: 'N/A'\n    });\n\n    Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"onUpdate\", /*#__PURE__*/Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var currentdate, btcPrice, ethPrice;\n      return _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              // Date\n              currentdate = new Date(); // BTC\n\n              btcPrice = getPrice(addresses.btcusd); // BTC\n\n              ethPrice = getPrice(addresses.ethusd);\n\n              _this.setState(function () {\n                return {\n                  btcusd: btcPrice.toFixed(2),\n                  ethusd: ethPrice.toFixed(2),\n                  updated: \"\".concat(currentdate.getFullYear(), \"/\").concat(currentdate.getMonth(), \"/\").concat(currentdate.getDate(), \" \").concat(currentdate.getHours(), \":\").concat(currentdate.getMinutes(), \":\").concat(currentdate.getSeconds())\n                };\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n\n    Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"getPrice\", /*#__PURE__*/function () {\n      var _ref2 = Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(address) {\n        var contractInstance, dec;\n        return _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                contractInstance = Object(_ethereum_feed__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(addresses.btcusd);\n                dec = contractInstance.decimals();\n                _context2.next = 4;\n                return contractInstance.getLatestPrice();\n\n              case 4:\n                _context2.t0 = _context2.sent;\n                _context2.t1 = Math.pow(10, dec);\n                return _context2.abrupt(\"return\", _context2.t0 / _context2.t1);\n\n              case 7:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n\n    return _this;\n  }\n\n  Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Table, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {\n        var currentdate, btcInst, decimals, price;\n        return _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                currentdate = new Date();\n                btcInst = Object(_ethereum_feed__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(addresses.btcusd);\n                _context3.next = 4;\n                return btcInst.decimals();\n\n              case 4:\n                decimals = _context3.sent;\n                _context3.next = 7;\n                return btcInst.getLatestPrice();\n\n              case 7:\n                _context3.t0 = _context3.sent;\n                _context3.t1 = Math.pow(10, decimals);\n                price = _context3.t0 / _context3.t1;\n                this.setState(function () {\n                  return {\n                    btcusd: price.toFixed(2),\n                    updated: \"\".concat(currentdate.getFullYear(), \"/\").concat(currentdate.getMonth(), \"/\").concat(currentdate.getDate(), \" \").concat(currentdate.getHours(), \":\").concat(currentdate.getMinutes(), \":\").concat(currentdate.getSeconds())\n                  };\n                });\n\n              case 11:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: \"Data Price Feed\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n          className: \"ui celled table\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                children: \"Token Pair\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 22\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                children: \"Price\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 22\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n                    content: \"Updated Data\",\n                    icon: \"plus square\",\n                    primary: true,\n                    onClick: this.onUpdate\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 66,\n                    columnNumber: 28\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 25\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 22\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 19\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 16\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                \"data-label\": \"Token Pair\",\n                children: \"BTC/USD\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 22\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                \"data-label\": \"Price\",\n                children: this.state.btcusd\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 22\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                \"data-label\": \"Last Updated\",\n                children: this.state.updated\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 22\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 19\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 16\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                \"data-label\": \"Token Pair\",\n                children: \"ETH/USD\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 22\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                \"data-label\": \"Price\",\n                children: this.state.ethusd\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 22\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                \"data-label\": \"Last Updated\",\n                children: this.state.updated\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 87,\n                columnNumber: 22\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 19\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 16\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 10\n      }, this);\n    }\n  }], [{\n    key: \"getInitialProps\",\n    // Nextjs uses this function to render this first server-side\n    value: function () {\n      var _getInitialProps = Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {\n        return _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                return _context4.abrupt(\"return\", {});\n\n              case 1:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return Table;\n}(react__WEBPACK_IMPORTED_MODULE_10__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXRhRmVlZC5qcz9iMjI0Il0sIm5hbWVzIjpbImFkZHJlc3NlcyIsInJlcXVpcmUiLCJUYWJsZSIsImJ0Y3VzZCIsInVwZGF0ZWQiLCJjdXJyZW50ZGF0ZSIsIkRhdGUiLCJidGNQcmljZSIsImdldFByaWNlIiwiZXRoUHJpY2UiLCJldGh1c2QiLCJzZXRTdGF0ZSIsInRvRml4ZWQiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJhZGRyZXNzIiwiY29udHJhY3RJbnN0YW5jZSIsIkNvbnN1bWVySW5zdGFuY2UiLCJkZWMiLCJkZWNpbWFscyIsImdldExhdGVzdFByaWNlIiwiTWF0aCIsInBvdyIsImJ0Y0luc3QiLCJwcmljZSIsIm9uVXBkYXRlIiwic3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLG1CQUFPLENBQUMsd0RBQUQsQ0FBekI7O0lBRU1DLEs7Ozs7Ozs7Ozs7Ozs7Ozs7a1hBTUs7QUFDTEMsWUFBTSxFQUFFLEtBREg7QUFFTEMsYUFBTyxFQUFFO0FBRkosSzs7cXRCQW9CRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUjtBQUNNQyx5QkFGRSxHQUVZLElBQUlDLElBQUosRUFGWixFQUdSOztBQUNNQyxzQkFKRSxHQUlTQyxRQUFRLENBQUNSLFNBQVMsQ0FBQ0csTUFBWCxDQUpqQixFQUtSOztBQUNNTSxzQkFORSxHQU1TRCxRQUFRLENBQUNSLFNBQVMsQ0FBQ1UsTUFBWCxDQU5qQjs7QUFRUixvQkFBS0MsUUFBTCxDQUFjLFlBQU07QUFDakIsdUJBQU87QUFDSlIsd0JBQU0sRUFBRUksUUFBUSxDQUFDSyxPQUFULENBQWlCLENBQWpCLENBREo7QUFFSkYsd0JBQU0s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QTtBQUFBO0FBQUEsc0JBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFqQkgsZUF3Qkc7QUFBQSxtQ0FDRztBQUFBLHNDQUNHO0FBQUksOEJBQVcsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESCxlQUVHO0FBQUksOEJBQVcsT0FBZjtBQUFBLDBCQUF3QixLQUFLMEIsS0FBTCxDQUFXcEI7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSCxlQUdHO0FBQUksOEJBQVcsY0FBZjtBQUFBLDBCQUErQixLQUFLb0IsS0FBTCxDQUFXMUI7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXhCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREg7QUFxQ0Y7OztBQXRGRDs7Ozs7OztrREFFVSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSE8yQixnRDs7QUEwRkw3QixvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGF0YUZlZWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IENvbnN1bWVySW5zdGFuY2UgZnJvbSAnLi4vZXRoZXJldW0vZmVlZCc7XG5jb25zdCBhZGRyZXNzZXMgPSByZXF1aXJlKCcuLi9ldGhlcmV1bS9hZGRyZXNzZXMnKTtcblxuY2xhc3MgVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgLy8gTmV4dGpzIHVzZXMgdGhpcyBmdW5jdGlvbiB0byByZW5kZXIgdGhpcyBmaXJzdCBzZXJ2ZXItc2lkZVxuICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgIH1cblxuICAgc3RhdGUgPSB7XG4gICAgICBidGN1c2Q6ICdOL0EnLFxuICAgICAgdXBkYXRlZDogJ04vQScsXG4gICB9O1xuXG4gICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRkYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgY29uc3QgYnRjSW5zdCA9IENvbnN1bWVySW5zdGFuY2UoYWRkcmVzc2VzLmJ0Y3VzZCk7XG4gICAgICBjb25zdCBkZWNpbWFscyA9IGF3YWl0IGJ0Y0luc3QuZGVjaW1hbHMoKTtcbiAgICAgIGNvbnN0IHByaWNlID0gKGF3YWl0IGJ0Y0luc3QuZ2V0TGF0ZXN0UHJpY2UoKSkgLyBNYXRoLnBvdygxMCwgZGVjaW1hbHMpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidGN1c2Q6IHByaWNlLnRvRml4ZWQoMiksXG4gICAgICAgICAgICB1cGRhdGVkOiBgJHtjdXJyZW50ZGF0ZS5nZXRGdWxsWWVhcigpfS8ke2N1cnJlbnRkYXRlLmdldE1vbnRoKCl9LyR7Y3VycmVudGRhdGUuZ2V0RGF0ZSgpfSAke2N1cnJlbnRkYXRlLmdldEhvdXJzKCl9OiR7Y3VycmVudGRhdGUuZ2V0TWludXRlcygpfToke2N1cnJlbnRkYXRlLmdldFNlY29uZHMoKX1gLFxuICAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgfVxuXG4gICBvblVwZGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIC8vIERhdGVcbiAgICAgIGNvbnN0IGN1cnJlbnRkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIC8vIEJUQ1xuICAgICAgY29uc3QgYnRjUHJpY2UgPSBnZXRQcmljZShhZGRyZXNzZXMuYnRjdXNkKTtcbiAgICAgIC8vIEJUQ1xuICAgICAgY29uc3QgZXRoUHJpY2UgPSBnZXRQcmljZShhZGRyZXNzZXMuZXRodXNkKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiB7XG4gICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnRjdXNkOiBidGNQcmljZS50b0ZpeGVkKDIpLFxuICAgICAgICAgICAgZXRodXNkOiBldGhQcmljZS50b0ZpeGVkKDIpLFxuICAgICAgICAgICAgdXBkYXRlZDogYCR7Y3VycmVudGRhdGUuZ2V0RnVsbFllYXIoKX0vJHtjdXJyZW50ZGF0ZS5nZXRNb250aCgpfS8ke2N1cnJlbnRkYXRlLmdldERhdGUoKX0gJHtjdXJyZW50ZGF0ZS5nZXRIb3VycygpfToke2N1cnJlbnRkYXRlLmdldE1pbnV0ZXMoKX06JHtjdXJyZW50ZGF0ZS5nZXRTZWNvbmRzKCl9YCxcbiAgICAgICAgIH07XG4gICAgICB9KTtcbiAgIH07XG5cbiAgIGdldFByaWNlID0gYXN5bmMgKGFkZHJlc3MpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyYWN0SW5zdGFuY2UgPSBDb25zdW1lckluc3RhbmNlKGFkZHJlc3Nlcy5idGN1c2QpO1xuICAgICAgY29uc3QgZGVjID0gY29udHJhY3RJbnN0YW5jZS5kZWNpbWFscygpO1xuICAgICAgcmV0dXJuIChhd2FpdCBjb250cmFjdEluc3RhbmNlLmdldExhdGVzdFByaWNlKCkpIC8gTWF0aC5wb3coMTAsIGRlYyk7XG4gICB9O1xuXG4gICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMz5EYXRhIFByaWNlIEZlZWQ8L2gzPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndWkgY2VsbGVkIHRhYmxlJz5cbiAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub2tlbiBQYWlyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J1VwZGF0ZWQgRGF0YSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249J3BsdXMgc3F1YXJlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblVwZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD0nVG9rZW4gUGFpcic+QlRDL1VTRDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD0nUHJpY2UnPnt0aGlzLnN0YXRlLmJ0Y3VzZH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9J0xhc3QgVXBkYXRlZCc+e3RoaXMuc3RhdGUudXBkYXRlZH08L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD0nVG9rZW4gUGFpcic+RVRIL1VTRDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD0nUHJpY2UnPnt0aGlzLnN0YXRlLmV0aHVzZH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9J0xhc3QgVXBkYXRlZCc+e3RoaXMuc3RhdGUudXBkYXRlZH08L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DataFeed.js\n");

/***/ })

})