import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from "./customer/Nav"
import Form from "./customer/Form"
import List from "./customer/List"
import Edit from "./customer/Edit"

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function Main(){
    return (
        <Router>
            <main>
                <Nav/>
                <Switch>
                    <Route path="/customer/index" exact component={List} />
                    <Route path="/customer/form"  component={Form} />
                    <Route path="/customer/edit/:id" component={Edit} />
                </Switch>
            </main>
        </Router>
    )
}

export default Main;
// for <div id="main-customer"></div>
ReactDOM.render(<Main />, document.getElementById('main-customer'));
