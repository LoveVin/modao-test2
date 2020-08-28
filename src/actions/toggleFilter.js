import {TOGGLE_FILTER} from '../constants/actionTypes';

const toggleFilter = (isShowOptions)=>{
    return {
        type: TOGGLE_FILTER,
        isShowOptions
    }
}

export default toggleFilter