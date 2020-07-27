import React from 'react';
import { withBookStore } from '../hoc';

const App = ({ bookStore }) => {
    console.log('books: ', bookStore.getBooks());
    return (
        <h1>Hello from App.js</h1>
    )
}

export default withBookStore()(App);