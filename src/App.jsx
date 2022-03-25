import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./static/scss/app.scss";
import { Spinner } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Map from "./pages/map";
const Hero = lazy(() => import("./components/Hero"));

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
            <Hero />
          </Route>
          <Route exact path="/map">
            <Map />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
