import React from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";

import Header from "./header";
import Home from "./components/Home"
import Artist from "./components/Artist";
const Routes = ()=>(
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/artist/:artistid" component={Artist}/>
            <Route path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
)

export default Routes