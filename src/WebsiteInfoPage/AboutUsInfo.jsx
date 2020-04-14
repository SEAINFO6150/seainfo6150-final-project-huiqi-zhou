import React from 'react'
import style from "./WebsiteInfo.module.css"

const AboutUsInfo = () => {
    return (
        <div className={style.container}>
            <h2>About Us</h2> 
            <p className={style.text}>
            H shop is the finest edit in luxury fashion for women, men and kids. We have over 250 of the best international designers, 1200 new arrivals each week, fast and reliable delivery, excellent customer service, utmost security and data protection, and free returns and exchanges within 30 days.
            </p>
            <h2>
                E-commerce Competence
            </h2>
            <p className={style.text}>
            Our ultra-modern logistics center is located in Munich-Heimstetten, and makes it possible for us to provide fast, reliable, and smooth delivery to Mytheresa customers in over 140 countries worldwide within 72 hours. We prioritize the best possible data protections and online payment security, as well as customer satisfaction. If you are not 100% satisfied with your order, just send it back to us – returns and exchanges are always free within 30 days.
            </p>
        </div>
    )
}

export default AboutUsInfo