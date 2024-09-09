import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import {
  BrowserRouter,
  Switch,
  Route,
  Router,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));
const history = createBrowserHistory();

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (signedIn) {
      history.push("/dashboard");
    }
  }, [signedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignedIn={signedIn} onSignOut={() => setSignedIn(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {!signedIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
