import React from 'react';
import { withBookStore } from '../hoc';

const App = (props) => {
    console.log('props: ', props);
    return (
        <h1>Hello from App.js</h1>
    )
}

export default withBookStore()(App);