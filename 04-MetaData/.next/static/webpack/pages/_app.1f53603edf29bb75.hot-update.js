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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NotificationContextProvider: function() { return /* binding */ NotificationContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst NotificationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    notification: null,\n    showNotification: function(notificationData) {},\n    hideNotification: function() {}\n});\nfunction NotificationContextProvider(props) {\n    _s();\n    // 우리가 상태를 호출할 떄마다, NotificationContextProvider 컴포넌트가 리렌더링 되고, 연관된 컴포넌트에 업데이트 된 context 객체를 배포함\n    const [activeNotification, setActiveNotification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (activeNotification && activeNotification.status === \"success\" || activeNotification.status === \"error\") {\n            const timer = setTimeout(()=>{\n                setActiveNotification(null);\n            }, 3000);\n            // 동시에 여러가지 타이머의 실행을 방지\n            return ()=>{\n                clearTimeout(timer);\n            };\n        }\n    }, []);\n    function showNotificationHandler(notificationData) {\n        setActiveNotification(notificationData);\n    }\n    function hideNotificationHandler() {\n        setActiveNotification(null);\n    }\n    const context = {\n        notification: activeNotification,\n        showNotification: showNotificationHandler,\n        hideNotification: hideNotificationHandler\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotificationContext.Provider, {\n        value: context,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/kim-yongmin/Desktop/스터디/Next.js/04-MetaData/store/notification-context.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(NotificationContextProvider, \"Wi3E3Psx/3AX/beWJcnxb8rsCKk=\");\n_c = NotificationContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotificationContext);\nvar _c;\n$RefreshReg$(_c, \"NotificationContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyRDtBQUUzRCxNQUFNRyxvQ0FBc0JILG9EQUFhQSxDQUFDO0lBQ3hDSSxjQUFjO0lBQ2RDLGtCQUFrQixTQUFVQyxnQkFBZ0IsR0FBRztJQUMvQ0Msa0JBQWtCLFlBQWE7QUFDakM7QUFFTyxTQUFTQyw0QkFBNEJDLEtBQUs7O0lBQy9DLCtGQUErRjtJQUMvRixNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUdULCtDQUFRQTtJQUU1REQsZ0RBQVNBLENBQUM7UUFDUixJQUNFLHNCQUF1QlMsbUJBQW1CRSxNQUFNLEtBQUssYUFDckRGLG1CQUFtQkUsTUFBTSxLQUFLLFNBQzlCO1lBQ0EsTUFBTUMsUUFBUUMsV0FBVztnQkFDdkJILHNCQUFzQjtZQUN4QixHQUFHO1lBRUgsdUJBQXVCO1lBQ3ZCLE9BQU87Z0JBQ0xJLGFBQWFGO1lBQ2Y7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLFNBQVNHLHdCQUF3QlYsZ0JBQWdCO1FBQy9DSyxzQkFBc0JMO0lBQ3hCO0lBRUEsU0FBU1c7UUFDUE4sc0JBQXNCO0lBQ3hCO0lBRUEsTUFBTU8sVUFBVTtRQUNkZCxjQUFjTTtRQUNkTCxrQkFBa0JXO1FBQ2xCVCxrQkFBa0JVO0lBQ3BCO0lBRUEscUJBQ0UsOERBQUNkLG9CQUFvQmdCLFFBQVE7UUFBQ0MsT0FBT0Y7a0JBQ2xDVCxNQUFNWSxRQUFROzs7Ozs7QUFHckI7R0F2Q2dCYjtLQUFBQTtBQXlDaEIsK0RBQWVMLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dC5qc3g/ZDI3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBOb3RpZmljYXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIG5vdGlmaWNhdGlvbjogbnVsbCwgLy97IHRpdGxlLCBtZXNzYWdlLCBzdGF0dXMgfVxuICBzaG93Tm90aWZpY2F0aW9uOiBmdW5jdGlvbiAobm90aWZpY2F0aW9uRGF0YSkge30sXG4gIGhpZGVOb3RpZmljYXRpb246IGZ1bmN0aW9uICgpIHt9LFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBOb3RpZmljYXRpb25Db250ZXh0UHJvdmlkZXIocHJvcHMpIHtcbiAgLy8g7Jqw66as6rCAIOyDge2DnOulvCDtmLjstpztlaAg65aE66eI64ukLCBOb3RpZmljYXRpb25Db250ZXh0UHJvdmlkZXIg7Lu07Y+s64SM7Yq46rCAIOumrOugjOuNlOungSDrkJjqs6AsIOyXsOq0gOuQnCDsu7Ttj6zrhIztirjsl5Ag7JeF642w7J207Yq4IOuQnCBjb250ZXh0IOqwneyytOulvCDrsLDtj6ztlahcbiAgY29uc3QgW2FjdGl2ZU5vdGlmaWNhdGlvbiwgc2V0QWN0aXZlTm90aWZpY2F0aW9uXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICAoYWN0aXZlTm90aWZpY2F0aW9uICYmIGFjdGl2ZU5vdGlmaWNhdGlvbi5zdGF0dXMgPT09ICdzdWNjZXNzJykgfHxcbiAgICAgIGFjdGl2ZU5vdGlmaWNhdGlvbi5zdGF0dXMgPT09ICdlcnJvcidcbiAgICApIHtcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZU5vdGlmaWNhdGlvbihudWxsKTtcbiAgICAgIH0sIDMwMDApO1xuXG4gICAgICAvLyDrj5nsi5zsl5Ag7Jes65+s6rCA7KeAIO2DgOydtOuouOydmCDsi6TtlonsnYQg67Cp7KeAXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uSGFuZGxlcihub3RpZmljYXRpb25EYXRhKSB7XG4gICAgc2V0QWN0aXZlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbkRhdGEpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZU5vdGlmaWNhdGlvbkhhbmRsZXIoKSB7XG4gICAgc2V0QWN0aXZlTm90aWZpY2F0aW9uKG51bGwpO1xuICB9XG5cbiAgY29uc3QgY29udGV4dCA9IHtcbiAgICBub3RpZmljYXRpb246IGFjdGl2ZU5vdGlmaWNhdGlvbixcbiAgICBzaG93Tm90aWZpY2F0aW9uOiBzaG93Tm90aWZpY2F0aW9uSGFuZGxlcixcbiAgICBoaWRlTm90aWZpY2F0aW9uOiBoaWRlTm90aWZpY2F0aW9uSGFuZGxlcixcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxOb3RpZmljYXRpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L05vdGlmaWNhdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbkNvbnRleHQ7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTm90aWZpY2F0aW9uQ29udGV4dCIsIm5vdGlmaWNhdGlvbiIsInNob3dOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25EYXRhIiwiaGlkZU5vdGlmaWNhdGlvbiIsIk5vdGlmaWNhdGlvbkNvbnRleHRQcm92aWRlciIsInByb3BzIiwiYWN0aXZlTm90aWZpY2F0aW9uIiwic2V0QWN0aXZlTm90aWZpY2F0aW9uIiwic3RhdHVzIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2hvd05vdGlmaWNhdGlvbkhhbmRsZXIiLCJoaWRlTm90aWZpY2F0aW9uSGFuZGxlciIsImNvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/notification-context.jsx\n"));

/***/ })

});