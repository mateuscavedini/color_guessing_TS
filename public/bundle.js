/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _endGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endGame */ \"./src/endGame.ts\");\n/* harmony import */ var _gameCycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameCycle */ \"./src/gameCycle.ts\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ \"./src/variables.ts\");\n\r\n\r\n\r\n// EventListeners\r\n// starts game on load\r\nwindow.addEventListener(\"load\", () => {\r\n    (0,_variables__WEBPACK_IMPORTED_MODULE_2__.setEasyMode)(true);\r\n    (0,_gameCycle__WEBPACK_IMPORTED_MODULE_1__.gameCycle)();\r\n});\r\n// starts new game\r\n_variables__WEBPACK_IMPORTED_MODULE_2__.btnNew.addEventListener(\"click\", _gameCycle__WEBPACK_IMPORTED_MODULE_1__.gameCycle);\r\n// selects easy mode and starts game\r\n_variables__WEBPACK_IMPORTED_MODULE_2__.btnEasy.addEventListener(\"click\", () => {\r\n    (0,_variables__WEBPACK_IMPORTED_MODULE_2__.setEasyMode)(true);\r\n    (0,_gameCycle__WEBPACK_IMPORTED_MODULE_1__.gameCycle)();\r\n});\r\n// selects hard mode and starts game\r\n_variables__WEBPACK_IMPORTED_MODULE_2__.btnHard.addEventListener(\"click\", () => {\r\n    (0,_variables__WEBPACK_IMPORTED_MODULE_2__.setEasyMode)(false);\r\n    (0,_gameCycle__WEBPACK_IMPORTED_MODULE_1__.gameCycle)();\r\n});\r\n_variables__WEBPACK_IMPORTED_MODULE_2__.squares.forEach(sqr => {\r\n    // disables clicking the squares if game is over\r\n    if (_variables__WEBPACK_IMPORTED_MODULE_2__.isOver) {\r\n        return;\r\n    }\r\n    // checks if the clicked square's background color matches with the selected color. ends game if true\r\n    sqr.addEventListener(\"click\", () => {\r\n        if (_variables__WEBPACK_IMPORTED_MODULE_2__.selectedRGB !== sqr.style.backgroundColor) {\r\n            sqr.classList.add(\"remove\");\r\n            _variables__WEBPACK_IMPORTED_MODULE_2__.result.classList.remove(\"hidden\");\r\n            return;\r\n        }\r\n        (0,_endGame__WEBPACK_IMPORTED_MODULE_0__.endGame)();\r\n    });\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBbUM7QUFDSTtBQUNrRTtBQUV6RyxpQkFBaUI7QUFFakIsc0JBQXNCO0FBQ3RCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBQ2pDLHVEQUFXLENBQUMsSUFBSSxDQUFDO0lBQ2pCLHFEQUFTLEVBQUU7QUFDZixDQUFDLENBQUM7QUFFRixrQkFBa0I7QUFDbEIsK0RBQXVCLENBQUMsT0FBTyxFQUFFLGlEQUFTLENBQUM7QUFFM0Msb0NBQW9DO0FBQ3BDLGdFQUF3QixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDbkMsdURBQVcsQ0FBQyxJQUFJLENBQUM7SUFDakIscURBQVMsRUFBRTtBQUNmLENBQUMsQ0FBQztBQUVGLG9DQUFvQztBQUNwQyxnRUFBd0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ25DLHVEQUFXLENBQUMsS0FBSyxDQUFDO0lBQ2xCLHFEQUFTLEVBQUU7QUFDZixDQUFDLENBQUM7QUFFRix1REFBZSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0lBQ2xCLGdEQUFnRDtJQUNoRCxJQUFJLDhDQUFNLEVBQUU7UUFDUixPQUFNO0tBQ1Q7SUFFRCxxR0FBcUc7SUFDckcsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDL0IsSUFBSSxtREFBVyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFO1lBQzNDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUMzQiwrREFBdUIsQ0FBQyxRQUFRLENBQUM7WUFDakMsT0FBTTtTQUNUO1FBRUQsaURBQU8sRUFBRTtJQUNiLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbG9yX2d1ZXNzaW5nX3RzLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVuZEdhbWUgfSBmcm9tIFwiLi9lbmRHYW1lXCJcclxuaW1wb3J0IHsgZ2FtZUN5Y2xlIH0gZnJvbSBcIi4vZ2FtZUN5Y2xlXCJcclxuaW1wb3J0IHsgYnRuRWFzeSwgYnRuSGFyZCwgYnRuTmV3LCBpc092ZXIsIHJlc3VsdCwgc2VsZWN0ZWRSR0IsIHNldEVhc3lNb2RlLCBzcXVhcmVzIH0gZnJvbSBcIi4vdmFyaWFibGVzXCJcclxuXHJcbi8vIEV2ZW50TGlzdGVuZXJzXHJcblxyXG4vLyBzdGFydHMgZ2FtZSBvbiBsb2FkXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICBzZXRFYXN5TW9kZSh0cnVlKVxyXG4gICAgZ2FtZUN5Y2xlKClcclxufSlcclxuXHJcbi8vIHN0YXJ0cyBuZXcgZ2FtZVxyXG5idG5OZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWVDeWNsZSlcclxuXHJcbi8vIHNlbGVjdHMgZWFzeSBtb2RlIGFuZCBzdGFydHMgZ2FtZVxyXG5idG5FYXN5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBzZXRFYXN5TW9kZSh0cnVlKVxyXG4gICAgZ2FtZUN5Y2xlKClcclxufSlcclxuXHJcbi8vIHNlbGVjdHMgaGFyZCBtb2RlIGFuZCBzdGFydHMgZ2FtZVxyXG5idG5IYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBzZXRFYXN5TW9kZShmYWxzZSlcclxuICAgIGdhbWVDeWNsZSgpXHJcbn0pXHJcblxyXG5zcXVhcmVzLmZvckVhY2goc3FyID0+IHtcclxuICAgIC8vIGRpc2FibGVzIGNsaWNraW5nIHRoZSBzcXVhcmVzIGlmIGdhbWUgaXMgb3ZlclxyXG4gICAgaWYgKGlzT3Zlcikge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrcyBpZiB0aGUgY2xpY2tlZCBzcXVhcmUncyBiYWNrZ3JvdW5kIGNvbG9yIG1hdGNoZXMgd2l0aCB0aGUgc2VsZWN0ZWQgY29sb3IuIGVuZHMgZ2FtZSBpZiB0cnVlXHJcbiAgICBzcXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRSR0IgIT09IHNxci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IpIHtcclxuICAgICAgICAgICAgc3FyLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVcIilcclxuICAgICAgICAgICAgcmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbmRHYW1lKClcclxuICAgIH0pXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/checkColorBrightness.ts":
/*!*************************************!*\
  !*** ./src/checkColorBrightness.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkColorBrightness\": () => (/* binding */ checkColorBrightness)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.ts\");\n\r\n// checks the color brightness of the selected color, in order to choose the best readable text color\r\nconst checkColorBrightness = () => {\r\n    const colorArray = _variables__WEBPACK_IMPORTED_MODULE_0__.selectedRGB.replace(/[rgb() ]/g, \"\").split(\",\").map(Number);\r\n    const colorBrightness = ((colorArray[0] * 299) + (colorArray[1] * 587) + (colorArray[2] * 114)) / 1000;\r\n    if (colorBrightness > 125) {\r\n        return true;\r\n    }\r\n    else {\r\n        return false;\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hlY2tDb2xvckJyaWdodG5lc3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7QUFFekMscUdBQXFHO0FBRTlGLE1BQU0sb0JBQW9CLEdBQUcsR0FBWSxFQUFFO0lBQzlDLE1BQU0sVUFBVSxHQUFHLDJEQUFtQixDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUM5RSxNQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSTtJQUV0RyxJQUFJLGVBQWUsR0FBRyxHQUFHLEVBQUU7UUFDdkIsT0FBTyxJQUFJO0tBQ2Q7U0FBTTtRQUNILE9BQU8sS0FBSztLQUNmO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbG9yX2d1ZXNzaW5nX3RzLy4vc3JjL2NoZWNrQ29sb3JCcmlnaHRuZXNzLnRzPzZhYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VsZWN0ZWRSR0IgfSBmcm9tIFwiLi92YXJpYWJsZXNcIlxyXG5cclxuLy8gY2hlY2tzIHRoZSBjb2xvciBicmlnaHRuZXNzIG9mIHRoZSBzZWxlY3RlZCBjb2xvciwgaW4gb3JkZXIgdG8gY2hvb3NlIHRoZSBiZXN0IHJlYWRhYmxlIHRleHQgY29sb3JcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0NvbG9yQnJpZ2h0bmVzcyA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIGNvbnN0IGNvbG9yQXJyYXkgPSBzZWxlY3RlZFJHQi5yZXBsYWNlKC9bcmdiKCkgXS9nLCBcIlwiKS5zcGxpdChcIixcIikubWFwKE51bWJlcilcclxuICAgIGNvbnN0IGNvbG9yQnJpZ2h0bmVzcyA9ICgoY29sb3JBcnJheVswXSAqIDI5OSkgKyAoY29sb3JBcnJheVsxXSAqIDU4NykgKyAoY29sb3JBcnJheVsyXSAqIDExNCkpIC8gMTAwMFxyXG5cclxuICAgIGlmIChjb2xvckJyaWdodG5lc3MgPiAxMjUpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/checkColorBrightness.ts\n");

/***/ }),

/***/ "./src/colorGenerator.ts":
/*!*******************************!*\
  !*** ./src/colorGenerator.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"colorGenerator\": () => (/* binding */ colorGenerator)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.ts\");\n\r\n// generates random colors for all squares\r\nconst colorGenerator = () => {\r\n    _variables__WEBPACK_IMPORTED_MODULE_0__.squares.forEach(sqr => {\r\n        const r = Math.round(Math.random() * 255);\r\n        const g = Math.round(Math.random() * 255);\r\n        const b = Math.round(Math.random() * 255);\r\n        sqr.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;\r\n    });\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29sb3JHZW5lcmF0b3IudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUM7QUFFckMsMENBQTBDO0FBRW5DLE1BQU0sY0FBYyxHQUFHLEdBQVMsRUFBRTtJQUNyQyx1REFBZSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUN6QyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDekMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3pDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUc7SUFDdkQsQ0FBQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbG9yX2d1ZXNzaW5nX3RzLy4vc3JjL2NvbG9yR2VuZXJhdG9yLnRzPzQ2NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3F1YXJlcyB9IGZyb20gXCIuL3ZhcmlhYmxlc1wiXHJcblxyXG4vLyBnZW5lcmF0ZXMgcmFuZG9tIGNvbG9ycyBmb3IgYWxsIHNxdWFyZXNcclxuXHJcbmV4cG9ydCBjb25zdCBjb2xvckdlbmVyYXRvciA9ICgpOiB2b2lkID0+IHtcclxuICAgIHNxdWFyZXMuZm9yRWFjaChzcXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyNTUpXHJcbiAgICAgICAgY29uc3QgZyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI1NSlcclxuICAgICAgICBjb25zdCBiID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjU1KVxyXG4gICAgICAgIHNxci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYFxyXG4gICAgfSlcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/colorGenerator.ts\n");

/***/ }),

/***/ "./src/colorSelector.ts":
/*!******************************!*\
  !*** ./src/colorSelector.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"colorSelector\": () => (/* binding */ colorSelector)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.ts\");\n\r\n// selects a random color from the generated ones\r\nconst colorSelector = () => {\r\n    const maxIndex = _variables__WEBPACK_IMPORTED_MODULE_0__.easyMode ? 2 : 5;\r\n    const selectedIndex = Math.round(Math.random() * maxIndex);\r\n    (0,_variables__WEBPACK_IMPORTED_MODULE_0__.setSelectedRGB)(_variables__WEBPACK_IMPORTED_MODULE_0__.squares[selectedIndex].style.backgroundColor);\r\n    _variables__WEBPACK_IMPORTED_MODULE_0__.display.textContent = _variables__WEBPACK_IMPORTED_MODULE_0__.selectedRGB.toUpperCase();\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29sb3JTZWxlY3Rvci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxRjtBQUVyRixpREFBaUQ7QUFFMUMsTUFBTSxhQUFhLEdBQUcsR0FBUyxFQUFFO0lBQ3BDLE1BQU0sUUFBUSxHQUFHLGdEQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVqQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUM7SUFDMUQsMERBQWMsQ0FBQywrQ0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7SUFFNUQsMkRBQW1CLEdBQUcsK0RBQXVCLEVBQUU7QUFDbkQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbG9yX2d1ZXNzaW5nX3RzLy4vc3JjL2NvbG9yU2VsZWN0b3IudHM/YmI5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlYXN5TW9kZSwgc2VsZWN0ZWRSR0IsIHNldFNlbGVjdGVkUkdCLCBzcXVhcmVzLCBkaXNwbGF5IH0gZnJvbSBcIi4vdmFyaWFibGVzXCJcclxuXHJcbi8vIHNlbGVjdHMgYSByYW5kb20gY29sb3IgZnJvbSB0aGUgZ2VuZXJhdGVkIG9uZXNcclxuXHJcbmV4cG9ydCBjb25zdCBjb2xvclNlbGVjdG9yID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgbWF4SW5kZXggPSBlYXN5TW9kZSA/IDIgOiA1XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIG1heEluZGV4KVxyXG4gICAgc2V0U2VsZWN0ZWRSR0Ioc3F1YXJlc1tzZWxlY3RlZEluZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IpXHJcblxyXG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9IHNlbGVjdGVkUkdCLnRvVXBwZXJDYXNlKClcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/colorSelector.ts\n");

/***/ }),

/***/ "./src/endGame.ts":
/*!************************!*\
  !*** ./src/endGame.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"endGame\": () => (/* binding */ endGame)\n/* harmony export */ });\n/* harmony import */ var _setDisplayTextColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setDisplayTextColor */ \"./src/setDisplayTextColor.ts\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ \"./src/variables.ts\");\n\r\n\r\n// ends game\r\nconst endGame = () => {\r\n    (0,_variables__WEBPACK_IMPORTED_MODULE_1__.setIsOver)(true);\r\n    _variables__WEBPACK_IMPORTED_MODULE_1__.btnNew.textContent = \"PLAY AGAIN\";\r\n    _variables__WEBPACK_IMPORTED_MODULE_1__.result.textContent = \"CORRECT!\";\r\n    _variables__WEBPACK_IMPORTED_MODULE_1__.result.classList.remove(\"hidden\");\r\n    _variables__WEBPACK_IMPORTED_MODULE_1__.display.style.backgroundColor = _variables__WEBPACK_IMPORTED_MODULE_1__.selectedRGB;\r\n    (0,_setDisplayTextColor__WEBPACK_IMPORTED_MODULE_0__.setDisplayTextColor)();\r\n    _variables__WEBPACK_IMPORTED_MODULE_1__.squares.forEach(sqr => {\r\n        sqr.classList.remove(\"remove\");\r\n        sqr.style.backgroundColor = _variables__WEBPACK_IMPORTED_MODULE_1__.selectedRGB;\r\n    });\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW5kR2FtZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkQ7QUFDMkI7QUFFdEYsWUFBWTtBQUVMLE1BQU0sT0FBTyxHQUFHLEdBQVMsRUFBRTtJQUM5QixxREFBUyxDQUFDLElBQUksQ0FBQztJQUNmLDBEQUFrQixHQUFHLFlBQVk7SUFDakMsMERBQWtCLEdBQUcsVUFBVTtJQUMvQiwrREFBdUIsQ0FBQyxRQUFRLENBQUM7SUFDakMscUVBQTZCLEdBQUcsbURBQVc7SUFFM0MseUVBQW1CLEVBQUU7SUFFckIsdURBQWUsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNsQixHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDOUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsbURBQVc7SUFDM0MsQ0FBQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbG9yX2d1ZXNzaW5nX3RzLy4vc3JjL2VuZEdhbWUudHM/ZjU1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXREaXNwbGF5VGV4dENvbG9yIH0gZnJvbSBcIi4vc2V0RGlzcGxheVRleHRDb2xvclwiXHJcbmltcG9ydCB7IGJ0bk5ldywgZGlzcGxheSwgcmVzdWx0LCBzZWxlY3RlZFJHQiwgc2V0SXNPdmVyLCBzcXVhcmVzIH0gZnJvbSBcIi4vdmFyaWFibGVzXCJcclxuXHJcbi8vIGVuZHMgZ2FtZVxyXG5cclxuZXhwb3J0IGNvbnN0IGVuZEdhbWUgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBzZXRJc092ZXIodHJ1ZSlcclxuICAgIGJ0bk5ldy50ZXh0Q29udGVudCA9IFwiUExBWSBBR0FJTlwiXHJcbiAgICByZXN1bHQudGV4dENvbnRlbnQgPSBcIkNPUlJFQ1QhXCJcclxuICAgIHJlc3VsdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXHJcbiAgICBkaXNwbGF5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNlbGVjdGVkUkdCXHJcbiAgICBcclxuICAgIHNldERpc3BsYXlUZXh0Q29sb3IoKVxyXG5cclxuICAgIHNxdWFyZXMuZm9yRWFjaChzcXIgPT4ge1xyXG4gICAgICAgIHNxci5jbGFzc0xpc3QucmVtb3ZlKFwicmVtb3ZlXCIpXHJcbiAgICAgICAgc3FyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNlbGVjdGVkUkdCXHJcbiAgICB9KVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/endGame.ts\n");

/***/ }),

/***/ "./src/gameCycle.ts":
/*!**************************!*\
  !*** ./src/gameCycle.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameCycle\": () => (/* binding */ gameCycle)\n/* harmony export */ });\n/* harmony import */ var _colorGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorGenerator */ \"./src/colorGenerator.ts\");\n/* harmony import */ var _colorSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorSelector */ \"./src/colorSelector.ts\");\n/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset */ \"./src/reset.ts\");\n/* harmony import */ var _toggleBtnColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggleBtnColor */ \"./src/toggleBtnColor.ts\");\n/* harmony import */ var _toggleSqrVisibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggleSqrVisibility */ \"./src/toggleSqrVisibility.ts\");\n\r\n\r\n\r\n\r\n\r\n// starts game\r\nconst gameCycle = () => {\r\n    (0,_reset__WEBPACK_IMPORTED_MODULE_2__.reset)();\r\n    (0,_colorGenerator__WEBPACK_IMPORTED_MODULE_0__.colorGenerator)();\r\n    (0,_colorSelector__WEBPACK_IMPORTED_MODULE_1__.colorSelector)();\r\n    (0,_toggleBtnColor__WEBPACK_IMPORTED_MODULE_3__.toggleBtnColor)();\r\n    (0,_toggleSqrVisibility__WEBPACK_IMPORTED_MODULE_4__.toggleSqrVisibility)();\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZUN5Y2xlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQUNGO0FBQ2hCO0FBQ2tCO0FBQ1U7QUFFM0QsY0FBYztBQUVQLE1BQU0sU0FBUyxHQUFHLEdBQVMsRUFBRTtJQUNoQyw2Q0FBSyxFQUFFO0lBQ1AsK0RBQWMsRUFBRTtJQUNoQiw2REFBYSxFQUFFO0lBQ2YsK0RBQWMsRUFBRTtJQUNoQix5RUFBbUIsRUFBRTtBQUN6QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29sb3JfZ3Vlc3NpbmdfdHMvLi9zcmMvZ2FtZUN5Y2xlLnRzPzczMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sb3JHZW5lcmF0b3IgfSBmcm9tIFwiLi9jb2xvckdlbmVyYXRvclwiXHJcbmltcG9ydCB7IGNvbG9yU2VsZWN0b3IgfSBmcm9tIFwiLi9jb2xvclNlbGVjdG9yXCJcclxuaW1wb3J0IHsgcmVzZXQgfSBmcm9tIFwiLi9yZXNldFwiXHJcbmltcG9ydCB7IHRvZ2dsZUJ0bkNvbG9yIH0gZnJvbSBcIi4vdG9nZ2xlQnRuQ29sb3JcIlxyXG5pbXBvcnQgeyB0b2dnbGVTcXJWaXNpYmlsaXR5IH0gZnJvbSBcIi4vdG9nZ2xlU3FyVmlzaWJpbGl0eVwiXHJcblxyXG4vLyBzdGFydHMgZ2FtZVxyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVDeWNsZSA9ICgpOiB2b2lkID0+IHtcclxuICAgIHJlc2V0KClcclxuICAgIGNvbG9yR2VuZXJhdG9yKClcclxuICAgIGNvbG9yU2VsZWN0b3IoKVxyXG4gICAgdG9nZ2xlQnRuQ29sb3IoKVxyXG4gICAgdG9nZ2xlU3FyVmlzaWJpbGl0eSgpXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/gameCycle.ts\n");

/***/ }),

/***/ "./src/reset.ts":
/*!**********************!*\
  !*** ./src/reset.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reset\": () => (/* binding */ reset)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.ts\");\n\r\n// resets game\r\nconst reset = () => {\r\n    (0,_variables__WEBPACK_IMPORTED_MODULE_0__.setIsOver)(false);\r\n    _variables__WEBPACK_IMPORTED_MODULE_0__.display.style.backgroundColor = \"transparent\";\r\n    _variables__WEBPACK_IMPORTED_MODULE_0__.display.style.color = \"white\";\r\n    _variables__WEBPACK_IMPORTED_MODULE_0__.result.classList.add(\"hidden\");\r\n    _variables__WEBPACK_IMPORTED_MODULE_0__.result.textContent = \"TRY AGAIN\";\r\n    _variables__WEBPACK_IMPORTED_MODULE_0__.btnNew.textContent = \"NEW COLOR\";\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVzZXQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0U7QUFFaEUsY0FBYztBQUVQLE1BQU0sS0FBSyxHQUFHLEdBQVMsRUFBRTtJQUM1QixxREFBUyxDQUFDLEtBQUssQ0FBQztJQUNoQixxRUFBNkIsR0FBRyxhQUFhO0lBQzdDLDJEQUFtQixHQUFHLE9BQU87SUFDN0IsNERBQW9CLENBQUMsUUFBUSxDQUFDO0lBQzlCLDBEQUFrQixHQUFHLFdBQVc7SUFDaEMsMERBQWtCLEdBQUcsV0FBVztBQUNwQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29sb3JfZ3Vlc3NpbmdfdHMvLi9zcmMvcmVzZXQudHM/ZmRjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXRJc092ZXIsIGRpc3BsYXksIHJlc3VsdCwgYnRuTmV3IH0gZnJvbSBcIi4vdmFyaWFibGVzXCJcclxuXHJcbi8vIHJlc2V0cyBnYW1lXHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBzZXRJc092ZXIoZmFsc2UpXHJcbiAgICBkaXNwbGF5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxyXG4gICAgZGlzcGxheS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIlxyXG4gICAgcmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcclxuICAgIHJlc3VsdC50ZXh0Q29udGVudCA9IFwiVFJZIEFHQUlOXCJcclxuICAgIGJ0bk5ldy50ZXh0Q29udGVudCA9IFwiTkVXIENPTE9SXCJcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/reset.ts\n");

/***/ }),

/***/ "./src/setDisplayTextColor.ts":
/*!************************************!*\
  !*** ./src/setDisplayTextColor.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setDisplayTextColor\": () => (/* binding */ setDisplayTextColor)\n/* harmony export */ });\n/* harmony import */ var _checkColorBrightness__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkColorBrightness */ \"./src/checkColorBrightness.ts\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ \"./src/variables.ts\");\n\r\n\r\n// for better readability, changes the display's text color based on it's background color (Reference - W3C: https://www.w3.org/TR/AERT/#color-contrast)\r\nconst setDisplayTextColor = () => {\r\n    if ((0,_checkColorBrightness__WEBPACK_IMPORTED_MODULE_0__.checkColorBrightness)()) {\r\n        _variables__WEBPACK_IMPORTED_MODULE_1__.display.style.color = \"black\";\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2V0RGlzcGxheVRleHRDb2xvci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkQ7QUFDeEI7QUFFckMsd0pBQXdKO0FBRWpKLE1BQU0sbUJBQW1CLEdBQUcsR0FBUyxFQUFFO0lBQzFDLElBQUksMkVBQW9CLEVBQUUsRUFBRTtRQUN4QiwyREFBbUIsR0FBRyxPQUFPO0tBQ2hDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbG9yX2d1ZXNzaW5nX3RzLy4vc3JjL3NldERpc3BsYXlUZXh0Q29sb3IudHM/ZmRmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGVja0NvbG9yQnJpZ2h0bmVzcyB9IGZyb20gXCIuL2NoZWNrQ29sb3JCcmlnaHRuZXNzXCJcclxuaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gXCIuL3ZhcmlhYmxlc1wiXHJcblxyXG4vLyBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5LCBjaGFuZ2VzIHRoZSBkaXNwbGF5J3MgdGV4dCBjb2xvciBiYXNlZCBvbiBpdCdzIGJhY2tncm91bmQgY29sb3IgKFJlZmVyZW5jZSAtIFczQzogaHR0cHM6Ly93d3cudzMub3JnL1RSL0FFUlQvI2NvbG9yLWNvbnRyYXN0KVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldERpc3BsYXlUZXh0Q29sb3IgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBpZiAoY2hlY2tDb2xvckJyaWdodG5lc3MoKSkge1xyXG4gICAgICAgIGRpc3BsYXkuc3R5bGUuY29sb3IgPSBcImJsYWNrXCJcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/setDisplayTextColor.ts\n");

/***/ }),

/***/ "./src/toggleBtnColor.ts":
/*!*******************************!*\
  !*** ./src/toggleBtnColor.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleBtnColor\": () => (/* binding */ toggleBtnColor)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.ts\");\n\r\n// toggles the buttons' styles based on the difficulty selected\r\nconst toggleBtnColor = () => {\r\n    if (_variables__WEBPACK_IMPORTED_MODULE_0__.easyMode) {\r\n        _variables__WEBPACK_IMPORTED_MODULE_0__.btnEasy.classList.add(\"pressed\");\r\n        _variables__WEBPACK_IMPORTED_MODULE_0__.btnHard.classList.remove(\"pressed\");\r\n    }\r\n    else {\r\n        _variables__WEBPACK_IMPORTED_MODULE_0__.btnEasy.classList.remove(\"pressed\");\r\n        _variables__WEBPACK_IMPORTED_MODULE_0__.btnHard.classList.add(\"pressed\");\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9nZ2xlQnRuQ29sb3IudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0Q7QUFFeEQsK0RBQStEO0FBRXhELE1BQU0sY0FBYyxHQUFHLEdBQVMsRUFBRTtJQUNyQyxJQUFJLGdEQUFRLEVBQUU7UUFDViw2REFBcUIsQ0FBQyxTQUFTLENBQUM7UUFDaEMsZ0VBQXdCLENBQUMsU0FBUyxDQUFDO0tBQ3RDO1NBQU07UUFDSCxnRUFBd0IsQ0FBQyxTQUFTLENBQUM7UUFDbkMsNkRBQXFCLENBQUMsU0FBUyxDQUFDO0tBQ25DO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbG9yX2d1ZXNzaW5nX3RzLy4vc3JjL3RvZ2dsZUJ0bkNvbG9yLnRzPzc3Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnRuRWFzeSwgYnRuSGFyZCwgZWFzeU1vZGUgfSBmcm9tIFwiLi92YXJpYWJsZXNcIlxyXG5cclxuLy8gdG9nZ2xlcyB0aGUgYnV0dG9ucycgc3R5bGVzIGJhc2VkIG9uIHRoZSBkaWZmaWN1bHR5IHNlbGVjdGVkXHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlQnRuQ29sb3IgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBpZiAoZWFzeU1vZGUpIHtcclxuICAgICAgICBidG5FYXN5LmNsYXNzTGlzdC5hZGQoXCJwcmVzc2VkXCIpXHJcbiAgICAgICAgYnRuSGFyZC5jbGFzc0xpc3QucmVtb3ZlKFwicHJlc3NlZFwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBidG5FYXN5LmNsYXNzTGlzdC5yZW1vdmUoXCJwcmVzc2VkXCIpXHJcbiAgICAgICAgYnRuSGFyZC5jbGFzc0xpc3QuYWRkKFwicHJlc3NlZFwiKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/toggleBtnColor.ts\n");

/***/ }),

/***/ "./src/toggleSqrVisibility.ts":
/*!************************************!*\
  !*** ./src/toggleSqrVisibility.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleSqrVisibility\": () => (/* binding */ toggleSqrVisibility)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.ts\");\n\r\n// makes all squares visibles and toggles the hard squares' visibility based on the difficulty selected\r\nconst toggleSqrVisibility = () => {\r\n    _variables__WEBPACK_IMPORTED_MODULE_0__.squares.forEach(sqr => sqr.classList.remove(\"remove\"));\r\n    _variables__WEBPACK_IMPORTED_MODULE_0__.hardSquares.forEach(sqr => _variables__WEBPACK_IMPORTED_MODULE_0__.easyMode ? sqr.classList.add(\"hidden\") : sqr.classList.remove(\"hidden\"));\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9nZ2xlU3FyVmlzaWJpbGl0eS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0RDtBQUU1RCx1R0FBdUc7QUFFaEcsTUFBTSxtQkFBbUIsR0FBRyxHQUFTLEVBQUU7SUFDMUMsdURBQWUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXRELDJEQUFtQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsZ0RBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xvcl9ndWVzc2luZ190cy8uL3NyYy90b2dnbGVTcXJWaXNpYmlsaXR5LnRzPzIxZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFzeU1vZGUsIGhhcmRTcXVhcmVzLCBzcXVhcmVzIH0gZnJvbSBcIi4vdmFyaWFibGVzXCJcclxuXHJcbi8vIG1ha2VzIGFsbCBzcXVhcmVzIHZpc2libGVzIGFuZCB0b2dnbGVzIHRoZSBoYXJkIHNxdWFyZXMnIHZpc2liaWxpdHkgYmFzZWQgb24gdGhlIGRpZmZpY3VsdHkgc2VsZWN0ZWRcclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVTcXJWaXNpYmlsaXR5ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgc3F1YXJlcy5mb3JFYWNoKHNxciA9PiBzcXIuY2xhc3NMaXN0LnJlbW92ZShcInJlbW92ZVwiKSlcclxuXHJcbiAgICBoYXJkU3F1YXJlcy5mb3JFYWNoKHNxciA9PiBlYXN5TW9kZSA/IHNxci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpIDogc3FyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIikpXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/toggleSqrVisibility.ts\n");

/***/ }),

/***/ "./src/variables.ts":
/*!**************************!*\
  !*** ./src/variables.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btnEasy\": () => (/* binding */ btnEasy),\n/* harmony export */   \"btnHard\": () => (/* binding */ btnHard),\n/* harmony export */   \"btnNew\": () => (/* binding */ btnNew),\n/* harmony export */   \"display\": () => (/* binding */ display),\n/* harmony export */   \"easyMode\": () => (/* binding */ easyMode),\n/* harmony export */   \"hardSquares\": () => (/* binding */ hardSquares),\n/* harmony export */   \"isOver\": () => (/* binding */ isOver),\n/* harmony export */   \"result\": () => (/* binding */ result),\n/* harmony export */   \"selectedRGB\": () => (/* binding */ selectedRGB),\n/* harmony export */   \"setEasyMode\": () => (/* binding */ setEasyMode),\n/* harmony export */   \"setIsOver\": () => (/* binding */ setIsOver),\n/* harmony export */   \"setSelectedRGB\": () => (/* binding */ setSelectedRGB),\n/* harmony export */   \"squares\": () => (/* binding */ squares)\n/* harmony export */ });\n// all global variables\r\nconst btnNew = document.getElementById(\"new-color\");\r\nconst btnEasy = document.getElementById(\"easy\");\r\nconst btnHard = document.getElementById(\"hard\");\r\nconst display = document.getElementById(\"display\");\r\nconst squares = document.querySelectorAll(\".square\");\r\nconst hardSquares = document.querySelectorAll(\".hard\");\r\nconst result = document.getElementById(\"result\");\r\nlet selectedRGB;\r\nconst setSelectedRGB = (value) => {\r\n    selectedRGB = value;\r\n};\r\nlet easyMode = true;\r\nconst setEasyMode = (value) => {\r\n    easyMode = value;\r\n};\r\nlet isOver = false;\r\nconst setIsOver = (value) => {\r\n    isOver = value;\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmFyaWFibGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7QUFFaEIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXNCO0FBQ3hFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFzQjtBQUNwRSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBc0I7QUFFcEUsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQW1CO0FBQ3BFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQStCO0FBQ2xGLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQStCO0FBQ3BGLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUF5QjtBQUV4RSxJQUFJLFdBQW1CO0FBQ3ZCLE1BQU0sY0FBYyxHQUFHLENBQUMsS0FBYSxFQUFRLEVBQUU7SUFDbEQsV0FBVyxHQUFHLEtBQUs7QUFDdkIsQ0FBQztBQUVNLElBQUksUUFBUSxHQUFZLElBQUk7QUFDNUIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFjLEVBQVEsRUFBRTtJQUNoRCxRQUFRLEdBQUcsS0FBSztBQUNwQixDQUFDO0FBRU0sSUFBSSxNQUFNLEdBQVksS0FBSztBQUMzQixNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQWMsRUFBUSxFQUFFO0lBQzlDLE1BQU0sR0FBRyxLQUFLO0FBQ2xCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xvcl9ndWVzc2luZ190cy8uL3NyYy92YXJpYWJsZXMudHM/M2Y5NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbGwgZ2xvYmFsIHZhcmlhYmxlc1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ0bk5ldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWNvbG9yXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50XHJcbmV4cG9ydCBjb25zdCBidG5FYXN5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlYXN5XCIpIGFzIEhUTUxCdXR0b25FbGVtZW50XHJcbmV4cG9ydCBjb25zdCBidG5IYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYXJkXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheVwiKSBhcyBIVE1MRGl2RWxlbWVudFxyXG5leHBvcnQgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpIGFzIE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+XHJcbmV4cG9ydCBjb25zdCBoYXJkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGFyZFwiKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PlxyXG5leHBvcnQgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIikgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnRcclxuXHJcbmV4cG9ydCBsZXQgc2VsZWN0ZWRSR0I6IHN0cmluZ1xyXG5leHBvcnQgY29uc3Qgc2V0U2VsZWN0ZWRSR0IgPSAodmFsdWU6IHN0cmluZyk6IHZvaWQgPT4geyAvLyBzZWxlY3RlZFJHQiBzZXR0ZXJcclxuICAgIHNlbGVjdGVkUkdCID0gdmFsdWVcclxufVxyXG5cclxuZXhwb3J0IGxldCBlYXN5TW9kZTogYm9vbGVhbiA9IHRydWVcclxuZXhwb3J0IGNvbnN0IHNldEVhc3lNb2RlID0gKHZhbHVlOiBib29sZWFuKTogdm9pZCA9PiB7IC8vIGVhc3lNb2RlIHNldHRlclxyXG4gICAgZWFzeU1vZGUgPSB2YWx1ZVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGlzT3ZlcjogYm9vbGVhbiA9IGZhbHNlXHJcbmV4cG9ydCBjb25zdCBzZXRJc092ZXIgPSAodmFsdWU6IGJvb2xlYW4pOiB2b2lkID0+IHsgLy8gaXNPdmVyIHNldHRlclxyXG4gICAgaXNPdmVyID0gdmFsdWVcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/variables.ts\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;