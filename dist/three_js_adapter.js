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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return point; });
var point = function (x, y, z) {
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
    point: __WEBPACK_IMPORTED_MODULE_1__helpers_index__["a" /* point */],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyMGE1ZjEzZjVkYThkNGJiZDVjMCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXBlcy9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXBlcy9wb2x5Z29uLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVycy90aHJlZS5qcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInRocmVlXCIsXCJjb21tb25qczJcIjpcInRocmVlXCIsXCJhbWRcIjpcInRocmVlXCIsXCJyb290XCI6XCJ0aHJlZVwifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzFEQTtBQUFBO0lBQUE7SUFXQSxDQUFDO0lBUFEsa0NBQWUsR0FBdEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVks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Q0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7WUFDekYsSUFBSSxLQUFLLEdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxNQUFNLEdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxJQUFJLEtBQUssR0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFBQyxLQUFLLENBQUM7WUFFbEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSw0Q0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUUzRCxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQUMsS0FBSyxDQUFDO1FBQ3JDLENBQUM7UUFBQSxDQUFDO1FBRUYsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUksQ0FBQyxDQUFDO1FBQzNELElBQU0sUUFBUSxHQUFHLElBQUksd0RBQXVCLENBQUMsRUFBRSxLQUFLLFNBQUUsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxJQUFJLDJDQUFVLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQ0FuQ3FDLGdCQUFnQixHQW1DckQ7QUFFRCwrREFBZTtJQUNiLEtBQUs7SUFDTCxNQUFNO0lBQ04sc0JBQXNCO0lBQ3RCLE9BQU87SUFDUCx1QkFBdUI7Q0FDeEI7Ozs7Ozs7QUM1RUQsK0MiLCJmaWxlIjoidGhyZWVfanNfYWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInRocmVlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInRocmVlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRocmVlX2pzX2FkYXB0ZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ0aHJlZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1widGhyZWVfanNfYWRhcHRlclwiXSA9IGZhY3Rvcnkocm9vdFtcInRocmVlXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyMGE1ZjEzZjVkYThkNGJiZDVjMCIsImltcG9ydCB7IENvbnN0aXR1dGlvbiwgTWF0ZXJpYWwgfSBmcm9tICcuLi90eXBlcy9pbmRleCc7XG5pbXBvcnQgeyBHZW9tZXRyeUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHZW9tZXRyeSBpbXBsZW1lbnRzIEdlb21ldHJ5SW50ZXJmYWNlIHtcbiAgcHVibGljIGNvbnN0aXR1dGlvbjogQ29uc3RpdHV0aW9uO1xuICBwdWJsaWMgbWF0ZXJpYWw6IE1hdGVyaWFsO1xuXG4gIHB1YmxpYyBnZXRDb25zdGl0dXRpb24oKTogQ29uc3RpdHV0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdGl0dXRpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0TWF0ZXJpYWwoKTogTWF0ZXJpYWwge1xuICAgIHJldHVybiB0aGlzLm1hdGVyaWFsO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2VvbWV0cnkvaW5kZXgudHMiLCJpbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4uL2dlb21ldHJ5L2luZGV4JztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vdHlwZXMvaW5kZXgnO1xuaW1wb3J0IHsgQ2lyY2xlSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSBleHRlbmRzIEdlb21ldHJ5IGltcGxlbWVudHMgQ2lyY2xlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnN0aXR1dGlvbjogUG9pbnQsIHB1YmxpYyBtYXRlcmlhbDogc3RyaW5nLCBwdWJsaWMgcmFkaXVzOiBudW1iZXIpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0UmFkaXVzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucmFkaXVzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcGVzL2NpcmNsZS50cyIsImltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi4vZ2VvbWV0cnkvaW5kZXgnO1xuaW1wb3J0IHsgVmVydGljZXMgfSBmcm9tICcuLi90eXBlcy9pbmRleCc7XG5pbXBvcnQgeyBQb2x5Z29uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBHZW9tZXRyeSBpbXBsZW1lbnRzIFBvbHlnb25JbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uc3RpdHV0aW9uOiBWZXJ0aWNlcywgcHVibGljIG1hdGVyaWFsOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0Q29uc3RpdHV0aW9uKCk6IFZlcnRpY2VzIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdGl0dXRpb247XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFwZXMvcG9seWdvbi50cyIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vdHlwZXMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgcG9pbnQgPSAoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgejogbnVtYmVyID0gMCk6IFBvaW50ID0+IHtcbiAgcmV0dXJuIHsgeCwgeSwgeiB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyB0aHJlZSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7IFZlcnRpY2VzIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW5kZXgnO1xuaW1wb3J0IHsgVGhyZWVKc0FkYXB0ZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FkYXB0ZXJzJztcbmltcG9ydCB7IHBvaW50IH0gZnJvbSAnLi4vLi4vaGVscGVycy9pbmRleCc7XG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4uLy4uL3NoYXBlcy9jaXJjbGUnO1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnLi4vLi4vc2hhcGVzL3BvbHlnb24nO1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuLi8uLi9nZW9tZXRyeS9pbmRleCc7XG5cbmFic3RyYWN0IGNsYXNzIFRvVGhyZWVKc0FkYXB0ZXIgaW1wbGVtZW50cyBUaHJlZUpzQWRhcHRlciB7XG4gIHB1YmxpYyBnZW9tZXRyeTogR2VvbWV0cnk7XG5cbiAgYWJzdHJhY3QgY2FsbCgpOiBhbnk7XG59XG5cbmNsYXNzIENpcmNsZVRvVGhyZWVKc0FkYXB0ZXIgZXh0ZW5kcyBUb1RocmVlSnNBZGFwdGVyIHtcbiAgZ2VvbWV0cnk6IENpcmNsZTtcblxuICBjb25zdHJ1Y3RvcihjaXJjbGU6IENpcmNsZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5nZW9tZXRyeSA9IGNpcmNsZTtcbiAgfVxuXG4gIGNhbGwoKSB7XG4gICAgY29uc3QgcmFkaXVzID0gdGhpcy5nZW9tZXRyeS5nZXRSYWRpdXMoKTtcbiAgICBjb25zdCBjb2xvciA9IHBhcnNlSW50KGAweCR7dGhpcy5nZW9tZXRyeS5nZXRNYXRlcmlhbCgpfWApO1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IHRocmVlLkNpcmNsZUdlb21ldHJ5KHJhZGl1cywgcmFkaXVzICogMjEpO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IHRocmVlLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3IgfSk7XG4gICBcbiAgICByZXR1cm4gbmV3IHRocmVlLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgfVxufVxuXG5jbGFzcyBQb2x5Z29uVG9UaHJlZUpzQWRhcHRlciBleHRlbmRzIFRvVGhyZWVKc0FkYXB0ZXIge1xuICBnZW9tZXRyeTogUG9seWdvbjtcblxuICBjb25zdHJ1Y3Rvcihwb2x5Z29uOiBQb2x5Z29uKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmdlb21ldHJ5ID0gcG9seWdvbjtcbiAgfVxuXG4gIGNhbGwoKSB7XG4gICAgbGV0IGdlb21ldHJ5ID0gbmV3IHRocmVlLkdlb21ldHJ5KCk7XG5cbiAgICAvLyBUT0RPOiBzdWJtaXQgYW4gaXNzdWUgZm9yIFwiZ2VvbWV0cnkuc2V0RnJvbVBvaW50c1wiIGlzbid0IGV4cG9zZWRcbiAgICAvLyBnZW9tZXRyeS5zZXRGcm9tUG9pbnRzKHRoaXMuZ2VvbWV0cnkuZ2V0Q29uc3RpdHV0aW9uKCkpO1xuICAgIGNvbnN0IHZlcnRpY2VzOiBWZXJ0aWNlcyA9IHRoaXMuZ2VvbWV0cnkuZ2V0Q29uc3RpdHV0aW9uKCk7XG4gICAgXG4gICAgdmVydGljZXMuZm9yRWFjaCh2ID0+IHtcbiAgICAgIGdlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IHRocmVlLlZlY3RvcjModi54LCB2LnksIHYueikpO1xuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgY250ID0gMCwgaSA9IDAsIGlpID0gdmVydGljZXMubGVuZ3RoLCBpaWkgPSBpaSAlIDM7IGkgPCBpaSArIGlpaTsgaSArPSAyLCBjbnQrKykge1xuICAgICAgbGV0IGZpcnN0OiBudW1iZXIgPSBpID49IGlpID8gMCA6IGk7XG4gICAgICBsZXQgc2Vjb25kOiBudW1iZXIgPSBpICsgMSA+PSBpaSA/IDAgOiBpICsgMTtcbiAgICAgIGxldCB0aGlyZDogbnVtYmVyID0gaSArIDIgPj0gaWkgPyAwIDogaSArIDI7XG5cbiAgICAgIGlmIChmaXJzdCA9PT0gMCAmJiBjbnQgPiAwKSBicmVhaztcblxuICAgICAgZ2VvbWV0cnkuZmFjZXMucHVzaChuZXcgdGhyZWUuRmFjZTMoZmlyc3QsIHNlY29uZCwgdGhpcmQpKTtcblxuICAgICAgaWYgKHRoaXJkID09PSAwIHx8IGlpID09PSAzKSBicmVhaztcbiAgICB9O1xuXG4gICAgY29uc3QgY29sb3IgPSBwYXJzZUludChgMHgke3RoaXMuZ2VvbWV0cnkuZ2V0TWF0ZXJpYWwoKX1gKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyB0aHJlZS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yIH0pOyAgIFxuICAgIHJldHVybiBuZXcgdGhyZWUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcG9pbnQsXG4gIENpcmNsZSxcbiAgQ2lyY2xlVG9UaHJlZUpzQWRhcHRlcixcbiAgUG9seWdvbixcbiAgUG9seWdvblRvVGhyZWVKc0FkYXB0ZXJcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hZGFwdGVycy90aHJlZS5qcy9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInRocmVlXCIsXCJjb21tb25qczJcIjpcInRocmVlXCIsXCJhbWRcIjpcInRocmVlXCIsXCJyb290XCI6XCJ0aHJlZVwifVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9