import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Main, Auth } from './pages'
import { Sidebar } from './components/Sidebar/Sidebar'

export const App = () => {
    return (
        <div className="App">
            <Router>
                <Sidebar />
                <Switch>
                    <Route path="/" component={Main} exact />
                    <Route path="/auth" component={Auth} exact />
                </Switch>
            </Router>
        </div>
    )
}
