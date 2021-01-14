webpackHotUpdate_N_E(1,{

/***/ "./components/webGL/threeObject2.tsx":
/*!*******************************************!*\
  !*** ./components/webGL/threeObject2.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/web.js\");\n/* harmony import */ var three_orbitcontrols_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three-orbitcontrols-ts */ \"./node_modules/three-orbitcontrols-ts/dist/index.js\");\n/* harmony import */ var three_orbitcontrols_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three_orbitcontrols_ts__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/ryota_shimizu/work/portfolio/components/webGL/threeObject2.tsx\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar CameraController = function CameraController() {\n  _s();\n\n  var _useThree = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__[\"useThree\"])(),\n      camera = _useThree.camera,\n      gl = _useThree.gl;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var controls = new three_orbitcontrols_ts__WEBPACK_IMPORTED_MODULE_2__[\"OrbitControls\"](camera, gl.domElement); // controls.minDistance = 10;\n    // controls.maxDistance = 10;\n\n    return function () {\n      controls.dispose();\n    };\n  }, [camera, gl]);\n  return null;\n};\n\n_s(CameraController, \"djMck6qEDqeW1EjWNovzXn2V/KQ=\", false, function () {\n  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_1__[\"useThree\"]];\n});\n\n_c = CameraController;\n\nvar Box = function Box() {\n  _s2();\n\n  var mesh = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])({});\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      hovered = _useState[0],\n      setHover = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      active = _useState2[0],\n      setActive = _useState2[1];\n\n  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__[\"useFrame\"])(function () {\n    mesh.current.rotation.y += 0.01;\n  });\n  return __jsx(\"mesh\", {\n    ref: mesh,\n    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],\n    onClick: function onClick() {\n      setActive(!active);\n    },\n    onPointerOver: function onPointerOver() {\n      return setHover(true);\n    },\n    onPointerOut: function onPointerOut() {\n      return setHover(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"boxGeometry\", {\n    args: [1, 1, 1],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), __jsx(\"meshPhongMaterial\", {\n    color: active ? hovered ? \"red\" : \"orange\" : hovered ? \"blue\" : \"green\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s2(Box, \"Gf95ovYMxCkb+HRFcD1+zMTFs6g=\", false, function () {\n  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_1__[\"useFrame\"]];\n});\n\n_c2 = Box;\n\nvar App = function App() {\n  return __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__[\"Canvas\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(CameraController, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }), __jsx(\"ambientLight\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }), __jsx(\"spotLight\", {\n    intensity: 0.3,\n    position: [5, 10, 100],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }), __jsx(Box, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c3 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CameraController\");\n$RefreshReg$(_c2, \"Box\");\n$RefreshReg$(_c3, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93ZWJHTC90aHJlZU9iamVjdDIudHN4P2QzZGQiXSwibmFtZXMiOlsiQ2FtZXJhQ29udHJvbGxlciIsInVzZVRocmVlIiwiY2FtZXJhIiwiZ2wiLCJ1c2VFZmZlY3QiLCJjb250cm9scyIsIk9yYml0Q29udHJvbHMiLCJkb21FbGVtZW50IiwiZGlzcG9zZSIsIkJveCIsIm1lc2giLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImhvdmVyZWQiLCJzZXRIb3ZlciIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInVzZUZyYW1lIiwiY3VycmVudCIsInJvdGF0aW9uIiwieSIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFHQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFBQSxrQkFDTkMsa0VBQVEsRUFERjtBQUFBLE1BQ3JCQyxNQURxQixhQUNyQkEsTUFEcUI7QUFBQSxNQUNiQyxFQURhLGFBQ2JBLEVBRGE7O0FBRTdCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxRQUFRLEdBQUcsSUFBSUMsb0VBQUosQ0FBa0JKLE1BQWxCLEVBQTBCQyxFQUFFLENBQUNJLFVBQTdCLENBQWpCLENBRGMsQ0FFZDtBQUNBOztBQUNBLFdBQU8sWUFBTTtBQUFFRixjQUFRLENBQUNHLE9BQVQ7QUFBcUIsS0FBcEM7QUFDRCxHQUxRLEVBS04sQ0FBQ04sTUFBRCxFQUFTQyxFQUFULENBTE0sQ0FBVDtBQU1BLFNBQU8sSUFBUDtBQUNELENBVEQ7O0dBQU1ILGdCO1VBQ21CQywwRDs7O0tBRG5CRCxnQjs7QUFXTixJQUFNUyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQ2hCLE1BQU1DLElBQUksR0FBR0Msb0RBQU0sQ0FBQyxFQUFELENBQW5COztBQURnQixrQkFFWUMsc0RBQVEsQ0FBQyxLQUFELENBRnBCO0FBQUEsTUFFVEMsT0FGUztBQUFBLE1BRUFDLFFBRkE7O0FBQUEsbUJBR1lGLHNEQUFRLENBQUMsS0FBRCxDQUhwQjtBQUFBLE1BR1RHLE1BSFM7QUFBQSxNQUdEQyxTQUhDOztBQUloQkMsb0VBQVEsQ0FBQyxZQUFNO0FBQ2JQLFFBQUksQ0FBQ1EsT0FBTCxDQUFhQyxRQUFiLENBQXNCQyxDQUF0QixJQUEyQixJQUEzQjtBQUNELEdBRk8sQ0FBUjtBQUdBLFNBQ0U7QUFDRSxPQUFHLEVBQUVWLElBRFA7QUFFRSxTQUFLLEVBQUVLLE1BQU0sR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFILEdBQXFCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRnBDO0FBR0UsV0FBTyxFQUFFLG1CQUFNO0FBQUVDLGVBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFBb0IsS0FIdkM7QUFJRSxpQkFBYSxFQUFFO0FBQUEsYUFBTUQsUUFBUSxDQUFDLElBQUQsQ0FBZDtBQUFBLEtBSmpCO0FBS0UsZ0JBQVksRUFBRTtBQUFBLGFBQU1BLFFBQVEsQ0FBQyxLQUFELENBQWQ7QUFBQSxLQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFBYSxRQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUU7QUFBbUIsU0FBSyxFQUFFQyxNQUFNLEdBQUlGLE9BQU8sR0FBRyxLQUFILEdBQVcsUUFBdEIsR0FBbUNBLE9BQU8sR0FBRyxNQUFILEdBQVksT0FBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREY7QUFZRCxDQW5CRDs7SUFBTUosRztVQUlKUSwwRDs7O01BSklSLEc7O0FBcUJOLElBQU1ZLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDaEIsU0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQVcsYUFBUyxFQUFFLEdBQXRCO0FBQTJCLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsR0FBUixDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRSxNQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREY7QUFRRCxDQVREOztNQUFNQSxHO0FBV1NBLGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy93ZWJHTC90aHJlZU9iamVjdDIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlR2V0V2luZG93U2l6ZSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlR2V0V2luZG93U2l6ZVwiXG5pbXBvcnQgeyBDYW52YXMsIHVzZUZyYW1lLCB1c2VUaHJlZSB9IGZyb20gJ3JlYWN0LXRocmVlLWZpYmVyJztcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUtb3JiaXRjb250cm9scy10c1wiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5cbmNvbnN0IENhbWVyYUNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY2FtZXJhLCBnbCB9ID0gdXNlVGhyZWUoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgZ2wuZG9tRWxlbWVudCk7XG4gICAgLy8gY29udHJvbHMubWluRGlzdGFuY2UgPSAxMDtcbiAgICAvLyBjb250cm9scy5tYXhEaXN0YW5jZSA9IDEwO1xuICAgIHJldHVybiAoKSA9PiB7IGNvbnRyb2xzLmRpc3Bvc2UoKTsgfTtcbiAgfSwgW2NhbWVyYSwgZ2xdKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBCb3ggPSAoKSA9PiB7XG4gIGNvbnN0IG1lc2ggPSB1c2VSZWYoe30gYXMgVEhSRUUuTWVzaClcbiAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHVzZUZyYW1lKCgpID0+IHtcbiAgICBtZXNoLmN1cnJlbnQucm90YXRpb24ueSArPSAwLjAxXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPG1lc2hcbiAgICAgIHJlZj17bWVzaH1cbiAgICAgIHNjYWxlPXthY3RpdmUgPyBbMS41LCAxLjUsIDEuNV0gOiBbMSwgMSwgMV19XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldEFjdGl2ZSghYWN0aXZlKSB9fVxuICAgICAgb25Qb2ludGVyT3Zlcj17KCkgPT4gc2V0SG92ZXIodHJ1ZSl9XG4gICAgICBvblBvaW50ZXJPdXQ9eygpID0+IHNldEhvdmVyKGZhbHNlKX1cbiAgICA+XG4gICAgICA8Ym94R2VvbWV0cnkgYXJncz17WzEsIDEsIDFdfSAvPlxuICAgICAgPG1lc2hQaG9uZ01hdGVyaWFsIGNvbG9yPXthY3RpdmUgPyAoaG92ZXJlZCA/IFwicmVkXCIgOiBcIm9yYW5nZVwiKSA6IChob3ZlcmVkID8gXCJibHVlXCIgOiBcImdyZWVuXCIpfSAvPlxuICAgIDwvbWVzaD5cbiAgKVxufVxuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENhbnZhcz5cbiAgICAgIDxDYW1lcmFDb250cm9sbGVyIC8+XG4gICAgICA8YW1iaWVudExpZ2h0IC8+XG4gICAgICA8c3BvdExpZ2h0IGludGVuc2l0eT17MC4zfSBwb3NpdGlvbj17WzUsIDEwLCAxMDBdfSAvPlxuICAgICAgPEJveCAvPlxuICAgIDwvQ2FudmFzPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/webGL/threeObject2.tsx\n");

/***/ })

})