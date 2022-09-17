/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/extra-info-component.js":
/*!************************************************!*\
  !*** ./src/components/extra-info-component.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function extraInfoComponent(weatherInfo) {
  const speed = weatherInfo.wind.speed;
  const pressure = weatherInfo.main.pressure;
  return "\n  <div class=\"extra-info-container\">\n    <div class=\"extra-info__wrapper\">\n      <p class=\"extra-info__text\">Speed</p>\n      <p class=\"extra-info__content\">".concat(speed, " m/s</p>\n    </div>\n    <div class=\"extra-info__wrapper\">\n      <p class=\"extra-info__text\">Pressure</p>\n      <p class=\"extra-info__content\">").concat(pressure, " hPa</p>\n    </div>\n  </div> ");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extraInfoComponent);

/***/ }),

/***/ "./src/components/location-component.js":
/*!**********************************************!*\
  !*** ./src/components/location-component.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function locationComponent(weatherInfo) {
  try {
    const city = weatherInfo.name;
    const countryCode = weatherInfo.sys.country;
    return "\n  <div class=\"location-container\">\n    <p class=\"location-city\">".concat(city, "</p>\n    <p class=\"location-country-code\">").concat(countryCode, "</p>\n  </div>\n  ");
  } catch (error) {
    return '<p class="error">Failed to get city location. Check spelling and try again</p>';
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locationComponent);

/***/ }),

/***/ "./src/components/main-weather-component.js":
/*!**************************************************!*\
  !*** ./src/components/main-weather-component.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function mainWeatherComponent(weatherInfo) {
  const deg = Number(weatherInfo.main.temp).toFixed(0);
  const icon = weatherInfo.weather[0].icon;
  const description = weatherInfo.weather[0].main;
  return "\n  <div class=\"main-weather-container\">\n    <div class=\"main-weather__info-container\">\n      <p class=\"weather-info\">".concat(description, "</p>\n    </div>\n    <div class=\"main-weather__temp-container\">\n      <img class=\"weather-icon\" src=\"http://openweathermap.org/img/wn/").concat(icon, ".png\"/>\n      <p class=\"main-weather-degrees\">").concat(deg, "\xB0C</p>\n    </div>\n  </div>");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainWeatherComponent);

/***/ }),

/***/ "./src/components/renderUI.js":
/*!************************************!*\
  !*** ./src/components/renderUI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _searchbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchbar-component */ "./src/components/searchbar-component.js");
/* harmony import */ var _location_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-component */ "./src/components/location-component.js");
/* harmony import */ var _main_weather_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-weather-component */ "./src/components/main-weather-component.js");
/* harmony import */ var _extra_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extra-info-component */ "./src/components/extra-info-component.js");
/* harmony import */ var _datafetch_fetch_weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datafetch/fetch-weather */ "./src/datafetch/fetch-weather.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");






/**
 * Renders all app components. Uses an element, where it will be inserting HTML and link to fetch weather
 * @param {HTMLElement} element
 * @param {string} link
 */

function renderUI(element, link) {
  (0,_datafetch_fetch_weather__WEBPACK_IMPORTED_MODULE_4__["default"])(link).then(resp => {
    element.innerHTML = '';
    element.insertAdjacentHTML('beforeend', (0,_searchbar_component__WEBPACK_IMPORTED_MODULE_0__["default"])());
    element.insertAdjacentHTML('beforeend', (0,_location_component__WEBPACK_IMPORTED_MODULE_1__["default"])(resp));
    element.insertAdjacentHTML('beforeend', (0,_main_weather_component__WEBPACK_IMPORTED_MODULE_2__["default"])(resp));
    const mainWeatherEl = document.querySelector('.main-weather-container');
    mainWeatherEl.insertAdjacentHTML('beforeend', (0,_extra_info_component__WEBPACK_IMPORTED_MODULE_3__["default"])(resp));
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderUI);

/***/ }),

/***/ "./src/components/searchbar-component.js":
/*!***********************************************!*\
  !*** ./src/components/searchbar-component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function searchBarComponent() {
  return "\n  <div class=\"search-form-container\">\n    <form class=\"search-form\">\n      <input id=\"searchbar\" minlength=\"3\" pattern=\"[a-zA-Z]*\" type=\"text\" class=\"input\" placeholder=\"search for a city\"/>\n    </form>\n  </div>";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchBarComponent);

/***/ }),

/***/ "./src/datafetch/fetch-weather.js":
/*!****************************************!*\
  !*** ./src/datafetch/fetch-weather.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function fetchWeather(link) {
  try {
    const res = await fetch(link);
    if (!res.ok) throw new Error('weather fetching failed');
    const resJson = await res.json();
    if (resJson.cod != '200') throw new Error(resJson.message);
    return resJson;
  } catch (error) {
    return error;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeather);

/***/ }),

/***/ "./src/datafetch/get-geolocation.js":
/*!******************************************!*\
  !*** ./src/datafetch/get-geolocation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getUserLocation() {
  return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserLocation);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* RESET */\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n/* RESET */\n\n:root {\n  --main-gray-color: #272727;\n  --secondary-gray-color: #a0a0a0;\n}\n\nhtml {\n  font-family: 'IBM Plex Mono', serif;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 40px;\n  align-items: center;\n  height: 100%;\n}\n\n.search-form-container,\n.search-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n#searchbar {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 10px;\n  box-shadow: 4px 2px 17px 4px rgba(34, 60, 80, 0.2);\n  width: 40%;\n}\n\n.error {\n  color: red;\n  font-size: 12px;\n}\n\n.main-weather-container {\n  padding: 40px 80px;\n  background-color: var(--main-gray-color);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  border-radius: 20px;\n}\n\n.weather-info {\n  font-size: 40px;\n  font-weight: 700;\n}\n\n.main-weather__temp-container {\n  display: flex;\n  align-items: center;\n}\n\n.main-weather-degrees {\n  font-weight: 600;\n  font-size: 24px;\n}\n\n.location-container {\n  width: 60%;\n  padding: 0 80px;\n}\n\n.location-city {\n  color: var(--main-gray-color);\n  font-size: 46px;\n  font-weight: 700;\n}\n\n.location-country-code {\n  font-size: 24px;\n  color: var(--secondary-gray-color);\n}\n\n.extra-info-container {\n  width: 100%;\n  font-size: 24px;\n}\n\n.extra-info__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.extra-info__text {\n  font-weight: 700;\n  font-size: 24px;\n  padding-top: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA,UAAU;AACV;EACE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;;;;;;;;;;EAUE,SAAS;EACT,UAAU;EACV,mBAAmB;AACrB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA,UAAU;;AAEV;EACE,0BAA0B;EAC1B,+BAA+B;AACjC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,mBAAmB;EACnB,YAAY;AACd;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,kDAAkD;EAClD,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,wCAAwC;EACxC,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kCAAkC;AACpC;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap');\n\n/* RESET */\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n/* RESET */\n\n:root {\n  --main-gray-color: #272727;\n  --secondary-gray-color: #a0a0a0;\n}\n\nhtml {\n  font-family: 'IBM Plex Mono', serif;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 40px;\n  align-items: center;\n  height: 100%;\n}\n\n.search-form-container,\n.search-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n#searchbar {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 10px;\n  box-shadow: 4px 2px 17px 4px rgba(34, 60, 80, 0.2);\n  width: 40%;\n}\n\n.error {\n  color: red;\n  font-size: 12px;\n}\n\n.main-weather-container {\n  padding: 40px 80px;\n  background-color: var(--main-gray-color);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  border-radius: 20px;\n}\n\n.weather-info {\n  font-size: 40px;\n  font-weight: 700;\n}\n\n.main-weather__temp-container {\n  display: flex;\n  align-items: center;\n}\n\n.main-weather-degrees {\n  font-weight: 600;\n  font-size: 24px;\n}\n\n.location-container {\n  width: 60%;\n  padding: 0 80px;\n}\n\n.location-city {\n  color: var(--main-gray-color);\n  font-size: 46px;\n  font-weight: 700;\n}\n\n.location-country-code {\n  font-size: 24px;\n  color: var(--secondary-gray-color);\n}\n\n.extra-info-container {\n  width: 100%;\n  font-size: 24px;\n}\n\n.extra-info__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.extra-info__text {\n  font-weight: 700;\n  font-size: 24px;\n  padding-top: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datafetch_get_geolocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datafetch/get-geolocation */ "./src/datafetch/get-geolocation.js");
/* harmony import */ var _components_renderUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/renderUI */ "./src/components/renderUI.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



const wrapper = document.querySelector('.wrapper');

async function init() {
  // Fetching user location from browser ang getting coords
  const {
    latitude: lat,
    longitude: lng
  } = await (0,_datafetch_get_geolocation__WEBPACK_IMPORTED_MODULE_0__["default"])().then(coords => coords.coords).catch(error => {
    if (error.code === 1) {
      wrapper.insertAdjacentHTML('beforeend', '<p>Please enable location and restart page</p>');
    }
  }); // Building a link for api request

  const link = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lng, "&appid=66a86bcca603db7ee72a9999499bb3fa&units=metric");
  (0,_components_renderUI__WEBPACK_IMPORTED_MODULE_1__["default"])(wrapper, link);
}

init();
document.body.addEventListener('submit', function (e) {
  e.preventDefault();
  const formInput = document.querySelector('#searchbar');
  const cityname = formInput.value;
  const reverseGeoLink = "https://api.openweathermap.org/data/2.5/weather?q=".concat(cityname, "&appid=66a86bcca603db7ee72a9999499bb3fa&units=metric");
  (0,_components_renderUI__WEBPACK_IMPORTED_MODULE_1__["default"])(wrapper, reverseGeoLink);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsQ0FBQ3lCLE9BQUQsRUFBVXZCLElBQVYsQ0FBUjtBQUNEOztBQUVEd0IsSUFBSTtBQUVKbEIsUUFBUSxDQUFDMEIsSUFBVCxDQUFjQyxnQkFBZCxDQUErQixRQUEvQixFQUF5QyxVQUFVQyxDQUFWLEVBQWE7RUFDcERBLENBQUMsQ0FBQ0MsY0FBRjtFQUVBLE1BQU1DLFNBQVMsR0FBRzlCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFsQjtFQUVBLE1BQU04QixRQUFRLEdBQUdELFNBQVMsQ0FBQ0UsS0FBM0I7RUFDQSxNQUFNQyxjQUFjLCtEQUF3REYsUUFBeEQseURBQXBCO0VBRUF2QyxnRUFBUSxDQUFDeUIsT0FBRCxFQUFVZ0IsY0FBVixDQUFSO0FBQ0QsQ0FURCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9leHRyYS1pbmZvLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2xvY2F0aW9uLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL21haW4td2VhdGhlci1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9yZW5kZXJVSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaGJhci1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGF0YWZldGNoL2ZldGNoLXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGF0YWZldGNoL2dldC1nZW9sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGV4dHJhSW5mb0NvbXBvbmVudCh3ZWF0aGVySW5mbykge1xuICBjb25zdCBzcGVlZCA9IHdlYXRoZXJJbmZvLndpbmQuc3BlZWQ7XG4gIGNvbnN0IHByZXNzdXJlID0gd2VhdGhlckluZm8ubWFpbi5wcmVzc3VyZTtcblxuICByZXR1cm4gYFxuICA8ZGl2IGNsYXNzPVwiZXh0cmEtaW5mby1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtaW5mb19fd3JhcHBlclwiPlxuICAgICAgPHAgY2xhc3M9XCJleHRyYS1pbmZvX190ZXh0XCI+U3BlZWQ8L3A+XG4gICAgICA8cCBjbGFzcz1cImV4dHJhLWluZm9fX2NvbnRlbnRcIj4ke3NwZWVkfSBtL3M8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImV4dHJhLWluZm9fX3dyYXBwZXJcIj5cbiAgICAgIDxwIGNsYXNzPVwiZXh0cmEtaW5mb19fdGV4dFwiPlByZXNzdXJlPC9wPlxuICAgICAgPHAgY2xhc3M9XCJleHRyYS1pbmZvX19jb250ZW50XCI+JHtwcmVzc3VyZX0gaFBhPC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj4gYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXh0cmFJbmZvQ29tcG9uZW50O1xuIiwiZnVuY3Rpb24gbG9jYXRpb25Db21wb25lbnQod2VhdGhlckluZm8pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjaXR5ID0gd2VhdGhlckluZm8ubmFtZTtcbiAgICBjb25zdCBjb3VudHJ5Q29kZSA9IHdlYXRoZXJJbmZvLnN5cy5jb3VudHJ5O1xuXG4gICAgcmV0dXJuIGBcbiAgPGRpdiBjbGFzcz1cImxvY2F0aW9uLWNvbnRhaW5lclwiPlxuICAgIDxwIGNsYXNzPVwibG9jYXRpb24tY2l0eVwiPiR7Y2l0eX08L3A+XG4gICAgPHAgY2xhc3M9XCJsb2NhdGlvbi1jb3VudHJ5LWNvZGVcIj4ke2NvdW50cnlDb2RlfTwvcD5cbiAgPC9kaXY+XG4gIGA7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICc8cCBjbGFzcz1cImVycm9yXCI+RmFpbGVkIHRvIGdldCBjaXR5IGxvY2F0aW9uLiBDaGVjayBzcGVsbGluZyBhbmQgdHJ5IGFnYWluPC9wPic7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9jYXRpb25Db21wb25lbnQ7XG4iLCJmdW5jdGlvbiBtYWluV2VhdGhlckNvbXBvbmVudCh3ZWF0aGVySW5mbykge1xuICBjb25zdCBkZWcgPSBOdW1iZXIod2VhdGhlckluZm8ubWFpbi50ZW1wKS50b0ZpeGVkKDApO1xuICBjb25zdCBpY29uID0gd2VhdGhlckluZm8ud2VhdGhlclswXS5pY29uO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHdlYXRoZXJJbmZvLndlYXRoZXJbMF0ubWFpbjtcblxuICByZXR1cm4gYFxuICA8ZGl2IGNsYXNzPVwibWFpbi13ZWF0aGVyLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJtYWluLXdlYXRoZXJfX2luZm8tY29udGFpbmVyXCI+XG4gICAgICA8cCBjbGFzcz1cIndlYXRoZXItaW5mb1wiPiR7ZGVzY3JpcHRpb259PC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtYWluLXdlYXRoZXJfX3RlbXAtY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzPVwid2VhdGhlci1pY29uXCIgc3JjPVwiaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufS5wbmdcIi8+XG4gICAgICA8cCBjbGFzcz1cIm1haW4td2VhdGhlci1kZWdyZWVzXCI+JHtkZWd9wrBDPC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWluV2VhdGhlckNvbXBvbmVudDtcbiIsImltcG9ydCBzZWFyY2hCYXJDb21wb25lbnQgZnJvbSAnLi9zZWFyY2hiYXItY29tcG9uZW50JztcbmltcG9ydCBsb2NhdGlvbkNvbXBvbmVudCBmcm9tICcuL2xvY2F0aW9uLWNvbXBvbmVudCc7XG5pbXBvcnQgbWFpbldlYXRoZXJDb21wb25lbnQgZnJvbSAnLi9tYWluLXdlYXRoZXItY29tcG9uZW50JztcbmltcG9ydCBleHRyYUluZm9Db21wb25lbnQgZnJvbSAnLi9leHRyYS1pbmZvLWNvbXBvbmVudCc7XG5pbXBvcnQgZmV0Y2hXZWF0aGVyIGZyb20gJy4uL2RhdGFmZXRjaC9mZXRjaC13ZWF0aGVyJztcblxuaW1wb3J0ICcuLi9zdHlsZXMuY3NzJztcblxuLyoqXG4gKiBSZW5kZXJzIGFsbCBhcHAgY29tcG9uZW50cy4gVXNlcyBhbiBlbGVtZW50LCB3aGVyZSBpdCB3aWxsIGJlIGluc2VydGluZyBIVE1MIGFuZCBsaW5rIHRvIGZldGNoIHdlYXRoZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5rXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclVJKGVsZW1lbnQsIGxpbmspIHtcbiAgZmV0Y2hXZWF0aGVyKGxpbmspLnRoZW4oKHJlc3ApID0+IHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBzZWFyY2hCYXJDb21wb25lbnQoKSk7XG4gICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGxvY2F0aW9uQ29tcG9uZW50KHJlc3ApKTtcbiAgICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbWFpbldlYXRoZXJDb21wb25lbnQocmVzcCkpO1xuXG4gICAgY29uc3QgbWFpbldlYXRoZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdlYXRoZXItY29udGFpbmVyJyk7XG4gICAgbWFpbldlYXRoZXJFbC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGV4dHJhSW5mb0NvbXBvbmVudChyZXNwKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJVSTtcbiIsImZ1bmN0aW9uIHNlYXJjaEJhckNvbXBvbmVudCgpIHtcbiAgcmV0dXJuIGBcbiAgPGRpdiBjbGFzcz1cInNlYXJjaC1mb3JtLWNvbnRhaW5lclwiPlxuICAgIDxmb3JtIGNsYXNzPVwic2VhcmNoLWZvcm1cIj5cbiAgICAgIDxpbnB1dCBpZD1cInNlYXJjaGJhclwiIG1pbmxlbmd0aD1cIjNcIiBwYXR0ZXJuPVwiW2EtekEtWl0qXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0XCIgcGxhY2Vob2xkZXI9XCJzZWFyY2ggZm9yIGEgY2l0eVwiLz5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PmA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaEJhckNvbXBvbmVudDtcbiIsImFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihsaW5rKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gobGluayk7XG4gICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignd2VhdGhlciBmZXRjaGluZyBmYWlsZWQnKTtcblxuICAgIGNvbnN0IHJlc0pzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgaWYgKHJlc0pzb24uY29kICE9ICcyMDAnKSB0aHJvdyBuZXcgRXJyb3IocmVzSnNvbi5tZXNzYWdlKTtcblxuICAgIHJldHVybiByZXNKc29uO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaFdlYXRoZXI7XG4iLCJmdW5jdGlvbiBnZXRVc2VyTG9jYXRpb24oKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzb2x2ZSwgcmVqZWN0KVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRVc2VyTG9jYXRpb247XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUlCTStQbGV4K01vbm86d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBSRVNFVCAqL1xcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5vbCxcXG51bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogUkVTRVQgKi9cXG5cXG46cm9vdCB7XFxuICAtLW1haW4tZ3JheS1jb2xvcjogIzI3MjcyNztcXG4gIC0tc2Vjb25kYXJ5LWdyYXktY29sb3I6ICNhMGEwYTA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBNb25vJywgc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0tY29udGFpbmVyLFxcbi5zZWFyY2gtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc2VhcmNoYmFyIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiA0cHggMnB4IDE3cHggNHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblxcbi5lcnJvciB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ubWFpbi13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA0MHB4IDgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWdyYXktY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNjAlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLndlYXRoZXItaW5mbyB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubWFpbi13ZWF0aGVyX190ZW1wLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4td2VhdGhlci1kZWdyZWVzIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5sb2NhdGlvbi1jb250YWluZXIge1xcbiAgd2lkdGg6IDYwJTtcXG4gIHBhZGRpbmc6IDAgODBweDtcXG59XFxuXFxuLmxvY2F0aW9uLWNpdHkge1xcbiAgY29sb3I6IHZhcigtLW1haW4tZ3JheS1jb2xvcik7XFxuICBmb250LXNpemU6IDQ2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubG9jYXRpb24tY291bnRyeS1jb2RlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheS1jb2xvcik7XFxufVxcblxcbi5leHRyYS1pbmZvLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmV4dHJhLWluZm9fX3dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5leHRyYS1pbmZvX190ZXh0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsVUFBVTtBQUNWO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLG1CQUFtQjtBQUNyQjs7QUFFQTs7Ozs7Ozs7OztFQVVFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLDBCQUEwQjtFQUMxQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0RBQWtEO0VBQ2xELFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUlCTStQbGV4K01vbm86d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBSRVNFVCAqL1xcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5vbCxcXG51bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogUkVTRVQgKi9cXG5cXG46cm9vdCB7XFxuICAtLW1haW4tZ3JheS1jb2xvcjogIzI3MjcyNztcXG4gIC0tc2Vjb25kYXJ5LWdyYXktY29sb3I6ICNhMGEwYTA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBNb25vJywgc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0tY29udGFpbmVyLFxcbi5zZWFyY2gtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc2VhcmNoYmFyIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiA0cHggMnB4IDE3cHggNHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblxcbi5lcnJvciB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ubWFpbi13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA0MHB4IDgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWdyYXktY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNjAlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLndlYXRoZXItaW5mbyB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubWFpbi13ZWF0aGVyX190ZW1wLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4td2VhdGhlci1kZWdyZWVzIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5sb2NhdGlvbi1jb250YWluZXIge1xcbiAgd2lkdGg6IDYwJTtcXG4gIHBhZGRpbmc6IDAgODBweDtcXG59XFxuXFxuLmxvY2F0aW9uLWNpdHkge1xcbiAgY29sb3I6IHZhcigtLW1haW4tZ3JheS1jb2xvcik7XFxuICBmb250LXNpemU6IDQ2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubG9jYXRpb24tY291bnRyeS1jb2RlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheS1jb2xvcik7XFxufVxcblxcbi5leHRyYS1pbmZvLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmV4dHJhLWluZm9fX3dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5leHRyYS1pbmZvX190ZXh0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBnZXRVc2VyTG9jYXRpb24gZnJvbSAnLi9kYXRhZmV0Y2gvZ2V0LWdlb2xvY2F0aW9uJztcbmltcG9ydCByZW5kZXJVSSBmcm9tICcuL2NvbXBvbmVudHMvcmVuZGVyVUknO1xuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAvLyBGZXRjaGluZyB1c2VyIGxvY2F0aW9uIGZyb20gYnJvd3NlciBhbmcgZ2V0dGluZyBjb29yZHNcbiAgY29uc3QgeyBsYXRpdHVkZTogbGF0LCBsb25naXR1ZGU6IGxuZyB9ID0gYXdhaXQgZ2V0VXNlckxvY2F0aW9uKClcbiAgICAudGhlbigoY29vcmRzKSA9PiBjb29yZHMuY29vcmRzKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvci5jb2RlID09PSAxKSB7XG4gICAgICAgIHdyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICAgICc8cD5QbGVhc2UgZW5hYmxlIGxvY2F0aW9uIGFuZCByZXN0YXJ0IHBhZ2U8L3A+J1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIC8vIEJ1aWxkaW5nIGEgbGluayBmb3IgYXBpIHJlcXVlc3RcbiAgY29uc3QgbGluayA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xuZ30mYXBwaWQ9NjZhODZiY2NhNjAzZGI3ZWU3MmE5OTk5NDk5YmIzZmEmdW5pdHM9bWV0cmljYDtcblxuICByZW5kZXJVSSh3cmFwcGVyLCBsaW5rKTtcbn1cblxuaW5pdCgpO1xuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBmb3JtSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoYmFyJyk7XG5cbiAgY29uc3QgY2l0eW5hbWUgPSBmb3JtSW5wdXQudmFsdWU7XG4gIGNvbnN0IHJldmVyc2VHZW9MaW5rID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5bmFtZX0mYXBwaWQ9NjZhODZiY2NhNjAzZGI3ZWU3MmE5OTk5NDk5YmIzZmEmdW5pdHM9bWV0cmljYDtcblxuICByZW5kZXJVSSh3cmFwcGVyLCByZXZlcnNlR2VvTGluayk7XG59KTtcbiJdLCJuYW1lcyI6WyJleHRyYUluZm9Db21wb25lbnQiLCJ3ZWF0aGVySW5mbyIsInNwZWVkIiwid2luZCIsInByZXNzdXJlIiwibWFpbiIsImxvY2F0aW9uQ29tcG9uZW50IiwiY2l0eSIsIm5hbWUiLCJjb3VudHJ5Q29kZSIsInN5cyIsImNvdW50cnkiLCJlcnJvciIsIm1haW5XZWF0aGVyQ29tcG9uZW50IiwiZGVnIiwiTnVtYmVyIiwidGVtcCIsInRvRml4ZWQiLCJpY29uIiwid2VhdGhlciIsImRlc2NyaXB0aW9uIiwic2VhcmNoQmFyQ29tcG9uZW50IiwiZmV0Y2hXZWF0aGVyIiwicmVuZGVyVUkiLCJlbGVtZW50IiwibGluayIsInRoZW4iLCJyZXNwIiwiaW5uZXJIVE1MIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwibWFpbldlYXRoZXJFbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsInJlc0pzb24iLCJqc29uIiwiY29kIiwibWVzc2FnZSIsImdldFVzZXJMb2NhdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJ3cmFwcGVyIiwiaW5pdCIsImxhdGl0dWRlIiwibGF0IiwibG9uZ2l0dWRlIiwibG5nIiwiY29vcmRzIiwiY2F0Y2giLCJjb2RlIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtSW5wdXQiLCJjaXR5bmFtZSIsInZhbHVlIiwicmV2ZXJzZUdlb0xpbmsiXSwic291cmNlUm9vdCI6IiJ9