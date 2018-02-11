(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("three"));
	else if(typeof define === 'function' && define.amd)
		define(["three"], factory);
	else if(typeof exports === 'object')
		exports["three_js_adapter"] = factory(require("three"));
	else
		root["three_js_adapter"] = factory(root["three"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shapes_circle__ = __webpack_require__(1);


var toThreeCircle = /** @class */ (function () {
    function toThreeCircle(circle) {
        this.circle = circle;
    }
    toThreeCircle.prototype.call = function () {
        var radius = this.circle.getRadius();
        var color = parseInt("0x" + this.circle.getMaterial());
        var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["CircleGeometry"](radius, radius * 21);
        var material = new __WEBPACK_IMPORTED_MODULE_0_three__["MeshBasicMaterial"]({ color: color });
        return new __WEBPACK_IMPORTED_MODULE_0_three__["Mesh"](geometry, material);
    };
    return toThreeCircle;
}());
/* harmony default export */ __webpack_exports__["default"] = ({
    Circle: __WEBPACK_IMPORTED_MODULE_1__shapes_circle__["a" /* default */],
    toThreeCircle: toThreeCircle
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0YWIzYmVlYTdmZjdkMGIwYWMwYSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXBlcy9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXJzL3RocmVlLmpzL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwidGhyZWVcIixcImNvbW1vbmpzMlwiOlwidGhyZWVcIixcImFtZFwiOlwidGhyZWVcIixcInJvb3RcIjpcInRocmVlXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDM0RBO0FBQUE7SUFBQTtJQVdBLENBQUM7SUFQUSxrQ0FBZSxHQUF0QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFTSw4QkFBVyxHQUFsQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiNEM7QUFTN0M7SUFBb0MsMEJBQVE7SUFDMUMsZ0JBQW1CLFlBQW1CLEVBQVMsUUFBZ0IsRUFBUyxNQUFjO1FBQXRGLFlBQ0UsaUJBQU8sU0FDUjtRQUZrQixrQkFBWSxHQUFaLFlBQVksQ0FBTztRQUFTLGNBQVEsR0FBUixRQUFRLENBQVE7UUFBUyxZQUFNLEdBQU4sTUFBTSxDQUFROztJQUV0RixDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxDQVJtQyxpRUFBUSxHQVEzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQjhCO0FBRVU7QUFFekM7SUFHRSx1QkFBWSxNQUFjO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0UsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2QyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBSSxDQUFDLENBQUM7UUFDekQsSUFBTSxRQUFRLEdBQUcsSUFBSSxxREFBb0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQU0sUUFBUSxHQUFHLElBQUksd0RBQXVCLENBQUMsRUFBRSxLQUFLLFNBQUUsQ0FBQyxDQUFDO1FBRXhELE1BQU0sQ0FBQyxJQUFJLDJDQUFVLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUM7QUFFRCwrREFBZTtJQUNiLE1BQU07SUFDTixhQUFhO0NBQ2Q7Ozs7Ozs7QUN4QkQsK0MiLCJmaWxlIjoidGhyZWVfanNfYWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInRocmVlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInRocmVlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRocmVlX2pzX2FkYXB0ZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ0aHJlZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1widGhyZWVfanNfYWRhcHRlclwiXSA9IGZhY3Rvcnkocm9vdFtcInRocmVlXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0YWIzYmVlYTdmZjdkMGIwYWMwYSIsImltcG9ydCB7IENvbnN0aXR1dGlvbiwgTWF0ZXJpYWwsIEdlb21ldHJ5SW50ZXJmYWNlIH0gZnJvbSAnLi4vdHlwZXMvaW5kZXgnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2VvbWV0cnkgaW1wbGVtZW50cyBHZW9tZXRyeUludGVyZmFjZSB7XG4gIHB1YmxpYyBjb25zdGl0dXRpb246IENvbnN0aXR1dGlvbjtcbiAgcHVibGljIG1hdGVyaWFsOiBNYXRlcmlhbDtcblxuICBwdWJsaWMgZ2V0Q29uc3RpdHV0aW9uKCk6IENvbnN0aXR1dGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RpdHV0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldE1hdGVyaWFsKCk6IE1hdGVyaWFsIHtcbiAgICByZXR1cm4gdGhpcy5tYXRlcmlhbDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlb21ldHJ5L2luZGV4LnRzIiwiaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuLi9nZW9tZXRyeS9pbmRleCc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL3R5cGVzL2luZGV4JztcblxuaW50ZXJmYWNlIENpcmNsZUludGVyZmFjZSB7XG4gIGNvbnN0aXR1dGlvbjogUG9pbnQsXG4gIG1hdGVyaWFsOiBzdHJpbmcsIFxuICByYWRpdXM6IG51bWJlcixcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgR2VvbWV0cnkgaW1wbGVtZW50cyBDaXJjbGVJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uc3RpdHV0aW9uOiBQb2ludCwgcHVibGljIG1hdGVyaWFsOiBzdHJpbmcsIHB1YmxpYyByYWRpdXM6IG51bWJlcikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBnZXRSYWRpdXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5yYWRpdXM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFwZXMvY2lyY2xlLnRzIiwiaW1wb3J0ICogYXMgdGhyZWUgZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4uLy4uL3NoYXBlcy9jaXJjbGUnO1xuXG5jbGFzcyB0b1RocmVlQ2lyY2xlIHtcbiAgY2lyY2xlOiBDaXJjbGU7XG5cbiAgY29uc3RydWN0b3IoY2lyY2xlOiBDaXJjbGUpIHtcbiAgICB0aGlzLmNpcmNsZSA9IGNpcmNsZTtcbiAgfVxuXG4gIGNhbGwoKSB7XG4gICAgY29uc3QgcmFkaXVzID0gdGhpcy5jaXJjbGUuZ2V0UmFkaXVzKCk7XG4gICAgY29uc3QgY29sb3IgPSBwYXJzZUludChgMHgke3RoaXMuY2lyY2xlLmdldE1hdGVyaWFsKCl9YCk7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgdGhyZWUuQ2lyY2xlR2VvbWV0cnkocmFkaXVzLCByYWRpdXMgKiAyMSk7XG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgdGhyZWUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvciB9KTtcbiAgIFxuICAgIHJldHVybiBuZXcgdGhyZWUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQ2lyY2xlLFxuICB0b1RocmVlQ2lyY2xlXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWRhcHRlcnMvdGhyZWUuanMvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJ0aHJlZVwiLFwiY29tbW9uanMyXCI6XCJ0aHJlZVwiLFwiYW1kXCI6XCJ0aHJlZVwiLFwicm9vdFwiOlwidGhyZWVcIn1cbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==