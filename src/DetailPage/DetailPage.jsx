import React from 'react'

const DetailPage = ({imageLink, imageAlt, productName, price, styleDetail}) => {
    return (
        <div>
            <img src={imageLink} alt={imageAlt} />
            <h6>{productName}</h6>
            <p>{price}</p>
            <button>Checkout</button>
            <p>{styleDetail}</p>
        </div>
    )
}

export default DetailPage