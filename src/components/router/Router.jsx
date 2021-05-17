import React, { Component, Fragment, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import Navbar from '../nav/Navbar';
import Dashboard from  '../dashboard/Dashboard';
import Website from '../website/Website'

const BaseRouter = () => {
    return (
        <div>
            <Router>
                <Navbar/>
                <Route exact path="/"
                    component={() => <Dashboard />} />
                <Route exact path="/login"
                    component={() => <Login />} />
                <Route exact path="/signup"
                    component={() => <Signup />} />
                <Route exact path="/website"
                    component={() => <Website />} />
            </Router>
        </div>
    )
};

export default BaseRouter;

