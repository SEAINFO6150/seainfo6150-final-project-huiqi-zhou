import React from 'react';
import CustomerService from "./CustomerService.jsx";
import HShopInfo from "./HShopInfo.jsx";
import style from "./WebsiteInfoPage.module.css";

const WebsiteInfoPage = () => {
    return (
        <div>
            <hr/>
            <div className={style.infogrid}>
            <CustomerService/>
            <HShopInfo/>
            </div>
        </div>
    )
}

export default WebsiteInfoPage