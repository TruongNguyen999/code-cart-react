import * as types from '../Consts/index';

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task // task: task
    }
}

export const toggleForm = () => {
    return{
        type: types.TOGGLE_FORM
    }
}

export const updatetask = (task) => {
    return{
        type: types.UPDATE_TASK,
        task
    }
}

export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS_TASK,
        id // id: id
    }
}

export const deletetask = (id) => {
    return{
        type: types.DELETE_TASK,
        id //id: id
    }
}

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}

export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task
    }
}

export const filterTable = (filter) => {
    return {
        type: types.FILTER_TABLE,
        filter
    }
}

export const searchControl = (keywork) => {
    return {
        type: types.SEARCH_CONTROL,
        keywork
    }
}

export const sortControl = (sortname) => {
    return {
        type: types.SORT_CONTROL,
        sortname
    }
}