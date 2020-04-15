import React from 'react'
import style from "./EditorSelect.module.css";

const Article = ({productName, text}) => {
    return (
        <div>
            <h6 className={style.info}>{productName}</h6>
            <p className={style.text}>Select Reason: {text}</p>
        </div>
    )
}

export default Article