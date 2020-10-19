import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Generate from './pages/MainForm';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/generate" component={Generate} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;