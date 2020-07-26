import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './components/spinner';
import ErrorBoundary from './components/error-boundary';

ReactDOM.render((
    <ErrorBoundary>
        <Spinner />
    </ErrorBoundary>
), document.getElementById('root'));