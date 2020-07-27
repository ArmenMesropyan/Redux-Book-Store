import React from 'react';

const BookListItem = ({ book }) => {
    const { title, author } = book;
    return (
        <li className="books__item card mb-3 col-md-4">
            <h3 className="books__title card-header">
                {`${author} - ${title}`}
            </h3>
            <img src="#" alt={title} className="books__image"/>
            <div className="books__description card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="books__actions card-body">
                <button type="button" className="btn btn-primary">Add to cart</button>
            </div>
        </li>
    )
};

export default BookListItem;