(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["shapen"] = factory();
	else
		root["shapen"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Geometry; });
var Geometry = /** @class */ (function () {
    function Geometry() {
    }
    Geometry.prototype.getConstitution = function () {
        return this.constitution;
    };
    Geometry.prototype.getMaterial = function () {
        return this.material;
    };
    return Geometry;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry_index__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(constitution, material, radius) {
        var _this = _super.call(this) || this;
        _this.constitution = constitution;
        _this.material = material;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    return Circle;
}(__WEBPACK_IMPORTED_MODULE_0__geometry_index__["a" /* Geometry */]));
/* harmony default export */ __webpack_exports__["a"] = (Circle);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shapes_circle__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shapes_polygon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materials_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_index__ = __webpack_require__(5);




/* harmony default export */ __webpack_exports__["default"] = ({
    Circle: __WEBPACK_IMPORTED_MODULE_0__shapes_circle__["a" /* default */],
    Polygon: __WEBPACK_IMPORTED_MODULE_1__shapes_polygon__["a" /* default */],
    pointFactory: __WEBPACK_IMPORTED_MODULE_3__helpers_index__["a" /* pointFactory */],
    baseMaterial: __WEBPACK_IMPORTED_MODULE_2__materials_index__["a" /* default */]
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry_index__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(constitution, material) {
        var _this = _super.call(this) || this;
        _this.constitution = constitution;
        _this.material = material;
        return _this;
    }
    return Polygon;
}(__WEBPACK_IMPORTED_MODULE_0__geometry_index__["a" /* Geometry */]));
/* harmony default export */ __webpack_exports__["a"] = (Polygon);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("base material");


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pointFactory; });
var pointFactory = function (x, y, z) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (z === void 0) { z = 0; }
    return { x: x, y: y, z: z };
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0YWIzYmVlYTdmZjdkMGIwYWMwYSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXBlcy9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFwZXMvcG9seWdvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0ZXJpYWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDM0RBO0FBQUE7SUFBQTtJQVdBLENBQUM7SUFQUSxrQ0FBZSxHQUF0QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFTSw4QkFBVyxHQUFsQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiNEM7QUFTN0M7SUFBb0MsMEJBQVE7SUFDMUMsZ0JBQW1CLFlBQW1CLEVBQVMsUUFBZ0IsRUFBUyxNQUFjO1FBQXRGLFlBQ0UsaUJBQU8sU0FDUjtRQUZrQixrQkFBWSxHQUFaLFlBQVksQ0FBTztRQUFTLGNBQVEsR0FBUixRQUFRLENBQVE7UUFBUyxZQUFNLEdBQU4sTUFBTSxDQUFROztJQUV0RixDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxDQVJtQyxpRUFBUSxHQVEzQzs7Ozs7Ozs7Ozs7Ozs7QUNqQm9DO0FBQ0U7QUFDTTtBQUNFOytEQUVoQztJQUNiLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFlBQVk7Q0FDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y0QztBQUc3QztJQUFxQywyQkFBUTtJQUMzQyxpQkFBbUIsWUFBc0IsRUFBUyxRQUFnQjtRQUFsRSxZQUNFLGlCQUFPLFNBQ1I7UUFGa0Isa0JBQVksR0FBWixZQUFZLENBQVU7UUFBUyxjQUFRLEdBQVIsUUFBUSxDQUFROztJQUVsRSxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQ0FKb0MsaUVBQVEsR0FJNUM7Ozs7Ozs7OztBQ1BELHlEQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7O0FDRXhCLElBQU0sWUFBWSxHQUFHLFVBQUMsQ0FBYSxFQUFFLENBQWEsRUFBRSxDQUFhO0lBQTNDLHlCQUFhO0lBQUUseUJBQWE7SUFBRSx5QkFBYTtJQUN0RSxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUUsQ0FBQyxLQUFFLENBQUMsS0FBRTtBQUNwQixDQUFDLENBQUMiLCJmaWxlIjoic2hhcGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic2hhcGVuXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNoYXBlblwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNGFiM2JlZWE3ZmY3ZDBiMGFjMGEiLCJpbXBvcnQgeyBDb25zdGl0dXRpb24sIE1hdGVyaWFsLCBHZW9tZXRyeUludGVyZmFjZSB9IGZyb20gJy4uL3R5cGVzL2luZGV4JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdlb21ldHJ5IGltcGxlbWVudHMgR2VvbWV0cnlJbnRlcmZhY2Uge1xuICBwdWJsaWMgY29uc3RpdHV0aW9uOiBDb25zdGl0dXRpb247XG4gIHB1YmxpYyBtYXRlcmlhbDogTWF0ZXJpYWw7XG5cbiAgcHVibGljIGdldENvbnN0aXR1dGlvbigpOiBDb25zdGl0dXRpb24ge1xuICAgIHJldHVybiB0aGlzLmNvbnN0aXR1dGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXRlcmlhbCgpOiBNYXRlcmlhbCB7XG4gICAgcmV0dXJuIHRoaXMubWF0ZXJpYWw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZW9tZXRyeS9pbmRleC50cyIsImltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi4vZ2VvbWV0cnkvaW5kZXgnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi90eXBlcy9pbmRleCc7XG5cbmludGVyZmFjZSBDaXJjbGVJbnRlcmZhY2Uge1xuICBjb25zdGl0dXRpb246IFBvaW50LFxuICBtYXRlcmlhbDogc3RyaW5nLCBcbiAgcmFkaXVzOiBudW1iZXIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSBleHRlbmRzIEdlb21ldHJ5IGltcGxlbWVudHMgQ2lyY2xlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnN0aXR1dGlvbjogUG9pbnQsIHB1YmxpYyBtYXRlcmlhbDogc3RyaW5nLCBwdWJsaWMgcmFkaXVzOiBudW1iZXIpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0UmFkaXVzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucmFkaXVzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcGVzL2NpcmNsZS50cyIsImltcG9ydCBDaXJjbGUgZnJvbSAnLi9zaGFwZXMvY2lyY2xlJztcbmltcG9ydCBQb2x5Z29uIGZyb20gJy4vc2hhcGVzL3BvbHlnb24nO1xuaW1wb3J0IGJhc2VNYXRlcmlhbCBmcm9tICcuL21hdGVyaWFscy9pbmRleCc7XG5pbXBvcnQgeyBwb2ludEZhY3RvcnkgfSBmcm9tICcuL2hlbHBlcnMvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIENpcmNsZSxcbiAgUG9seWdvbixcbiAgcG9pbnRGYWN0b3J5LFxuICBiYXNlTWF0ZXJpYWxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi4vZ2VvbWV0cnkvaW5kZXgnO1xuaW1wb3J0IHsgVmVydGljZXMgfSBmcm9tICcuLi90eXBlcy9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBHZW9tZXRyeSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25zdGl0dXRpb246IFZlcnRpY2VzLCBwdWJsaWMgbWF0ZXJpYWw6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFwZXMvcG9seWdvbi50cyIsImV4cG9ydCBkZWZhdWx0IFwiYmFzZSBtYXRlcmlhbFwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGVyaWFscy9pbmRleC50cyIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vdHlwZXMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgcG9pbnRGYWN0b3J5ID0gKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHo6IG51bWJlciA9IDApOiBQb2ludCA9PiB7XG4gIHJldHVybiB7IHgsIHksIHogfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL2luZGV4LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==