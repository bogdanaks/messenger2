import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Main, Login, Register } from './pages'

export const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" component={Main} exact />
                    <Route path="/login" component={Login} exact />
                    <Route path="/register" component={Register} exact />
                </Switch>
            </Router>
        </div>
    )
}
