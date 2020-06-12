import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import taskEditing from './taskEditing';
import filterTable from './filterTable';
import filterControl from './filterControl';
import sortControl from './sortControl';

const myReducer = combineReducers({
    tasks, // tasks: tasks
    isDisplayForm, //isDisplayForm: isDisplayForm    
    taskEditing,
    filterTable,
    filterControl,
    sortControl
})

export default myReducer;