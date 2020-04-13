import React from 'react';
import ProductInformation from "./ProductInformation.jsx";
import style from "./Home.module.css";

const Home = () => {
    return (
        <div>
            <h1 className={style.title}>H'Shop</h1>
        
            <hr/>
            <div className={style.productgrid}>
            <ProductInformation  imageLink="/images/blueblazer.jpg" imageAlt="blue blazer" productName="Blue Blazer" price="$100"/>
            <ProductInformation  imageLink="/images/flowerdress.jpg" imageAlt="flower dress" productName="Flower Dress" price="$100"/>
            <ProductInformation  imageLink="/images/whitedress.jpg" imageAlt="white dress" productName="White Dress" price="$100"/>
            <ProductInformation  imageLink="/images/bluejacket.jpg" imageAlt="blue jacket" productName="Blue Jacket" price="$100"/>
            <ProductInformation  imageLink="/images/begieblazer.jpg" imageAlt="begie blazer" productName="Begie Blazer" price="$100"/>
            <ProductInformation  imageLink="/images/begieblazer.jpg" imageAlt="begie blazer" productName="Begie Blazer" price="$100"/>
            <ProductInformation  imageLink="/images/flowerdress.jpg" imageAlt="flower dress" productName="Flower Dress" price="$100"/>
            <ProductInformation  imageLink="/images/whitedress.jpg" imageAlt="white dress" productName="White Dress" price="$100"/>
            <ProductInformation  imageLink="/images/bluejacket.jpg" imageAlt="blue jacket" productName="Blue Jacket" price="$100"/>
            </div>
        </div>
    )
}

export default Home
