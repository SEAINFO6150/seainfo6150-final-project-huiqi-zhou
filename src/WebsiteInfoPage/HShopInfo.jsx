import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HShopInfo = () => {
    return (
        <div>
            <h1>H Shop</h1>
            <ul>
                <li>
                    <Link to="/AboutUsInfo">About US</Link>
                </li>
            </ul>
        </div>
    )
}

export default HShopInfo