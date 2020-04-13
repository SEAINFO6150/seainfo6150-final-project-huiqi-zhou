import React from 'react'
import styles from './Image.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailPage from '../DetailPage/DetailPage.jsx';
import ProductInformation from './ProductInformation.jsx';



const Router = ({imageLink, imageAlt, productName, price}) => {
    return (
        <Router>
            <header>
                <nav>
                <Link to="/DetailPage/clothing/blazer"><ProductInformation/></Link>
                    
                </nav>
            </header>
        
        <Switch>
        <Route
        path="/detailPage/:categoryId/:productId"
        exact
        render={({ match }) => {
          return (
            <DetailPage
            categoryId={match.params.categoryId}
            productId={match.params.productId}
          />
          );
          // getting the parameters from the url and passing
          // down to the component as props
          
        }}
      />
      </Switch>
    </Router>
    
    )
}

export default Router