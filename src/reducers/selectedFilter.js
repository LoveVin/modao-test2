import {SET_FILTER, TOGGLE_FILTER} from '../constants/actionTypes';
import filterOptions from '../constants/filterOptions';

const selectedFilter = (state = filterOptions.SHOW_ALL, action)=>{
    switch (action.type) {
        case SET_FILTER:
            return action.filter
        case TOGGLE_FILTER:
            return { ...state, isShowOptions: action.isShowOptions }
        default:
            return state
    }
}

export default selectedFilter