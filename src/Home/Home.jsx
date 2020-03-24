import React from 'react'
import Form from "../Form/Form";
import Bar from "./Bar.jsx";
import ProductInformation from "./ProductInformation.jsx";

const Home = () => {
    return (
        <div>
            <h1>H'Shop</h1>
            <ProductInformation imageLink="/images/treefrog.jpg" imageAlt="tree frog" productName="aaa" price="$100"/>
            <ProductInformation imageLink="/images/treefrog.jpg" imageAlt="tree frog" productName="aaa" price="$100"/>
            <ProductInformation imageLink="/images/treefrog.jpg" imageAlt="tree frog" productName="aaa" price="$100"/>
            <ProductInformation imageLink="/images/treefrog.jpg" imageAlt="tree frog" productName="aaa" price="$100"/>
            <ProductInformation imageLink="/images/treefrog.jpg" imageAlt="tree frog" productName="aaa" price="$100"/>
            <Form />
        </div>
    )
}

export default Home
