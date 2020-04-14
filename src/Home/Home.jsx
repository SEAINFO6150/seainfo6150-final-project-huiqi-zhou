import React from 'react';
import ProductList from "./ProductList.jsx";
import style from "./Home.module.css";
import data from "../Data/products.json";

const Home = () => {
    return (
        <div>
            <ProductList products={Object.values(data)}/>
        </div>
    )
}

export default Home
