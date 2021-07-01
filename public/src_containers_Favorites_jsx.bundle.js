(self["webpackChunkreactgen6"] = self["webpackChunkreactgen6"] || []).push([["src_containers_Favorites_jsx"],{

/***/ "./src/components/Favorites/FavoriteGifs.jsx":
/*!***************************************************!*\
  !*** ./src/components/Favorites/FavoriteGifs.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_css_components_FavoriteList_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/css/components/FavoriteList.scss */ "./src/assets/css/components/FavoriteList.scss");
/* harmony import */ var _Gifs_GifsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Gifs/GifsCard */ "./src/components/Gifs/GifsCard.jsx");
/* harmony import */ var _plugins_Empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugins/Empty */ "./src/components/plugins/Empty.jsx");






var FavoriteGifs = function FavoriteGifs(props) {
  var keyTipo = props.keyTipo,
      favoriteCharacters = props.favoriteCharacters;
  console.log(props);
  var result = favoriteCharacters.filter(function (favoriteCharacter) {
    return favoriteCharacter.tipo === keyTipo;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, favoriteCharacters.length === 0 || result.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_plugins_Empty__WEBPACK_IMPORTED_MODULE_4__.default, {
    text: "No tienes Favoritos"
  }) : result === [] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_plugins_Empty__WEBPACK_IMPORTED_MODULE_4__.default, {
    text: "No tienes Favoritos"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container d-flex  align-items-center h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row row-content"
  }, result.map(function (character) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-4 mt-3",
      key: character.data.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Gifs_GifsCard__WEBPACK_IMPORTED_MODULE_3__.default, {
      key: character.data.id,
      data: character.data
    }));
  }))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    favoriteCharacters: state.favoriteCharacters
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, null)(FavoriteGifs));

/***/ }),

/***/ "./src/components/Favorites/FavoriteList.jsx":
/*!***************************************************!*\
  !*** ./src/components/Favorites/FavoriteList.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_css_components_FavoriteList_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/css/components/FavoriteList.scss */ "./src/assets/css/components/FavoriteList.scss");
/* harmony import */ var _Marvel_Character__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Marvel/Character */ "./src/components/Marvel/Character.jsx");
/* harmony import */ var _plugins_Empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plugins/Empty */ "./src/components/plugins/Empty.jsx");







var FavoriteList = function FavoriteList(props) {
  var keyTipo = props.keyTipo,
      favoriteCharacters = props.favoriteCharacters;
  var result = favoriteCharacters.filter(function (favoriteCharacter) {
    return favoriteCharacter.tipo === keyTipo;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, favoriteCharacters.length === 0 || result.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_plugins_Empty__WEBPACK_IMPORTED_MODULE_5__.default, {
    text: "No tienes Favoritos"
  }) : result === [] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_plugins_Empty__WEBPACK_IMPORTED_MODULE_5__.default, {
    text: "No tienes Favoritos"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container d-flex justify-content-center align-items-center h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, result.map(function (character) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-4 mt-3",
      key: character.data.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Marvel_Character__WEBPACK_IMPORTED_MODULE_4__.default, {
      key: character.data.id,
      data: character.data
    }));
  }))));
};

_Marvel_Character__WEBPACK_IMPORTED_MODULE_4__.default.propTypes = {
  keyTipo: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  favoriteCharacters: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    favoriteCharacters: state.favoriteCharacters
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, null)(FavoriteList));

/***/ }),

/***/ "./src/containers/Favorites.jsx":
/*!**************************************!*\
  !*** ./src/containers/Favorites.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Favorites_FavoriteList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Favorites/FavoriteList */ "./src/components/Favorites/FavoriteList.jsx");
/* harmony import */ var _components_Favorites_FavoriteGifs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Favorites/FavoriteGifs */ "./src/components/Favorites/FavoriteGifs.jsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tabs.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var _assets_css_components_FavoriteList_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/css/components/FavoriteList.scss */ "./src/assets/css/components/FavoriteList.scss");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error */ "./src/error/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Favorites = function Favorites() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Marvel'),
      _useState2 = _slicedToArray(_useState, 2),
      key = _useState2[0],
      setKey = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
    defaultActiveKey: "Marvel",
    activeKey: key,
    onSelect: function onSelect(k) {
      return setKey(k);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    eventKey: "Marvel",
    title: "Marvel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container d-flex justify-content-center align-items-center h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12 mt-3"
  }, key === 'Marvel' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Favorites_FavoriteList__WEBPACK_IMPORTED_MODULE_1__.default, {
    keyTipo: key
  }) : '')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    eventKey: "Gifs",
    title: "Gifs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container d-flex justify-content-center align-items-center h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row row-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Favorites_FavoriteGifs__WEBPACK_IMPORTED_MODULE_2__.default, {
    keyTipo: key
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_error__WEBPACK_IMPORTED_MODULE_4__.withError)(Favorites));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/components/FavoriteList.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/components/FavoriteList.scss ***!
  \**********************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box; }\n\na:link,\na:visited {\n  color: inherit;\n  text-decoration: none; }\n\nbody {\n  margin: 0;\n  color: #ffffff80;\n  font-family: \"Source Sans Pro\", sans-serif; }\n\nh1,\nh2,\nh3,\nh3,\nh5,\nh6 {\n  color: #020202;\n  font-family: \"Oswald\", sans-serif; }\n\nh4 {\n  color: #fff;\n  font-family: \"Oswald\", sans-serif; }\n\nfigure {\n  margin: 0;\n  padding: 0; }\n\nsection {\n  min-height: calc(100vh - 300px); }\n\n.favoriteList {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap; }\n\n.row-content {\n  display: inherit !important; }\n\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\n  color: #2f7ed0  !important;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff; }\n\n.nav-tabs .nav-link {\n  color: #99a0a7 !important;\n  margin-bottom: -1px;\n  border: 1px solid transparent;\n  border-top-left-radius: .25rem;\n  border-top-right-radius: .25rem; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0rem 0rem;\n  background-color: transparent !important;\n  border: 0px solid transparent;\n  color: #0a0a0a; }\n", "",{"version":3,"sources":["webpack://./src/assets/css/App.scss","webpack://./src/assets/css/Vars.scss","webpack://./src/assets/css/components/FavoriteList.scss"],"names":[],"mappings":"AA2BA;EACE,sBAAsB,EAAA;;AAGxB;;EAEE,cAAc;EACd,qBAAqB,EAAA;;AAGvB;EACE,SAAS;EAET,gBC7BqB;ED8BrB,0CCrCuC,EAAA;;ADwCzC;;;;;;EAOE,cC5CqB;ED6CrB,iCCjD+B,EAAA;;ADoDjC;EAEE,WC3CgB;ED4ChB,iCCvD+B,EAAA;;AD0DjC;EACE,SAAS;EACT,UAAU,EAAA;;AAGZ;EACE,+BAA+B,EAAA;;AEjEjC;EFcE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EEdnB,eAAe,EAAA;;AAGjB;EAEE,2BAA2B,EAAA;;AAK7B;EACI,0BAA0B;EAC1B,sBAAsB;EACtB,kCAAkC,EAAA;;AAGtC;EACG,yBAAyB;EACxB,mBAAmB;EACnB,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B,EAAA;;AAGnC;EACE,kBAAkB;EAClB,cAAc;EACd,kBAAkB;EAClB,wCAAwC;EACvC,6BAA6B;EAC7B,cAAc,EAAA","sourcesContent":["@import './Vars.scss';\r\n\r\n@mixin colCenCen {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@mixin flexBetCen {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexCenCen {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexStaSta {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\na:link,\r\na:visited {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  //background-color: $dark-color;\r\n  color: $light-color;\r\n  font-family: $text-font;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh3,\r\n//h4,\r\nh5,\r\nh6 {\r\n  color: $primary-color;\r\n  font-family: $title-font;\r\n}\r\n\r\nh4\r\n {\r\n  color: $white-color;\r\n  font-family: $title-font;\r\n}\r\n\r\nfigure {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nsection {\r\n  min-height: calc(100vh - 300px);\r\n}\r\n","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\r\n\r\n//Fonts\r\n$title-font: 'Oswald', sans-serif;\r\n$text-font: 'Source Sans Pro', sans-serif;\r\n\r\n//Colors\r\n$primary-color: #020202;\r\n$secondary-color: #62c241;\r\n$success-color: #faf76a;\r\n$dark-color: #000000;\r\n$light-color: #ffffff80;\r\n$danger-color: #fc859e;\r\n$header-color: #65fafb;\r\n$white-color: #fff;\r\n$modal-color: #701d7f;\r\n\r\n","@import '../App.scss';\r\n\r\n.favoriteList {\r\n  @include flexCenCen;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.row-content{\r\n\r\n  display: inherit !important;\r\n}\r\n\r\n\r\n\r\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\r\n    color: #2f7ed0  !important;\r\n    background-color: #fff;\r\n    border-color: #dee2e6 #dee2e6 #fff;\r\n}\r\n\r\n.nav-tabs .nav-link {\r\n   color: #99a0a7 !important;\r\n    margin-bottom: -1px;\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: .25rem;\r\n    border-top-right-radius: .25rem;\r\n}\r\n\r\n.list-group-item {\r\n  position: relative;\r\n  display: block;\r\n  padding: 0rem 0rem; \r\n  background-color: transparent !important;\r\n   border: 0px solid transparent; \r\n   color: #0a0a0a;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/css/components/FavoriteList.scss":
/*!*****************************************************!*\
  !*** ./src/assets/css/components/FavoriteList.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FavoriteList_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./FavoriteList.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/components/FavoriteList.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FavoriteList_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FavoriteList_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_containers_Favorites_jsx.bundle.js.map