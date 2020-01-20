import taskListReducer from './taskList.js';
import loggedReducer from './isLogged.js';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    taskListReducer: taskListReducer,
    loggedReducer: loggedReducer
});

export default allReducers;