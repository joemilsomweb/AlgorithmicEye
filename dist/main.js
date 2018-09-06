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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/assemblages/eye.js":
/*!***********************************!*\
  !*** ./src/js/assemblages/eye.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entity */ \"./src/js/entity.js\");\n/* harmony import */ var components_mesh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/mesh_component */ \"./src/js/components/mesh_component.js\");\n/* harmony import */ var components_position_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/position_component */ \"./src/js/components/position_component.js\");\n\n\n\n\n\nconst eye = {\n\tcreate : function(options){\n\t\tlet eyeEntity = new entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\t\teyeEntity.addComponent(new components_mesh_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n\t\t\tgeometry : options.eyeGeometry\n\t\t}));\n\n\t\teyeEntity.addComponent(new components_position_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n\t\t\t\tx : options.position.x,\n\t\t\t\ty : options.position.y\n\t\t}));\n\n\t\tlet pupilEntity = new entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\t\tpupilEntity.addComponent(new components_mesh_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n\t\t\tgeometry : options.pupilGeometry\n\t\t}));\n\t\t\n\t\tconst eyeMesh = eyeEntity.components[\"MESH\"];\n\t\tconst pupilMesh = pupilEntity.components[\"MESH\"];\n\n\t\t//create pupil at center, refactor later\n\t\tpupilEntity.addComponent(new components_position_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n\t\t\t\tx : options.position.x + eyeMesh.bounds.width/2 - pupilMesh.bounds.width/2,\n\t\t\t\ty : options.position.y + eyeMesh.bounds.height/2 - pupilMesh.bounds.width/2\n\t\t}));\n\n\t\treturn [eyeEntity, pupilEntity];\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (eye);\n\n//# sourceURL=webpack:///./src/js/assemblages/eye.js?");

/***/ }),

/***/ "./src/js/components/mesh_component.js":
/*!*********************************************!*\
  !*** ./src/js/components/mesh_component.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var helper_bounds_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helper/bounds_calculator */ \"./src/js/helper/bounds_calculator.js\");\n\n\n//Class that contains the geometry, calculates the bounds based on this geometry\n//as well as creates a canvas that fits the geometry for efficiency\nclass MeshComponent{\n\t\n\tconstructor(options){\n\t\tthis.geometry = options.geometry;\n\t\tthis.bounds = helper_bounds_calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].calculateBounds(this.geometry);\n\t\tthis.createCanvas();\n\t\tthis.drawGeometry();\n\t}\n\n\t//good or bad?\n\tcreateCanvas(){\n\t\tthis.canvas = document.createElement(\"canvas\");\n\t\t\n\t\t//for now\n\t\tthis.canvas.width = this.bounds.width;\n\t\tthis.canvas.height = this.bounds.height;\n\t\tthis.context = this.canvas.getContext('2d');\n\t}\n\n\t//separate this logic out of here?? i think so\n\t//maybe makes sense for this project though??\n\tdrawGeometry(){\n\t\tthis.context.lineWidth = 3;\t\t\t\n\t\tthis.context.strokeStyle = \"#000000\";\n\n\t\tthis.context.save();\n\t\tthis.context.globalCompositeOperation = \"source-over\";\n\t\t// this.context.translate(this.canvas.width/2, this.canvas.height/2);\n\n\t\t//store as shape instead\n\t\tthis.context.beginPath();\n\t\tthis.context.moveTo(this.geometry[0].x, this.geometry[0].y);\n\t\t\t\n\t\tfor(let i = 1; i < this.geometry.length; i++){\n\t\t\tlet point = this.geometry[i];\n\t\t\tthis.context.lineTo(point.x, point.y);\n\n\t\t\tthis.context.stroke();\n\t\t}\n\n\t\t// this.context.lineTo(this.geometry[0].x, (this.geometry[0].y) );\n\t\tthis.context.stroke();\n\n\t\t// this.debugBounds();\n\t}\n\n\tdebugBounds(){\n\t\tthis.context.strokeStyle = \"#000000\";\n\t\tthis.context.strokeRect(0, 0, this.bounds.width, this.bounds.height);\n\t}\n}\n\n//for use by the System, don't quite like using strings like this...\nMeshComponent.prototype.name = \"MESH\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeshComponent);\n\n//# sourceURL=webpack:///./src/js/components/mesh_component.js?");

/***/ }),

/***/ "./src/js/components/position_component.js":
/*!*************************************************!*\
  !*** ./src/js/components/position_component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass PositionComponent{\n\t\n\tconstructor(options){\n\t\tthis.x = options.x;\n\t\tthis.y = options.y;\n\t}\n\n}\n\nPositionComponent.prototype.name = \"POSITION\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PositionComponent);\n\n//# sourceURL=webpack:///./src/js/components/position_component.js?");

/***/ }),

/***/ "./src/js/entity.js":
/*!**************************!*\
  !*** ./src/js/entity.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//does this need to be a class?? can just be an object...\n\nconst Entity = class{\n\n\tconstructor(options){\n\t\tthis.generateId();\n\t\tthis.components = {};\n\t}\n\n\tgenerateId(){\n\t\tthis.id = Math.random();\n\t}\n\n\t//add render component/geometry, make more specific maybe \n\taddComponent(component){\n\t\tif(this.components[component.name]){\n\t\t\t//is this good or bad practice\n\t\t\tthrow new Error(\"Already contains a component of type \" + component.name); \n\t\t\treturn;\n\t\t}\n\t\tthis.components[component.name] = component;\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Entity);\n\n//# sourceURL=webpack:///./src/js/entity.js?");

/***/ }),

/***/ "./src/js/eye/outline_types/almond_horizontal_type.js":
/*!************************************************************!*\
  !*** ./src/js/eye/outline_types/almond_horizontal_type.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst AlmondHorizontalType = {\n\t\t\n\t\t//make it perfectly round for now\n\t\tgenerateOutline : function(){\n\t\t\t\tconst size = {\n\t\t\t\t\twidth : Math.random() * 100 + 200,\n\t\t\t\t\theight : Math.random() * 100 + 200 \n\t\t\t\t};\n\t\t\t\t\n\t\t\t\tlet outlinePoints = [];\n\t\t\t\t\n\t\t\t\t//centre point of eye\n\t\t\t\tlet centerX = size.width/2;\n\t\t\t\t\n\t\t\t\tlet currentAngle = 0;\n\n\t\t\t\twhile(currentAngle < 360){\n\t\t\t\t\tlet x = Math.sin(currentAngle * Math.PI/180) * size.width/2;\n\t\t\t\t\tlet y = Math.cos(currentAngle * Math.PI/180) * size.height/2;\n\n\t\t\t\t\tx += size.width/2;\n\t\t\t\t\ty += size.height/2;\n\t\t\t\t\t\n\t\t\t\t\toutlinePoints.push({\n\t\t\t\t\t\tx : x,\n\t\t\t\t\t\ty : y\n\t\t\t\t\t});\n\t\t\t\t\t\t\n\t\t\t\t\tcurrentAngle += 1;\t\t\n\t\t\t\t}\n\t\t\t\n\t\t\t//return geometry...\n\t\t\treturn outlinePoints;\n\t\t}\n};\t\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlmondHorizontalType);\n\n//# sourceURL=webpack:///./src/js/eye/outline_types/almond_horizontal_type.js?");

/***/ }),

/***/ "./src/js/eye/outline_types/anime_type.js":
/*!************************************************!*\
  !*** ./src/js/eye/outline_types/anime_type.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst AnimeType = {\n\t\t\n\t\t//make it perfectly round for now\n\t\tgenerateOutline : function(){\n\t\t\t\tconst size = {\n\t\t\t\t\twidth : Math.random() * 100 + 150,\n\t\t\t\t\theight : Math.random() * 300 + 50 \n\t\t\t\t};\n\n\t\t\t\tlet outlinePoints = [];\n\t\t\t\t\n\t\t\t\t//centre point of eye\n\t\t\t\tlet centerX = size.width/2;\n\t\t\t\t\n\t\t\t\tlet minX = 99999;\n\t\t\t\tlet minY = 99999;\n\n\t\t\t\tlet currentAngle = -180;\n\n\t\t\t\tconst animeConst = Math.random() * 4 + 2;\n\n\t\t\t\twhile(currentAngle < 0){\n\t\t\t\t\tlet x = Math.cos(currentAngle * Math.PI/180) * size.width/animeConst;\n\t\t\t\t\tlet y = Math.sin(currentAngle * Math.PI/180) * size.height/2;\n\n\t\t\t\t\tx += size.width/2;\n\t\t\t\t\ty += size.height/2 + size.height/4;\n\t\t\t\t\t\n\t\t\t\t\toutlinePoints.push({\n\t\t\t\t\t\tx : x,\n\t\t\t\t\t\ty : y\n\t\t\t\t\t});\n\n\t\t\t\t\tminX = x < minX ? x : minX;\n\t\t\t\t\tminY = y < minY ? y : minY;\n\t\t\t\t\t\t\n\t\t\t\t\tcurrentAngle += 1;\t\t\n\t\t\t\t}\n\n\t\t\t\t//calculate offset from 0, so we can make a canvas\n\t\t\t\t//of width and height of the outline\n\t\t\t\tfor (var p of outlinePoints){\n\t\t\t\t\tp.x -= minX;\n\t\t\t\t\tp.y -= minY;\n\t\t\t\t}\n\n\t\t\t//return geometry...\n\t\t\treturn outlinePoints;\n\t\t}\n};\t\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimeType);\n\n//# sourceURL=webpack:///./src/js/eye/outline_types/anime_type.js?");

/***/ }),

/***/ "./src/js/eye/outline_types/outline_factory.js":
/*!*****************************************************!*\
  !*** ./src/js/eye/outline_types/outline_factory.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var eye_outline_types_round_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eye/outline_types/round_type */ \"./src/js/eye/outline_types/round_type.js\");\n/* harmony import */ var eye_outline_types_anime_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eye/outline_types/anime_type */ \"./src/js/eye/outline_types/anime_type.js\");\n/* harmony import */ var eye_outline_types_almond_horizontal_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! eye/outline_types/almond_horizontal_type */ \"./src/js/eye/outline_types/almond_horizontal_type.js\");\n\n\n\n\nlet generatorFunctions = [eye_outline_types_round_type__WEBPACK_IMPORTED_MODULE_0__[\"default\"], eye_outline_types_anime_type__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n// let generatorFunctions = [AlmondHOutlineType];\n\nconst OutlineFactory = {\n\tgenerate : function(){\n\t\t//choose random generator from list\n\t\tconst generator = generatorFunctions[Math.floor(Math.random()*generatorFunctions.length)];\n\t\tthis.geometry = generator.generateOutline();\n\t},\n\n\tget : function(){\n\t\treturn this.geometry;\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OutlineFactory);\n\n\n\n//# sourceURL=webpack:///./src/js/eye/outline_types/outline_factory.js?");

/***/ }),

/***/ "./src/js/eye/outline_types/round_type.js":
/*!************************************************!*\
  !*** ./src/js/eye/outline_types/round_type.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst RoundOutlineType = {\n\t\t\n\t\t//make it perfectly round for now\n\t\tgenerateOutline : function(){\n\t\t\t\tconst size = {\n\t\t\t\t\twidth : Math.random() * 100 + 200,\n\t\t\t\t\theight : Math.random() * 100 + 200 \n\t\t\t\t};\n\t\t\t\t\n\t\t\t\tlet outlinePoints = [];\n\t\t\t\t\n\t\t\t\t//centre point of eye\n\t\t\t\tlet centerX = size.width/2;\n\t\t\t\t\n\t\t\t\tlet currentAngle = 0;\n\n\t\t\t\twhile(currentAngle < 360){\n\t\t\t\t\tlet x = Math.sin(currentAngle * Math.PI/180) * size.width/2;\n\t\t\t\t\tlet y = Math.cos(currentAngle * Math.PI/180) * size.height/2;\n\n\t\t\t\t\tx += size.width/2;\n\t\t\t\t\ty += size.height/2;\n\t\t\t\t\t\n\t\t\t\t\toutlinePoints.push({\n\t\t\t\t\t\tx : x,\n\t\t\t\t\t\ty : y\n\t\t\t\t\t});\n\t\t\t\t\t\t\n\t\t\t\t\tcurrentAngle += 1;\t\t\n\t\t\t\t}\n\t\t\t\n\t\t\t//return geometry...\n\t\t\treturn outlinePoints;\n\t\t}\n};\t\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoundOutlineType);\n\n//# sourceURL=webpack:///./src/js/eye/outline_types/round_type.js?");

/***/ }),

/***/ "./src/js/eye/pupil_types/bean_pupil_type.js":
/*!***************************************************!*\
  !*** ./src/js/eye/pupil_types/bean_pupil_type.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst BeanPupilType = {\n\t\t\n\t\tgenerateOutline : function(options){\n\t\t\t\tconst size = {\n\t\t\t\t\twidth : 70,\n\t\t\t\t\theight : 70 \n\t\t\t\t};\n\n\t\t\t\tlet outlinePoints = [];\n\t\t\t\t\n\t\t\t\tlet currentAngle = 0;\n\n\t\t\t\t//draw sin wave at bottom\n\t\t\t\tfor(var i = 0; i < size.width; i++){\n\t\t\t\t\tlet point = {\n\t\t\t\t\t\tx : i,\n\t\t\t\t\t\ty : Math.sin(i / size.width * (3.14 * 3)) * 6 + 50\n\t\t\t\t\t};\n\n\t\t\t\t\toutlinePoints.push(point);\n\t\t\t\t}\n\n\t\t\t\t//draw top\n\t\t\t\tfor(var i = 0; i < 90; i++){\n\t\t\t\t\t\n\t\t\t\t}\n\n\n\n\t\t\treturn outlinePoints;\n\t\t}\n};\t\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BeanPupilType);\n\n//# sourceURL=webpack:///./src/js/eye/pupil_types/bean_pupil_type.js?");

/***/ }),

/***/ "./src/js/eye/pupil_types/pupil_factory.js":
/*!*************************************************!*\
  !*** ./src/js/eye/pupil_types/pupil_factory.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var eye_pupil_types_round_pupil_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eye/pupil_types/round_pupil_type */ \"./src/js/eye/pupil_types/round_pupil_type.js\");\n/* harmony import */ var eye_pupil_types_bean_pupil_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eye/pupil_types/bean_pupil_type */ \"./src/js/eye/pupil_types/bean_pupil_type.js\");\n\n\n\n// let generatorFunctions = [RoundPupilType, BeanPupilType];\nlet generatorFunctions = [eye_pupil_types_bean_pupil_type__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n\nconst PupilFactory = {\n\tgenerate : function(){\n\t\tconst generator = generatorFunctions[Math.floor(Math.random()*generatorFunctions.length)];\n\t\tthis.geometry = generator.generateOutline();\n\t},\n\n\tget : function(){\n\t\treturn this.geometry;\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PupilFactory);\n\n\n\n//# sourceURL=webpack:///./src/js/eye/pupil_types/pupil_factory.js?");

/***/ }),

/***/ "./src/js/eye/pupil_types/round_pupil_type.js":
/*!****************************************************!*\
  !*** ./src/js/eye/pupil_types/round_pupil_type.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst RoundPupilType = {\n\t\t\n\t\t//make it perfectly round for now\n\t\tgenerateOutline : function(){\n\t\t\t\tconst size = {\n\t\t\t\t\twidth : 30,\n\t\t\t\t\theight : 30 \n\t\t\t\t};\n\n\t\t\t\tlet outlinePoints = [];\n\t\t\t\t\n\t\t\t\t//centre point of eye\n\t\t\t\tlet centerX = size.width/2;\n\t\t\t\t\n\t\t\t\tlet currentAngle = 0;\n\n\t\t\t\twhile(currentAngle < 360){\n\t\t\t\t\tlet x = Math.sin(currentAngle * Math.PI/180) * size.width/2;\n\t\t\t\t\tlet y = Math.cos(currentAngle * Math.PI/180) * size.height/2;\n\n\t\t\t\t\tx += size.width/2;\n\t\t\t\t\ty += size.height/2;\n\t\t\t\t\t\n\t\t\t\t\toutlinePoints.push({\n\t\t\t\t\t\tx : x,\n\t\t\t\t\t\ty : y\n\t\t\t\t\t});\n\t\t\t\t\t\t\n\t\t\t\t\tcurrentAngle += 1;\t\t\n\t\t\t\t}\n\n\t\t\t//return geometry...\n\t\t\treturn outlinePoints;\n\t\t}\n};\t\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoundPupilType);\n\n//# sourceURL=webpack:///./src/js/eye/pupil_types/round_pupil_type.js?");

/***/ }),

/***/ "./src/js/helper/bounds_calculator.js":
/*!********************************************!*\
  !*** ./src/js/helper/bounds_calculator.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst BoundsCalculator = {\n\t\n\t//create for creating canvas based on size of boundng box\n\tcalculateBounds :function(geometry){\n\t\tlet maxX = -1;\n\t\tlet maxY = -1;\n\t\t\n\t\tfor(var point of geometry){\n\t\t\tmaxX = point.x > maxX ? point.x : maxX;\n\t\t\tmaxY = point.y > maxY ? point.y : maxY;\n\t\t}\n\n\t\treturn {\n\t\t\twidth : maxX,\n\t\t\theight : maxY\n\t\t}\n\t}\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoundsCalculator);\n\n//# sourceURL=webpack:///./src/js/helper/bounds_calculator.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entity */ \"./src/js/entity.js\");\n/* harmony import */ var assemblages_eye__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assemblages/eye */ \"./src/js/assemblages/eye.js\");\n/* harmony import */ var eye_outline_types_outline_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! eye/outline_types/outline_factory */ \"./src/js/eye/outline_types/outline_factory.js\");\n/* harmony import */ var eye_pupil_types_pupil_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! eye/pupil_types/pupil_factory */ \"./src/js/eye/pupil_types/pupil_factory.js\");\n/* harmony import */ var systems_render_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! systems/render_system */ \"./src/js/systems/render_system.js\");\n\n\n\n\n\n\n//systems\n\n\nconst canvas = document.getElementById(\"main_canvas\");\n\nfunction generateEyes(){\n\teye_outline_types_outline_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].generate();\n\teye_pupil_types_pupil_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].generate();\n\n\tlet leftEyeEntities = assemblages_eye__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n\t\teyeGeometry : eye_outline_types_outline_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(), \n\t\tpupilGeometry : eye_pupil_types_pupil_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(),\n\t\tposition : {\n\t\t\tx : 200,\n\t\t\ty : canvas.height/2 - 150\n\t\t}\n\t});\n\n\tlet rightEyeEntities = assemblages_eye__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n\t\teyeGeometry : eye_outline_types_outline_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(), \n\t\tpupilGeometry : eye_pupil_types_pupil_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(),\n\t\tposition : {\n\t\t\tx : 512,\n\t\t\ty : canvas.height/2 - 150\n\t\t}\n\t});\n\n\treturn leftEyeEntities.concat(rightEyeEntities);\n}\n\nlet currentFrame = 0;\nlet entities = [];\n\nfunction draw(time){\n\n\tif(currentFrame % 80 === 0){\n\t\tentities = generateEyes();\n\t}\n\n\tsystems_render_system__WEBPACK_IMPORTED_MODULE_4__[\"default\"].render(canvas, entities);\n\n\tcurrentFrame++;\n\trequestAnimationFrame(draw);\n}\n\ndraw();\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/systems/render_system.js":
/*!*****************************************!*\
  !*** ./src/js/systems/render_system.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst RenderSystem = {\n\n\trender : function(canvas, entities) {\n\t\tconst context = canvas.getContext('2d');\n\t\tcontext.clearRect(0, 0, canvas.width, canvas.height);\n\n\t\tfor(var entity of entities){\n\t\t\t\n\t\t\t//get position component\n\t\t\tconst posComp = entity.components[\"POSITION\"];\t\t\n\t\t\t//get geometry component\n\t\t\tconst meshComp = entity.components[\"MESH\"];\n\n\t\t\tcontext.drawImage(meshComp.canvas, posComp.x, posComp.y);\n\t\t}\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RenderSystem);\n\n//# sourceURL=webpack:///./src/js/systems/render_system.js?");

/***/ })

/******/ });