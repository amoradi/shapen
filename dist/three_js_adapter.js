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
        //geometry.setFromPoints(this.geometry.getConstitution());
        var vertices = this.geometry.getConstitution();
        vertices.forEach(function (v) {
            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](v.x, v.y, v.z));
        });
        // square
        // 0 1 2 3
        // =======
        // 0 1 2
        // 2 3 0
        // pentagon
        // 0 1 2 3 4
        // =========
        // 0 1 2
        // 2 3 4
        // 4 0 1
        // 2 3 4
        // 0 1 2
        for (var i = 0, ii = vertices.length, iii = ii % 3; i < ii + iii; i += 2) {
            // 0
            // 7
            // 0, 1, 2
            // 2, 3, 4
            // 4, 5, 0
            // 0, 1, 2
            // 8     
        }
        ;
        geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Face3"](0, 1, 2));
        var material = new __WEBPACK_IMPORTED_MODULE_0_three__["MeshBasicMaterial"]({ color: "rgb(255, 0, 0)" });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxNzJkZWYzNjdjZWE1OTgwZTQ3MSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXBlcy9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXBlcy9wb2x5Z29uLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVycy90aHJlZS5qcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInRocmVlXCIsXCJjb21tb25qczJcIjpcInRocmVlXCIsXCJhbWRcIjpcInRocmVlXCIsXCJyb290XCI6XCJ0aHJlZVwifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzFEQTtBQUFBO0lBQUE7SUFXQSxDQUFDO0lBUFEsa0NBQWUsR0FBdEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVks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QUM7UUFFSCxTQUFTO1FBQ1QsVUFBVTtRQUNWLFVBQVU7UUFDVixRQUFRO1FBQ1IsUUFBUTtRQUVSLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtRQUNaLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBRVIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN6RSxJQUFJO1lBRUosSUFBSTtZQUVKLFVBQVU7WUFDVixVQUFVO1lBQ1YsVUFBVTtZQUNWLFVBQVU7WUFDVixTQUFTO1FBQ1gsQ0FBQztRQUFBLENBQUM7UUFFRixRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBRSxJQUFJLDRDQUFXLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO1FBRWxELElBQUksUUFBUSxHQUFHLElBQUksd0RBQXVCLENBQUUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBRSxDQUFDO1FBQzFFLE1BQU0sQ0FBQyxJQUFJLDJDQUFVLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQ0FsRHFDLGdCQUFnQixHQWtEckQ7QUFFRCwrREFBZTtJQUNiLFlBQVk7SUFDWixNQUFNO0lBQ04sc0JBQXNCO0lBQ3RCLE9BQU87SUFDUCx1QkFBdUI7Q0FDeEI7Ozs7Ozs7QUMzRkQsK0MiLCJmaWxlIjoidGhyZWVfanNfYWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInRocmVlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInRocmVlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRocmVlX2pzX2FkYXB0ZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ0aHJlZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1widGhyZWVfanNfYWRhcHRlclwiXSA9IGZhY3Rvcnkocm9vdFtcInRocmVlXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNzJkZWYzNjdjZWE1OTgwZTQ3MSIsImltcG9ydCB7IENvbnN0aXR1dGlvbiwgTWF0ZXJpYWwgfSBmcm9tICcuLi90eXBlcy9pbmRleCc7XG5pbXBvcnQgeyBHZW9tZXRyeUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHZW9tZXRyeSBpbXBsZW1lbnRzIEdlb21ldHJ5SW50ZXJmYWNlIHtcbiAgcHVibGljIGNvbnN0aXR1dGlvbjogQ29uc3RpdHV0aW9uO1xuICBwdWJsaWMgbWF0ZXJpYWw6IE1hdGVyaWFsO1xuXG4gIHB1YmxpYyBnZXRDb25zdGl0dXRpb24oKTogQ29uc3RpdHV0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdGl0dXRpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0TWF0ZXJpYWwoKTogTWF0ZXJpYWwge1xuICAgIHJldHVybiB0aGlzLm1hdGVyaWFsO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2VvbWV0cnkvaW5kZXgudHMiLCJpbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4uL2dlb21ldHJ5L2luZGV4JztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vdHlwZXMvaW5kZXgnO1xuaW1wb3J0IHsgQ2lyY2xlSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSBleHRlbmRzIEdlb21ldHJ5IGltcGxlbWVudHMgQ2lyY2xlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnN0aXR1dGlvbjogUG9pbnQsIHB1YmxpYyBtYXRlcmlhbDogc3RyaW5nLCBwdWJsaWMgcmFkaXVzOiBudW1iZXIpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0UmFkaXVzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucmFkaXVzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcGVzL2NpcmNsZS50cyIsImltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi4vZ2VvbWV0cnkvaW5kZXgnO1xuaW1wb3J0IHsgVmVydGljZXMgfSBmcm9tICcuLi90eXBlcy9pbmRleCc7XG5pbXBvcnQgeyBQb2x5Z29uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBHZW9tZXRyeSBpbXBsZW1lbnRzIFBvbHlnb25JbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uc3RpdHV0aW9uOiBWZXJ0aWNlcywgcHVibGljIG1hdGVyaWFsOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0Q29uc3RpdHV0aW9uKCk6IFZlcnRpY2VzIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdGl0dXRpb247XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFwZXMvcG9seWdvbi50cyIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vdHlwZXMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgcG9pbnRGYWN0b3J5ID0gKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHo6IG51bWJlciA9IDApOiBQb2ludCA9PiB7XG4gIHJldHVybiB7IHgsIHksIHogfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgdGhyZWUgZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQgeyBWZXJ0aWNlcyB9IGZyb20gJy4uLy4uL3R5cGVzL2luZGV4JztcbmltcG9ydCB7IFRocmVlSnNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hZGFwdGVycyc7XG5pbXBvcnQgeyBwb2ludEZhY3RvcnkgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2luZGV4JztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi4vLi4vc2hhcGVzL2NpcmNsZSc7XG5pbXBvcnQgUG9seWdvbiBmcm9tICcuLi8uLi9zaGFwZXMvcG9seWdvbic7XG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4uLy4uL2dlb21ldHJ5L2luZGV4JztcblxuYWJzdHJhY3QgY2xhc3MgVG9UaHJlZUpzQWRhcHRlciBpbXBsZW1lbnRzIFRocmVlSnNBZGFwdGVyIHtcbiAgcHVibGljIGdlb21ldHJ5OiBHZW9tZXRyeTtcblxuICBhYnN0cmFjdCBjYWxsKCk6IGFueTtcbn1cblxuY2xhc3MgQ2lyY2xlVG9UaHJlZUpzQWRhcHRlciBleHRlbmRzIFRvVGhyZWVKc0FkYXB0ZXIge1xuICBnZW9tZXRyeTogQ2lyY2xlO1xuXG4gIGNvbnN0cnVjdG9yKGNpcmNsZTogQ2lyY2xlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmdlb21ldHJ5ID0gY2lyY2xlO1xuICB9XG5cbiAgY2FsbCgpIHtcbiAgICBjb25zdCByYWRpdXMgPSB0aGlzLmdlb21ldHJ5LmdldFJhZGl1cygpO1xuICAgIGNvbnN0IGNvbG9yID0gcGFyc2VJbnQoYDB4JHt0aGlzLmdlb21ldHJ5LmdldE1hdGVyaWFsKCl9YCk7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgdGhyZWUuQ2lyY2xlR2VvbWV0cnkocmFkaXVzLCByYWRpdXMgKiAyMSk7XG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgdGhyZWUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvciB9KTtcbiAgIFxuICAgIHJldHVybiBuZXcgdGhyZWUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICB9XG59XG5cbmNsYXNzIFBvbHlnb25Ub1RocmVlSnNBZGFwdGVyIGV4dGVuZHMgVG9UaHJlZUpzQWRhcHRlciB7XG4gIGdlb21ldHJ5OiBQb2x5Z29uO1xuXG4gIGNvbnN0cnVjdG9yKHBvbHlnb246IFBvbHlnb24pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBwb2x5Z29uO1xuICB9XG5cbiAgY2FsbCgpIHtcbiAgICBsZXQgZ2VvbWV0cnkgPSBuZXcgdGhyZWUuR2VvbWV0cnkoKTtcblxuICAgIC8vZ2VvbWV0cnkuc2V0RnJvbVBvaW50cyh0aGlzLmdlb21ldHJ5LmdldENvbnN0aXR1dGlvbigpKTtcbiAgICBsZXQgdmVydGljZXM6IFZlcnRpY2VzID0gdGhpcy5nZW9tZXRyeS5nZXRDb25zdGl0dXRpb24oKTtcbiAgICBcbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKHYgPT4ge1xuICAgICAgZ2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgdGhyZWUuVmVjdG9yMyh2LngsIHYueSwgdi56KSk7XG4gICAgfSk7XG5cbiAgICAvLyBzcXVhcmVcbiAgICAvLyAwIDEgMiAzXG4gICAgLy8gPT09PT09PVxuICAgIC8vIDAgMSAyXG4gICAgLy8gMiAzIDBcblxuICAgIC8vIHBlbnRhZ29uXG4gICAgLy8gMCAxIDIgMyA0XG4gICAgLy8gPT09PT09PT09XG4gICAgLy8gMCAxIDJcbiAgICAvLyAyIDMgNFxuICAgIC8vIDQgMCAxXG4gICAgLy8gMiAzIDRcbiAgICAvLyAwIDEgMlxuICAgIFxuICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHZlcnRpY2VzLmxlbmd0aCwgaWlpID0gaWkgJSAzOyBpIDwgaWkgKyBpaWk7IGkgKz0gMikge1xuICAgICAgLy8gMFxuICAgICAgXG4gICAgICAvLyA3XG5cbiAgICAgIC8vIDAsIDEsIDJcbiAgICAgIC8vIDIsIDMsIDRcbiAgICAgIC8vIDQsIDUsIDBcbiAgICAgIC8vIDAsIDEsIDJcbiAgICAgIC8vIDggICAgIFxuICAgIH07XG5cbiAgICBnZW9tZXRyeS5mYWNlcy5wdXNoKCBuZXcgdGhyZWUuRmFjZTMoIDAsIDEsIDIgKSApO1xuXG4gICAgdmFyIG1hdGVyaWFsID0gbmV3IHRocmVlLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiBcInJnYigyNTUsIDAsIDApXCIgfSApOyAgIFxuICAgIHJldHVybiBuZXcgdGhyZWUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcG9pbnRGYWN0b3J5LFxuICBDaXJjbGUsXG4gIENpcmNsZVRvVGhyZWVKc0FkYXB0ZXIsXG4gIFBvbHlnb24sXG4gIFBvbHlnb25Ub1RocmVlSnNBZGFwdGVyXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWRhcHRlcnMvdGhyZWUuanMvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJ0aHJlZVwiLFwiY29tbW9uanMyXCI6XCJ0aHJlZVwiLFwiYW1kXCI6XCJ0aHJlZVwiLFwicm9vdFwiOlwidGhyZWVcIn1cbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==