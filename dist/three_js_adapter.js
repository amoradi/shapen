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
/* 2 */
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
    Polygon.prototype.getConstitution = function () {
        return this.constitution;
    };
    return Polygon;
}(__WEBPACK_IMPORTED_MODULE_0__geometry_index__["a" /* Geometry */]));
/* harmony default export */ __webpack_exports__["a"] = (Polygon);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pointFactory; });
var pointFactory = function (x, y, z) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (z === void 0) { z = 0; }
    return { x: x, y: y, z: z };
};


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shapes_circle__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shapes_polygon__ = __webpack_require__(2);
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




var ToThreeJsAdapter = /** @class */ (function () {
    function ToThreeJsAdapter() {
    }
    return ToThreeJsAdapter;
}());
var CircleToThreeJsAdapter = /** @class */ (function (_super) {
    __extends(CircleToThreeJsAdapter, _super);
    function CircleToThreeJsAdapter(circle) {
        var _this = _super.call(this) || this;
        _this.geometry = circle;
        return _this;
    }
    CircleToThreeJsAdapter.prototype.call = function () {
        var radius = this.geometry.getRadius();
        var color = parseInt("0x" + this.geometry.getMaterial());
        var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["CircleGeometry"](radius, radius * 21);
        var material = new __WEBPACK_IMPORTED_MODULE_0_three__["MeshBasicMaterial"]({ color: color });
        return new __WEBPACK_IMPORTED_MODULE_0_three__["Mesh"](geometry, material);
    };
    return CircleToThreeJsAdapter;
}(ToThreeJsAdapter));
var PolygonToThreeJsAdapter = /** @class */ (function (_super) {
    __extends(PolygonToThreeJsAdapter, _super);
    function PolygonToThreeJsAdapter(polygon) {
        var _this = _super.call(this) || this;
        _this.geometry = polygon;
        return _this;
    }
    PolygonToThreeJsAdapter.prototype.call = function () {
        var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["Geometry"]();
        // TODO: submit an issue for "geometry.setFromPoints" isn't exposed
        // geometry.setFromPoints(this.geometry.getConstitution());
        var vertices = this.geometry.getConstitution();
        vertices.forEach(function (v) {
            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](v.x, v.y, v.z));
        });
        for (var cnt = 0, i = 0, ii = vertices.length, iii = ii % 3; i < ii + iii; i += 2, cnt++) {
            var first = i >= ii ? 0 : i;
            var second = i + 1 >= ii ? 0 : i + 1;
            var third = i + 2 >= ii ? 0 : i + 2;
            if (first === 0 && cnt > 0)
                break;
            geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Face3"](first, second, third));
            if (third === 0 || ii === 3)
                break;
        }
        ;
        var color = parseInt("0x" + this.geometry.getMaterial());
        var material = new __WEBPACK_IMPORTED_MODULE_0_three__["MeshBasicMaterial"]({ color: color });
        return new __WEBPACK_IMPORTED_MODULE_0_three__["Mesh"](geometry, material);
    };
    return PolygonToThreeJsAdapter;
}(ToThreeJsAdapter));
/* harmony default export */ __webpack_exports__["default"] = ({
    pointFactory: __WEBPACK_IMPORTED_MODULE_1__helpers_index__["a" /* pointFactory */],
    Circle: __WEBPACK_IMPORTED_MODULE_2__shapes_circle__["a" /* default */],
    CircleToThreeJsAdapter: CircleToThreeJsAdapter,
    Polygon: __WEBPACK_IMPORTED_MODULE_3__shapes_polygon__["a" /* default */],
    PolygonToThreeJsAdapter: PolygonToThreeJsAdapter
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlYjI2ZjI5MWQ0Yzc1MTVmOGFhMiIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXBlcy9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXBlcy9wb2x5Z29uLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVycy90aHJlZS5qcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInRocmVlXCIsXCJjb21tb25qczJcIjpcInRocmVlXCIsXCJhbWRcIjpcInRocmVlXCIsXCJyb290XCI6XCJ0aHJlZVwifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzFEQTtBQUFBO0lBQUE7SUFXQSxDQUFDO0lBUFEsa0NBQWUsR0FBdEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVks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LENBQUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQ3pGLElBQUksS0FBSyxHQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksTUFBTSxHQUFXLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0MsSUFBSSxLQUFLLEdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU1QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQUMsS0FBSyxDQUFDO1lBRWxDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksNENBQVcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFM0QsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUFDLEtBQUssQ0FBQztRQUNyQyxDQUFDO1FBQUEsQ0FBQztRQUVGLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFJLENBQUMsQ0FBQztRQUMzRCxJQUFNLFFBQVEsR0FBRyxJQUFJLHdEQUF1QixDQUFDLEVBQUUsS0FBSyxTQUFFLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsSUFBSSwyQ0FBVSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLENBbkNxQyxnQkFBZ0IsR0FtQ3JEO0FBRUQsK0RBQWU7SUFDYixZQUFZO0lBQ1osTUFBTTtJQUNOLHNCQUFzQjtJQUN0QixPQUFPO0lBQ1AsdUJBQXVCO0NBQ3hCOzs7Ozs7O0FDNUVELCtDIiwiZmlsZSI6InRocmVlX2pzX2FkYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJ0aHJlZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJ0aHJlZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0aHJlZV9qc19hZGFwdGVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwidGhyZWVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRocmVlX2pzX2FkYXB0ZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJ0aHJlZVwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWIyNmYyOTFkNGM3NTE1ZjhhYTIiLCJpbXBvcnQgeyBDb25zdGl0dXRpb24sIE1hdGVyaWFsIH0gZnJvbSAnLi4vdHlwZXMvaW5kZXgnO1xuaW1wb3J0IHsgR2VvbWV0cnlJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2VvbWV0cnkgaW1wbGVtZW50cyBHZW9tZXRyeUludGVyZmFjZSB7XG4gIHB1YmxpYyBjb25zdGl0dXRpb246IENvbnN0aXR1dGlvbjtcbiAgcHVibGljIG1hdGVyaWFsOiBNYXRlcmlhbDtcblxuICBwdWJsaWMgZ2V0Q29uc3RpdHV0aW9uKCk6IENvbnN0aXR1dGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RpdHV0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldE1hdGVyaWFsKCk6IE1hdGVyaWFsIHtcbiAgICByZXR1cm4gdGhpcy5tYXRlcmlhbDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlb21ldHJ5L2luZGV4LnRzIiwiaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuLi9nZW9tZXRyeS9pbmRleCc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL3R5cGVzL2luZGV4JztcbmltcG9ydCB7IENpcmNsZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBHZW9tZXRyeSBpbXBsZW1lbnRzIENpcmNsZUludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25zdGl0dXRpb246IFBvaW50LCBwdWJsaWMgbWF0ZXJpYWw6IHN0cmluZywgcHVibGljIHJhZGl1czogbnVtYmVyKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldFJhZGl1cygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnJhZGl1cztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXBlcy9jaXJjbGUudHMiLCJpbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4uL2dlb21ldHJ5L2luZGV4JztcbmltcG9ydCB7IFZlcnRpY2VzIH0gZnJvbSAnLi4vdHlwZXMvaW5kZXgnO1xuaW1wb3J0IHsgUG9seWdvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgR2VvbWV0cnkgaW1wbGVtZW50cyBQb2x5Z29uSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnN0aXR1dGlvbjogVmVydGljZXMsIHB1YmxpYyBtYXRlcmlhbDogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldENvbnN0aXR1dGlvbigpOiBWZXJ0aWNlcyB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RpdHV0aW9uO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcGVzL3BvbHlnb24udHMiLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL3R5cGVzL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IHBvaW50RmFjdG9yeSA9ICh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB6OiBudW1iZXIgPSAwKTogUG9pbnQgPT4ge1xuICByZXR1cm4geyB4LCB5LCB6IH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9pbmRleC50cyIsImltcG9ydCAqIGFzIHRocmVlIGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHsgVmVydGljZXMgfSBmcm9tICcuLi8uLi90eXBlcy9pbmRleCc7XG5pbXBvcnQgeyBUaHJlZUpzQWRhcHRlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYWRhcHRlcnMnO1xuaW1wb3J0IHsgcG9pbnRGYWN0b3J5IH0gZnJvbSAnLi4vLi4vaGVscGVycy9pbmRleCc7XG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4uLy4uL3NoYXBlcy9jaXJjbGUnO1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnLi4vLi4vc2hhcGVzL3BvbHlnb24nO1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuLi8uLi9nZW9tZXRyeS9pbmRleCc7XG5cbmFic3RyYWN0IGNsYXNzIFRvVGhyZWVKc0FkYXB0ZXIgaW1wbGVtZW50cyBUaHJlZUpzQWRhcHRlciB7XG4gIHB1YmxpYyBnZW9tZXRyeTogR2VvbWV0cnk7XG5cbiAgYWJzdHJhY3QgY2FsbCgpOiBhbnk7XG59XG5cbmNsYXNzIENpcmNsZVRvVGhyZWVKc0FkYXB0ZXIgZXh0ZW5kcyBUb1RocmVlSnNBZGFwdGVyIHtcbiAgZ2VvbWV0cnk6IENpcmNsZTtcblxuICBjb25zdHJ1Y3RvcihjaXJjbGU6IENpcmNsZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5nZW9tZXRyeSA9IGNpcmNsZTtcbiAgfVxuXG4gIGNhbGwoKSB7XG4gICAgY29uc3QgcmFkaXVzID0gdGhpcy5nZW9tZXRyeS5nZXRSYWRpdXMoKTtcbiAgICBjb25zdCBjb2xvciA9IHBhcnNlSW50KGAweCR7dGhpcy5nZW9tZXRyeS5nZXRNYXRlcmlhbCgpfWApO1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IHRocmVlLkNpcmNsZUdlb21ldHJ5KHJhZGl1cywgcmFkaXVzICogMjEpO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IHRocmVlLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3IgfSk7XG4gICBcbiAgICByZXR1cm4gbmV3IHRocmVlLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgfVxufVxuXG5jbGFzcyBQb2x5Z29uVG9UaHJlZUpzQWRhcHRlciBleHRlbmRzIFRvVGhyZWVKc0FkYXB0ZXIge1xuICBnZW9tZXRyeTogUG9seWdvbjtcblxuICBjb25zdHJ1Y3Rvcihwb2x5Z29uOiBQb2x5Z29uKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmdlb21ldHJ5ID0gcG9seWdvbjtcbiAgfVxuXG4gIGNhbGwoKSB7XG4gICAgbGV0IGdlb21ldHJ5ID0gbmV3IHRocmVlLkdlb21ldHJ5KCk7XG5cbiAgICAvLyBUT0RPOiBzdWJtaXQgYW4gaXNzdWUgZm9yIFwiZ2VvbWV0cnkuc2V0RnJvbVBvaW50c1wiIGlzbid0IGV4cG9zZWRcbiAgICAvLyBnZW9tZXRyeS5zZXRGcm9tUG9pbnRzKHRoaXMuZ2VvbWV0cnkuZ2V0Q29uc3RpdHV0aW9uKCkpO1xuICAgIGNvbnN0IHZlcnRpY2VzOiBWZXJ0aWNlcyA9IHRoaXMuZ2VvbWV0cnkuZ2V0Q29uc3RpdHV0aW9uKCk7XG4gICAgXG4gICAgdmVydGljZXMuZm9yRWFjaCh2ID0+IHtcbiAgICAgIGdlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IHRocmVlLlZlY3RvcjModi54LCB2LnksIHYueikpO1xuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgY250ID0gMCwgaSA9IDAsIGlpID0gdmVydGljZXMubGVuZ3RoLCBpaWkgPSBpaSAlIDM7IGkgPCBpaSArIGlpaTsgaSArPSAyLCBjbnQrKykge1xuICAgICAgbGV0IGZpcnN0OiBudW1iZXIgPSBpID49IGlpID8gMCA6IGk7XG4gICAgICBsZXQgc2Vjb25kOiBudW1iZXIgPSBpICsgMSA+PSBpaSA/IDAgOiBpICsgMTtcbiAgICAgIGxldCB0aGlyZDogbnVtYmVyID0gaSArIDIgPj0gaWkgPyAwIDogaSArIDI7XG5cbiAgICAgIGlmIChmaXJzdCA9PT0gMCAmJiBjbnQgPiAwKSBicmVhaztcblxuICAgICAgZ2VvbWV0cnkuZmFjZXMucHVzaChuZXcgdGhyZWUuRmFjZTMoZmlyc3QsIHNlY29uZCwgdGhpcmQpKTtcblxuICAgICAgaWYgKHRoaXJkID09PSAwIHx8IGlpID09PSAzKSBicmVhaztcbiAgICB9O1xuXG4gICAgY29uc3QgY29sb3IgPSBwYXJzZUludChgMHgke3RoaXMuZ2VvbWV0cnkuZ2V0TWF0ZXJpYWwoKX1gKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyB0aHJlZS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yIH0pOyAgIFxuICAgIHJldHVybiBuZXcgdGhyZWUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcG9pbnRGYWN0b3J5LFxuICBDaXJjbGUsXG4gIENpcmNsZVRvVGhyZWVKc0FkYXB0ZXIsXG4gIFBvbHlnb24sXG4gIFBvbHlnb25Ub1RocmVlSnNBZGFwdGVyXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWRhcHRlcnMvdGhyZWUuanMvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJ0aHJlZVwiLFwiY29tbW9uanMyXCI6XCJ0aHJlZVwiLFwiYW1kXCI6XCJ0aHJlZVwiLFwicm9vdFwiOlwidGhyZWVcIn1cbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==