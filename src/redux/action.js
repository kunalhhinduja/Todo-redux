import {ADD_TODO} from "./type";
// import {LOAD_TODO} from './type';

export const addTodo = (loadTodo) => {
    return {
        type: ADD_TODO,
        payload: loadTodo
    }
}
