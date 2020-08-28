import { connect } from 'react-redux'
import CardList from '../components/CardList';
import filterOptions from '../constants/filterOptions';
import fetchCardList from '../actions/fetchCardList';

const getVisibleCards = (cardList, filter)=>{
    switch (filter.type) {
        case filterOptions.SHOW_ALL.type:
            return cardList
        case filterOptions.SHOW_LOCKED.type:
            return cardList.filter(card => card.isLocked)
        case filterOptions.SHOW_PRIVATE.type:
            return cardList.filter(card => card.isPrivate)
        default:
            return cardList
    }
}

const mapStateToProps = (state, ownProps)=>{
    return {
        visibleCards: getVisibleCards(state.cardList, state.selectedFilter)
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        fetchCardList: ()=>{
            dispatch(fetchCardList())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList)