"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-header */ \"./components/layout/main-header.js\");\n/* harmony import */ var _notification_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notification/notification */ \"./components/notification/notification.jsx\");\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Layout(props) {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_notification_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_main_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/layout/layout.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/layout/layout.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_notification_notification__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Test\",\n                message: \"This is a test\",\n                status: \"error\"\n            }, void 0, false, {\n                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/layout/layout.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/layout/layout.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QztBQUVOO0FBQ2lCO0FBQ1c7QUFFbkUsU0FBU0ssT0FBT0MsS0FBSzs7SUFDbkJMLGlEQUFVQSxDQUFDRyxtRUFBbUJBO0lBQzlCLHFCQUNFLDhEQUFDSiwyQ0FBUUE7OzBCQUNQLDhEQUFDRSxvREFBVUE7Ozs7OzBCQUNYLDhEQUFDSzswQkFBTUQsTUFBTUUsUUFBUTs7Ozs7OzBCQUNyQiw4REFBQ0wsa0VBQVlBO2dCQUFDTSxPQUFNO2dCQUFPQyxTQUFRO2dCQUFpQkMsUUFBTzs7Ozs7Ozs7Ozs7O0FBR2pFO0dBVFNOO0tBQUFBO0FBV1QsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmpzP2NiMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBNYWluSGVhZGVyIGZyb20gJy4vbWFpbi1oZWFkZXInO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuLi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uJztcbmltcG9ydCBOb3RpZmljYXRpb25Db250ZXh0IGZyb20gJy4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi1jb250ZXh0JztcblxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gIHVzZUNvbnRleHQoTm90aWZpY2F0aW9uQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPE1haW5IZWFkZXIgLz5cbiAgICAgIDxtYWluPntwcm9wcy5jaGlsZHJlbn08L21haW4+XG4gICAgICA8Tm90aWZpY2F0aW9uIHRpdGxlPSdUZXN0JyBtZXNzYWdlPSdUaGlzIGlzIGEgdGVzdCcgc3RhdHVzPSdlcnJvcicgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJ1c2VDb250ZXh0IiwiTWFpbkhlYWRlciIsIk5vdGlmaWNhdGlvbiIsIk5vdGlmaWNhdGlvbkNvbnRleHQiLCJMYXlvdXQiLCJwcm9wcyIsIm1haW4iLCJjaGlsZHJlbiIsInRpdGxlIiwibWVzc2FnZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/layout.js\n"));

/***/ })

});