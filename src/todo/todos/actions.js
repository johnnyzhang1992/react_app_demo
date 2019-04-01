import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js';

let nextToDoId = 0;

// add
export const addTodo = (text) => ({
    type: ADD_TODO,
    completed: false,
    id: nextToDoId++,
    text: text
});

// toggle
export const toggleTodo = (id) =>({
    type: TOGGLE_TODO,
    id: id
});

// remove
export const removeTodo = (id)=>({
    type: REMOVE_TODO,
    id: id
});

// removeToDo = (id)=>({
//     type: REMOVE_TODO,
//     id: id 
// })
// 等效于
// removeToDo = (id)=>{
//     return {
//         type: REMOVE_TODO,
//         id: id
//     }
// };