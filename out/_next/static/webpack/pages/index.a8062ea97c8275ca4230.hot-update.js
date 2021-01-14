webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_templates_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/templates/loading */ \"./components/templates/loading.tsx\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_pages_index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pages/index.module.scss */ \"./styles/pages/index.module.scss\");\n/* harmony import */ var _styles_pages_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/ryota_shimizu/work/portfolio/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar ThreeObject = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/webGL/threeObject2 */ \"./components/webGL/threeObject2.tsx\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../components/webGL/threeObject2 */ \"./components/webGL/threeObject2.tsx\")];\n    },\n    modules: ['../components/webGL/threeObject2']\n  }\n});\n_c2 = ThreeObject;\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      loadingOpen = _useState[0],\n      setLoadingOpen = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    aos__WEBPACK_IMPORTED_MODULE_3__[\"init\"]();\n  }, []);\n  setTimeout(function () {\n    setLoadingOpen(false);\n  }, 5000);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_templates_loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    open: loadingOpen,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"index | \\u30B7\\u30DF\\u30BA\\u306E\\u30DD\\u30FC\\u30C8\\u30D5\\u30A9\\u30EA\\u30AA\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \"\\u898B\\u3066\\u898B\\u3066\"), __jsx(\"div\", {\n    className: _styles_pages_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.canvasWrap,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(ThreeObject, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(IndexPage, \"AwAhbltr1833lvu3BK7RIKc/7Mc=\");\n\n_c3 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ThreeObject$dynamic\");\n$RefreshReg$(_c2, \"ThreeObject\");\n$RefreshReg$(_c3, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiVGhyZWVPYmplY3QiLCJkeW5hbWljIiwic3NyIiwiSW5kZXhQYWdlIiwidXNlU3RhdGUiLCJsb2FkaW5nT3BlbiIsInNldExvYWRpbmdPcGVuIiwidXNlRWZmZWN0IiwiQU9TIiwic2V0VGltZW91dCIsInBhZ2VTdHlsZSIsImNhbnZhc1dyYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsV0FBVyxHQUFHQyxtREFBTyxNQUN6QjtBQUFBLFNBQU0sNEpBQU47QUFBQSxDQUR5QixFQUV6QjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FEYSw2RUFDYjtBQUFBO0FBQUEsY0FEYSxrQ0FDYjtBQUFBO0FBQUEsQ0FGeUIsQ0FBM0I7TUFBTUYsVzs7QUFLTixJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDLElBQUQsQ0FEeEI7QUFBQSxNQUNmQyxXQURlO0FBQUEsTUFDRkMsY0FERTs7QUFFdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyw0Q0FBQTtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQUMsWUFBVSxDQUFDLFlBQU07QUFDZkgsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDRCxHQUZTLEVBRVAsSUFGTyxDQUFWO0FBSUEsU0FDRSxtRUFDRSxNQUFDLHFFQUFEO0FBQVMsUUFBSSxFQUFFRCxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUMsNEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUssc0VBQVMsQ0FBQ0MsVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQUZGLENBREY7QUFXRCxDQXBCRDs7R0FBTVIsUzs7TUFBQUEsUztBQXNCU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVtcGxhdGVzL2xvYWRpbmdcIlxuaW1wb3J0ICogYXMgQU9TIGZyb20gXCJhb3NcIlxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiXG5pbXBvcnQgcGFnZVN0eWxlIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvaW5kZXgubW9kdWxlLnNjc3NcIlxuXG5cbmNvbnN0IFRocmVlT2JqZWN0ID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL3dlYkdML3RocmVlT2JqZWN0MicpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nT3Blbiwgc2V0TG9hZGluZ09wZW5dID0gdXNlU3RhdGUodHJ1ZSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICB9LCBbXSlcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZ09wZW4oZmFsc2UpXG4gIH0sIDUwMDApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMb2FkaW5nIG9wZW49e2xvYWRpbmdPcGVufSAvPlxuICAgICAgPExheW91dCB0aXRsZT1cImluZGV4IHwg44K344Of44K644Gu44Od44O844OI44OV44Kp44Oq44KqXCI+XG4gICAgICAgIDxoMj7opovjgabopovjgaY8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGFnZVN0eWxlLmNhbnZhc1dyYXB9PlxuICAgICAgICAgIDxUaHJlZU9iamVjdCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})