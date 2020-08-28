import { connect } from 'react-redux';
import Select from '../components/Select';
import filterOptions from '../constants/filterOptions';
import setFilter from '../actions/setFilter';
import toggleFilter from '../actions/toggleFilter';

const mapStateToProps = (state, ownProps)=>{
    return {
        filterOptions,
        selectedFilter: state.selectedFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        onToggleFilter: (isShowOptions)=>{
            dispatch(toggleFilter(isShowOptions))
        },
        onSetFilter: (filter)=>{
            dispatch(setFilter(filter))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Select)