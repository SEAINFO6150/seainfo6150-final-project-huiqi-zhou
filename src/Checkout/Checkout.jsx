import React from 'react'
import CheckoutItem from "./CheckoutItem";
import AddressBook from "./AddressBook";
import ProductsData from "../Data/products.json";
import style from "./Checkout.Module.css";

const Checkout = (props) => {
    var property = props.productId
    var productObject = ProductsData[property]
    var imageLink = productObject.image._url
    var price = productObject.price
    var productName = productObject.productName
    var category = productObject.category
    return (
        <div className={style.grid}>
        <CheckoutItem imageLink={imageLink} alt={category} productName={productName} price={price}/>
        <AddressBook/>
        </div>
    )
}

export default Checkout
