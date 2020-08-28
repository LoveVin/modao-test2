import {INIT_CARDS} from '../constants/actionTypes';

const cardList = (state=[], action)=>{
    switch (action.type) {
        case INIT_CARDS:
            return action.cardList
        default:
            return [...state]
    }
}

export default cardList