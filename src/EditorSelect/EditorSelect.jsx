import React from 'react';
import Article from './Article.jsx';
import Image from './Image.jsx';
import style from "./EditorSelect.module.css";


const EditorSelect = () => {
    return (
        <div>
            <h1 className={style.title}>EditorSelect</h1>
            <hr/>
            <div className={style.articlegrid}>
            <Image imageLink="/images/blueblazer.jpg" imageAlt="blue blazer"/>
            <Article productName="Flower Dress" text="this is good"/>
            <Image imageLink="/images/flowerdress.jpg" imageAlt="flower dress"/>
            <Article productName="White Dress" text="this is good"/>
            <Image imageLink="/images/whitedress.jpg" imageAlt="white dress"/>
            <Article productName="Blue Jacket" text="this is good"/>
            <Image imageLink="/images/bluejacket.jpg" imageAlt="blue jacket"/>
            <Article productName="Blue Jacket" text="this is good"/>
            </div>
        </div>
    )
}

export default EditorSelect
