import React from 'react'

const DetailInfo = ({productName, text}) => {
    return (
        <div>
            <h6>{productName}</h6>
            <p>{text}</p>
        </div>
    )
}

export default DetailInfo;