import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Landing from './components/Landing'
import Pricing from './components/Pricing'

const generateClassName = createGenerateClassName({
    productionPrefix: 'mar',
});
export default function App({ history }) {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/pricing' component={Pricing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
