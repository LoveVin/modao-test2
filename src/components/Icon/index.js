import React from 'react'
require('../../assets/icons/lock.svg')
require('../../assets/icons/view-off.svg')
require('../../assets/icons/add.svg')
require('../../assets/icons/down.svg')
require('../../assets/icons/up.svg')
require('../../assets/icons/loading.svg')


const Icon = (props) => {
    return (
        <svg fill={props.fill} className={props.className}>
            <use xlinkHref={'#'+props.name} />
        </svg>
    )
}

export default Icon