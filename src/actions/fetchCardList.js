import ajax from '../ajax';
import {INIT_CARDS} from '../constants/actionTypes';

const fetchCardList = ()=>{
    return (dispatch, getState)=>{
        ajax('./getCards').then((cardList)=>{
            dispatch({
                type: INIT_CARDS,
                cardList
            })
        })
    }
}

export default fetchCardList