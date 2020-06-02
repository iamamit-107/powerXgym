import React from "react";

import "./App.css";
import MainHome from "./components/home/mainHome";
import MainClass from "./components/classes/mainClass";
import { Switch, Route } from "react-router-dom";
import SpecificClass from "./components/classes/specificClass";
import MainPrice from "./components/pricing/mainPrice";

function App() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={MainHome} />
                <Route path="/class" exact component={MainClass} />

                <Route path="/pricing" component={MainPrice} />
                <Route path="/class/:specific" component={SpecificClass} />
            </Switch>
        </div>
    );
}

export default App;
