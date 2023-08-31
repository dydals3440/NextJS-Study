(() => {
var exports = {};
exports.id = 328;
exports.ids = [328,660];
exports.modules = {

/***/ 7291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fproducts_2F_5Bpid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bpid_5D_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fproducts_2F_5Bpid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bpid_5D_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fproducts_2F_5Bpid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bpid_5D_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/products/[pid].jsx
var _pid_namespaceObject = {};
__webpack_require__.r(_pid_namespaceObject);
__webpack_require__.d(_pid_namespaceObject, {
  "default": () => (_pid_),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
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
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "fs/promises"
var promises_ = __webpack_require__(3292);
var promises_default = /*#__PURE__*/__webpack_require__.n(promises_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/products/[pid].jsx




// 이 페이지는 p1, p2 ... p1000까지 많은 페이지를 만들어야할 수도있는데, next.js는 얼마나 많은 페이지를 미리 생성해야하는지 알 수 없다. [pid]에서 어떤 값이 지원되는지 알지 못한다. 대신 서버에서 항상 그때 그때 생성된다. 그래서 이전에는 작동됬지만, 지급은 getStaticProps를 적용한 상태라 안된다. 그래서 Dynamic Route의 경우 Next.js에게 더 많은 정보를 전달해주어야 한다. 어떤 인스턴스가 사전에 생성되야하는지, 어떤 [id]r값이 사용가능한지를  이떄 사용하는 것이 getStaticPaths()이다. Page 컴포넌트 파일에만 추가할 수 있다.
function ProductDetailPage(props) {
    // useEffect를 사용시 문제점, 상품 데이터를 제공할 서버에 HTTP d요청을할 수 있지만, 페이지가 처음 렌더링 되어 데이터가 없을시에, SE이 볼 수 없음.
    const { loadedProduct } = props;
    // fallback 예외처리 (데이터를 다 받아오지 못하는데 페이지가 열릴경우 로딩)
    if (!loadedProduct) {
        return /*#__PURE__*/ jsx_runtime.jsx("p", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                children: loadedProduct.title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                children: loadedProduct.description
            })
        ]
    });
}
// context 파라미터를 통해서, 구체적인 매개변수의 값을 구할 수 있다. 경로상의 동적 세그먼트에 대한 구체적인 값을 알 수 있다.
async function getStaticProps(context) {
    // context 객체의 프로퍼티 중 하나!
    const { params } = context;
    const productId = params.pid;
    const data = await getData();
    const product = data.products.find((product)=>product.id === productId);
    // 제품이 없을때, 해당하는 아이디가 없을때 라우팅 안되야하므로 (데이터가 누락된 페이지가 아닌, 페이지를 찾을수 없다는 notFound 페이지를 보여주기!)
    if (!product) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            loadedProduct: product
        }
    };
}
// 동적 경로 세그먼팅
async function getData() {
    const filePath = external_path_default().join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = await promises_default().readFile(filePath);
    const data = JSON.parse(jsonData);
    return data;
}
async function getStaticPaths() {
    // 동적페이지의 어떤 instances를 생성할지 next.js에게 알림
    const data = await getData();
    const ids = data.products.map((product)=>product.id);
    // params에서 사용할수있게 객체로 변경 () 안에 중괄호로 감싸주어야지 함수 본문으로 인식하지않음
    const pathsWithParams = ids.map((id)=>({
            params: {
                pid: id
            }
        }));
    return {
        paths: //   { params: { pid: 'p1' } },// 정적으로 로딩하는 방법
        pathsWithParams,
        // fallback 키는 사전 생성되어야 할 페이지가 많을 때 도움이된다. Amazon처럼 상품이 수천만개인 웹사이트를 생각해보자, 모든 상품을 사전 생성하는 것이 좋은 방법은 아닐 것이다. (너무 오랜시간걸림)
        // 수백 개의 게시물이 있는 블로그를 만들어도, 몇개는 아무도 보지않는 게시물이 있을수도 있다. 방문객이 없는 페이지의 사전생상은 시간과 자원 낭비다. 여기서 fallback: true이 필요하다. 그 후 사전에 생성할 페이지만 위에있는 paths에 남겨주면된다. 이러한 방식으로 방문율이 높은 페이지를 서버에 사전에 생성하고, 방문이 적은 페이지를 서버에서 생성하는것을 미루어 필요한 경우에만 사전 생성되게 할 수 있다. 정말 유용할 수 있다. 하지만 문제가 있다. 링크를 클릭하지않고, 직접 URL에 입력하게 되면 에러가 발생한다. Dynamic Pre generate 기능이 즉시 끝나지 않았기 떄문이다. fallback 기능을 쓸려면, 컴포넌트에서 fallback 상태를 반환할 수 있게 해주어야한다.
        fallback: true
    };
}
/* harmony default export */ const _pid_ = (ProductDetailPage); // 컴포넌트 함수는 useParams을 통해 params을 추출하고, getStaticProps 함수안에서는 context를 통해 추출하는 이유!
 // 컴포넌트 함수에서 매개변수를 추출하면, 컴포넌트 내부에서 사용이 가능하다. 추출된 ID를 사용하거나 일부 백엔드 서버에 요청을 보내 거기에 페칭함. 이 과정은 브라우저에서만 일어난다는게 중요하다.
 // getStaticProps을 통해, 페이지를 사전에 렌더링하게 되면 이 경우는 서버에서 이루어진다. 이전에 설명했듯이 getStaticProps는 컴포넌트 함수가 렌더링되기 이전에 페이지를 사전에 실행되는 함수라서 그렇다.

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fproducts%2F%5Bpid%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fproducts%2F%5Bpid%5D.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fproducts_2F_5Bpid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bpid_5D_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_pid_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2Fproducts_2F_5Bpid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bpid_5D_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_pid_namespaceObject, "getStaticProps");
const next_route_loaderkind_PAGES_page_2Fproducts_2F_5Bpid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bpid_5D_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_pid_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(_pid_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(_pid_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(_pid_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(_pid_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_pid_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(_pid_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(_pid_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_pid_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/products/[pid]",
        pathname: "/products/[pid]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: (_document_default())
    },
    userland: _pid_namespaceObject
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

/***/ }),

/***/ 3292:
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,815], () => (__webpack_exec__(7291)));
module.exports = __webpack_exports__;

})();