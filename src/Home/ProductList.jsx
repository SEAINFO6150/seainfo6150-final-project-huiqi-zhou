import React from 'react';
import PropTypes from 'prop-types'
import ProductInformation from "./ProductInformation.jsx";
import style from "./Home.module.css";

const ProductList = (props) => {
    return (
        <ul className={style.productgrid}>
            {props.products.map(product => (
                <ul>{ProductInformation({product})}</ul>
            ))}
        </ul>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired
};
export default ProductList;
