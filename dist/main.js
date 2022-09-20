/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/DOMEvents.js":
/*!**********************************!*\
  !*** ./src/scripts/DOMEvents.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM_EVENTS": () => (/* binding */ DOM_EVENTS),
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/scripts/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/scripts/project.js");



class UI {
    
    // displays the newly added task on the tasks list
    static addTask(task) {
        const tasksContainer = document.querySelector('.tasks-container');
        const card = document.createElement('div');
        card.innerHTML = `
        <div class='card-show'>
            <h3 class='task-property'>${task.title}</h3>
            <h3 class='task-property'>${task.dueDate}</h3>
            <button class='details-btn'>Details</button>
            <button class='delete-btn'>Delete</button>
        </div>
        <div class='card-hidden'>
            <h3 class='task-property'>${task.description}</h3>
            <h3 class='task-property'>${task.project}</h3>
            <h3 class='task-property'>${task.priority}</h3>
            <button class='edit-btn'>Edit</button>
        </div>
        `
        card.className('card', task.priority);
        tasksContainer.appendChild(card);
    };

    // creates the popup form at top of the tasks list
    static createForm() {
        const tasksContainer = document.querySelector('.tasks-container');
        const form = document.createElement('form');
        const projectSelect = document.createElement('select');
        const options = ['Inbox', ...document.querySelector('#projects-list').children];
        options.forEach(op => {
            const option = document.createElement('option');
            option.value = op.textContent || op;
            option.textContent = op.textContent || op;
            projectSelect.appendChild(option);
        });
        form.innerHTML = `
        <input type='text' id='form-task-title' placeholder='Task title'>
        <input type='text' id='form-task-description' placeholder='Task description'>
        <input type='text' id='form-task-due-date' placeholder='Task due date'>
        <select id='form-task-project'>${projectSelect.innerHTML}</select>
        <select id='form-task-priority'>
            <option value=''>Select priority</option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
        </select>
        <button id='addTaskFormBtn'>Add</button>
        <button id='cancelTaskFormBtn'>Cancel</cancel>
        `
        tasksContainer.appendChild(form);
    }
};

const DOM_EVENTS = () => {
    document.addEventListener('click', (e) => {
        if(e.target.matches('#addTaskFormBtn')) {
            const title = document.querySelector('#form-task-title').value;
            const description = document.querySelector('#form-task-description').value;
            const dueDate = document.querySelector('#form-task-due-date').value;
            const project = document.querySelector('#form-task-project').value;
            const priority = document.querySelector('#form-task-priority').value;
            const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task(title, description, dueDate, priority, project);
            UI.addTask(task);
            console.log('Task added successfully)');
        }
        if(e.target.matches('#add-new-task-btn')) {
            UI.createForm();
            console.log('Successfully created task form');
        }
    })
}



/***/ }),

/***/ "./src/scripts/initialDOM.js":
/*!***********************************!*\
  !*** ./src/scripts/initialDOM.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM_CONTENT": () => (/* binding */ DOM_CONTENT)
/* harmony export */ });
const DOM_CONTENT = () => {
    const content = document.querySelector('#content');

    const createHeader = (() => {
        const header = document.createElement('header');
        header.className = 'header-container';
        header.innerHTML = ``;
        content.appendChild(header);
    })();

    const createMain = (() => {
        const main = document.createElement('main');
        main.className = 'main-container';
        main.innerHTML = `
        <section class='side-bar-container'>
            <h3 class='group-title' id='filter-title'>Filter</h3>
            <button class='btn' id='inbox-btn'>Inbox</button>
            <button class='btn' id='today-btn'>Today</button>
            <button class='btn' id='upcoming-btn'>Upcoming</button>
            <h3 class='group-title' id='projects-title'>Projects</h3>
            <button class='btn' id='new-project-btn'>New project</button>
            <div id='projects-list'></div>
        </section>
        <section class='tasks-container'>
            <button class='btn' id='add-new-task-btn'>Add new task</button>
        </section>
        `;
        content.appendChild(main);
    })();
};

/***/ }),

/***/ "./src/scripts/project.js":
/*!********************************!*\
  !*** ./src/scripts/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(title) {
        this.title = title;
    };
};

/***/ }),

/***/ "./src/scripts/task.js":
/*!*****************************!*\
  !*** ./src/scripts/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    };
};

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
/* harmony import */ var _scripts_initialDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/initialDOM.js */ "./src/scripts/initialDOM.js");
/* harmony import */ var _scripts_DOMEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/DOMEvents.js */ "./src/scripts/DOMEvents.js");




document.addEventListener('DOMContentLoaded', () => {
    (0,_scripts_initialDOM_js__WEBPACK_IMPORTED_MODULE_0__.DOM_CONTENT)();
    (0,_scripts_DOMEvents_js__WEBPACK_IMPORTED_MODULE_1__.DOM_EVENTS)();
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNNOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQsd0NBQXdDLGFBQWE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsaUJBQWlCO0FBQ3pELHdDQUF3QyxhQUFhO0FBQ3JELHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHdCQUF3QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwwQ0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7OztBQzFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUM3Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNKTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNEO0FBQ0Y7OztBQUdwRDtBQUNBLElBQUksbUVBQVc7QUFDZixJQUFJLGlFQUFVO0FBQ2QsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvRE9NRXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2luaXRpYWxET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5jbGFzcyBVSSB7XG4gICAgXG4gICAgLy8gZGlzcGxheXMgdGhlIG5ld2x5IGFkZGVkIHRhc2sgb24gdGhlIHRhc2tzIGxpc3RcbiAgICBzdGF0aWMgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLXNob3cnPlxuICAgICAgICAgICAgPGgzIGNsYXNzPSd0YXNrLXByb3BlcnR5Jz4ke3Rhc2sudGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxoMyBjbGFzcz0ndGFzay1wcm9wZXJ0eSc+JHt0YXNrLmR1ZURhdGV9PC9oMz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2RldGFpbHMtYnRuJz5EZXRhaWxzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdkZWxldGUtYnRuJz5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J2NhcmQtaGlkZGVuJz5cbiAgICAgICAgICAgIDxoMyBjbGFzcz0ndGFzay1wcm9wZXJ0eSc+JHt0YXNrLmRlc2NyaXB0aW9ufTwvaDM+XG4gICAgICAgICAgICA8aDMgY2xhc3M9J3Rhc2stcHJvcGVydHknPiR7dGFzay5wcm9qZWN0fTwvaDM+XG4gICAgICAgICAgICA8aDMgY2xhc3M9J3Rhc2stcHJvcGVydHknPiR7dGFzay5wcmlvcml0eX08L2gzPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nZWRpdC1idG4nPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgICAgY2FyZC5jbGFzc05hbWUoJ2NhcmQnLCB0YXNrLnByaW9yaXR5KTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfTtcblxuICAgIC8vIGNyZWF0ZXMgdGhlIHBvcHVwIGZvcm0gYXQgdG9wIG9mIHRoZSB0YXNrcyBsaXN0XG4gICAgc3RhdGljIGNyZWF0ZUZvcm0oKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbJ0luYm94JywgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzLWxpc3QnKS5jaGlsZHJlbl07XG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcCA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wLnRleHRDb250ZW50IHx8IG9wO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3AudGV4dENvbnRlbnQgfHwgb3A7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdmb3JtLXRhc2stdGl0bGUnIHBsYWNlaG9sZGVyPSdUYXNrIHRpdGxlJz5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdmb3JtLXRhc2stZGVzY3JpcHRpb24nIHBsYWNlaG9sZGVyPSdUYXNrIGRlc2NyaXB0aW9uJz5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdmb3JtLXRhc2stZHVlLWRhdGUnIHBsYWNlaG9sZGVyPSdUYXNrIGR1ZSBkYXRlJz5cbiAgICAgICAgPHNlbGVjdCBpZD0nZm9ybS10YXNrLXByb2plY3QnPiR7cHJvamVjdFNlbGVjdC5pbm5lckhUTUx9PC9zZWxlY3Q+XG4gICAgICAgIDxzZWxlY3QgaWQ9J2Zvcm0tdGFzay1wcmlvcml0eSc+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnPlNlbGVjdCBwcmlvcml0eTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nbG93Jz5Mb3c8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J21lZGl1bSc+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdoaWdoJz5IaWdoPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8YnV0dG9uIGlkPSdhZGRUYXNrRm9ybUJ0bic+QWRkPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9J2NhbmNlbFRhc2tGb3JtQnRuJz5DYW5jZWw8L2NhbmNlbD5cbiAgICAgICAgYFxuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICB9XG59O1xuXG5jb25zdCBET01fRVZFTlRTID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQubWF0Y2hlcygnI2FkZFRhc2tGb3JtQnRuJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tdGFzay10aXRsZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS10YXNrLWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tdGFzay1kdWUtZGF0ZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLXRhc2stcHJvamVjdCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS10YXNrLXByaW9yaXR5JykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG4gICAgICAgICAgICBVSS5hZGRUYXNrKHRhc2spO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rhc2sgYWRkZWQgc3VjY2Vzc2Z1bGx5KScpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoJyNhZGQtbmV3LXRhc2stYnRuJykpIHtcbiAgICAgICAgICAgIFVJLmNyZWF0ZUZvcm0oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgY3JlYXRlZCB0YXNrIGZvcm0nKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IFVJLCBET01fRVZFTlRTIH0iLCJleHBvcnQgY29uc3QgRE9NX0NPTlRFTlQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXItY29udGFpbmVyJztcbiAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9IGBgO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNyZWF0ZU1haW4gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICAgICBtYWluLmNsYXNzTmFtZSA9ICdtYWluLWNvbnRhaW5lcic7XG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz0nc2lkZS1iYXItY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxoMyBjbGFzcz0nZ3JvdXAtdGl0bGUnIGlkPSdmaWx0ZXItdGl0bGUnPkZpbHRlcjwvaDM+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidG4nIGlkPSdpbmJveC1idG4nPkluYm94PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidG4nIGlkPSd0b2RheS1idG4nPlRvZGF5PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidG4nIGlkPSd1cGNvbWluZy1idG4nPlVwY29taW5nPC9idXR0b24+XG4gICAgICAgICAgICA8aDMgY2xhc3M9J2dyb3VwLXRpdGxlJyBpZD0ncHJvamVjdHMtdGl0bGUnPlByb2plY3RzPC9oMz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J0bicgaWQ9J25ldy1wcm9qZWN0LWJ0bic+TmV3IHByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J3Byb2plY3RzLWxpc3QnPjwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPSd0YXNrcy1jb250YWluZXInPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnRuJyBpZD0nYWRkLW5ldy10YXNrLWJ0bic+QWRkIG5ldyB0YXNrPC9idXR0b24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgYDtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICB9KSgpO1xufTsiLCJleHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH07XG59OyIsImV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBET01fQ09OVEVOVCB9IGZyb20gJy4vc2NyaXB0cy9pbml0aWFsRE9NLmpzJztcbmltcG9ydCB7IERPTV9FVkVOVFMgfSBmcm9tICcuL3NjcmlwdHMvRE9NRXZlbnRzLmpzJztcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIERPTV9DT05URU5UKCk7XG4gICAgRE9NX0VWRU5UUygpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=