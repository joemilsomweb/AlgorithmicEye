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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entity */ \"./src/js/entity.js\");\n/* harmony import */ var components_mesh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/mesh_component */ \"./src/js/components/mesh_component.js\");\n/* harmony import */ var components_position_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/position_component */ \"./src/js/components/position_component.js\");\n\n\n\n\n\n//todo place eye at center point...\nconst eye = {\n\tcreate : function(options){\n\t\tlet eyeEntity = new entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\t\teyeEntity.addComponent(new components_mesh_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n\t\t\tgeometry : options.eyeGeometry\n\t\t}));\n\n\t\teyeEntity.addComponent(new components_position_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n\t\t\t\tx : options.position.x,\n\t\t\t\ty : options.position.y\n\t\t}));\n\n\t\tlet pupilEntity = new entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\t\tpupilEntity.addComponent(new components_mesh_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n\t\t\tgeometry : options.pupilGeometry\n\t\t}));\n\t\t\n\t\tconst eyeMesh = eyeEntity.components[\"MESH\"];\n\t\tconst pupilMesh = pupilEntity.components[\"MESH\"];\n\n\t\t//create pupil at center, refactor later\n\t\tpupilEntity.addComponent(new components_position_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n\t\t\t\tx : options.position.x,\n\t\t\t\ty : options.position.y\n\t\t}));\n\n\t\treturn [eyeEntity, pupilEntity];\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (eye);\n\n//# sourceURL=webpack:///./src/js/assemblages/eye.js?");

/***/ }),

/***/ "./src/js/components/mesh_component.js":
/*!*********************************************!*\
  !*** ./src/js/components/mesh_component.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var helper_bounds_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helper/bounds_calculator */ \"./src/js/helper/bounds_calculator.js\");\n\n\n//Class that contains the geometry, calculates the bounds based on this geometry\n//as well as creates a canvas that fits the geometry for efficiency\nclass MeshComponent{\n\t\n\tconstructor(options){\n\t\tthis.geometry = options.geometry;\n\t\tthis.bounds = helper_bounds_calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].calculateBounds(this.geometry);\n\t\tthis.createCanvas();\n\t\tthis.drawGeometry();\n\t}\n\n\t//good or bad?\n\tcreateCanvas(){\n\t\tthis.canvas = document.createElement(\"canvas\");\n\t\t\n\t\t//for now\n\t\tthis.canvas.width = this.bounds.width;\n\t\tthis.canvas.height = this.bounds.height;\n\t\tthis.context = this.canvas.getContext('2d');\n\t}\n\n\t//separate this logic out of here?? i think so\n\t//maybe makes sense for this project though??\n\tdrawGeometry(){\n\t\tthis.context.lineWidth = 3;\t\t\t\n\t\tthis.context.strokeStyle = \"#000000\";\n\n\t\tthis.context.save();\n\t\tthis.context.globalCompositeOperation = \"source-over\";\n\t\t// this.context.translate(this.canvas.width/2, this.canvas.height/2);\n\n\t\t//store as shape instead\n\t\tthis.context.beginPath();\n\t\tthis.context.moveTo(this.geometry[0].x, this.geometry[0].y);\n\t\t\t\n\t\tfor(let i = 1; i < this.geometry.length; i++){\n\t\t\tlet point = this.geometry[i];\n\t\t\tthis.context.lineTo(point.x, point.y);\n\n\t\t\tthis.context.stroke();\n\t\t}\n\n\t\t// this.context.lineTo(this.geometry[0].x, (this.geometry[0].y) );\n\t\tthis.context.stroke();\n\n\t\t// this.debugAIScript();\n\t\t// this.debugBounds();\n\t}\n\n\tdebugAIScript (){\n\t  this.context.save();\n      this.context.beginPath();\n      this.context.moveTo(6.3, 226.2);\n      this.context.bezierCurveTo(-1.0, 181.4, -1.4, 135.9, 5.1, 91.0);\n      this.context.bezierCurveTo(7.0, 77.5, 9.7, 63.7, 17.9, 51.5);\n      this.context.bezierCurveTo(22.5, 44.5, 28.9, 38.2, 35.8, 32.3);ad\n  \n      this.context.bezierCurveTo(46.3, 23.3, 58.3, 15.0, 72.7, 9.8);\n      this.context.bezierCurveTo(89.4, 3.7, 108.3, 2.3, 126.8, 1.0);\n      this.context.bezierCurveTo(135.5, 0.4, 144.8, -0.2, 152.6, 2.9);\n      this.context.bezierCurveTo(156.6, 4.5, 159.8, 6.9, 163.5, 9.0);\n      this.context.bezierCurveTo(170.7, 12.9, 179.4, 15.1, 187.0, 18.6);\n      this.context.bezierCurveTo(205.1, 27.1, 215.6, 42.6, 222.4, 58.0);\n      this.context.bezierCurveTo(237.0, 91.2, 238.2, 126.9, 239.1, 161.9);\n      this.context.bezierCurveTo(239.8, 184.6, 240.4, 207.2, 241.1, 229.8);\n      this.context.bezierCurveTo(162.1, 239.2, 81.6, 234.6, 1.9, 229.9);\n      this.context.stroke();\n      this.context.restore();\n\t}\n\n\tdebugBounds(){\n\t\tthis.context.strokeStyle = \"#000000\";\n\t\tthis.context.strokeRect(0, 0, this.bounds.width, this.bounds.height);\n\t}\n}\n\n//for use by the System, don't quite like using strings like this...\nMeshComponent.prototype.name = \"MESH\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeshComponent);\n\n//# sourceURL=webpack:///./src/js/components/mesh_component.js?");

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

/***/ "./src/js/data/outline_geometry/almond_horizontal_data.js":
/*!****************************************************************!*\
  !*** ./src/js/data/outline_geometry/almond_horizontal_data.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst almondHorizontalData = [\n\t{x : 5.78226627817185, y : 47.9438071705736} ,\n\t{x : 164.73054308257, y : 0} ,\n\t{x : 246.622476528267, y : 40.836164111588} ,\n\t{x : 206.415839266328, y : 77.3847530853236} ,\n\t{x : 172.465681447568, y : 101.60361489907} ,\n\t{x : 144.187247853186, y : 107.886428168505} ,\n\t{x : 48.1231353526573, y : 101.076403005248} ,\n\t{x : 0, y : 50.9707895638603} \n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (almondHorizontalData);\n\n//# sourceURL=webpack:///./src/js/data/outline_geometry/almond_horizontal_data.js?");

/***/ }),

/***/ "./src/js/data/outline_geometry/anime_outline_data.js":
/*!************************************************************!*\
  !*** ./src/js/data/outline_geometry/anime_outline_data.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst animeOutlineData = [\n\t{x : 4.43977362822261, y : 225.163302424083} ,\n\t{x : 3.21200498732014, y : 90.0238637282764} ,\n\t{x : 15.9860245456239, y : 50.5015987353236} ,\n\t{x : 33.8906887189642, y : 31.3128378114297} ,\n\t{x : 70.8161539798202, y : 8.79317066187195} ,\n\t{x : 124.893319128256, y : 0} ,\n\t{x : 150.68856530716, y : 1.91064439749698} ,\n\t{x : 161.643786608001, y : 7.96119168892164} ,\n\t{x : 185.103894274185, y : 17.650927792256} ,\n\t{x : 220.556257747094, y : 57.0002717774005} ,\n\t{x : 237.278883507322, y : 160.9406088195} ,\n\t{x : 239.187781613449, y : 228.794571640704} ,\n\t{x : 0, y : 228.952616546389}\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (animeOutlineData);\n\n//# sourceURL=webpack:///./src/js/data/outline_geometry/anime_outline_data.js?");

/***/ }),

/***/ "./src/js/data/pupil_geometry/almond_v_pupil_data.js":
/*!***********************************************************!*\
  !*** ./src/js/data/pupil_geometry/almond_v_pupil_data.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n{x : 0.30190964667026, y : 0.0300487724112} ,\n{x : 0, y : 0.75891713086925} ,\n{x : 0.1137986406399, y : 0.84536799636218} ,\n{x : 0.37982593604511, y : 1} ,\n{x : 0.75628093725848, y : 0.7370481776099} ,\n{x : 1, y : 0.52624700075942} ,\n{x : 0.28765217380294, y : 0}\n]);\n\n//# sourceURL=webpack:///./src/js/data/pupil_geometry/almond_v_pupil_data.js?");

/***/ }),

/***/ "./src/js/data/pupil_geometry/bean_pupil_data.js":
/*!*******************************************************!*\
  !*** ./src/js/data/pupil_geometry/bean_pupil_data.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = [\n{x : 0.36730730841013, y : 0.17576218307183} ,\n{x : 0.73700650453899, y : 0.0330506631251} ,\n{x : 0.95006073719143, y : 0} ,\n{x : 1, y : 0.12992073454718} ,\n{x : 0.90525486139575, y : 0.75820448124398} ,\n{x : 0.56867665763025, y : 1} ,\n{x : 0.22456186165127, y : 0.90403873417627} ,\n{x : 0, y : 0.41780803169612} ,\n{x : 0.00491617525659, y : 0.19375187055376} ,\n{x : 0.16972516798076, y : 0.04269048226905} ,\n{x : 0.35051870214883, y : 0.17421632103185}\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n\n//# sourceURL=webpack:///./src/js/data/pupil_geometry/bean_pupil_data.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var data_outline_geometry_almond_horizontal_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data/outline_geometry/almond_horizontal_data */ \"./src/js/data/outline_geometry/almond_horizontal_data.js\");\n\n\nconst AlmondHorizontalType = {\n\t\t\n\t\tgenerateOutline : function(){\n\t\t\treturn data_outline_geometry_almond_horizontal_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\t\t\t\t\n\t\t}\n};\t\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlmondHorizontalType);\n\n//# sourceURL=webpack:///./src/js/eye/outline_types/almond_horizontal_type.js?");

/***/ }),

/***/ "./src/js/eye/outline_types/anime_type.js":
/*!************************************************!*\
  !*** ./src/js/eye/outline_types/anime_type.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var data_outline_geometry_anime_outline_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data/outline_geometry/anime_outline_data */ \"./src/js/data/outline_geometry/anime_outline_data.js\");\n\n\n//don't need this class now, just need data... refactor later\nconst AnimeType = {\n\t\tgenerateOutline : function(){\n\t\t\treturn data_outline_geometry_anime_outline_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\t\t}\n};\t\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimeType);\n\n//# sourceURL=webpack:///./src/js/eye/outline_types/anime_type.js?");

/***/ }),

/***/ "./src/js/eye/outline_types/outline_factory.js":
/*!*****************************************************!*\
  !*** ./src/js/eye/outline_types/outline_factory.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var eye_outline_types_round_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eye/outline_types/round_type */ \"./src/js/eye/outline_types/round_type.js\");\n/* harmony import */ var eye_outline_types_anime_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eye/outline_types/anime_type */ \"./src/js/eye/outline_types/anime_type.js\");\n/* harmony import */ var eye_outline_types_almond_horizontal_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! eye/outline_types/almond_horizontal_type */ \"./src/js/eye/outline_types/almond_horizontal_type.js\");\n\n\n\n\n//maybe can be either data via points or algorithmic possibly \n//possibly could curry functions to create functions that operate on the data and to generate\n//the generateOutline function, but also have algorithmic functions coded manually   \nlet generatorFunctions = [eye_outline_types_round_type__WEBPACK_IMPORTED_MODULE_0__[\"default\"], eye_outline_types_anime_type__WEBPACK_IMPORTED_MODULE_1__[\"default\"], eye_outline_types_almond_horizontal_type__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n// let generatorFunctions = [AlmondHOutlineType];\n\n\nconst OutlineFactory = {\n\tgenerate : function(){\n\t\t//choose random generator from list\n\t\tconst generator = generatorFunctions[Math.floor(Math.random()*generatorFunctions.length)];\n\t\tthis.geometry = generator.generateOutline();\n\t},\n\n\tget : function(){\n\t\treturn this.geometry;\n\t}\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OutlineFactory);\n\n\n\n//# sourceURL=webpack:///./src/js/eye/outline_types/outline_factory.js?");

/***/ }),

/***/ "./src/js/eye/outline_types/round_type.js":
/*!************************************************!*\
  !*** ./src/js/eye/outline_types/round_type.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst RoundOutlineType = {\n\t\t\n\t\t//make it perfectly round for now\n\t\tgenerateOutline : function(){\n\t\t\t\tconst size = {\n\t\t\t\t\twidth : Math.random() * 100 + 200,\n\t\t\t\t\theight : Math.random() * 100 + 200 \n\t\t\t\t};\n\t\t\t\t\n\t\t\t\tlet outlinePoints = [];\n\t\t\t\t\n\t\t\t\t//centre point of eye\n\t\t\t\tlet centerX = size.width/2;\n\t\t\t\t\n\t\t\t\tlet currentAngle = 0;\n\n\t\t\t\twhile(currentAngle < 360){\n\t\t\t\t\tlet x = Math.sin(currentAngle * Math.PI/180) * size.width/2;\n\t\t\t\t\tlet y = Math.cos(currentAngle * Math.PI/180) * size.height/2;\n\n\t\t\t\t\tx += size.width/2;\n\t\t\t\t\ty += size.height/2;\n\t\t\t\t\t\n\t\t\t\t\toutlinePoints.push({\n\t\t\t\t\t\tx : x,\n\t\t\t\t\t\ty : y\n\t\t\t\t\t});\n\t\t\t\t\t\t\n\t\t\t\t\tcurrentAngle += 1;\t\t\n\t\t\t\t}\n\t\t\t\n\t\t\t//return geometry...\n\t\t\treturn outlinePoints;\n\t\t}\n\n\n};\t\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoundOutlineType);\n\n//# sourceURL=webpack:///./src/js/eye/outline_types/round_type.js?");

/***/ }),

/***/ "./src/js/eye/pupil_types/pupil_factory.js":
/*!*************************************************!*\
  !*** ./src/js/eye/pupil_types/pupil_factory.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var eye_pupil_types_round_pupil_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eye/pupil_types/round_pupil_type */ \"./src/js/eye/pupil_types/round_pupil_type.js\");\n/* harmony import */ var data_pupil_geometry_bean_pupil_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! data/pupil_geometry/bean_pupil_data */ \"./src/js/data/pupil_geometry/bean_pupil_data.js\");\n/* harmony import */ var data_pupil_geometry_almond_v_pupil_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! data/pupil_geometry/almond_v_pupil_data */ \"./src/js/data/pupil_geometry/almond_v_pupil_data.js\");\n//pupils from manual code\n\n\n//pupils from data. todo make curried function\n\n\n\n\n// let generatorFunctions = [BeanPupilData, RoundPupilType, VAlmondPupilData];\nlet generatorFunctions = [data_pupil_geometry_bean_pupil_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"], data_pupil_geometry_almond_v_pupil_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n\nconst PupilFactory = {\n\tgenerate : function(){\n\t\tconst generator = generatorFunctions[Math.floor(Math.random()*generatorFunctions.length)];\n\t\tif(Array.isArray(generator)){\n\t\t\tconst w = Math.random() * 40 + 20;\n\t\t\tconst h = Math.random() * 40 + 20;\n\n\t\t\tthis.geometry = generator.map((point) => {\n\t\t\t\treturn {x : point.x * w, y : point.y * h}\n\t\t\t});\n\t\t}\n\t\telse{\t\t\t\n\t\t\tthis.geometry = generator.generateOutline();\n\t\t}\n\t},\n\n\tget : function(){\n\t\treturn this.geometry;\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PupilFactory);\n\n\n\n//# sourceURL=webpack:///./src/js/eye/pupil_types/pupil_factory.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entity */ \"./src/js/entity.js\");\n/* harmony import */ var assemblages_eye__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assemblages/eye */ \"./src/js/assemblages/eye.js\");\n/* harmony import */ var eye_outline_types_outline_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! eye/outline_types/outline_factory */ \"./src/js/eye/outline_types/outline_factory.js\");\n/* harmony import */ var eye_pupil_types_pupil_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! eye/pupil_types/pupil_factory */ \"./src/js/eye/pupil_types/pupil_factory.js\");\n/* harmony import */ var systems_render_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! systems/render_system */ \"./src/js/systems/render_system.js\");\n\n\n\n\n\n\n//systems\n\n\nconst canvas = document.getElementById(\"main_canvas\");\n\n\nfunction generateEyes(){\n\teye_outline_types_outline_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].generate();\n\teye_pupil_types_pupil_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].generate();\n\n\t//todo rename Eye Assemblage\n\t//generate canvas within factories instead!! Better idea.... maybe?\n\tlet leftEyeEntities = assemblages_eye__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n\t\teyeGeometry : eye_outline_types_outline_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(), \n\t\tpupilGeometry : eye_pupil_types_pupil_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(),\n\t\tposition : {\n\t\t\tx : 300,\n\t\t\ty : canvas.height/2\n\t\t}\n\t});\n\n\tlet rightEyeEntities = assemblages_eye__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n\t\teyeGeometry : eye_outline_types_outline_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(), \n\t\tpupilGeometry : eye_pupil_types_pupil_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(),\n\t\tposition : {\n\t\t\tx : 612,\n\t\t\ty : canvas.height/2\n\t\t}\n\t});\n\n\treturn leftEyeEntities.concat(rightEyeEntities);\n}\n\nlet currentFrame = 0;\nlet entities = [];\n\n\nfunction draw(time){\n\n\t//generate new eyes every 80 frames\n\tif(currentFrame % 80 === 0){\n\t\tentities = generateEyes();\n\t}\n\n\tsystems_render_system__WEBPACK_IMPORTED_MODULE_4__[\"default\"].render(canvas, entities);\n\n\tcurrentFrame++;\n\trequestAnimationFrame(draw);\n}\n\ndraw();\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/systems/render_system.js":
/*!*****************************************!*\
  !*** ./src/js/systems/render_system.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst RenderSystem = {\n\n\trender : function(canvas, entities) {\n\t\tconst context = canvas.getContext('2d');\n\t\tcontext.clearRect(0, 0, canvas.width, canvas.height);\n\n\t\tfor(var entity of entities){\n\t\t\t\n\t\t\t//get position component\n\t\t\tconst posComp = entity.components[\"POSITION\"];\t\t\n\t\t\t//get geometry component\n\t\t\tconst meshComp = entity.components[\"MESH\"];\n\n\t\t\t//draw image at center\n\t\t\tcontext.drawImage(meshComp.canvas, posComp.x - meshComp.bounds.width/2, posComp.y - meshComp.bounds.height/2);\n\t\t}\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RenderSystem);\n\n//# sourceURL=webpack:///./src/js/systems/render_system.js?");

/***/ })

/******/ });