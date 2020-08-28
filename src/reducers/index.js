import cardList from './cardList';
import selectedFilter from './selectedFilter';
import {combineReducers} from 'redux';

const reducer = combineReducers({
    cardList,
    selectedFilter
})

export default reducer