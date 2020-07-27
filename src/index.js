import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from './components/error-boundary';

import App from './components/app';

import BookStoreContext from './components/bookstore-service-context/';
import BookstoreService from './services/bookstore-service';

import store from './store';

const bookstoreService = new BookstoreService();

ReactDOM.render((
    <Provider store={store}>
        <ErrorBoundary>
            <BookStoreContext.Provider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookStoreContext.Provider>
        </ErrorBoundary>
    </Provider>
), document.getElementById('root'));