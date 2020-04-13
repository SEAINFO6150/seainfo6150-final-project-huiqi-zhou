import React from 'react';
import ProductInformation from "./ProductInformation.jsx";
import style from "./Home.module.css";

const Home = () => {
    return (
        <div>
            <h1 className={style.title}>H'Shop</h1>
        
            <hr/>
            <div className={style.productgrid}>
            <ProductInformation  imageLink="/images/blueblazer.jpg" category="clothing" productName="blueblazer" price="$100"/>
            <ProductInformation  imageLink="/images/flowerdress.jpg" category="clothing" productName="flowerdress" price="$100"/>
            <ProductInformation  imageLink="/images/whitedress.jpg" category="clothing" productName="whitedress" price="$100"/>
            <ProductInformation  imageLink="/images/bluejacket.jpg" category="clothing" productName="bluejacket" price="$100"/>
            <ProductInformation  imageLink="/images/begieblazer.jpg" category="clothing" productName="begieblazer" price="$100"/>
            <ProductInformation  imageLink="/images/begieblazer.jpg" category="clothing" productName="begieblazer" price="$100"/>
            <ProductInformation  imageLink="/images/flowerdress.jpg" category="clothing" productName="flowerdress" price="$100"/>
            <ProductInformation  imageLink="/images/whitedress.jpg" category="clothing" productName="whitedress" price="$100"/>
            <ProductInformation  imageLink="/images/bluejacket.jpg" category="clothing" productName="bluejacket" price="$100"/>
            </div>
        </div>
    )
}

export default Home
