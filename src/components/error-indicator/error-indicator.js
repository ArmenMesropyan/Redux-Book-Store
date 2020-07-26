import React from 'react';

const ErrorIndicator = () => (
    <div className="alert alert-dismissible alert-danger">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <strong>Oops!</strong> Change a few things up and try submitting again.
    </div>
);

export default ErrorIndicator;