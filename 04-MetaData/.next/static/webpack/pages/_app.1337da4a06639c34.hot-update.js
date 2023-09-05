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

/***/ "./store/notification-context.jsx":
/*!****************************************!*\
  !*** ./store/notification-context.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NotificationContextProvider: function() { return /* binding */ NotificationContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst NotificationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    notification: null,\n    showNotification: function(notificationData) {},\n    hideNotification: function() {}\n});\nfunction NotificationContextProvider(props) {\n    _s();\n    // 우리가 상태를 호출할 떄마다, NotificationContextProvider 컴포넌트가 리렌더링 되고, 연관된 컴포넌트에 업데이트 된 context 객체를 배포함\n    const [activeNotification, setActiveNotification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (activeNotification && activeNotification.status === \"success\" || activeNotification.status === \"error\") {\n            const timer = setTimeout(()=>{}, 3000);\n        }\n    }, []);\n    function showNotificationHandler(notificationData) {\n        setActiveNotification(notificationData);\n    }\n    function hideNotificationHandler() {\n        setActiveNotification(null);\n    }\n    const context = {\n        notification: activeNotification,\n        showNotification: showNotificationHandler,\n        hideNotification: hideNotificationHandler\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotificationContext.Provider, {\n        value: context,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/store/notification-context.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(NotificationContextProvider, \"Wi3E3Psx/3AX/beWJcnxb8rsCKk=\");\n_c = NotificationContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotificationContext);\nvar _c;\n$RefreshReg$(_c, \"NotificationContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyRDtBQUUzRCxNQUFNRyxvQ0FBc0JILG9EQUFhQSxDQUFDO0lBQ3hDSSxjQUFjO0lBQ2RDLGtCQUFrQixTQUFVQyxnQkFBZ0IsR0FBRztJQUMvQ0Msa0JBQWtCLFlBQWE7QUFDakM7QUFFTyxTQUFTQyw0QkFBNEJDLEtBQUs7O0lBQy9DLCtGQUErRjtJQUMvRixNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUdULCtDQUFRQTtJQUU1REQsZ0RBQVNBLENBQUM7UUFDUixJQUNFLHNCQUF1QlMsbUJBQW1CRSxNQUFNLEtBQUssYUFDckRGLG1CQUFtQkUsTUFBTSxLQUFLLFNBQzlCO1lBQ0EsTUFBTUMsUUFBUUMsV0FBVyxLQUFPLEdBQUc7UUFDckM7SUFDRixHQUFHLEVBQUU7SUFFTCxTQUFTQyx3QkFBd0JULGdCQUFnQjtRQUMvQ0ssc0JBQXNCTDtJQUN4QjtJQUVBLFNBQVNVO1FBQ1BMLHNCQUFzQjtJQUN4QjtJQUVBLE1BQU1NLFVBQVU7UUFDZGIsY0FBY007UUFDZEwsa0JBQWtCVTtRQUNsQlIsa0JBQWtCUztJQUNwQjtJQUVBLHFCQUNFLDhEQUFDYixvQkFBb0JlLFFBQVE7UUFBQ0MsT0FBT0Y7a0JBQ2xDUixNQUFNVyxRQUFROzs7Ozs7QUFHckI7R0FoQ2dCWjtLQUFBQTtBQWtDaEIsK0RBQWVMLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dC5qc3g/ZDI3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBOb3RpZmljYXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIG5vdGlmaWNhdGlvbjogbnVsbCwgLy97IHRpdGxlLCBtZXNzYWdlLCBzdGF0dXMgfVxuICBzaG93Tm90aWZpY2F0aW9uOiBmdW5jdGlvbiAobm90aWZpY2F0aW9uRGF0YSkge30sXG4gIGhpZGVOb3RpZmljYXRpb246IGZ1bmN0aW9uICgpIHt9LFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBOb3RpZmljYXRpb25Db250ZXh0UHJvdmlkZXIocHJvcHMpIHtcbiAgLy8g7Jqw66as6rCAIOyDge2DnOulvCDtmLjstpztlaAg65aE66eI64ukLCBOb3RpZmljYXRpb25Db250ZXh0UHJvdmlkZXIg7Lu07Y+s64SM7Yq46rCAIOumrOugjOuNlOungSDrkJjqs6AsIOyXsOq0gOuQnCDsu7Ttj6zrhIztirjsl5Ag7JeF642w7J207Yq4IOuQnCBjb250ZXh0IOqwneyytOulvCDrsLDtj6ztlahcbiAgY29uc3QgW2FjdGl2ZU5vdGlmaWNhdGlvbiwgc2V0QWN0aXZlTm90aWZpY2F0aW9uXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICAoYWN0aXZlTm90aWZpY2F0aW9uICYmIGFjdGl2ZU5vdGlmaWNhdGlvbi5zdGF0dXMgPT09ICdzdWNjZXNzJykgfHxcbiAgICAgIGFjdGl2ZU5vdGlmaWNhdGlvbi5zdGF0dXMgPT09ICdlcnJvcidcbiAgICApIHtcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7fSwgMzAwMCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbkhhbmRsZXIobm90aWZpY2F0aW9uRGF0YSkge1xuICAgIHNldEFjdGl2ZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25EYXRhKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVOb3RpZmljYXRpb25IYW5kbGVyKCkge1xuICAgIHNldEFjdGl2ZU5vdGlmaWNhdGlvbihudWxsKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgbm90aWZpY2F0aW9uOiBhY3RpdmVOb3RpZmljYXRpb24sXG4gICAgc2hvd05vdGlmaWNhdGlvbjogc2hvd05vdGlmaWNhdGlvbkhhbmRsZXIsXG4gICAgaGlkZU5vdGlmaWNhdGlvbjogaGlkZU5vdGlmaWNhdGlvbkhhbmRsZXIsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Tm90aWZpY2F0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Ob3RpZmljYXRpb25Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25Db250ZXh0O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5vdGlmaWNhdGlvbkNvbnRleHQiLCJub3RpZmljYXRpb24iLCJzaG93Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uRGF0YSIsImhpZGVOb3RpZmljYXRpb24iLCJOb3RpZmljYXRpb25Db250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImFjdGl2ZU5vdGlmaWNhdGlvbiIsInNldEFjdGl2ZU5vdGlmaWNhdGlvbiIsInN0YXR1cyIsInRpbWVyIiwic2V0VGltZW91dCIsInNob3dOb3RpZmljYXRpb25IYW5kbGVyIiwiaGlkZU5vdGlmaWNhdGlvbkhhbmRsZXIiLCJjb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/notification-context.jsx\n"));

/***/ })

});