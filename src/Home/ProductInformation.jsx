import React from 'react'
import styles from './Image.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailPage from '../DetailPage/DetailPage.jsx';



const ProductInformation = ({imageLink, category, productName, price}) => {
    var link = "/DetailPage/"
    var link2 = category + "/"
    var link3 = productName
    var linkFinal = link + link2 + link3
    return (
            <Link to={linkFinal}>
              <div>
                <img className={styles.rectangle} src={imageLink} alt={category} />
                <h6 className={styles.text} >{productName}</h6>
                <h6 className={styles.text}>{price}</h6>
              </div>
            </Link>
      
    )}

export default ProductInformation