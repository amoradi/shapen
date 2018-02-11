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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
        console.log(this.constitution);
        return this.constitution;
    };
    Geometry.prototype.getMaterial = function () {
        console.log(this.material);
        return this.material;
    };
    return Geometry;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shapes_circle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shapes_polygon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materials__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__(5);




var circlePoint = Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* pointFactory */])(20, 20, 0);
var polygonPoints = [Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* pointFactory */])(), Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* pointFactory */])(10, 10, 0), Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* pointFactory */])(20, 0, 0)];
var AaronsCircle = new __WEBPACK_IMPORTED_MODULE_0__shapes_circle__["a" /* default */](circlePoint, __WEBPACK_IMPORTED_MODULE_2__materials__["a" /* default */], 40);
var AaronsPolygon = new __WEBPACK_IMPORTED_MODULE_1__shapes_polygon__["a" /* default */](polygonPoints, __WEBPACK_IMPORTED_MODULE_2__materials__["a" /* default */]);
AaronsCircle.getConstitution();
AaronsCircle.getMaterial();
AaronsPolygon.getConstitution();
AaronsPolygon.getMaterial();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry__ = __webpack_require__(0);
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
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(__WEBPACK_IMPORTED_MODULE_0__geometry__["a" /* Geometry */]));
/* harmony default export */ __webpack_exports__["a"] = (Circle);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry__ = __webpack_require__(0);
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
}(__WEBPACK_IMPORTED_MODULE_0__geometry__["a" /* Geometry */]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWVjYTNlMjIxNTdhMDY2NWI2NjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcGVzL2NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcGVzL3BvbHlnb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGVyaWFscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDM0RBO0FBQUE7SUFBQTtJQWFBLENBQUM7SUFUUSxrQ0FBZSxHQUF0QjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFTSw4QkFBVyxHQUFsQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNmb0M7QUFDRTtBQUNBO0FBRUU7QUFFekMsSUFBTSxXQUFXLEdBQVUsc0VBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25ELElBQU0sYUFBYSxHQUFhLENBQUMsc0VBQVksRUFBRSxFQUFFLHNFQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxzRUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsRyxJQUFNLFlBQVksR0FBRyxJQUFJLCtEQUFNLENBQUMsV0FBVyxFQUFFLDJEQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDL0QsSUFBTSxhQUFhLEdBQUcsSUFBSSxnRUFBTyxDQUFDLGFBQWEsRUFBRSwyREFBWSxDQUFDLENBQUM7QUFFL0QsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQy9CLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMzQixhQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDaEMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZFc7QUFHdkM7SUFBb0MsMEJBQVE7SUFDMUMsZ0JBQW1CLFlBQW1CLEVBQVMsUUFBZ0IsRUFBUyxNQUFjO1FBQXRGLFlBQ0UsaUJBQU8sU0FDUjtRQUZrQixrQkFBWSxHQUFaLFlBQVksQ0FBTztRQUFTLGNBQVEsR0FBUixRQUFRLENBQVE7UUFBUyxZQUFNLEdBQU4sTUFBTSxDQUFROztJQUV0RixDQUFDO0lBRU0scUJBQUksR0FBWDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQ0FSbUMsMkRBQVEsR0FRM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWHNDO0FBR3ZDO0lBQXFDLDJCQUFRO0lBQzNDLGlCQUFtQixZQUFzQixFQUFTLFFBQWdCO1FBQWxFLFlBQ0UsaUJBQU8sU0FDUjtRQUZrQixrQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUFTLGNBQVEsR0FBUixRQUFRLENBQVE7O0lBRWxFLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxDQUpvQywyREFBUSxHQUk1Qzs7Ozs7Ozs7O0FDUEQseURBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7QUNFeEIsSUFBTSxZQUFZLEdBQUcsVUFBQyxDQUFhLEVBQUUsQ0FBYSxFQUFFLENBQWE7SUFBM0MseUJBQWE7SUFBRSx5QkFBYTtJQUFFLHlCQUFhO0lBQ3RFLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBRSxDQUFDLEtBQUUsQ0FBQyxLQUFFO0FBQ3BCLENBQUMsQ0FBQyIsImZpbGUiOiJzaGFwZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhZWNhM2UyMjE1N2EwNjY1YjY2NiIsImltcG9ydCB7IENvbnN0aXR1dGlvbiwgTWF0ZXJpYWwgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHZW9tZXRyeSB7XG4gIHB1YmxpYyBjb25zdGl0dXRpb246IENvbnN0aXR1dGlvbjtcbiAgcHVibGljIG1hdGVyaWFsOiBNYXRlcmlhbDtcblxuICBwdWJsaWMgZ2V0Q29uc3RpdHV0aW9uKCk6IENvbnN0aXR1dGlvbiB7XG4gICAgY29uc29sZS5sb2codGhpcy5jb25zdGl0dXRpb24pO1xuICAgIHJldHVybiB0aGlzLmNvbnN0aXR1dGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXRlcmlhbCgpOiBNYXRlcmlhbCB7XG4gICAgY29uc29sZS5sb2codGhpcy5tYXRlcmlhbCk7XG4gICAgcmV0dXJuIHRoaXMubWF0ZXJpYWw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZW9tZXRyeS9pbmRleC50cyIsImltcG9ydCBDaXJjbGUgZnJvbSAnLi9zaGFwZXMvY2lyY2xlJztcbmltcG9ydCBQb2x5Z29uIGZyb20gJy4vc2hhcGVzL3BvbHlnb24nO1xuaW1wb3J0IGJhc2VNYXRlcmlhbCBmcm9tICcuL21hdGVyaWFscyc7XG5pbXBvcnQgeyBQb2ludCwgVmVydGljZXMgfSBmcm9tICcuL3R5cGVzL2luZGV4JztcbmltcG9ydCB7IHBvaW50RmFjdG9yeSB9IGZyb20gJy4vaGVscGVycyc7XG5cbmNvbnN0IGNpcmNsZVBvaW50OiBQb2ludCA9IHBvaW50RmFjdG9yeSgyMCwgMjAsIDApO1xuY29uc3QgcG9seWdvblBvaW50czogVmVydGljZXMgPSBbcG9pbnRGYWN0b3J5KCksIHBvaW50RmFjdG9yeSgxMCwgMTAsIDApLCBwb2ludEZhY3RvcnkoMjAsIDAsIDApXTtcbmNvbnN0IEFhcm9uc0NpcmNsZSA9IG5ldyBDaXJjbGUoY2lyY2xlUG9pbnQsIGJhc2VNYXRlcmlhbCwgNDApO1xuY29uc3QgQWFyb25zUG9seWdvbiA9IG5ldyBQb2x5Z29uKHBvbHlnb25Qb2ludHMsIGJhc2VNYXRlcmlhbCk7XG5cbkFhcm9uc0NpcmNsZS5nZXRDb25zdGl0dXRpb24oKTtcbkFhcm9uc0NpcmNsZS5nZXRNYXRlcmlhbCgpO1xuQWFyb25zUG9seWdvbi5nZXRDb25zdGl0dXRpb24oKTtcbkFhcm9uc1BvbHlnb24uZ2V0TWF0ZXJpYWwoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi4vZ2VvbWV0cnknO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSBleHRlbmRzIEdlb21ldHJ5IHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnN0aXR1dGlvbjogUG9pbnQsIHB1YmxpYyBtYXRlcmlhbDogc3RyaW5nLCBwdWJsaWMgcmFkaXVzOiBudW1iZXIpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGFyZWEoKSB7XG4gICAgcmV0dXJuIE1hdGguUEkgKiBNYXRoLnBvdyh0aGlzLnJhZGl1cywgMik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFwZXMvY2lyY2xlLnRzIiwiaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuLi9nZW9tZXRyeSc7XG5pbXBvcnQgeyBWZXJ0aWNlcyB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWdvbiBleHRlbmRzIEdlb21ldHJ5IHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnN0aXR1dGlvbjogVmVydGljZXMsIHB1YmxpYyBtYXRlcmlhbDogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXBlcy9wb2x5Z29uLnRzIiwiZXhwb3J0IGRlZmF1bHQgXCJiYXNlIG1hdGVyaWFsXCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBwb2ludEZhY3RvcnkgPSAoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgejogbnVtYmVyID0gMCk6IFBvaW50ID0+IHtcbiAgcmV0dXJuIHsgeCwgeSwgeiB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9