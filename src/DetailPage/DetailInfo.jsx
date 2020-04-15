import React from 'react';
import style from "./DetailPage.module.css";
import ProductInformation from '../Home/ProductInformation';

const DetailInfo = ({productName, text, price}) => {
    return (
        <div>
            <h6 className={style.info}>{productName}</h6>
            <p className={style.priceinfo}>Price: {price}</p>
            <p className={style.text}>{text}</p>
        </div>
    )
}

export default DetailInfo;