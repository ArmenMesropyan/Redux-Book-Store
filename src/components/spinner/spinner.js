import React from 'react';

const Spinner = ({ className = '' }) => (
    <div className={`loading ${className}`}>
        <div className="loading__container">
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
);

export default Spinner;