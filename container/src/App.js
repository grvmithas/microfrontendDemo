import React, { useRef, useState, lazy, useEffect, Suspense } from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from "../components/Header";
import { createBrowserHistory } from 'history';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
const MarketingLazy = lazy(() => import('../components/MarketingApp'));
const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const history = createBrowserHistory();
function App(props) {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn]);
    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header
                        onSignOut={() => setIsSignedIn(false)}
                        isSignedIn={isSignedIn}
                    />
                    <Suspense fallback={<span>loading...</span>}>
                        <Switch>
                            {/*   <Route path="/auth">
                                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/dashboard">
                                {!isSignedIn && <Redirect to="/" />}
                                <DashboardLazy />
                            </Route> */}
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>

    )
}
export default App