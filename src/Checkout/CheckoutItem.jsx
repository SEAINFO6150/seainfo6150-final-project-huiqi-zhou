import React from 'react'
import style from "./Checkout.module.css";

const CheckoutItem = ({imageLink, category, productName, price}) => {
    return (
        <div>
        <img  className={style.image} src={imageLink} alt={category} />
        <h6 className={style.item}>Product Name: {productName}</h6>
        <h6 className={style.item}>Total price: {price}</h6>
      </div>
    )
}

export default CheckoutItem
