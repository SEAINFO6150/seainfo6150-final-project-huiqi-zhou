import React from 'react'

const Article = ({imageLink, imageAlt, productName, text}) => {
    return (
        <div>
            <img src={imageLink} alt={imageAlt} />
            <h6>{productName}</h6>
            <p>{text}</p>
        </div>
    )
}

export default Article