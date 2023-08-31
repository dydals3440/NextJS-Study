(() => {
var exports = {};
exports.id = 542;
exports.ids = [542,660];
exports.modules = {

/***/ 546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fuser_profile_preferredRegion_absolutePagePath_private_next_pages_2Fuser_profile_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fuser_profile_preferredRegion_absolutePagePath_private_next_pages_2Fuser_profile_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/user-profile.jsx
var user_profile_namespaceObject = {};
__webpack_require__.r(user_profile_namespaceObject);
__webpack_require__.d(user_profile_namespaceObject, {
  "default": () => (user_profile),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(2940);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(6004);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./pages/user-profile.jsx
// 어떤 사용자가 렌더링하는지 먼저 파악(쿠키를 이용해서)
// 유저에 따라, 보여지는 페이지가 달라짐! 이경우가 SSR이다.
// 이 경우 프로젝트가 생성하기 전에, 불러오는게아니라, 요청이 들어올 떄마다 불러오는거임

function UserProfilePage(props) {
    return /*#__PURE__*/ jsx_runtime.jsx("h1", {
        children: props.username
    });
}
/* harmony default export */ const user_profile = (UserProfilePage);
// 이 함수는 사전에 생성된 정적함수가 아니고, 배포된 서버와 개발 서버에서만 실행된다는 점이 중요하다!
async function getServerSideProps(context) {
    const { params, req, res } = context;
    // revalidate 뺴고 나머지 다 쓸수있음 왜냐하면, SSR에서는 들어오는 요청에 전부 유효성 검사를 실행하기 떄문 (지정해준 시간마다 최신 페이지 정보가 갱신되는게 아님!)
    return {
        props: {
            username: "abc"
        }
    };
} // getServerSideProps와 context
 // getStaticProps의 context와 다르게,  매개변수 (params) 객체나 덜 중요한 부분에 접근하는 것이아닌, 실제 요청 (req)에 접근이 가능해진다. 응답 (res)에도 접근하여 해당 요청을 조정하거나, 헤더도 추가할 수 있다. 정확히 말하자면 context 객체에 든 여러 value/key를 얻을 수 있고, req/res는 적절한 응답을 얻을때까지, 필요한 만큼 req 객체를 조정할 수도있다. 요청이 가기 전에 조정하는 방법도 있다. 예를 들어, 헤더를 추가 또는 쿠키를 추가하는 것과같은 것이다. 서버에 도달한 요청 객체를 분석해서 거기서 들어오는 데이터를 읽을 수있다. 해당 요청에 달린 헤더나 쿠키 데이터 같은 것이다. 지금 받을 요청 객체와 응답객체는 공식 Node.js 기본 입력메시지와 응답객체이다.
 // static / ssr 차이
 // 컴포넌트에 사용한 데이터를 서버에서 미리 준비해서 클라이언트에게 완성된 페이지를 제공하면 사용자 경험을 개선할 수 있고, 사용자들은 처음부터 완성된 페이지에서 모든 콘텐츠를 이용할 수 있고, 그 외에도 검색 엔진 크롤러가 완성된 페이지를 확인해서 SEO에도 효율적이다.
 // Client-side Data Fetching
 // 우리가 그동안 배운것과 반대개념, 그동안은 개발과정/서버측에서 데이터를 페칭하고 준비했다.
 // Next.js 앱을 개발하다보면, 사전 렌더링을 할 필요가 없거나, 사전 렌더링을 할 수 없는데이터를 다룬다.
 // 갱신주기가 잦은 데이터 ex. 주식데이터 그 데이터가 매초마다 여러차례 변경되면 프리페칭과 사전 렌더링은 의미가없다. 페이지를 방문하면 이미 그 데이터는 과거의 것이 되어있기 때문이다.
 // 그런 겨웅에는 페이지를 방문했을떄 로딩아이콘 표시, 방문했을때 최신 데이터를 가져와, 백그라운드에서 업데이트하는 것이 사용자 입장에서 가장좋음.
 // 또 다른 예로는 특정 유저에만 한정되는 데이터, 온라인 쇼핑몰의 최근 주문내역, 계정에 접속해서 프로필 페이지에서 특정한 데이터를 열람하는 경우에 페이지를 사전 렌더링할 필요가 없다! 검색엔진에서 개인 프로필을 확인하지 않고, 사용자 경험 측면에서도, 프로필 페이지 방문했을 때 데이터로드를 조금 기다려도 나쁘지않다. 즉, 접속하자마자 처음부터 데이터가 있는 것보다 페이지상에서 탐색이 빠른게 더 중요하다.
 //  또는 데이터의 일부분만 표시 ex. 대시보드 페이지 (다양한 데이터 표시, 모든 데이터를 한번에 불러오도록하면, 서버에서 대시보드 요청을 처리하는데 시간이 많이 소요됨 개발 단계에서 이 페이지를 사전 렌더링할 이유가 없음 그 페이지의 정보는 다분히 개인적이거나 변동이 잦기 때문이다. 사전 렌더링보다는 주어진 React 앱에 포함된 데이터를 사용자가 페이지에 방문할때마다 불러와야함.)

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fuser-profile&preferredRegion=&absolutePagePath=private-next-pages%2Fuser-profile.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fuser_profile_preferredRegion_absolutePagePath_private_next_pages_2Fuser_profile_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(user_profile_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(user_profile_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(user_profile_namespaceObject, "getStaticPaths");
const next_route_loaderkind_PAGES_page_2Fuser_profile_preferredRegion_absolutePagePath_private_next_pages_2Fuser_profile_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(user_profile_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(user_profile_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(user_profile_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(user_profile_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(user_profile_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(user_profile_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(user_profile_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(user_profile_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/user-profile",
        pathname: "/user-profile",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: (_document_default())
    },
    userland: user_profile_namespaceObject
});

//# sourceMappingURL=pages.js.map

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,815], () => (__webpack_exec__(546)));
module.exports = __webpack_exports__;

})();