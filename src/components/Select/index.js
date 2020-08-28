import React from 'react'
import Icon from '../Icon'
import './index.scss'

const Select = ({ filterOptions, selectedFilter, onToggleFilter, onSetFilter })=>{
    return (
        <div className="selectInfo">
            <div className="currentSelect" onClick={() => onToggleFilter(!selectedFilter.isShowOptions)}>
                <span>{selectedFilter.text}</span>
                <Icon name="down" fill="#909ea5" />
            </div>
            <ul className="selectOptions" style={{ display: selectedFilter.isShowOptions ? 'block' : 'none'}}>
                {Object.keys(filterOptions).map((filter, index)=>(
                    <li onClick={ () => onSetFilter(filterOptions[filter]) } key={index}>{ filterOptions[filter].text }</li>
                ))}
            </ul>
        </div>
    )
}

export default Select