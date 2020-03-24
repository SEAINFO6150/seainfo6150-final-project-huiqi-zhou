import React from 'react'

const ProductInformation = ({imageLink, imageAlt, productName, price}) => {
    return (
        <div>
            <img src={imageLink} alt={imageAlt} />
            <h6>{productName}</h6>
            <h6>{price}</h6>
        </div>
    )
}

export default ProductInformation