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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/createAndShowWinnerForm.js":
/*!*******************************************!*\
  !*** ./client/createAndShowWinnerForm.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function createAndShowWinnerForm(numGuesses) {\n  console.log(numGuesses)\n  const winnerForm = document.createElement('form');\n  winnerForm.method = 'POST';\n  winnerForm.action = '/winners';\n\n  const nameLabel = document.createElement('label');\n  nameLabel.innerText = 'Your name:';\n\n  const nameInput = document.createElement('input');\n  nameInput.name = 'name';\n  nameInput.autocomplete = false;\n\n  const guessesLabel = document.createElement('label');\n  guessesLabel.innerText = 'Number of guesses:';\n\n  const guessesInput = document.createElement('input');\n  guessesInput.name = 'guesses';\n  guessesInput.value = numGuesses;\n  guessesInput.readOnly = true;\n\n  const submitButton = document.createElement('button');\n  submitButton.type = 'submit';\n  submitButton.innerText = 'Submit Name';\n\n  winnerForm.appendChild(nameLabel);\n  winnerForm.appendChild(nameInput);\n  winnerForm.appendChild(guessesLabel);\n  winnerForm.appendChild(guessesInput);\n  winnerForm.appendChild(submitButton);\n\n  document.body.appendChild(winnerForm);\n}\n\n//# sourceURL=webpack:///./client/createAndShowWinnerForm.js?");

/***/ }),

/***/ "./client/game.js":
/*!************************!*\
  !*** ./client/game.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var numGuesses = 0;\n\nconst generateNumber = __webpack_require__(/*! ./generateNumber */ \"./client/generateNumber.js\");\nvar secretNumber = generateNumber();\n\nvar guessForm = document.getElementById('guessForm');\n\nvar feedback = document.getElementById('feedback');\n\nconst createAndShowWinnerForm = __webpack_require__(/*! ./createAndShowWinnerForm */ \"./client/createAndShowWinnerForm.js\");\n\nguessForm.addEventListener('submit', submitEvent => {\n  submitEvent.preventDefault();\n\n  feedback.innerText = '';\n\n  const input = submitEvent.target.guess;\n  const guess = Number(input.value);\n\n  input.value = '';\n\n  if (Number.isNaN(guess)) {\n    feedback.innerText = 'Oops! Make sure to enter a number using only digits.';\n  } else {\n    numGuesses = numGuesses + 1;\n    if (guess === secretNumber) {\n      feedback.innerText =\n        'You got it! Enter your name below to be added to our list of winners.';\n      createAndShowWinnerForm(numGuesses);\n    } else if (guess < secretNumber) {\n      feedback.innerText = 'Too low! Keep guessing!';\n    } else {\n      feedback.innerText = 'Too high! Keep guessing!';\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./client/game.js?");

/***/ }),

/***/ "./client/generateNumber.js":
/*!**********************************!*\
  !*** ./client/generateNumber.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = () => Math.ceil(Math.random() * 100);\n\n//# sourceURL=webpack:///./client/generateNumber.js?");

/***/ })

/******/ });