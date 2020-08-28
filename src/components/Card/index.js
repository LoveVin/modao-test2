import React from 'react'
import Icon from '../Icon';
import './index.scss'

const Card = ({ name, color, isLocked, isPrivate, itemCount }) => {
    return (
        <div className="group" style={{border: isLocked ? '2px solid #c8cccf' : '2px solid transparent'}}>
            <div className="groupColor" style={{background: color}}/>
            <div className="groupInfo">
                <div className="groupName">{name}</div>
                <div>
                    <button className="lock" style={{display: isLocked? 'flex': 'none'}}>
                        <Icon name="lock" fill="#8f9da4"/>
                        <span>锁定</span>
                    </button>
                    <button className="limit" style={{visibility: isPrivate? 'visible': 'hidden'}}>
                        <Icon name="view-off" fill="#8f9da4"/>
                        <span>私密</span>
                    </button>
                </div>
                <div>
                    <span>{itemCount}</span>
                    项目
                </div>
            </div>
        </div>
    )
}

export default Card