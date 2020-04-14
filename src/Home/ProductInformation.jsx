import React from 'react'
import styles from './Image.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



const ProductInformation = ({product}) => {
    var link = "/DetailPage/"
    var link2 = product.category + "/"
    var link3 = product.productName
    var linkFinal = link + link2 + link3
    return (
            <Link to={linkFinal}>
              <div>
                <img className={styles.rectangle} src={product.image._url} alt={product.category} />
                <h6 className={styles.text} >{product.productName}</h6>
                <h6 className={styles.text}>{product.price}</h6>
              </div>
            </Link>
      
    )}

export default ProductInformation