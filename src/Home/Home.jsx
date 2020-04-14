import React from 'react';
import ProductList from "./ProductList.jsx";
import style from "./Home.module.css";
import data from "../Data/products.json";

const Home = () => {
    return (
        <div>
            <h1 className={style.title}>H'Shop</h1>
            <hr/>
            <ProductList products={Object.values(data)}/>
        </div>
    )
}

export default Home
