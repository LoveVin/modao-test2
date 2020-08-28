import React from 'react'

let importAll = (requireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}


const Icon = (props) => {
    return (
        <svg fill={props.fill} className={props.className}>
            <use xlinkHref={'#'+props.name} />
        </svg>
    )
}

export default Icon