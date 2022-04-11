import React from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PayrollForm from '../components/payrollForm';
import NoPage from "../components/NoPage";

function TakeRouter() {
    return (
        <div>
            <BrowserRouter >
                <Switch>
                    <Route exact path="/" component={PayrollForm} />
                    <Route exact path="/NoPage" component={NoPage} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default TakeRouter