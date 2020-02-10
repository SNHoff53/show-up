import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from './App';
import LISU from "./pages/login-signup/LISU";



ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/lisu" component={LISU} />
            <Route path='/' component={App} />
            {/* <Route component={NotFoundPage} /> */}
        </Switch>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();