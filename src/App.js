import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import EditorSelect from "./EditorSelect/EditorSelect.jsx";
import Error from "./Error/Error.jsx";
import DetailPage from "./DetailPage/DetailPage.jsx";
import WebsiteInfoPage from "./WebsiteInfoPage/WebsiteInfoPage.jsx";
import ReturnPolicyInfo from "./WebsiteInfoPage/ReturnPolicyInfo.jsx";
import ContactUsInfo from "./WebsiteInfoPage/ContactUsInfo.jsx";
import AboutUsInfo from "./WebsiteInfoPage/AboutUsInfo.jsx";
import Checkout from "./Checkout/Checkout.jsx";

function App() {
  return (
    
    <Router>
      
      <header>
        <h1>H'Shop</h1>
        <nav>
          <ul>
            {/* these links should show you how to connect up a link to a specific route */}
            <ul>
              <Link to="/">Home</Link>
            </ul>
            <ul>
              <Link to="/EditorSelect">EditorSelect</Link>
            </ul>
          </ul>
        </nav>
      </header>
      <hr/>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/EditorSelect" exact component={EditorSelect} />
        {/* passing parameters via a route path */}
        <Route
          path="/DetailPage/:categoryId/:productId"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <DetailPage
              categoryId={match.params.categoryId}
              productId={match.params.productId}
            />
          )}
        />
        <Route
          path="/Checkout/:categoryId/:productId"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Checkout
              categoryId={match.params.categoryId}
              productId={match.params.productId}
            />
          )}
        />
        <Route path="/ReturnPolicyInfo" exact component={ReturnPolicyInfo} />
        <Route path="/ContactUsInfo" exact component={ContactUsInfo} />
        <Route path="/AboutUsInfo" exact component={AboutUsInfo} />
        <Route component={Error} />
        
      </Switch>
      <WebsiteInfoPage/>
    </Router>
  );
}

export default App;
