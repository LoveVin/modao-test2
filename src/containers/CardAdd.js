import {connect} from 'react-redux';
import CardAdd from '../components/CardAdd';

const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        onAddCard: ()=>{
            alert("该功能待完善！")
        }
    }
}

export default connect(
    mapDispatchToProps
)(CardAdd)
