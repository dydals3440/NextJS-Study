"use strict";
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsletter-registration.module.css */ \"./components/input/newsletter-registration.module.css\");\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction NewsletterRegistration() {\n    _s();\n    const emailInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const notificationCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_notification_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    function registrationHandler(event) {\n        event.preventDefault();\n        const enteredEmail = emailInputRef.current.value;\n        notificationCtx.showNotification({\n            title: \"Signing Up\",\n            message: \"Registering for newsletter\",\n            status: \"pending\"\n        });\n        fetch(\"/api/newsletter\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                email: enteredEmail\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>response.json()).then((data)=>{\n            notificationCtx.showNotification({\n                title: \"Success!\",\n                message: \"Successfully registered for newsletter!\",\n                status: \"success\"\n            });\n        }).catch((err)=>{\n            notificationCtx.showNotification({\n                title: \"Error!\",\n                message: err.message || \"Something went wrong!\",\n                status: \"error\"\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default().newsletter),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Sign up to stay updated!\"\n            }, void 0, false, {\n                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/input/newsletter-registration.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: registrationHandler,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            id: \"email\",\n                            placeholder: \"Your email\",\n                            \"aria-label\": \"Your email\",\n                            ref: emailInputRef\n                        }, void 0, false, {\n                            fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/input/newsletter-registration.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/input/newsletter-registration.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/input/newsletter-registration.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/input/newsletter-registration.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/components/input/newsletter-registration.jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(NewsletterRegistration, \"DPwtQQ/gldp2MEe6QW3mx9/oYa8=\");\n_c = NewsletterRegistration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsletterRegistration);\nvar _c;\n$RefreshReg$(_c, \"NewsletterRegistration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBRWdCO0FBQ1E7QUFFbkUsU0FBU0k7O0lBQ1AsTUFBTUMsZ0JBQWdCTCw2Q0FBTUE7SUFDNUIsTUFBTU0sa0JBQWtCTCxpREFBVUEsQ0FBQ0UsbUVBQW1CQTtJQUV0RCxTQUFTSSxvQkFBb0JDLEtBQUs7UUFDaENBLE1BQU1DLGNBQWM7UUFFcEIsTUFBTUMsZUFBZUwsY0FBY00sT0FBTyxDQUFDQyxLQUFLO1FBRWhETixnQkFBZ0JPLGdCQUFnQixDQUFDO1lBQy9CQyxPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsUUFBUTtRQUNWO1FBRUFDLE1BQU0sbUJBQW1CO1lBQ3ZCQyxRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsT0FBT1o7WUFBYTtZQUMzQ2EsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRixHQUNHQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNHO1lBQ0xyQixnQkFBZ0JPLGdCQUFnQixDQUFDO2dCQUMvQkMsT0FBTztnQkFDUEMsU0FBUztnQkFDVEMsUUFBUTtZQUNWO1FBQ0YsR0FDQ1ksS0FBSyxDQUFDLENBQUNDO1lBQ052QixnQkFBZ0JPLGdCQUFnQixDQUFDO2dCQUMvQkMsT0FBTztnQkFDUEMsU0FBU2MsSUFBSWQsT0FBTyxJQUFJO2dCQUN4QkMsUUFBUTtZQUNWO1FBQ0Y7SUFDSjtJQUVBLHFCQUNFLDhEQUFDYztRQUFRQyxXQUFXN0IsdUZBQWtCOzswQkFDcEMsOERBQUMrQjswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0MsVUFBVTVCOzBCQUNkLDRFQUFDNkI7b0JBQUlMLFdBQVc3QixvRkFBZTs7c0NBQzdCLDhEQUFDb0M7NEJBQ0NDLE1BQUs7NEJBQ0xDLElBQUc7NEJBQ0hDLGFBQVk7NEJBQ1pDLGNBQVc7NEJBQ1hDLEtBQUt0Qzs7Ozs7O3NDQUVQLDhEQUFDdUM7c0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0dBeERTeEM7S0FBQUE7QUEwRFQsK0RBQWVBLHNCQUFzQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2lucHV0L25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLmpzeD81NjM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9uZXdzbGV0dGVyLXJlZ2lzdHJhdGlvbi5tb2R1bGUuY3NzJztcbmltcG9ydCBOb3RpZmljYXRpb25Db250ZXh0IGZyb20gJy4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi1jb250ZXh0JztcblxuZnVuY3Rpb24gTmV3c2xldHRlclJlZ2lzdHJhdGlvbigpIHtcbiAgY29uc3QgZW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBub3RpZmljYXRpb25DdHggPSB1c2VDb250ZXh0KE5vdGlmaWNhdGlvbkNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gZW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgbm90aWZpY2F0aW9uQ3R4LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgdGl0bGU6ICdTaWduaW5nIFVwJyxcbiAgICAgIG1lc3NhZ2U6ICdSZWdpc3RlcmluZyBmb3IgbmV3c2xldHRlcicsXG4gICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICB9KTtcblxuICAgIGZldGNoKCcvYXBpL25ld3NsZXR0ZXInLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IGVudGVyZWRFbWFpbCB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgbm90aWZpY2F0aW9uQ3R4LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyEnLFxuICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCBmb3IgbmV3c2xldHRlciEnLFxuICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgdGl0bGU6ICdFcnJvciEnLFxuICAgICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd2VudCB3cm9uZyEnLFxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLm5ld3NsZXR0ZXJ9PlxuICAgICAgPGgyPlNpZ24gdXAgdG8gc3RheSB1cGRhdGVkITwvaDI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17cmVnaXN0cmF0aW9uSGFuZGxlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICBpZD0nZW1haWwnXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nWW91ciBlbWFpbCdcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9J1lvdXIgZW1haWwnXG4gICAgICAgICAgICByZWY9e2VtYWlsSW5wdXRSZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uPlJlZ2lzdGVyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3c2xldHRlclJlZ2lzdHJhdGlvbjtcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VDb250ZXh0IiwiY2xhc3NlcyIsIk5vdGlmaWNhdGlvbkNvbnRleHQiLCJOZXdzbGV0dGVyUmVnaXN0cmF0aW9uIiwiZW1haWxJbnB1dFJlZiIsIm5vdGlmaWNhdGlvbkN0eCIsInJlZ2lzdHJhdGlvbkhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXJlZEVtYWlsIiwiY3VycmVudCIsInZhbHVlIiwic2hvd05vdGlmaWNhdGlvbiIsInRpdGxlIiwibWVzc2FnZSIsInN0YXR1cyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIm5ld3NsZXR0ZXIiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNvbnRyb2wiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwiYXJpYS1sYWJlbCIsInJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/input/newsletter-registration.jsx\n"));

/***/ })

});