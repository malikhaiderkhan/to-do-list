"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addtask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addtask.js */ \"./src/modules/addtask.js\");\n/* harmony import */ var _modules_deletetask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/deletetask.js */ \"./src/modules/deletetask.js\");\n/* harmony import */ var _modules_edittask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/edittask.js */ \"./src/modules/edittask.js\");\n\n\n\n\nlet tasktodo = [];\n\nfunction saveTaskDescription(taskDescription, tasktodo) {\n  const listItem = taskDescription.parentElement;\n  const taskIndex = parseInt(listItem.dataset.index, 10);\n  const newDescription = taskDescription.textContent.trim();\n  (0,_modules_edittask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(taskIndex, newDescription, tasktodo);\n}\n\nfunction editTaskDescription(taskDescription) {\n  taskDescription.contentEditable = true;\n  taskDescription.focus();\n  taskDescription.style.outline = 'none';\n}\n\nfunction populateTaskList() {\n  const taskList = document.getElementById('task-list');\n  taskList.innerHTML = ''; \n\n  const sortedTasks = [...tasktodo].sort((a, b) => a.index - b.index);\n\n  sortedTasks.forEach((task) => {\n    const listItem = document.createElement('li');\n    listItem.dataset.index = task.index;\n\n    const checkbox = document.createElement('span');\n    checkbox.className = 'checkbox-icon';\n\n    const taskDescription = document.createElement('span');\n    taskDescription.textContent = task.description;\n\n    listItem.appendChild(checkbox);\n    listItem.appendChild(taskDescription);\n\n    const image = document.createElement('img');\n    image.src = '/images/del.png';\n    image.className = 'list-item-image';\n\n    listItem.appendChild(image);\n\n    const horizontalLine = document.createElement('hr');\n\n    taskList.appendChild(listItem);\n    taskList.appendChild(horizontalLine);\n\n    taskDescription.addEventListener('click', (event) => {\n      event.stopPropagation();\n      editTaskDescription(taskDescription);\n    });\n\n    taskDescription.addEventListener('keydown', (event) => {\n      if (event.key === 'Enter') {\n        event.preventDefault();\n        saveTaskDescription(taskDescription, tasktodo);\n        populateTaskList();\n      }\n    });\n  });\n}\n\nfunction loadTasks() {\n  const savedTasks = localStorage.getItem('tasktodo');\n  if (savedTasks) {\n    tasktodo = JSON.parse(savedTasks);\n  }\n  populateTaskList();\n}\n\nwindow.addEventListener('load', loadTasks);\n\ndocument.getElementById('add-input').addEventListener('keydown', (event) => {\n  if (event.key === 'Enter') {\n    event.preventDefault();\n\n    const taskInput = document.getElementById('add-input');\n    const description = taskInput.value.trim();\n\n    if (description !== '') {\n      (0,_modules_addtask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(description, tasktodo);\n      taskInput.value = '';\n      populateTaskList();\n    }\n  }\n});\n\ndocument.getElementById('task-list').addEventListener('click', (event) => {\n  const deleteIcon = event.target.closest('.list-item-image');\n  if (deleteIcon) {\n    const listItem = deleteIcon.parentElement;\n    const taskIndex = parseInt(listItem.dataset.index, 10);\n    (0,_modules_deletetask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskIndex, tasktodo);\n    populateTaskList();\n  }\n});\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/addtask.js":
/*!********************************!*\
  !*** ./src/modules/addtask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTask)\n/* harmony export */ });\nfunction saveTasks(tasktodo) {\n  localStorage.setItem('tasktodo', JSON.stringify(tasktodo));\n}\n\nfunction addTask(description, tasktodo) {\n  const newTask = {\n    description,\n    completed: false,\n    index: tasktodo.length + 1,\n  };\n\n  tasktodo.push(newTask);\n  saveTasks(tasktodo);\n}\n\n\n//# sourceURL=webpack://webpack/./src/modules/addtask.js?");

/***/ }),

/***/ "./src/modules/deletetask.js":
/*!***********************************!*\
  !*** ./src/modules/deletetask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteTask)\n/* harmony export */ });\nfunction saveTasks(tasktodo) {\n  localStorage.setItem('tasktodo', JSON.stringify(tasktodo));\n}\n\nfunction updateIndexes(tasktodo) {\n  tasktodo.forEach((task, index) => {\n    task.index = index + 1;\n  });\n}\n\nfunction deleteTask(taskIndex, tasktodo) {\n  tasktodo.splice(taskIndex - 1, 1);\n  updateIndexes(tasktodo);\n  saveTasks(tasktodo);\n}\n\n//# sourceURL=webpack://webpack/./src/modules/deletetask.js?");

/***/ }),

/***/ "./src/modules/edittask.js":
/*!*********************************!*\
  !*** ./src/modules/edittask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ editTask)\n/* harmony export */ });\nfunction saveTasks(tasktodo) {\n  localStorage.setItem('tasktodo', JSON.stringify(tasktodo));\n}\n\nfunction editTask(taskIndex, newDescription, tasktodo) {\n  const task = tasktodo[taskIndex - 1];\n  task.description = newDescription;\n  saveTasks(tasktodo);\n}\n\n//# sourceURL=webpack://webpack/./src/modules/edittask.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);