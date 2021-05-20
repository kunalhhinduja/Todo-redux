import * as actionTypes from './type';

const INITIAL_STATE = {
    loadTodo: []
}

const todoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TODO:
            // let newTodo = [...state.loadTodo];
            // newTodo.push(action.payload);
            return {
                ...state,
                // loadTodo: newTodo
                loadTodo: [...state.loadTodo, action.payload]
            }
        default:
            return state;
    }
}

export default todoReducer;