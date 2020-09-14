import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Main, Login, Register } from './pages'
import { Modal } from './components/Modal/Modal'
import { Alert } from './components/Alert/Alert'
import { PrivateRoute } from './utils/helpers/PrivateRoute'
import { IsAuthRoute } from './utils/helpers/IsAuthRoute'

export const App = () => {
    return (
        <div className="App">
            <Router>
                <Alert />
                <Modal />
                <Switch>
                    <PrivateRoute path="/" component={Main} exact />
                    <IsAuthRoute path="/login" component={Login} exact />
                    <IsAuthRoute path="/register" component={Register} exact />
                    <Route path="/users" component={Main} />
                </Switch>
            </Router>
        </div>
    )
}
