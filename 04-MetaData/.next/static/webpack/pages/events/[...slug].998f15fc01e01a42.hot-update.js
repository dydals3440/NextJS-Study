"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[...slug]",{

/***/ "./components/events/event-item.js":
/*!*****************************************!*\
  !*** ./components/events/event-item.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/button */ \"./components/ui/button.js\");\n/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/date-icon */ \"./components/icons/date-icon.js\");\n/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/address-icon */ \"./components/icons/address-icon.js\");\n/* harmony import */ var _icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/arrow-right-icon */ \"./components/icons/arrow-right-icon.js\");\n/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-item.module.css */ \"./components/events/event-item.module.css\");\n/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_event_item_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction EventItem(props) {\n    const { title, image, date, location, id } = props;\n    const humanReadableDate = new Date(date).toLocaleDateString(\"en-US\", {\n        day: \"numeric\",\n        month: \"long\",\n        year: \"numeric\"\n    });\n    const formattedAddress = location.replace(\", \", \"\\n\");\n    const exploreLink = \"/events/\".concat(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_5___default().item),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                src: \"/\" + image,\n                alt: title,\n                width: 250,\n                height: 160\n            }, void 0, false, {\n                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_5___default().summary),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_5___default().date),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_date_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                        children: humanReadableDate\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_5___default().address),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_address_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                                        children: formattedAddress\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_5___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            link: exploreLink,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Explore Event\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = EventItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventItem);\nvar _c;\n$RefreshReg$(_c, \"EventItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1pdGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0M7QUFDUTtBQUNNO0FBQ087QUFDVDtBQUU5QyxTQUFTSyxVQUFVQyxLQUFLO0lBQ3RCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxFQUFFLEVBQUUsR0FBR0w7SUFFN0MsTUFBTU0sb0JBQW9CLElBQUlDLEtBQUtKLE1BQU1LLGtCQUFrQixDQUFDLFNBQVM7UUFDbkVDLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFDQSxNQUFNQyxtQkFBbUJSLFNBQVNTLE9BQU8sQ0FBQyxNQUFNO0lBQ2hELE1BQU1DLGNBQWMsV0FBYyxPQUFIVDtJQUUvQixxQkFDRSw4REFBQ1U7UUFBR0MsV0FBV2xCLG9FQUFZOzswQkFFekIsOERBQUNvQjtnQkFBTUMsS0FBSyxNQUFNakI7Z0JBQU9rQixLQUFLbkI7Z0JBQU9vQixPQUFPO2dCQUFLQyxRQUFROzs7Ozs7MEJBQ3pELDhEQUFDQztnQkFBSVAsV0FBV2xCLHVFQUFlOztrQ0FDN0IsOERBQUN5Qjt3QkFBSVAsV0FBV2xCLHVFQUFlOzswQ0FDN0IsOERBQUM0QjswQ0FBSXpCOzs7Ozs7MENBQ0wsOERBQUNzQjtnQ0FBSVAsV0FBV2xCLG9FQUFZOztrREFDMUIsOERBQUNILHdEQUFRQTs7Ozs7a0RBQ1QsOERBQUNnQztrREFBTXJCOzs7Ozs7Ozs7Ozs7MENBRVQsOERBQUNpQjtnQ0FBSVAsV0FBV2xCLHVFQUFlOztrREFDN0IsOERBQUNGLDJEQUFXQTs7Ozs7a0RBQ1osOERBQUNnQztrREFBU2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUNXO3dCQUFJUCxXQUFXbEIsdUVBQWU7a0NBQzdCLDRFQUFDSixrREFBTUE7NEJBQUNvQyxNQUFNaEI7OzhDQUNaLDhEQUFDaUI7OENBQUs7Ozs7Ozs4Q0FDTiw4REFBQ0E7b0NBQUtmLFdBQVdsQixvRUFBWTs4Q0FDM0IsNEVBQUNELCtEQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdCO0tBdENTRTtBQXdDVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1pdGVtLmpzPzZmZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi91aS9idXR0b24nO1xuaW1wb3J0IERhdGVJY29uIGZyb20gJy4uL2ljb25zL2RhdGUtaWNvbic7XG5pbXBvcnQgQWRkcmVzc0ljb24gZnJvbSAnLi4vaWNvbnMvYWRkcmVzcy1pY29uJztcbmltcG9ydCBBcnJvd1JpZ2h0SWNvbiBmcm9tICcuLi9pY29ucy9hcnJvdy1yaWdodC1pY29uJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vZXZlbnQtaXRlbS5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gRXZlbnRJdGVtKHByb3BzKSB7XG4gIGNvbnN0IHsgdGl0bGUsIGltYWdlLCBkYXRlLCBsb2NhdGlvbiwgaWQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGh1bWFuUmVhZGFibGVEYXRlID0gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgICBtb250aDogJ2xvbmcnLFxuICAgIHllYXI6ICdudW1lcmljJyxcbiAgfSk7XG4gIGNvbnN0IGZvcm1hdHRlZEFkZHJlc3MgPSBsb2NhdGlvbi5yZXBsYWNlKCcsICcsICdcXG4nKTtcbiAgY29uc3QgZXhwbG9yZUxpbmsgPSBgL2V2ZW50cy8ke2lkfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgey8qIE5ldHdvcmvsl5DshJwg7LqQ7Iuc66W8IOyCreygnO2VmOqzoCwg64uk7IucIOumrOuhnOuTnO2VmOuptCDsnbTrr7jsp4Ag7Jyg7ZiV7J20IHdlYnDroZwg67CU64CM6rOgLCDsnbTrr7jsp4Dsl5DripQg7JiB7Zal7J2EIOuvuOy5mOyngOyViuqzoCwg7Jqp65+J66eMIOykhOyWtOuTrCEg7ZKI7KeI7LCo7J2064qUIOuIiOycvOuhnCDqsbDsnZgg6rWs67aE7J20IOyWtOugpOybgC4gTmV4dC5qc+ydmCDsnbTrr7jsp4Ag7LWc7KCB7ZmU6riw64qlISDsg53shLHrkJwg7J2066+47KeA64qUIE5leHTsnZgg7J2066+47KeAIO2PtOuNlOyXkCDsnojsnYwuIOyalOyyreyXkCDsnojsnYTrloQg7IOd7ISx7ZWY6rOgIOyggOyepe2VtOuRoCEg67CU66GcIOydtOuvuOyngCDqurzrgrTshJwg66CM642U66eB7ZWY64qUIOuwqeyLnSwg67CU66GcIOyDneyEseuQnCDsnbTrr7jsp4Ag6re4IOyekOyytOyehCwg7J6R7J2AIO2ZlOuptOyXkOyEnCDsg4jroZzqs6DsuajtlZjqs6AgTGF6eSBMb2FkaW5nIOuztOydtOyngCDslYrsnYAg7IOB7YOc7JeQ7ISc64qUIE5leHQuanPqsIAg64uk7Jq066Gc65OcIO2VmOyngOyViuydjC4gKi99XG4gICAgICA8SW1hZ2Ugc3JjPXsnLycgKyBpbWFnZX0gYWx0PXt0aXRsZX0gd2lkdGg9ezI1MH0gaGVpZ2h0PXsxNjB9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3VtbWFyeX0+XG4gICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxuICAgICAgICAgICAgPERhdGVJY29uIC8+XG4gICAgICAgICAgICA8dGltZT57aHVtYW5SZWFkYWJsZURhdGV9PC90aW1lPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFkZHJlc3N9PlxuICAgICAgICAgICAgPEFkZHJlc3NJY29uIC8+XG4gICAgICAgICAgICA8YWRkcmVzcz57Zm9ybWF0dGVkQWRkcmVzc308L2FkZHJlc3M+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8QnV0dG9uIGxpbms9e2V4cGxvcmVMaW5rfT5cbiAgICAgICAgICAgIDxzcGFuPkV4cGxvcmUgRXZlbnQ8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0+XG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50SXRlbTtcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJEYXRlSWNvbiIsIkFkZHJlc3NJY29uIiwiQXJyb3dSaWdodEljb24iLCJjbGFzc2VzIiwiRXZlbnRJdGVtIiwicHJvcHMiLCJ0aXRsZSIsImltYWdlIiwiZGF0ZSIsImxvY2F0aW9uIiwiaWQiLCJodW1hblJlYWRhYmxlRGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJmb3JtYXR0ZWRBZGRyZXNzIiwicmVwbGFjZSIsImV4cGxvcmVMaW5rIiwibGkiLCJjbGFzc05hbWUiLCJpdGVtIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsImNvbnRlbnQiLCJzdW1tYXJ5IiwiaDIiLCJ0aW1lIiwiYWRkcmVzcyIsImFjdGlvbnMiLCJsaW5rIiwic3BhbiIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/events/event-item.js\n"));

/***/ })

});