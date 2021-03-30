/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const burger = document.getElementById('navToggle');\r\nconst navList = document.getElementById('nav__list');\r\nconst body = document.body;\r\n\r\nconst subnav = document.querySelectorAll('.subnav');\r\nconst nestedSubnav = document.querySelectorAll('.nested__subnav');\r\n\r\nconst subnavSwitch = document.querySelectorAll('.subnav__switch');\r\nconst navSwitch = document.querySelectorAll('.nav__switch');\r\n\r\n\r\nburger.addEventListener('click', event =>{\r\n\r\n\tif( navList.classList.contains('show-navList')){\r\n\t\tcloseSidebar();\r\n\t\t\tcloseNav(subnav, 'show-subnav');\r\n\tcloseNav(nestedSubnav, 'show-nesed__subnav');\r\n\r\n\tcloseNav(navSwitch, 'btm-nav');\r\n\tcloseNav(subnavSwitch, 'btm-nav');\r\n\t}\telse{\r\n\t\tshowSidebar();\r\n\t}\t\r\n});\r\n\r\nfunction showSidebar(){\r\n\t\r\n\tlet mask = document.createElement('div');\r\n\tmask.classList.add('page__mask');\r\n\tmask.addEventListener('click', closeSidebar);\r\n\tbody.appendChild(mask);\r\n\tnavList.classList.add('show-navList');\r\n\tbody.classList.add('no-scroll');\r\n}\r\n\r\nfunction closeSidebar(){\r\n\tnavList.classList.remove('show-navList');\r\n\tdocument.querySelector('.page__mask').remove();\r\n\tbody.classList.remove('no-scroll');\r\n\r\n\r\n}\r\n\r\n\r\n\r\nfunction closeNav(itemListS, delClass){\r\n\titemListS.forEach(item=>{\r\n\t\tif (item.classList.contains(delClass)) {\r\n\t\t\titem.classList.remove(delClass)\r\n\t\t}\r\n    \t\t\r\n\t})\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/nav.js":
/*!******************************!*\
  !*** ./src/assets/js/nav.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const navSwitch = document.querySelectorAll('.nav__switch');\r\nconst subnav = document.querySelectorAll('.subnav');\r\nconst body = document.body; \r\n\r\n\r\n\r\nnavSwitch.forEach(item=>{\r\n\titem.addEventListener('click', event=>{\r\n\t\tlet $this = event.currentTarget;\t\r\n\t\tlet childs = $this.parentNode.children;\r\n\t\tlet div;\r\n\t\tfor(const el of childs) { \r\n    \t\tif (el.classList.contains('subnav')) {\r\n    \t\t\tdiv = el \r\n    \t\t};\r\n    \t};\r\n\tcreatClass(div, $this)\r\n\t})\r\n})\r\n\r\nfunction creatClass(div,$this){\r\n\t\r\n\tif(div.classList.contains('show-subnav')) {\t\t\t\t\r\n\t\t\tclearClass();\r\n\t}\telse{\r\n\t\t\tclearClass()\r\n\t\t\t$this.classList.add('btm-nav')\r\n\t\t\tdiv.classList.add('show-subnav');\r\n\t}\r\n}\r\n\r\nfunction clearClass(){\r\n\tsubnav.forEach(item=>{\r\n\t\titem.classList.remove('show-subnav');\r\n\t})\r\n\tnavSwitch.forEach(item=>{\r\n\t\titem.classList.remove('btm-nav');\r\n\t})\r\n}\r\n\t\r\n\t\n\n//# sourceURL=webpack:///./src/assets/js/nav.js?");

/***/ }),

/***/ "./src/assets/js/scrollIntoView.js":
/*!*****************************************!*\
  !*** ./src/assets/js/scrollIntoView.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const link = document.querySelectorAll('a');\r\n\r\nlink.forEach(item=>{\r\n\titem.addEventListener('click', event =>{\r\n\t\t\r\n\tif( item.classList.contains('active-link')){\r\n\t\tclearClass()\r\n\t}\telse{\r\n\t\tclearClass()\r\n\t\titem.classList.add('active-link');\r\n\t}\t\r\n\tscrollitem()\r\n});\r\n})\r\n\r\nfunction clearClass(){\r\n\tlink.forEach(item=>{\r\n\t\titem.classList.remove('active-link');\r\n\t})\r\n}\r\n\r\nfunction scrollitem(){\r\n\tlink.forEach(item=>{\r\n\t\tif(item.classList.contains('active-link')){\r\n\t\t\titem.scrollIntoView({block: \"start\"});\r\n\t\t}\r\n\t})\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/scrollIntoView.js?");

/***/ }),

/***/ "./src/assets/js/subnav.js":
/*!*********************************!*\
  !*** ./src/assets/js/subnav.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const subnavSwitch = document.querySelectorAll('.subnav__switch');\r\nconst nestedSubnav = document.querySelectorAll('.nested__subnav');\r\n\r\n\r\n\r\nsubnavSwitch.forEach(item=>{\r\n\titem.addEventListener('click', event=>{\r\n\t\tlet $this = event.currentTarget;\t\r\n\t\tlet childs = $this.parentNode.children;\r\n\t\tlet div;\r\n\t\tfor(const el of childs) { \r\n    \t\tif (el.classList.contains('nested__subnav')) {\r\n    \t\t\tdiv = el \r\n    \t\t};\r\n    \t};\r\n\r\n\tcreatClass(div, $this)\r\n\t})\r\n})\r\n\r\nfunction creatClass(div,$this){\r\n\r\n\tif(div.classList.contains('show-nesed__subnav')) {\t\t\t\t\r\n\t\t\tclearClass();\r\n\t}\telse{\r\n\t\t\tclearClass()\r\n\t\t\t$this.classList.add('btm-nav')\r\n\t\t\tdiv.classList.add('show-nesed__subnav');\r\n\t}\r\n}\r\n\r\nfunction clearClass(){\r\n\tnestedSubnav.forEach(item=>{\r\n\t\titem.classList.remove('show-nesed__subnav');\r\n\t})\r\n\tsubnavSwitch.forEach(item=>{\r\n\t\titem.classList.remove('btm-nav');\r\n\t})\r\n}\r\n\t\t\n\n//# sourceURL=webpack:///./src/assets/js/subnav.js?");

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************!*\
  !*** multi ./src/assets/js/mobileNav.js ./src/assets/js/nav.js ./src/assets/js/scrollIntoView.js ./src/assets/js/subnav.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! F:\\www\\OZiTAG-test\\src\\assets\\js\\mobileNav.js */\"./src/assets/js/mobileNav.js\");\n__webpack_require__(/*! F:\\www\\OZiTAG-test\\src\\assets\\js\\nav.js */\"./src/assets/js/nav.js\");\n__webpack_require__(/*! F:\\www\\OZiTAG-test\\src\\assets\\js\\scrollIntoView.js */\"./src/assets/js/scrollIntoView.js\");\nmodule.exports = __webpack_require__(/*! F:\\www\\OZiTAG-test\\src\\assets\\js\\subnav.js */\"./src/assets/js/subnav.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/mobileNav.js_./src/assets/js/nav.js_./src/assets/js/scrollIntoView.js_./src/assets/js/subnav.js?");

/***/ })

/******/ });