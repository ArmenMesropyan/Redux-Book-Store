import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from './components/error-boundary';
import App from './components/app';
import BookStoreContext from './components/bookstore-service-context/';
import BookstoreService from './services/bookstore-service';

const bookstoreService = new BookstoreService();

ReactDOM.render((
    <ErrorBoundary>
        <BookStoreContext.Provider value={bookstoreService}>
            <App />
        </BookStoreContext.Provider>
    </ErrorBoundary>
), document.getElementById('root'));