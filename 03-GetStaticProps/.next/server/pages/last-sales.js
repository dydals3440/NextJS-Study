(() => {
var exports = {};
exports.id = 822;
exports.ids = [822,660];
exports.modules = {

/***/ 8527:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2940);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6004);
/* harmony import */ var private_next_pages_last_sales_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1281);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_last_sales_jsx__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_last_sales_jsx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_last_sales_jsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_last_sales_jsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_last_sales_jsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_last_sales_jsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_last_sales_jsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_last_sales_jsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_last_sales_jsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_last_sales_jsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_last_sales_jsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_last_sales_jsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_last_sales_jsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/last-sales",
        pathname: "/last-sales",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_last_sales_jsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);


function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 1281:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);
swr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// client side
function LastSalesPage(props) {
    // 여기다 props.sales를 초기값으로 주면 CS 데이터 페칭의 결과를 덮어씀 초기에는 getStaticProps로 붙어 얻은 sales상태를씀
    const [sales, setSales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.sales);
    //   const [isLoading, setIsLoading] = useState(false);
    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])("https://react-http-28b62-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data) {
            const transformsSales = [];
            for(const key in data){
                transformsSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume
                });
            }
            setSales(transformsSales);
        }
    }, []);
    // || => &&로 변경 개발자도구에서, 이제 스크립트에 초기정보를 갖고있음! SEO 향상 데이터가 변경될시 클라이언트 페치를하고, 처음에는 정적
    if (!data && !sales) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Loading..."
        });
    }
    if (error) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: " Failed to load"
        });
    }
    //   // react에서 useEffects는 모든 컴포넌트의 최초 평가와 렌더링을 마친 뒤 실행되도록 설계되어있음.
    //   // 첫 렌더링 사이클에서는 sales가 정의되지 않았으니 false가 됨
    //   useEffect(() => {
    //     setIsLoading(true);
    //     fetch(
    //       'https://react-http-28b62-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json'
    //     )
    //       .then((res) => res.json())
    //       .then((data) => {
    //         const transformsSales = [];
    //         for (const key in data) {
    //           transformsSales.push({
    //             id: key,
    //             username: data[key].username,
    //             volume: data[key].volume,
    //           });
    //         }
    //         setSales(transformsSales);
    //         setIsLoading(false);
    //       });
    //   }, []);
    //   if (isLoading) {
    //     return <p>Loading...</p>;
    //   }
    // useEffect의 실행 사이클에 의해, 처음 렌더링될떄 sales의 상태는 undefined이기 때문에 map error // getserversideprops를 사용하지않으면 Next.js에서 기본 페이지를 사전 렌더링하기 떄문에 개발자도구에서 Nodatayet이 적혀있는것을 확인할 수 있음. 여기서 중요한점은 이 페이지에 사용된 데이터는 Next.js에서 getStaticProps같은 함수로 준비한 것이 아니기 떄문에, Next.js에서 페이지를 사전 렌더링할떄 useEffect를 거치지 않는다는 점이다.
    //   if (!sales) {
    //     return <p>No data yet</p>;
    //   }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        children: sales.map((sale)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                children: [
                    sale.username,
                    " - $",
                    sale.volume
                ]
            }, sale.id))
    });
}
// gestStaticProps를 써서, 빌드 프로세스 중에 사전생성하고, 배포가 끝나면 revalidate 키로 유효성 재검사 실행
// React Component가 아니기 때문에 useSWR 사용 X
// 대신 fetch()는 getStaticProps와 getServerSideProps에서 모두 쓰임 Next.js덕분에 서버측인 이 콘텍스트에서 사용할 수 있다. 이전처럼 작성하면 된다.
// 응답 구문 분석, 데이터 변형 데이터 변환이 완료되면 for 루프 다음에 무엇을해야할까요? getStaticProps가 비동기함수라는점을 중요하게 여겨야한다. 그래서 프로미스가 끝에 있어야 하는데 두번째 then 블럭에서 객체를 반환해야한다.
async function getStaticProps() {
    // return을 해주거나 await을 해주어야함, 그래야 모든 단계 및 최종 데이터를 가지는 전체 promise가  getStaticProps로 반환된다. return fetch / (115: 4:20)
    const response = await fetch("https://react-http-28b62-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json");
    const data = await response.json();
    const transformsSales = [];
    for(const key in data){
        transformsSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume
        });
    }
    return {
        props: {
            sales: transformsSales
        },
        revalidate: 10
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastSalesPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,815], () => (__webpack_exec__(8527)));
module.exports = __webpack_exports__;

})();