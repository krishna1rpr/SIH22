import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./static/scss/app.scss";
import { Spinner } from "react-bootstrap";
import NavBar from "./components/NavBar";
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
        <Hero />
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
