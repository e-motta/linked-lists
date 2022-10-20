/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/linked-list.js":
/*!****************************!*\
  !*** ./src/linked-list.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.js");
/* eslint-disable no-param-reassign */


const LinkedList = () => {
  const list = { nextNode: null };

  const head = () => list.nextNode;

  const tail = (nextNode = list) => {
    if (nextNode.nextNode === null) {
      return nextNode;
    }
    return tail(nextNode.nextNode);
  };

  const append = (value, nextNode = list) => {
    if (nextNode.nextNode === null) {
      nextNode.nextNode = (0,_node__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
    } else {
      const newNode = (0,_node__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
      newNode.nextNode = append(value, nextNode.nextNode);
    }
    return nextNode.nextNode;
  };

  const prepend = (value) => {
    const newNode = (0,_node__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
    newNode.nextNode = head();
    list.nextNode = newNode;
  };

  const size = (nextNode = head()) => {
    if (nextNode === null) {
      return 0;
    }
    return 1 + size(nextNode.nextNode);
  };

  const at = (index, nextNode = head()) => {
    if (index === 0) {
      return nextNode;
    }
    return at(index - 1, nextNode.nextNode);
  };

  const pop = (nextNode = head()) => {
    if (head().nextNode === null) {
      const poppedNode = list.nextNode;
      list.nextNode = null;
      return poppedNode;
    }
    if (nextNode.nextNode.nextNode === null) {
      const poppedNode = nextNode.nextNode;
      nextNode.nextNode = null;
      return poppedNode;
    }
    return pop(nextNode.nextNode);
  };

  const contains = (value, nextNode = head()) => {
    if (nextNode === null) {
      return false;
    }
    if (nextNode.value === value) {
      return true;
    }
    return contains(value, nextNode.nextNode);
  };

  const find = (value, nextNode = head()) => {
    const index = () => {
      if (nextNode === null) {
        return null;
      }
      if (nextNode.value === value) {
        return 0;
      }
      return 1 + find(value, nextNode.nextNode);
    };
    if (index() < size()) {
      return index();
    }
    return null;
  };

  const toString = (nextNode = head()) => {
    if (nextNode === null) {
      return 'null';
    }
    return `( ${nextNode.value} ) -> ${toString(nextNode.nextNode)}`;
  };

  return {
    list,
    head,
    tail,
    append,
    prepend,
    size,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkedList);


/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Node = (value = null) => ({
  value,
  nextNode: null,
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list */ "./src/linked-list.js");


const list = (0,_linked_list__WEBPACK_IMPORTED_MODULE_0__["default"])();

list.append(0);
list.append(1);
list.append(2);
list.prepend(3);

console.log(list.toString());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwQjs7QUFFMUI7QUFDQSxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLGlEQUFJO0FBQzlCLE1BQU07QUFDTixzQkFBc0IsaURBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsaURBQUk7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnQkFBZ0IsT0FBTyw0QkFBNEI7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNHMUI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUNMcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051Qzs7QUFFdkMsYUFBYSx3REFBVTs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcHJvamVjdC1saW5rZWQtbGlzdHMvLi9zcmMvbGlua2VkLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtbGlua2VkLWxpc3RzLy4vc3JjL25vZGUuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtbGlua2VkLWxpc3RzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWxpbmtlZC1saXN0cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtbGlua2VkLWxpc3RzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtbGlua2VkLWxpc3RzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtbGlua2VkLWxpc3RzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgTm9kZSBmcm9tICcuL25vZGUnO1xuXG5jb25zdCBMaW5rZWRMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBsaXN0ID0geyBuZXh0Tm9kZTogbnVsbCB9O1xuXG4gIGNvbnN0IGhlYWQgPSAoKSA9PiBsaXN0Lm5leHROb2RlO1xuXG4gIGNvbnN0IHRhaWwgPSAobmV4dE5vZGUgPSBsaXN0KSA9PiB7XG4gICAgaWYgKG5leHROb2RlLm5leHROb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV4dE5vZGU7XG4gICAgfVxuICAgIHJldHVybiB0YWlsKG5leHROb2RlLm5leHROb2RlKTtcbiAgfTtcblxuICBjb25zdCBhcHBlbmQgPSAodmFsdWUsIG5leHROb2RlID0gbGlzdCkgPT4ge1xuICAgIGlmIChuZXh0Tm9kZS5uZXh0Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgbmV4dE5vZGUubmV4dE5vZGUgPSBOb2RlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV3Tm9kZSA9IE5vZGUodmFsdWUpO1xuICAgICAgbmV3Tm9kZS5uZXh0Tm9kZSA9IGFwcGVuZCh2YWx1ZSwgbmV4dE5vZGUubmV4dE5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dE5vZGUubmV4dE5vZGU7XG4gIH07XG5cbiAgY29uc3QgcHJlcGVuZCA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG5ld05vZGUgPSBOb2RlKHZhbHVlKTtcbiAgICBuZXdOb2RlLm5leHROb2RlID0gaGVhZCgpO1xuICAgIGxpc3QubmV4dE5vZGUgPSBuZXdOb2RlO1xuICB9O1xuXG4gIGNvbnN0IHNpemUgPSAobmV4dE5vZGUgPSBoZWFkKCkpID0+IHtcbiAgICBpZiAobmV4dE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gMSArIHNpemUobmV4dE5vZGUubmV4dE5vZGUpO1xuICB9O1xuXG4gIGNvbnN0IGF0ID0gKGluZGV4LCBuZXh0Tm9kZSA9IGhlYWQoKSkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5leHROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gYXQoaW5kZXggLSAxLCBuZXh0Tm9kZS5uZXh0Tm9kZSk7XG4gIH07XG5cbiAgY29uc3QgcG9wID0gKG5leHROb2RlID0gaGVhZCgpKSA9PiB7XG4gICAgaWYgKGhlYWQoKS5uZXh0Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcG9wcGVkTm9kZSA9IGxpc3QubmV4dE5vZGU7XG4gICAgICBsaXN0Lm5leHROb2RlID0gbnVsbDtcbiAgICAgIHJldHVybiBwb3BwZWROb2RlO1xuICAgIH1cbiAgICBpZiAobmV4dE5vZGUubmV4dE5vZGUubmV4dE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBvcHBlZE5vZGUgPSBuZXh0Tm9kZS5uZXh0Tm9kZTtcbiAgICAgIG5leHROb2RlLm5leHROb2RlID0gbnVsbDtcbiAgICAgIHJldHVybiBwb3BwZWROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gcG9wKG5leHROb2RlLm5leHROb2RlKTtcbiAgfTtcblxuICBjb25zdCBjb250YWlucyA9ICh2YWx1ZSwgbmV4dE5vZGUgPSBoZWFkKCkpID0+IHtcbiAgICBpZiAobmV4dE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG5leHROb2RlLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjb250YWlucyh2YWx1ZSwgbmV4dE5vZGUubmV4dE5vZGUpO1xuICB9O1xuXG4gIGNvbnN0IGZpbmQgPSAodmFsdWUsIG5leHROb2RlID0gaGVhZCgpKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gICAgICBpZiAobmV4dE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAobmV4dE5vZGUudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDEgKyBmaW5kKHZhbHVlLCBuZXh0Tm9kZS5uZXh0Tm9kZSk7XG4gICAgfTtcbiAgICBpZiAoaW5kZXgoKSA8IHNpemUoKSkge1xuICAgICAgcmV0dXJuIGluZGV4KCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IHRvU3RyaW5nID0gKG5leHROb2RlID0gaGVhZCgpKSA9PiB7XG4gICAgaWYgKG5leHROb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJ251bGwnO1xuICAgIH1cbiAgICByZXR1cm4gYCggJHtuZXh0Tm9kZS52YWx1ZX0gKSAtPiAke3RvU3RyaW5nKG5leHROb2RlLm5leHROb2RlKX1gO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbGlzdCxcbiAgICBoZWFkLFxuICAgIHRhaWwsXG4gICAgYXBwZW5kLFxuICAgIHByZXBlbmQsXG4gICAgc2l6ZSxcbiAgICBhdCxcbiAgICBwb3AsXG4gICAgY29udGFpbnMsXG4gICAgZmluZCxcbiAgICB0b1N0cmluZyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtlZExpc3Q7XG4iLCJjb25zdCBOb2RlID0gKHZhbHVlID0gbnVsbCkgPT4gKHtcbiAgdmFsdWUsXG4gIG5leHROb2RlOiBudWxsLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBMaW5rZWRMaXN0IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG5jb25zdCBsaXN0ID0gTGlua2VkTGlzdCgpO1xuXG5saXN0LmFwcGVuZCgwKTtcbmxpc3QuYXBwZW5kKDEpO1xubGlzdC5hcHBlbmQoMik7XG5saXN0LnByZXBlbmQoMyk7XG5cbmNvbnNvbGUubG9nKGxpc3QudG9TdHJpbmcoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=