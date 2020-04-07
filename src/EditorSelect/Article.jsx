import React from 'react'

const Article = ({productName, text}) => {
    return (
        <div>
            <h6>{productName}</h6>
            <p>{text}</p>
        </div>
    )
}

export default Article