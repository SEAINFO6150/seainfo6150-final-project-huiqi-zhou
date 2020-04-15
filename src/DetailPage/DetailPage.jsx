import React from 'react'
import Image from "./Image";
import DetailInfo from "./DetailInfo.jsx";
import CheckoutButton from "./CheckoutButton"
import style from "./DetailPage.module.css";
import ProductsData from "../Data/products.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const DetailPage = (props) => {
    var propertyName = props.productId
    var productObject = ProductsData[propertyName]
    var imagelink = productObject.image._url;
    var productName = productObject.productName
    var price = productObject.price
    var text = productObject.text
    var categoryValue = props.categoryId
    var checkoutLink = "/Checkout/" + categoryValue + "/" + propertyName
    return (
        <div>
            <h1 className={style.title}>ProductDetail</h1>
            <hr/>
            <div className={style.grid}>
                <Image imageLink={imagelink} category={categoryValue}/>
                <DetailInfo productName={productName} text={text} price={price}/>
                <Link to={checkoutLink}>
                <CheckoutButton/>
                </Link>
                
            </div>
        </div>
    )
}

export default DetailPage