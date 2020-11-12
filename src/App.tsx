import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Footer } from "./components/basic/Footer";
import { Header } from "./components/basic/Header";
import { Employees } from "./components/Employees";
import { Technologies } from "./components/Technologies";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="page-wrapper">
                    <Header />

                    <Switch>
                        <Route path="/technologies">
                            <Technologies />
                        </Route>
                        <Route path="/employees">
                            <Employees />
                        </Route>
                        <Route path="/">
                            <Employees />
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
