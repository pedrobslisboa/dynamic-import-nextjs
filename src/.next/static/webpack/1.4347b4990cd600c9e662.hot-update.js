webpackHotUpdate_N_E(1,{

/***/ "./components/WithSSR/WithSSR.js":
/*!***************************************!*\
  !*** ./components/WithSSR/WithSSR.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Viago; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _WithSSR_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WithSSR.module.css */ \"./components/WithSSR/WithSSR.module.css\");\n/* harmony import */ var _WithSSR_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_WithSSR_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _viago_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viago.gif */ \"./components/WithSSR/viago.gif\");\n/* harmony import */ var _viago_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_viago_gif__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/pedro/estudos/loadable-test/src/components/WithSSR/WithSSR.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Viago() {\n  return __jsx(\"div\", {\n    className: _WithSSR_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"This component is loaded with the page dynamicly and its ssr friendly:\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, \"So you can check on source code (\", __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 42\n    }\n  }, \"CTRL + U\"), \") for it, search for this entire sentence or even \\\"Viago is gonna party\\\" which is the image's alt\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    height: \"250\",\n    width: \"300\",\n    alt: \"Viago is gonna party\",\n    src: _viago_gif__WEBPACK_IMPORTED_MODULE_2___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  })), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \"You must import on this way:\", __jsx(\"pre\", {\n    className: _WithSSR_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.debug,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"code\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, JSON.stringify(\"\\n            const WithSSR = dynamic(() => import(\\\"../components/WithSSR\\\"));\\n            \", null, 2)))));\n}\n_c = Viago;\n\nvar _c;\n\n$RefreshReg$(_c, \"Viago\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaXRoU1NSL1dpdGhTU1IuanM/YjkxZiJdLCJuYW1lcyI6WyJWaWFnbyIsInN0eWxlcyIsIndyYXBwZXIiLCJ2aWFnbyIsImRlYnVnIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFDOUIsU0FDRTtBQUFLLGFBQVMsRUFBRUMsMERBQU0sQ0FBQ0MsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEVBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUNtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURuQyx3R0FKRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFVBQU0sRUFBQyxLQUFaO0FBQWtCLFNBQUssRUFBQyxLQUF4QjtBQUE4QixPQUFHLEVBQUMsc0JBQWxDO0FBQXlELE9BQUcsRUFBRUMsaURBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVRGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FFRTtBQUFLLGFBQVMsRUFBRUYsMERBQU0sQ0FBQ0csS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsSUFBSSxDQUFDQyxTQUFMLGtHQUVFLElBRkYsRUFFUSxDQUZSLENBREgsQ0FERixDQUZGLENBYkYsQ0FERjtBQTBCRDtLQTNCdUJOLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpdGhTU1IvV2l0aFNTUi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vV2l0aFNTUi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgdmlhZ28gZnJvbSBcIi4vdmlhZ28uZ2lmXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpYWdvKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8aDI+XG4gICAgICAgIFRoaXMgY29tcG9uZW50IGlzIGxvYWRlZCB3aXRoIHRoZSBwYWdlIGR5bmFtaWNseSBhbmQgaXRzIHNzciBmcmllbmRseTpcbiAgICAgIDwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgU28geW91IGNhbiBjaGVjayBvbiBzb3VyY2UgY29kZSAoPHN0cm9uZz5DVFJMICsgVTwvc3Ryb25nPikgZm9yIGl0LFxuICAgICAgICBzZWFyY2ggZm9yIHRoaXMgZW50aXJlIHNlbnRlbmNlIG9yIGV2ZW4gXCJWaWFnbyBpcyBnb25uYSBwYXJ0eVwiIHdoaWNoIGlzXG4gICAgICAgIHRoZSBpbWFnZSdzIGFsdFxuICAgICAgPC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBoZWlnaHQ9XCIyNTBcIiB3aWR0aD1cIjMwMFwiIGFsdD1cIlZpYWdvIGlzIGdvbm5hIHBhcnR5XCIgc3JjPXt2aWFnb30gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8cD5cbiAgICAgICAgWW91IG11c3QgaW1wb3J0IG9uIHRoaXMgd2F5OlxuICAgICAgICA8cHJlIGNsYXNzTmFtZT17c3R5bGVzLmRlYnVnfT5cbiAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShgXG4gICAgICAgICAgICBjb25zdCBXaXRoU1NSID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL1dpdGhTU1JcIikpO1xuICAgICAgICAgICAgYCwgbnVsbCwgMil9XG4gICAgICAgICAgPC9jb2RlPlxuICAgICAgICA8L3ByZT5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WithSSR/WithSSR.js\n");

/***/ })

})