import React from 'react'
import styles from './Image.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailPage from '../DetailPage/DetailPage.jsx';



const ProductInformation = ({imageLink, imageAlt, productName, price}) => {
    return ( 
        
        
            <Link to="/DetailPage"><div>
            <img className={styles.rectangle} src={imageLink} alt={imageAlt} />
            <h6 className={styles.text} >{productName}</h6>
            <h6 className={styles.text}>{price}</h6>
        </div></Link>
      
    )}

export default ProductInformation