import * as types from '../Consts/index';

const initialState = {
    sortname: ''
}

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SORT_CONTROL:
            return action;

        default: 
            return state;
    }
}

export default myReducer