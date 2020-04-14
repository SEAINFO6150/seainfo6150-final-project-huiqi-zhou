import React from 'react'


const CheckoutItem = ({imageLink, category, productName, price}) => {
    return (
        <div>
        <img  src={imageLink} alt={category} />
        <h6 >{productName}</h6>
        <h6>{price}</h6>
      </div>
    )
}

export default CheckoutItem
