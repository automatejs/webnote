(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["webnote"] = factory();
	else
		root["webnote"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"toolbar flex-box\">\r\n    <button class=\"fa fa-plus-circle btn\" @click=\"createNote()\"></button>\r\n    <button class=\"fa fa-save btn\" @click=\"saveNote()\"></button>\r\n    <button class=\"fa fa-remove btn\" @click=\"clearNote()\"></button>\r\n    <button class=\"fa fa-edit btn\" @click=\"editNote()\"></button>\r\n</div>\r\n\r\n<div class=\"flex-element relative-container\">\r\n    <note :model=\"note\" *m-repeat=\"note in state.notes\" @destroy=\"removeNote(note)\"></note>\r\n</div>");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.html */ "./src/app.html");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/service/index.js");
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var App = (_dec = automate.component({
  namespace: 'webnote',
  key: 'app',
  template: _app_html__WEBPACK_IMPORTED_MODULE_0__["default"],
  inject: {
    noteService: _service__WEBPACK_IMPORTED_MODULE_2__["NoteService"]
  }
}), _dec(_class = /*#__PURE__*/function (_automate$Component) {
  _inherits(App, _automate$Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));

    _this.noteService.load();

    _this.state.notes = _this.noteService.getList();
    return _this;
  }

  _createClass(App, [{
    key: "createNote",
    value: function createNote() {
      this.noteService.create(this.state.notes);
      this.noteService.save();
    }
  }, {
    key: "saveNote",
    value: function saveNote() {
      this.noteService.save();
    }
  }, {
    key: "clearNote",
    value: function clearNote() {
      this.noteService.removeAll(this.state.notes);
      this.noteService.save();
    }
  }, {
    key: "removeNote",
    value: function removeNote(note) {
      this.noteService.remove(this.state.notes, note);
      this.noteService.save();
    }
  }, {
    key: "editNote",
    value: function editNote() {
      this.noteService.toggleEdit();
    }
  }]);

  return App;
}(automate.Component)) || _class);

/***/ }),

/***/ "./src/component/index.js":
/*!********************************!*\
  !*** ./src/component/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _note_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note-component */ "./src/component/note-component.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/component/note-component.js":
/*!*****************************************!*\
  !*** ./src/component/note-component.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _note_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note.html */ "./src/component/note.html");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service */ "./src/service/index.js");
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var NoteComponent = (_dec = automate.component({
  namespace: 'webnote',
  key: 'note',
  template: _note_html__WEBPACK_IMPORTED_MODULE_0__["default"],
  inject: {
    noteService: _service__WEBPACK_IMPORTED_MODULE_1__["NoteService"]
  }
}), _dec(_class = /*#__PURE__*/function (_automate$Component) {
  _inherits(NoteComponent, _automate$Component);

  function NoteComponent() {
    var _this;

    _classCallCheck(this, NoteComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NoteComponent).call(this));
    _this.state.isEditing = false;
    _this.props.model = null;
    _this.events.destroy = new automate.Message();

    _this.init();

    return _this;
  }

  _createClass(NoteComponent, [{
    key: "init",
    value: function init() {
      var self = this;
      this.state.isEditing = this.noteService.isEditing;
      this.noteService.events.editStateChange.on(function () {
        self.state.isEditing = self.noteService.isEditing;
      });
      this.$watchCollection('props.model', function () {
        self.noteService.save();
      });
      this.$watchCollection('props.model.position', function () {
        self.noteService.save();
      });
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown() {
      if (!this.noteService.isMaxZIndex(this.props.model.zIndex)) {
        this.props.model.zIndex = this.noteService.nextZIndex();
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.events.destroy.fire();
    }
  }]);

  return NoteComponent;
}(automate.Component)) || _class);

/***/ }),

/***/ "./src/component/note.html":
/*!*********************************!*\
  !*** ./src/component/note.html ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"note flex-box\" :style.left=\"props.model.position.x\" :style.top=\"props.model.position.y\"\r\n    :style.width=\"props.model.size.width\" :style.height=\"props.model.size.height\" :style.zIndex=\"props.model.zIndex\"\r\n    @mousedown=\"onMouseDown()\">\r\n    <div class=\"flex-box flex-element flex-column relative-container\">\r\n        <div class=\"note-tlb flex-box\" *note-pan>\r\n            <button class=\"fa fa-close btn\" @click=\"$destroy()\" *m-show=\"state.isEditing\"></button>\r\n        </div>\r\n        <textarea class=\"note-content flex-element\" *m-model=\"props.model.content\"></textarea>\r\n        <div class=\"note-resize\" *note-resize></div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/directive/index.js":
/*!********************************!*\
  !*** ./src/directive/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _note_pan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note-pan */ "./src/directive/note-pan.js");
/* harmony import */ var _note_pan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_note_pan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _note_pan__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _note_pan__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _note_resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-resize */ "./src/directive/note-resize.js");
/* harmony import */ var _note_resize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_note_resize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _note_resize__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _note_resize__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/directive/note-pan.js":
/*!***********************************!*\
  !*** ./src/directive/note-pan.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NotePan = (_dec = automate.directive({
  namespace: 'webnote',
  key: 'note-pan'
}), _dec(_class = /*#__PURE__*/function (_automate$Directive) {
  _inherits(NotePan, _automate$Directive);

  function NotePan() {
    _classCallCheck(this, NotePan);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotePan).call(this));
  }

  _createClass(NotePan, [{
    key: "afterLink",
    value: function afterLink() {
      var x, y;
      var scope = this.$scope;
      var hammerTime = new Hammer(this.$element);
      hammerTime.on('panstart', function () {
        var pos = scope.props.model.position;
        x = pos.x;
        y = pos.y;
      });
      hammerTime.on('panmove', function (ev) {
        var pos = scope.props.model.position;
        pos.x = x + ev.deltaX;
        pos.y = y + ev.deltaY;
      });
    }
  }]);

  return NotePan;
}(automate.Directive)) || _class);

/***/ }),

/***/ "./src/directive/note-resize.js":
/*!**************************************!*\
  !*** ./src/directive/note-resize.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NoteResize = (_dec = automate.directive({
  namespace: 'webnote',
  key: 'note-resize'
}), _dec(_class = /*#__PURE__*/function (_automate$Directive) {
  _inherits(NoteResize, _automate$Directive);

  function NoteResize() {
    _classCallCheck(this, NoteResize);

    return _possibleConstructorReturn(this, _getPrototypeOf(NoteResize).call(this));
  }

  _createClass(NoteResize, [{
    key: "afterLink",
    value: function afterLink() {
      var x, y;
      var scope = this.$scope;
      var hammerTime = new Hammer(this.$element);
      hammerTime.on('panstart', function () {
        var size = scope.props.model.size;
        x = size.width;
        y = size.height;
      });
      hammerTime.on('panmove', function (ev) {
        var size = scope.props.model.size;
        size.width = x + ev.deltaX;
        size.height = y + ev.deltaY;
      });
    }
  }]);

  return NoteResize;
}(automate.Directive)) || _class);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* empty/unused harmony star reexport *//* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/component/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directive */ "./src/directive/index.js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _directive__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _directive__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/service/index.js":
/*!******************************!*\
  !*** ./src/service/index.js ***!
  \******************************/
/*! exports provided: NoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _note_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note-service */ "./src/service/note-service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoteService", function() { return _note_service__WEBPACK_IMPORTED_MODULE_0__["NoteService"]; });



/***/ }),

/***/ "./src/service/note-service.js":
/*!*************************************!*\
  !*** ./src/service/note-service.js ***!
  \*************************************/
/*! exports provided: NoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteService", function() { return NoteService; });
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NoteService = (_dec = automate.service({
  namespace: 'webnote',
  key: 'noteService'
}), _dec(_class = /*#__PURE__*/function (_automate$Service) {
  _inherits(NoteService, _automate$Service);

  function NoteService() {
    var _this;

    _classCallCheck(this, NoteService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NoteService).call(this));
    _this.zIndex = 0;
    _this.notes = [];
    _this.isEditing = false;
    _this.events = {
      editStateChange: new automate.Message()
    };
    return _this;
  }

  _createClass(NoteService, [{
    key: "nextZIndex",
    value: function nextZIndex() {
      return ++this.zIndex;
    }
  }, {
    key: "isMaxZIndex",
    value: function isMaxZIndex(zIndex) {
      return zIndex >= this.zIndex;
    }
  }, {
    key: "create",
    value: function create(notes) {
      var newNote = {
        content: 'new note',
        position: {
          x: 20,
          y: 20
        },
        size: {
          width: 180,
          height: 180
        },
        zIndex: this.nextZIndex()
      };
      notes.push(newNote);
      return newNote;
    }
  }, {
    key: "getList",
    value: function getList() {
      return this.notes;
    }
  }, {
    key: "load",
    value: function load() {
      var self = this,
          json = localStorage.getItem('notes');

      if (json) {
        this.notes = JSON.parse(json);
        this.notes.forEach(function (note) {
          if (note.zIndex > self.zIndex) {
            self.zIndex = note.zIndex;
          }
        });
      }
    }
  }, {
    key: "save",
    value: function save() {
      localStorage.setItem('notes', JSON.stringify(this.getList()));
    }
  }, {
    key: "removeAll",
    value: function removeAll(notes) {
      notes.length = 0;
    }
  }, {
    key: "remove",
    value: function remove(notes, note) {
      var index = notes.indexOf(note);

      if (index !== -1) {
        notes.splice(index, 1);
      }
    }
  }, {
    key: "toggleEdit",
    value: function toggleEdit() {
      this.isEditing = !this.isEditing;
      this.events.editStateChange.fire();
    }
  }]);

  return NoteService;
}(automate.Service)) || _class);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJub3RlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly93ZWJub3RlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYm5vdGUvLi9zcmMvYXBwLmNzcz81NWUzIiwid2VicGFjazovL3dlYm5vdGUvLi9zcmMvYXBwLmh0bWwiLCJ3ZWJwYWNrOi8vd2Vibm90ZS8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2Vibm90ZS8uL3NyYy9jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2Vibm90ZS8uL3NyYy9jb21wb25lbnQvbm90ZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vd2Vibm90ZS8uL3NyYy9jb21wb25lbnQvbm90ZS5odG1sIiwid2VicGFjazovL3dlYm5vdGUvLi9zcmMvZGlyZWN0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3dlYm5vdGUvLi9zcmMvZGlyZWN0aXZlL25vdGUtcGFuLmpzIiwid2VicGFjazovL3dlYm5vdGUvLi9zcmMvZGlyZWN0aXZlL25vdGUtcmVzaXplLmpzIiwid2VicGFjazovL3dlYm5vdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2Vibm90ZS8uL3NyYy9zZXJ2aWNlL2luZGV4LmpzIiwid2VicGFjazovL3dlYm5vdGUvLi9zcmMvc2VydmljZS9ub3RlLXNlcnZpY2UuanMiXSwibmFtZXMiOlsiQXBwIiwiYXV0b21hdGUiLCJjb21wb25lbnQiLCJuYW1lc3BhY2UiLCJrZXkiLCJ0ZW1wbGF0ZSIsImluamVjdCIsIm5vdGVTZXJ2aWNlIiwiTm90ZVNlcnZpY2UiLCJsb2FkIiwic3RhdGUiLCJub3RlcyIsImdldExpc3QiLCJjcmVhdGUiLCJzYXZlIiwicmVtb3ZlQWxsIiwibm90ZSIsInJlbW92ZSIsInRvZ2dsZUVkaXQiLCJDb21wb25lbnQiLCJOb3RlQ29tcG9uZW50IiwiaXNFZGl0aW5nIiwicHJvcHMiLCJtb2RlbCIsImV2ZW50cyIsImRlc3Ryb3kiLCJNZXNzYWdlIiwiaW5pdCIsInNlbGYiLCJlZGl0U3RhdGVDaGFuZ2UiLCJvbiIsIiR3YXRjaENvbGxlY3Rpb24iLCJpc01heFpJbmRleCIsInpJbmRleCIsIm5leHRaSW5kZXgiLCJmaXJlIiwiTm90ZVBhbiIsImRpcmVjdGl2ZSIsIngiLCJ5Iiwic2NvcGUiLCIkc2NvcGUiLCJoYW1tZXJUaW1lIiwiSGFtbWVyIiwiJGVsZW1lbnQiLCJwb3MiLCJwb3NpdGlvbiIsImV2IiwiZGVsdGFYIiwiZGVsdGFZIiwiRGlyZWN0aXZlIiwiTm90ZVJlc2l6ZSIsInNpemUiLCJ3aWR0aCIsImhlaWdodCIsInNlcnZpY2UiLCJuZXdOb3RlIiwiY29udGVudCIsInB1c2giLCJqc29uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImZvckVhY2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibGVuZ3RoIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiU2VydmljZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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OztBQUFBO0FBQUEsRUFBaUNsQyxRQUFRLENBQUNzRSxPQUExQyxjIiwiZmlsZSI6IndlYm5vdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3ZWJub3RlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndlYm5vdGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU5MDkxNjQxMTgyMlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9naXRlZS9zaW5lL25vZGVfbW9kdWxlcy9fbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5AMC44LjJAbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJ0b29sYmFyIGZsZXgtYm94XFxcIj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiZmEgZmEtcGx1cy1jaXJjbGUgYnRuXFxcIiBAY2xpY2s9XFxcImNyZWF0ZU5vdGUoKVxcXCI+PC9idXR0b24+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImZhIGZhLXNhdmUgYnRuXFxcIiBAY2xpY2s9XFxcInNhdmVOb3RlKClcXFwiPjwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJmYSBmYS1yZW1vdmUgYnRuXFxcIiBAY2xpY2s9XFxcImNsZWFyTm90ZSgpXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiZmEgZmEtZWRpdCBidG5cXFwiIEBjbGljaz1cXFwiZWRpdE5vdGUoKVxcXCI+PC9idXR0b24+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiZmxleC1lbGVtZW50IHJlbGF0aXZlLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxub3RlIDptb2RlbD1cXFwibm90ZVxcXCIgKm0tcmVwZWF0PVxcXCJub3RlIGluIHN0YXRlLm5vdGVzXFxcIiBAZGVzdHJveT1cXFwicmVtb3ZlTm90ZShub3RlKVxcXCI+PC9ub3RlPlxcclxcbjwvZGl2PlwiIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYXBwLmh0bWwnO1xyXG5pbXBvcnQgJy4vYXBwLmNzcyc7XHJcbmltcG9ydCB7IE5vdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcclxuXHJcbkBhdXRvbWF0ZS5jb21wb25lbnQoe1xyXG4gICAgbmFtZXNwYWNlOiAnd2Vibm90ZScsXHJcbiAgICBrZXk6ICdhcHAnLFxyXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxyXG4gICAgaW5qZWN0OiB7XHJcbiAgICAgICAgbm90ZVNlcnZpY2U6IE5vdGVTZXJ2aWNlXHJcbiAgICB9XHJcbn0pXHJcbmNsYXNzIEFwcCBleHRlbmRzIGF1dG9tYXRlLkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubm90ZVNlcnZpY2UubG9hZCgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubm90ZXMgPSB0aGlzLm5vdGVTZXJ2aWNlLmdldExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVOb3RlKCkge1xyXG4gICAgICAgIHRoaXMubm90ZVNlcnZpY2UuY3JlYXRlKHRoaXMuc3RhdGUubm90ZXMpO1xyXG4gICAgICAgIHRoaXMubm90ZVNlcnZpY2Uuc2F2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVOb3RlKCkge1xyXG4gICAgICAgIHRoaXMubm90ZVNlcnZpY2Uuc2F2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyTm90ZSgpIHtcclxuICAgICAgICB0aGlzLm5vdGVTZXJ2aWNlLnJlbW92ZUFsbCh0aGlzLnN0YXRlLm5vdGVzKTtcclxuICAgICAgICB0aGlzLm5vdGVTZXJ2aWNlLnNhdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVOb3RlKG5vdGUpIHtcclxuICAgICAgICB0aGlzLm5vdGVTZXJ2aWNlLnJlbW92ZSh0aGlzLnN0YXRlLm5vdGVzLCBub3RlKTtcclxuICAgICAgICB0aGlzLm5vdGVTZXJ2aWNlLnNhdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0Tm90ZSgpIHtcclxuICAgICAgICB0aGlzLm5vdGVTZXJ2aWNlLnRvZ2dsZUVkaXQoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vbm90ZS1jb21wb25lbnQnOyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL25vdGUuaHRtbCc7XHJcbmltcG9ydCB7IE5vdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5AYXV0b21hdGUuY29tcG9uZW50KHtcclxuICAgIG5hbWVzcGFjZTogJ3dlYm5vdGUnLFxyXG4gICAga2V5OiAnbm90ZScsXHJcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXHJcbiAgICBpbmplY3Q6IHtcclxuICAgICAgICBub3RlU2VydmljZTogTm90ZVNlcnZpY2VcclxuICAgIH0sXHJcbn0pXHJcbmNsYXNzIE5vdGVDb21wb25lbnQgZXh0ZW5kcyBhdXRvbWF0ZS5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmlzRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJvcHMubW9kZWwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLmRlc3Ryb3kgPSBuZXcgYXV0b21hdGUuTWVzc2FnZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmlzRWRpdGluZyA9IHRoaXMubm90ZVNlcnZpY2UuaXNFZGl0aW5nO1xyXG5cclxuICAgICAgICB0aGlzLm5vdGVTZXJ2aWNlLmV2ZW50cy5lZGl0U3RhdGVDaGFuZ2Uub24oKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnN0YXRlLmlzRWRpdGluZyA9IHNlbGYubm90ZVNlcnZpY2UuaXNFZGl0aW5nO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiR3YXRjaENvbGxlY3Rpb24oJ3Byb3BzLm1vZGVsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLm5vdGVTZXJ2aWNlLnNhdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4kd2F0Y2hDb2xsZWN0aW9uKCdwcm9wcy5tb2RlbC5wb3NpdGlvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5ub3RlU2VydmljZS5zYXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZURvd24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm5vdGVTZXJ2aWNlLmlzTWF4WkluZGV4KHRoaXMucHJvcHMubW9kZWwuekluZGV4KSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1vZGVsLnpJbmRleCA9IHRoaXMubm90ZVNlcnZpY2UubmV4dFpJbmRleCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLmRlc3Ryb3kuZmlyZSgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJub3RlIGZsZXgtYm94XFxcIiA6c3R5bGUubGVmdD1cXFwicHJvcHMubW9kZWwucG9zaXRpb24ueFxcXCIgOnN0eWxlLnRvcD1cXFwicHJvcHMubW9kZWwucG9zaXRpb24ueVxcXCJcXHJcXG4gICAgOnN0eWxlLndpZHRoPVxcXCJwcm9wcy5tb2RlbC5zaXplLndpZHRoXFxcIiA6c3R5bGUuaGVpZ2h0PVxcXCJwcm9wcy5tb2RlbC5zaXplLmhlaWdodFxcXCIgOnN0eWxlLnpJbmRleD1cXFwicHJvcHMubW9kZWwuekluZGV4XFxcIlxcclxcbiAgICBAbW91c2Vkb3duPVxcXCJvbk1vdXNlRG93bigpXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZmxleC1ib3ggZmxleC1lbGVtZW50IGZsZXgtY29sdW1uIHJlbGF0aXZlLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJub3RlLXRsYiBmbGV4LWJveFxcXCIgKm5vdGUtcGFuPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImZhIGZhLWNsb3NlIGJ0blxcXCIgQGNsaWNrPVxcXCIkZGVzdHJveSgpXFxcIiAqbS1zaG93PVxcXCJzdGF0ZS5pc0VkaXRpbmdcXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcIm5vdGUtY29udGVudCBmbGV4LWVsZW1lbnRcXFwiICptLW1vZGVsPVxcXCJwcm9wcy5tb2RlbC5jb250ZW50XFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibm90ZS1yZXNpemVcXFwiICpub3RlLXJlc2l6ZT48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCIiLCJleHBvcnQgKiBmcm9tICcuL25vdGUtcGFuJztcclxuZXhwb3J0ICogZnJvbSAnLi9ub3RlLXJlc2l6ZSc7IiwiXHJcbkBhdXRvbWF0ZS5kaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnd2Vibm90ZScsXHJcbiAgICBrZXk6ICdub3RlLXBhbidcclxufSlcclxuY2xhc3MgTm90ZVBhbiBleHRlbmRzIGF1dG9tYXRlLkRpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyTGluaygpIHtcclxuICAgICAgICB2YXIgeCwgeTtcclxuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzLiRzY29wZTtcclxuICAgICAgICB2YXIgaGFtbWVyVGltZSA9IG5ldyBIYW1tZXIodGhpcy4kZWxlbWVudCk7XHJcblxyXG4gICAgICAgIGhhbW1lclRpbWUub24oJ3BhbnN0YXJ0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gc2NvcGUucHJvcHMubW9kZWwucG9zaXRpb247XHJcbiAgICAgICAgICAgIHggPSBwb3MueDtcclxuICAgICAgICAgICAgeSA9IHBvcy55O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW1tZXJUaW1lLm9uKCdwYW5tb3ZlJywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBzY29wZS5wcm9wcy5tb2RlbC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgcG9zLnggPSB4ICsgZXYuZGVsdGFYO1xyXG4gICAgICAgICAgICBwb3MueSA9IHkgKyBldi5kZWx0YVk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJcclxuQGF1dG9tYXRlLmRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICd3ZWJub3RlJyxcclxuICAgIGtleTogJ25vdGUtcmVzaXplJ1xyXG59KVxyXG5jbGFzcyBOb3RlUmVzaXplIGV4dGVuZHMgYXV0b21hdGUuRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJMaW5rKCkge1xyXG4gICAgICAgIHZhciB4LCB5O1xyXG4gICAgICAgIHZhciBzY29wZSA9IHRoaXMuJHNjb3BlO1xyXG4gICAgICAgIHZhciBoYW1tZXJUaW1lID0gbmV3IEhhbW1lcih0aGlzLiRlbGVtZW50KTtcclxuXHJcbiAgICAgICAgaGFtbWVyVGltZS5vbigncGFuc3RhcnQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHNpemUgPSBzY29wZS5wcm9wcy5tb2RlbC5zaXplO1xyXG4gICAgICAgICAgICB4ID0gc2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgeSA9IHNpemUuaGVpZ2h0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW1tZXJUaW1lLm9uKCdwYW5tb3ZlJywgZnVuY3Rpb24oZXYpIHtcclxuICAgICAgICAgICAgdmFyIHNpemUgPSBzY29wZS5wcm9wcy5tb2RlbC5zaXplO1xyXG4gICAgICAgICAgICBzaXplLndpZHRoID0geCArIGV2LmRlbHRhWDtcclxuICAgICAgICAgICAgc2l6ZS5oZWlnaHQgPSB5ICsgZXYuZGVsdGFZO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9hcHAnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJzsiLCJleHBvcnQgKiBmcm9tICcuL25vdGUtc2VydmljZSc7IiwiXHJcbkBhdXRvbWF0ZS5zZXJ2aWNlKHtcclxuICAgIG5hbWVzcGFjZTogJ3dlYm5vdGUnLFxyXG4gICAga2V5OiAnbm90ZVNlcnZpY2UnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RlU2VydmljZSBleHRlbmRzIGF1dG9tYXRlLlNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnpJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5ub3RlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7XHJcbiAgICAgICAgICAgIGVkaXRTdGF0ZUNoYW5nZTogbmV3IGF1dG9tYXRlLk1lc3NhZ2UoKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFpJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gKyt0aGlzLnpJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBpc01heFpJbmRleCh6SW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gekluZGV4ID49IHRoaXMuekluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShub3Rlcykge1xyXG4gICAgICAgIHZhciBuZXdOb3RlID0ge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnbmV3IG5vdGUnLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeDogMjAsXHJcbiAgICAgICAgICAgICAgICB5OiAyMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTgwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgekluZGV4OiB0aGlzLm5leHRaSW5kZXgoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG5vdGVzLnB1c2gobmV3Tm90ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdOb3RlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm90ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZCgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgICAgIGpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZXMnKTtcclxuICAgICAgICBpZiAoanNvbikge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVzID0gSlNPTi5wYXJzZShqc29uKTtcclxuICAgICAgICAgICAgdGhpcy5ub3Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub3RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm90ZS56SW5kZXggPiBzZWxmLnpJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuekluZGV4ID0gbm90ZS56SW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0TGlzdCgpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWxsKG5vdGVzKSB7XHJcbiAgICAgICAgbm90ZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUobm90ZXMsIG5vdGUpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBub3Rlcy5pbmRleE9mKG5vdGUpO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIG5vdGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUVkaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSAhdGhpcy5pc0VkaXRpbmc7XHJcbiAgICAgICAgdGhpcy5ldmVudHMuZWRpdFN0YXRlQ2hhbmdlLmZpcmUoKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=