/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modules_structureButtonObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/structureButtonObject.js */ \"./src/js/modules/structureButtonObject.js\");\n/* harmony import */ var _js_modules_structureLinkObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modules/structureLinkObject.js */ \"./src/js/modules/structureLinkObject.js\");\n/* harmony import */ var _js_modules_structureSectionObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/modules/structureSectionObject.js */ \"./src/js/modules/structureSectionObject.js\");\n/* harmony import */ var _js_modules_tagElementWithAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/modules/tagElementWithAttributes.js */ \"./src/js/modules/tagElementWithAttributes.js\");\n/* harmony import */ var _js_modules_interactiveElements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/modules/interactiveElements.js */ \"./src/js/modules/interactiveElements.js\");\n\n\n\n\n\n\nlet buttons = document.querySelectorAll('.btn');\nlet navLinks = document.querySelectorAll('.nav-link');\nlet sections = Array.from(document.getElementsByTagName('section'));\nlet anchors = Array.from(document.getElementsByTagName('a'));\n\nif(sections.length) {\n    sections.forEach((section) => {\n        let sectionObj = (0,_js_modules_structureSectionObject_js__WEBPACK_IMPORTED_MODULE_2__.structureSectionObject)(section);\n        (0,_js_modules_tagElementWithAttributes_js__WEBPACK_IMPORTED_MODULE_3__.tagElementWithDataAttributes)(section, sectionObj);\n    });\n};\n\nif(buttons.length) {\n    buttons.forEach((button) => {\n        let btnObj = (0,_js_modules_structureButtonObject_js__WEBPACK_IMPORTED_MODULE_0__.structureButtonObject)(button);\n        (0,_js_modules_tagElementWithAttributes_js__WEBPACK_IMPORTED_MODULE_3__.tagElementWithDataAttributes)(button, btnObj);\n    });\n};\n\nif(navLinks.length) {\n    navLinks.forEach((navLink) => {\n        let linkObj = (0,_js_modules_structureLinkObject_js__WEBPACK_IMPORTED_MODULE_1__.structureLinkObject)(navLink);\n        (0,_js_modules_tagElementWithAttributes_js__WEBPACK_IMPORTED_MODULE_3__.tagElementWithDataAttributes)(navLink, linkObj);\n    });\n};\n\nif(anchors.length) {\n    anchors.forEach((anchor) => {\n        let anchorObj = (0,_js_modules_structureLinkObject_js__WEBPACK_IMPORTED_MODULE_1__.structureLinkObject)(anchor);\n        (0,_js_modules_tagElementWithAttributes_js__WEBPACK_IMPORTED_MODULE_3__.tagElementWithDataAttributes)(anchor, anchorObj);\n    });\n};\n//\n// if(interactiveElements.length) {\n//     interactiveElements.forEach((anchor) => {\n//         debugger;\n//         let anchorObj = structureLinkObject(anchor);\n//         tagElementWithDataAttributes(anchor, anchorObj);\n//     });\n// };\n\n//# sourceURL=webpack://checkmk/./src/index.js?");

/***/ }),

/***/ "./src/js/modules/getParent.js":
/*!*************************************!*\
  !*** ./src/js/modules/getParent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getParent\": () => (/* binding */ getParent)\n/* harmony export */ });\nconst getParent = ((el, tagName) => {\n    tagName = tagName.toLowerCase();\n\n    while (el && el.parentNode) {\n        el = el.parentNode;\n        if (el.tagName && el.tagName.toLowerCase() === tagName) {\n            return el.classList[0];\n        }\n    }\n    return null;\n});\n\n//# sourceURL=webpack://checkmk/./src/js/modules/getParent.js?");

/***/ }),

/***/ "./src/js/modules/interactiveElements.js":
/*!***********************************************!*\
  !*** ./src/js/modules/interactiveElements.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"interactiveElements\": () => (/* binding */ interactiveElements)\n/* harmony export */ });\nconst interactiveElements = ((a) => {\n    let arr = [];\n\n    let step = (document.querySelector('.step-navigation-item.active span') !== undefined) ? document.querySelector('.step-navigation-item.active span').innerText : undefined;\n    let faqs = document.querySelectorAll('.accordion__item');\n    let slider = document.querySelectorAll('.image-slider__navigationb*');\n\n    if(step !== undefined) {\n        arr.push(step);\n    }\n    if(faqs) {\n        arr.push(faqs);\n    }\n    if(slider) {\n        arr.push(slider);\n    }\n\n    return arr;\n});\n\n//# sourceURL=webpack://checkmk/./src/js/modules/interactiveElements.js?");

/***/ }),

/***/ "./src/js/modules/structureButtonObject.js":
/*!*************************************************!*\
  !*** ./src/js/modules/structureButtonObject.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"structureButtonObject\": () => (/* binding */ structureButtonObject)\n/* harmony export */ });\n/* harmony import */ var _getParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParent.js */ \"./src/js/modules/getParent.js\");\n\n\nconst structureButtonObject = ((el) => {\n    let button = {\n        event: {\n            name: 'cta-click',\n            label: window.location.pathname + '-' + el.id,\n            category:'CTA click',\n            value:''\n        },\n        cookie:{\n            name:'btn-clk',\n            value:window.location.pathname + '-' + el.id,\n            duration: 30\n        },\n        attributes:{\n            label: el.id,\n            event:'click',\n            section: (0,_getParent_js__WEBPACK_IMPORTED_MODULE_0__.getParent)(el, 'section'),\n            text: el.innerText\n        }\n    };\n\n    return button;\n});\n\n//# sourceURL=webpack://checkmk/./src/js/modules/structureButtonObject.js?");

/***/ }),

/***/ "./src/js/modules/structureLinkObject.js":
/*!***********************************************!*\
  !*** ./src/js/modules/structureLinkObject.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"structureLinkObject\": () => (/* binding */ structureLinkObject)\n/* harmony export */ });\n/* harmony import */ var _getParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParent.js */ \"./src/js/modules/getParent.js\");\n\n\nconst structureLinkObject = ((el) => {\n    let link = {\n        event: {\n            name: 'link-click',\n            label: window.location.pathname + '-' + el.innerText,\n            category:'link click',\n            value:''\n        },\n        cookie:{\n            name:'link-clk',\n            value:window.location.pathname + '-' + el.id,\n            duration: 30,\n            label: window.location.pathname + '-' + btoa(el.innerText),\n        },\n        attributes:{\n            label: el.id,\n            event:'click',\n            section: (0,_getParent_js__WEBPACK_IMPORTED_MODULE_0__.getParent)(el, 'section'),\n            text: el.innerText,\n            code: btoa(el.innerText),\n        }\n    };\n\n    return link;\n});\n\n//# sourceURL=webpack://checkmk/./src/js/modules/structureLinkObject.js?");

/***/ }),

/***/ "./src/js/modules/structureSectionObject.js":
/*!**************************************************!*\
  !*** ./src/js/modules/structureSectionObject.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"structureSectionObject\": () => (/* binding */ structureSectionObject)\n/* harmony export */ });\n/* harmony import */ var _getParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParent.js */ \"./src/js/modules/getParent.js\");\n\n\nconst structureSectionObject = ((el) => {\n    let section = {\n        attributes:{\n            section: el.classList[0],\n        }\n    };\n\n    return section;\n});\n\n//# sourceURL=webpack://checkmk/./src/js/modules/structureSectionObject.js?");

/***/ }),

/***/ "./src/js/modules/tagElementWithAttributes.js":
/*!****************************************************!*\
  !*** ./src/js/modules/tagElementWithAttributes.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tagElementWithDataAttributes\": () => (/* binding */ tagElementWithDataAttributes)\n/* harmony export */ });\nconst tagElementWithDataAttributes = ((el, obj) =>{\n    let properties = Object.getOwnPropertyNames(obj.attributes);\n\n    properties.forEach((property)=>{\n        el.setAttribute('data-' + property, obj.attributes[property])\n    })\n    return el;\n});\n\n\n//# sourceURL=webpack://checkmk/./src/js/modules/tagElementWithAttributes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;