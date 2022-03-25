import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./static/scss/app.scss";
import { Spinner } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Map from "./pages/map";
import Alerts from "./pages/alerts";
import About from "./pages/about";
import Home from "./pages/home";

const App = () => {
    return (
        <>
            <NavBar />
            <Suspense
                fallback={
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                }
            >
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/map">
                        <Map />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/alert/create">
                        <CreateAlert />
                    </Route>
                </Switch>
            </Suspense>
        </>
    );
};

export default App;
