import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import EditorSelect from "./EditorSelect/EditorSelect.jsx";
import Bar from "./Bar/Bar.jsx";
import WhatsNew from "./WhatsNew/WhatsNew.jsx";
import Error from "./Error/Error.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article"
};

function App() {
  return (
    <Home/>
  );
}

export default App;
