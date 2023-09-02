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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/button */ \"./components/ui/button.js\");\n/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/date-icon */ \"./components/icons/date-icon.js\");\n/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/address-icon */ \"./components/icons/address-icon.js\");\n/* harmony import */ var _icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/arrow-right-icon */ \"./components/icons/arrow-right-icon.js\");\n/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-item.module.css */ \"./components/events/event-item.module.css\");\n/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_event_item_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction EventItem(props) {\n    const { title, image, date, location, id } = props;\n    const humanReadableDate = new Date(date).toLocaleDateString(\"en-US\", {\n        day: \"numeric\",\n        month: \"long\",\n        year: \"numeric\"\n    });\n    const formattedAddress = location.replace(\", \", \"\\n\");\n    const exploreLink = \"/events/\".concat(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_5___default().item),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                src: \"/\" + image,\n                alt: title\n            }, void 0, false, {\n                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_5___default().summary),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_5___default().date),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_date_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                        children: humanReadableDate\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_5___default().address),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_address_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                                        children: formattedAddress\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_5___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            link: exploreLink,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Explore Event\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/events/event-item.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = EventItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventItem);\nvar _c;\n$RefreshReg$(_c, \"EventItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1pdGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0M7QUFDUTtBQUNNO0FBQ087QUFDVDtBQUU5QyxTQUFTSyxVQUFVQyxLQUFLO0lBQ3RCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxFQUFFLEVBQUUsR0FBR0w7SUFFN0MsTUFBTU0sb0JBQW9CLElBQUlDLEtBQUtKLE1BQU1LLGtCQUFrQixDQUFDLFNBQVM7UUFDbkVDLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFDQSxNQUFNQyxtQkFBbUJSLFNBQVNTLE9BQU8sQ0FBQyxNQUFNO0lBQ2hELE1BQU1DLGNBQWMsV0FBYyxPQUFIVDtJQUUvQixxQkFDRSw4REFBQ1U7UUFBR0MsV0FBV2xCLG9FQUFZOzswQkFDekIsOERBQUNvQjtnQkFBTUMsS0FBSyxNQUFNakI7Z0JBQU9rQixLQUFLbkI7Ozs7OzswQkFDOUIsOERBQUNvQjtnQkFBSUwsV0FBV2xCLHVFQUFlOztrQ0FDN0IsOERBQUN1Qjt3QkFBSUwsV0FBV2xCLHVFQUFlOzswQ0FDN0IsOERBQUMwQjswQ0FBSXZCOzs7Ozs7MENBQ0wsOERBQUNvQjtnQ0FBSUwsV0FBV2xCLG9FQUFZOztrREFDMUIsOERBQUNILHdEQUFRQTs7Ozs7a0RBQ1QsOERBQUM4QjtrREFBTW5COzs7Ozs7Ozs7Ozs7MENBRVQsOERBQUNlO2dDQUFJTCxXQUFXbEIsdUVBQWU7O2tEQUM3Qiw4REFBQ0YsMkRBQVdBOzs7OztrREFDWiw4REFBQzhCO2tEQUFTZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDUzt3QkFBSUwsV0FBV2xCLHVFQUFlO2tDQUM3Qiw0RUFBQ0osa0RBQU1BOzRCQUFDa0MsTUFBTWQ7OzhDQUNaLDhEQUFDZTs4Q0FBSzs7Ozs7OzhDQUNOLDhEQUFDQTtvQ0FBS2IsV0FBV2xCLG9FQUFZOzhDQUMzQiw0RUFBQ0QsK0RBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0I7S0FyQ1NFO0FBdUNULCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWl0ZW0uanM/NmZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJy4uL3VpL2J1dHRvbic7XG5pbXBvcnQgRGF0ZUljb24gZnJvbSAnLi4vaWNvbnMvZGF0ZS1pY29uJztcbmltcG9ydCBBZGRyZXNzSWNvbiBmcm9tICcuLi9pY29ucy9hZGRyZXNzLWljb24nO1xuaW1wb3J0IEFycm93UmlnaHRJY29uIGZyb20gJy4uL2ljb25zL2Fycm93LXJpZ2h0LWljb24nO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9ldmVudC1pdGVtLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBFdmVudEl0ZW0ocHJvcHMpIHtcbiAgY29uc3QgeyB0aXRsZSwgaW1hZ2UsIGRhdGUsIGxvY2F0aW9uLCBpZCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge1xuICAgIGRheTogJ251bWVyaWMnLFxuICAgIG1vbnRoOiAnbG9uZycsXG4gICAgeWVhcjogJ251bWVyaWMnLFxuICB9KTtcbiAgY29uc3QgZm9ybWF0dGVkQWRkcmVzcyA9IGxvY2F0aW9uLnJlcGxhY2UoJywgJywgJ1xcbicpO1xuICBjb25zdCBleHBsb3JlTGluayA9IGAvZXZlbnRzLyR7aWR9YDtcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG4gICAgICA8SW1hZ2Ugc3JjPXsnLycgKyBpbWFnZX0gYWx0PXt0aXRsZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdW1tYXJ5fT5cbiAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+XG4gICAgICAgICAgICA8RGF0ZUljb24gLz5cbiAgICAgICAgICAgIDx0aW1lPntodW1hblJlYWRhYmxlRGF0ZX08L3RpbWU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWRkcmVzc30+XG4gICAgICAgICAgICA8QWRkcmVzc0ljb24gLz5cbiAgICAgICAgICAgIDxhZGRyZXNzPntmb3JtYXR0ZWRBZGRyZXNzfTwvYWRkcmVzcz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxCdXR0b24gbGluaz17ZXhwbG9yZUxpbmt9PlxuICAgICAgICAgICAgPHNwYW4+RXhwbG9yZSBFdmVudDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufT5cbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRJdGVtO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkRhdGVJY29uIiwiQWRkcmVzc0ljb24iLCJBcnJvd1JpZ2h0SWNvbiIsImNsYXNzZXMiLCJFdmVudEl0ZW0iLCJwcm9wcyIsInRpdGxlIiwiaW1hZ2UiLCJkYXRlIiwibG9jYXRpb24iLCJpZCIsImh1bWFuUmVhZGFibGVEYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsImZvcm1hdHRlZEFkZHJlc3MiLCJyZXBsYWNlIiwiZXhwbG9yZUxpbmsiLCJsaSIsImNsYXNzTmFtZSIsIml0ZW0iLCJJbWFnZSIsInNyYyIsImFsdCIsImRpdiIsImNvbnRlbnQiLCJzdW1tYXJ5IiwiaDIiLCJ0aW1lIiwiYWRkcmVzcyIsImFjdGlvbnMiLCJsaW5rIiwic3BhbiIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/events/event-item.js\n"));

/***/ })

});