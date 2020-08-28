import React from 'react';
import Icon from '../Icon';
import './index.scss'

const CardAdd = ({ onAddCard })=>{
    return (
        <div className="addNewGroup" onClick={ onAddCard }>
            <Icon name="add" fill="#c9cdd0"/>
            <div>新建项目组</div>
        </div>
    )
}

export default CardAdd