import React from 'react';
import ProductList from "./ProductList.jsx";
import style from "./Home.module.css";
import data from "../Data/products.json";

const Home = () => {
    return (
        <div>
            <h1 className={style.title}>Home</h1>
            <hr/>
        
        <div>
            <ProductList products={Object.values(data)}/>
        </div>
        </div>
    )
}

export default Home
