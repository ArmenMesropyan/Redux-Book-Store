import React from 'react';
import { HomePage, OrderPage } from '../pages';
import { Switch, Route, Link } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Link to='/'>Main Page</Link>
            <Link to='/order'>Order Page</Link>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/order' exact component={OrderPage} />
            </Switch>
        </>
    )
}

export default App;