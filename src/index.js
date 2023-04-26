import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import News from "./component/news";
import Nav from "./component/nav";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom"


ReactDOM.render(
  <BrowserRouter>
  <>
  <Nav />
  
    <Route exact path="/Business"><News newsName="business" /></Route>
    <Route path="/Entertainment"><News newsName="entertainment" /></Route>
    <Route path="/science"><News newsName="Science" /></Route>
    <Route path="/Technology"><News newsName="Technology" /></Route>
   
  </>
  </BrowserRouter>,
  document.getElementById("root")
);

