import {
  CREATE_TODO,
  CHANGE_TODO_FILTER,
  CLEAR_COMPLETED_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from '../constants/todoConstants';

import { createTodoInstance } from '../utils/todoUtils';

export const createTodoDispatchRequest = (todo) => ({
  type: CREATE_TODO,
  payload: { todo }
});

export const createTodo = (content) => (dispatch) => {
  const new_todo = createTodoInstance(content);
  dispatch(createTodoDispatchRequest(new_todo));
};

export const changeTodoFilterDispatchRequest = (filter) => ({
  type: CHANGE_TODO_FILTER,
  payload: { filter }
});

export const changeTodoFilter = (filter) => (dispatch) => {
  dispatch(changeTodoFilterDispatchRequest(filter));
};

export const clearCompletedTodoDispatchRequest = () => ({
  type: CLEAR_COMPLETED_TODO
});

export const clearCompletedTodo = () => (dispatch) => {
  dispatch(clearCompletedTodoDispatchRequest());
};

export const updateTodoDispatchRequest = (id, attributes) => ({
  type: UPDATE_TODO,
  payload: { id, attributes }
});

export const updateTodo = (id, attributes) => (dispatch) => {
  dispatch(updateTodoDispatchRequest(id, attributes));
};

export const deleteTodoDispatchRequest = (id) => ({
  type: DELETE_TODO,
  payload: { id }
});

export const deleteTodo = (id) => (dispatch) => {
  dispatch(deleteTodoDispatchRequest(id));
};
