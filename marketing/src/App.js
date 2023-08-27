import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'
export default function App() {
    return (
        <div>
            <StylesProvider>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/pricing' component={Pricing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
