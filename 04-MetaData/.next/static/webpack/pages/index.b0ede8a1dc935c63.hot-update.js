/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/input/newsletter-registration.jsx":
/*!******************************************************!*\
  !*** ./components/input/newsletter-registration.jsx ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var _components_input_newsletter_registration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/input/newsletter-registration */ \"./components/input/newsletter-registration.jsx\");\n/* harmony import */ var _components_input_newsletter_registration__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_input_newsletter_registration__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction HomePage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"NextJS Events\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/pages/index.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"find a lot of great events that allow you to evolve...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/pages/index.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_input_newsletter_registration__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                items: props.events\n            }, void 0, false, {\n                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/pages/index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFHMkI7QUFDeUI7QUFFakYsU0FBU0csU0FBU0MsS0FBSztJQUNyQixxQkFDRSw4REFBQ0M7OzBCQUVDLDhEQUFDTCxrREFBSUE7O2tDQUNILDhEQUFDTTtrQ0FBTTs7Ozs7O2tDQUVQLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDUCxrRkFBc0JBOzs7OzswQkFDdkIsOERBQUNELHFFQUFTQTtnQkFBQ1MsT0FBT04sTUFBTU8sTUFBTTs7Ozs7Ozs7Ozs7O0FBR3BDO0tBaEJTUjs7QUE2QlQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgeyBnZXRGZWF0dXJlZEV2ZW50cyB9IGZyb20gJy4uL2hlbHBlcnMvYXBpLXV0aWwnO1xuaW1wb3J0IEV2ZW50TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1saXN0JztcbmltcG9ydCBOZXdzbGV0dGVyUmVnaXN0cmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvaW5wdXQvbmV3c2xldHRlci1yZWdpc3RyYXRpb24nO1xuXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7Lyog64yA66y47J6Q66GcIOyLnOyeke2VnOuLpOuKlCDsoJDsnYQg66qF7IusISAqL31cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TmV4dEpTIEV2ZW50czwvdGl0bGU+XG4gICAgICAgIHsvKiDsnbQg7ISk66qF66y47J2AIGNvbnRlbnQg7IaN7ISx7JeQIOy2lOqwgCwgR29vZ2xl6rO8IOqwmeydgCDqsoDsg4kg7JeU7KeE7JeQ7IScIOqygOyDiSDqsrDqs7zrpbwg7Lac66Cl7ZWgIOuVjCDqsJnsnbQg7Lac66Cl65CY64qUIOyEpOuqheusuOydtCDrkJjquLAg65aE66y47JeQIOunpOyasCDspJHsmpQhICovfVxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgIGNvbnRlbnQ9J2ZpbmQgYSBsb3Qgb2YgZ3JlYXQgZXZlbnRzIHRoYXQgYWxsb3cgeW91IHRvIGV2b2x2ZS4uLidcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOZXdzbGV0dGVyUmVnaXN0cmF0aW9uIC8+XG4gICAgICA8RXZlbnRMaXN0IGl0ZW1zPXtwcm9wcy5ldmVudHN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgZmVhdHVyZWRFdmVudHMgPSBhd2FpdCBnZXRGZWF0dXJlZEV2ZW50cygpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGV2ZW50czogZmVhdHVyZWRFdmVudHMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxODAwLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiRXZlbnRMaXN0IiwiTmV3c2xldHRlclJlZ2lzdHJhdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIml0ZW1zIiwiZXZlbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});