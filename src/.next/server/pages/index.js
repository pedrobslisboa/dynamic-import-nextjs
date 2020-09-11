module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Home.module.css":
/*!*******************************!*\
  !*** ./pages/Home.module.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__3DcHx\",\n\t\"divider\": \"Home_divider__2vAUJ\",\n\t\"flex\": \"Home_flex__3elhl\",\n\t\"main\": \"Home_main__2O9aq\",\n\t\"title\": \"Home_title__3qRzY\",\n\t\"image\": \"Home_image__2jRMc\",\n\t\"codeTitle\": \"Home_codeTitle__VseOt\",\n\t\"button\": \"Home_button__SKViv\",\n\t\"code\": \"Home_code__O4qd3\",\n\t\"section\": \"Home_section__3ErEB\",\n\t\"grid\": \"Home_grid__3rzP3\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Ib21lLm1vZHVsZS5jc3M/NDRiMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzNEY0h4XCIsXG5cdFwiZGl2aWRlclwiOiBcIkhvbWVfZGl2aWRlcl9fMnZBVUpcIixcblx0XCJmbGV4XCI6IFwiSG9tZV9mbGV4X18zZWxobFwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzJPOWFxXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zcVJ6WVwiLFxuXHRcImltYWdlXCI6IFwiSG9tZV9pbWFnZV9fMmpSTWNcIixcblx0XCJjb2RlVGl0bGVcIjogXCJIb21lX2NvZGVUaXRsZV9fVnNlT3RcIixcblx0XCJidXR0b25cIjogXCJIb21lX2J1dHRvbl9fU0tWaXZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19PNHFkM1wiLFxuXHRcInNlY3Rpb25cIjogXCJIb21lX3NlY3Rpb25fXzNFckVCXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fM3J6UDNcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Home.module.css\n");

/***/ }),

/***/ "./pages/breakingdoor.gif":
/*!********************************!*\
  !*** ./pages/breakingdoor.gif ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/breakingdoor-399d7119dd84f8821133af564fd67978.gif\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9icmVha2luZ2Rvb3IuZ2lmP2FkYjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9wYWdlcy9icmVha2luZ2Rvb3IuZ2lmLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2JyZWFraW5nZG9vci0zOTlkNzExOWRkODRmODgyMTEzM2FmNTY0ZmQ2Nzk3OC5naWZcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/breakingdoor.gif\n");

/***/ }),

/***/ "./pages/carbon.png":
/*!**************************!*\
  !*** ./pages/carbon.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/carbon-644769714ad4bd096e38cb8d31476a7a.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXJib24ucG5nPzE3NzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9wYWdlcy9jYXJib24ucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmJvbi02NDQ3Njk3MTRhZDRiZDA5NmUzOGNiOGQzMTQ3NmE3YS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/carbon.png\n");

/***/ }),

/***/ "./pages/github.svg":
/*!**************************!*\
  !*** ./pages/github.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkMyLDE2LjQyIDQuODcsMjAuMTcgOC44NCwyMS41QzkuMzQsMjEuNTggOS41LDIxLjI3IDkuNSwyMUM5LjUsMjAuNzcgOS41LDIwLjE0IDkuNSwxOS4zMUM2LjczLDE5LjkxIDYuMTQsMTcuOTcgNi4xNCwxNy45N0M1LjY4LDE2LjgxIDUuMDMsMTYuNSA1LjAzLDE2LjVDNC4xMiwxNS44OCA1LjEsMTUuOSA1LjEsMTUuOUM2LjEsMTUuOTcgNi42MywxNi45MyA2LjYzLDE2LjkzQzcuNSwxOC40NSA4Ljk3LDE4IDkuNTQsMTcuNzZDOS42MywxNy4xMSA5Ljg5LDE2LjY3IDEwLjE3LDE2LjQyQzcuOTUsMTYuMTcgNS42MiwxNS4zMSA1LjYyLDExLjVDNS42MiwxMC4zOSA2LDkuNSA2LjY1LDguNzlDNi41NSw4LjU0IDYuMiw3LjUgNi43NSw2LjE1QzYuNzUsNi4xNSA3LjU5LDUuODggOS41LDcuMTdDMTAuMjksNi45NSAxMS4xNSw2Ljg0IDEyLDYuODRDMTIuODUsNi44NCAxMy43MSw2Ljk1IDE0LjUsNy4xN0MxNi40MSw1Ljg4IDE3LjI1LDYuMTUgMTcuMjUsNi4xNUMxNy44LDcuNSAxNy40NSw4LjU0IDE3LjM1LDguNzlDMTgsOS41IDE4LjM4LDEwLjM5IDE4LjM4LDExLjVDMTguMzgsMTUuMzIgMTYuMDQsMTYuMTYgMTMuODEsMTYuNDFDMTQuMTcsMTYuNzIgMTQuNSwxNy4zMyAxNC41LDE4LjI2QzE0LjUsMTkuNiAxNC41LDIwLjY4IDE0LjUsMjFDMTQuNSwyMS4yNyAxNC42NiwyMS41OSAxNS4xNywyMS41QzE5LjE0LDIwLjE2IDIyLDE2LjQyIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaIiAvPjwvc3ZnPg==\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9naXRodWIuc3ZnP2FlZmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQXFDIiwiZmlsZSI6Ii4vcGFnZXMvZ2l0aHViLnN2Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2daRDBpVFRFeUxESkJNVEFzTVRBZ01DQXdMREFnTWl3eE1rTXlMREUyTGpReUlEUXVPRGNzTWpBdU1UY2dPQzQ0TkN3eU1TNDFRemt1TXpRc01qRXVOVGdnT1M0MUxESXhMakkzSURrdU5Td3lNVU01TGpVc01qQXVOemNnT1M0MUxESXdMakUwSURrdU5Td3hPUzR6TVVNMkxqY3pMREU1TGpreElEWXVNVFFzTVRjdU9UY2dOaTR4TkN3eE55NDVOME0xTGpZNExERTJMamd4SURVdU1ETXNNVFl1TlNBMUxqQXpMREUyTGpWRE5DNHhNaXd4TlM0NE9DQTFMakVzTVRVdU9TQTFMakVzTVRVdU9VTTJMakVzTVRVdU9UY2dOaTQyTXl3eE5pNDVNeUEyTGpZekxERTJMamt6UXpjdU5Td3hPQzQwTlNBNExqazNMREU0SURrdU5UUXNNVGN1TnpaRE9TNDJNeXd4Tnk0eE1TQTVMamc1TERFMkxqWTNJREV3TGpFM0xERTJMalF5UXpjdU9UVXNNVFl1TVRjZ05TNDJNaXd4TlM0ek1TQTFMall5TERFeExqVkROUzQyTWl3eE1DNHpPU0EyTERrdU5TQTJMalkxTERndU56bEROaTQxTlN3NExqVTBJRFl1TWl3M0xqVWdOaTQzTlN3MkxqRTFRell1TnpVc05pNHhOU0EzTGpVNUxEVXVPRGdnT1M0MUxEY3VNVGRETVRBdU1qa3NOaTQ1TlNBeE1TNHhOU3cyTGpnMElERXlMRFl1T0RSRE1USXVPRFVzTmk0NE5DQXhNeTQzTVN3MkxqazFJREUwTGpVc055NHhOME14Tmk0ME1TdzFMamc0SURFM0xqSTFMRFl1TVRVZ01UY3VNalVzTmk0eE5VTXhOeTQ0TERjdU5TQXhOeTQwTlN3NExqVTBJREUzTGpNMUxEZ3VOemxETVRnc09TNDFJREU0TGpNNExERXdMak01SURFNExqTTRMREV4TGpWRE1UZ3VNemdzTVRVdU16SWdNVFl1TURRc01UWXVNVFlnTVRNdU9ERXNNVFl1TkRGRE1UUXVNVGNzTVRZdU56SWdNVFF1TlN3eE55NHpNeUF4TkM0MUxERTRMakkyUXpFMExqVXNNVGt1TmlBeE5DNDFMREl3TGpZNElERTBMalVzTWpGRE1UUXVOU3d5TVM0eU55QXhOQzQyTml3eU1TNDFPU0F4TlM0eE55d3lNUzQxUXpFNUxqRTBMREl3TGpFMklESXlMREUyTGpReUlESXlMREV5UVRFd0xERXdJREFnTUN3d0lERXlMREphSWlBdlBqd3ZjM1puUGc9PVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/github.svg\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.module.css */ \"./pages/Home.module.css\");\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _breakingdoor_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breakingdoor.gif */ \"./pages/breakingdoor.gif\");\n/* harmony import */ var _breakingdoor_gif__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_breakingdoor_gif__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _carbon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carbon.png */ \"./pages/carbon.png\");\n/* harmony import */ var _carbon_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_carbon_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _github_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./github.svg */ \"./pages/github.svg\");\n/* harmony import */ var _github_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_github_svg__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/home/pedro/estudos/loadable-test/src/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst WithSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/WithSSR */ \"./components/WithSSR/index.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/WithSSR */ \"./components/WithSSR/index.js\")],\n    modules: [\"../components/WithSSR\"]\n  }\n});\nconst WithoutSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/WithoutSSR */ \"./components/WithoutSSR/index.js\")), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/WithoutSSR */ \"./components/WithoutSSR/index.js\")],\n    modules: [\"../components/WithoutSSR\"]\n  }\n});\nconst HereIsJonny = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/HereIsJonny */ \"./components/HereIsJonny/index.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/HereIsJonny */ \"./components/HereIsJonny/index.js\")],\n    modules: [\"../components/HereIsJonny\"]\n  }\n});\nfunction Home() {\n  const {\n    0: isBroked,\n    1: setIsBroked\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, \"Create Next App\"), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  })), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"main\", {\n    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, \"This is a danymic import Nextjs sample\", ` `, __jsx(\"a\", {\n    href: \"https://github.com/pedrobslisboa/dynamic-import-nextjs\",\n    target: \"_blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: _github_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 15\n    }\n  }))), __jsx(\"div\", {\n    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.section,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flex,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 15\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }, \"Let's start with a simple lazy require example of a react componente\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }\n  }, \"It supposes to load the bundle of this component only after you click the button. You can follow the loading on the network tab on dev tools.\"), __jsx(\"button\", {\n    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,\n    onClick: () => setIsBroked(true),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }, \"Break the door\"), __jsx(\"div\", {\n    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.image,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, !isBroked ? __jsx(\"img\", {\n    height: \"200\",\n    width: \"300\",\n    src: _breakingdoor_gif__WEBPACK_IMPORTED_MODULE_4___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 21\n    }\n  }) : __jsx(HereIsJonny, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }\n  }, __jsx(\"strong\", {\n    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.codeTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 19\n    }\n  }, \"Usage:\"), __jsx(\"img\", {\n    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.code,\n    src: _carbon_png__WEBPACK_IMPORTED_MODULE_5___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 19\n    }\n  })))), __jsx(\"hr\", {\n    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.divider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.section,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 15\n    }\n  }, __jsx(WithSSR, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }))), __jsx(\"hr\", {\n    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.divider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.section,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }, __jsx(WithoutSSR, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 15\n    }\n  }))))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIldpdGhTU1IiLCJkeW5hbWljIiwiV2l0aG91dFNTUiIsInNzciIsIkhlcmVJc0pvbm55IiwiSG9tZSIsImlzQnJva2VkIiwic2V0SXNCcm9rZWQiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIm1haW4iLCJ0aXRsZSIsImdpdGh1YiIsInNlY3Rpb24iLCJmbGV4IiwiYnV0dG9uIiwiaW1hZ2UiLCJicmVha2luZ2Rvb3IiLCJjb2RlVGl0bGUiLCJjb2RlIiwiY2FyYm9uIiwiZGl2aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsT0FBTyxHQUFHQyxtREFBTyxDQUFDLE1BQU0sMklBQVA7QUFBQTtBQUFBLHdDQUFjLDREQUFkO0FBQUEsY0FBYyx1QkFBZDtBQUFBO0FBQUEsRUFBdkI7QUFDQSxNQUFNQyxVQUFVLEdBQUdELG1EQUFPLENBQUMsTUFBTSxpSkFBUCxFQUEyQztBQUNuRUUsS0FBRyxFQUFFLEtBRDhEO0FBQUE7QUFBQSx3Q0FBN0Isa0VBQTZCO0FBQUEsY0FBN0IsMEJBQTZCO0FBQUE7QUFBQSxDQUEzQyxDQUExQjtBQUdBLE1BQU1DLFdBQVcsR0FBR0gsbURBQU8sQ0FBQyxNQUFNLG1KQUFQO0FBQUE7QUFBQSx3Q0FBYyxvRUFBZDtBQUFBLGNBQWMsMkJBQWQ7QUFBQTtBQUFBLEVBQTNCO0FBRWUsU0FBU0ksSUFBVCxHQUFnQjtBQUM3QixRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsS0FBRCxDQUF4QztBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7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LENBQUNJLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBcENGLENBUkYsQ0FERixDQVBGLENBREY7QUE2REQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IGJyZWFraW5nZG9vciBmcm9tIFwiLi9icmVha2luZ2Rvb3IuZ2lmXCI7XG5pbXBvcnQgY2FyYm9uIGZyb20gXCIuL2NhcmJvbi5wbmdcIjtcbmltcG9ydCBnaXRodWIgZnJvbSBcIi4vZ2l0aHViLnN2Z1wiO1xuY29uc3QgV2l0aFNTUiA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9XaXRoU1NSXCIpKTtcbmNvbnN0IFdpdGhvdXRTU1IgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvV2l0aG91dFNTUlwiKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG5jb25zdCBIZXJlSXNKb25ueSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9IZXJlSXNKb25ueVwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpc0Jyb2tlZCwgc2V0SXNCcm9rZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8PlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgVGhpcyBpcyBhIGRhbnltaWMgaW1wb3J0IE5leHRqcyBzYW1wbGV7YCBgfVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9wZWRyb2JzbGlzYm9hL2R5bmFtaWMtaW1wb3J0LW5leHRqc1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17Z2l0aHVifSAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4fT5cbiAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICBMZXQncyBzdGFydCB3aXRoIGEgc2ltcGxlIGxhenkgcmVxdWlyZSBleGFtcGxlIG9mIGEgcmVhY3RcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudGVcbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEl0IHN1cHBvc2VzIHRvIGxvYWQgdGhlIGJ1bmRsZSBvZiB0aGlzIGNvbXBvbmVudCBvbmx5IGFmdGVyIHlvdSBjbGljayB0aGUgYnV0dG9uLiBZb3UgY2FuIGZvbGxvdyB0aGUgbG9hZGluZyBvbiB0aGUgbmV0d29yayB0YWIgb24gZGV2IHRvb2xzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0Jyb2tlZCh0cnVlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBCcmVhayB0aGUgZG9vclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9PlxuICAgICAgICAgICAgICAgICAgeyFpc0Jyb2tlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIyMDBcIiB3aWR0aD1cIjMwMFwiIHNyYz17YnJlYWtpbmdkb29yfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEhlcmVJc0pvbm55IC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17c3R5bGVzLmNvZGVUaXRsZX0+VXNhZ2U6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9IHNyYz17Y2FyYm9ufSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLmRpdmlkZXJ9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxXaXRoU1NSIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlcn0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICAgICAgICAgIDxXaXRob3V0U1NSIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });