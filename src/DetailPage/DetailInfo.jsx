import React from 'react'

const DetailInfo = ({productName, text, price}) => {
    return (
        <div>
            <h6>{productName}</h6>
            <p>{text}</p>
            <p>{price}</p>
        </div>
    )
}

export default DetailInfo;