import React from 'react'
import ReturnPolicyInfo from './ReturnPolicyInfo.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CustomerService = () => {
    return (
        <div>
            <h1>Customer Service</h1>
            <ul>
                <li>
                    <Link to="/ReturnPolicyInfo">Return Policy</Link>
                </li>
                <li>
                    <Link to="ContactUsInfo">Contact Us</Link>
                </li>
            </ul>
            
        </div>

    )
}

export default CustomerService