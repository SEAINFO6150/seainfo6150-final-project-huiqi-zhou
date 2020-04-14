import React from 'react'
import style from "./WebsiteInfo.module.css"

const ReturnPolicyInfo = () => {
    return (
        <div className={style.container}>
            <h2>Return Steps</h2>
            <ul>
                <ul className={style.text}>
                    Step1 Using the enclosed return form, indicate which item(s) you wish to return and the reason why
                </ul>
                <ul className={style.text}>
                    Step2 Drop off to Fedex
                </ul>
            </ul>
            <h2>Return Policy</h2>
            <p className={style.text}>In case of a return, your refund will be credited to the original payment method. Shipping costs will not be refunded by Mytheresa in case of returns.</p>
            <h2>Return Conditions</h2>
            <p className={style.text}>
            All items must be returned in their original condition, without having been worn, washed or altered, and with tags still attached
            </p>
        </div>
    )
}

export default ReturnPolicyInfo