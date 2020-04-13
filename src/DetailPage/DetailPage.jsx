import React from 'react'
import Image from "./Image";
import DetailInfo from "./DetailInfo.jsx";
import CheckoutButton from "./CheckoutButton.jsx";
import style from "./DetailPage.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const DetailPage = (props) => {
    var imagelink1 = "/images/";
    var imagelink2 = props.productId
    var imagelink = imagelink1 + imagelink2 + ".jpg"
    var categoryValue = props.categoryId
    return (
        
        <div className={style.articlegrid}>
            <Image imageLink={imagelink} category={categoryValue}/>
            <DetailInfo productName={imagelink2} text="this is god/"/>
            <Link to="/Checkout">
            <CheckoutButton/>
            </Link>
            
        </div>
    )
}

export default DetailPage