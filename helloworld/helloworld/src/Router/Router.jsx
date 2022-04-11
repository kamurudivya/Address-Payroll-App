import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import Contact from "../pages/Contact";
import App from "../App";

function TakeRouter() {
    return (
        <div>
            <BrowserRouter >
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Contact" component={Contact} />
                </Switch>
            </BrowserRouter>
        </div>

    )
}

export default TakeRoute