import React from 'react';
import { HomePage, OrderPage } from '../pages';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/order' exact component={OrderPage} />
        </Switch>
    )
}

export default App;