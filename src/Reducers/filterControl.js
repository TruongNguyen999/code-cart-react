import * as types from '../Consts/index';

const initialState = {
    keywork: ''
}

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SEARCH_CONTROL:
            return action;

        default: 
            return state;
    }
}

export default myReducer