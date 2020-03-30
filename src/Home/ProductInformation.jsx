import React from 'react'
import styles from './Image.module.css'

const ProductInformation = ({imageLink, imageAlt, productName, price}) => {
    return (
        <div>
            <img className={styles.rectangle} src={imageLink} alt={imageAlt} />
            <h6 className={styles.text} >{productName}</h6>
            <h6 className={styles.text}>{price}</h6>
        </div>
    )
}

export default ProductInformation