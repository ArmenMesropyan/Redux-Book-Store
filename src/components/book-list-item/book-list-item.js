import React from 'react';

const BookListItem = ({ book }) => {
    const { title, author, image } = book;
    return (
        <li className="books__item card mb-3 col-md-4">
            <h3 className="books__title card-header">
                <span className="books__title books__title--author text-success">
                    { author }
                </span>
                <span className="books__title books__title--title">
                    { title }
                </span>
            </h3>
            <img src={image} alt={title} className="books__image"/>
            <div className="books__actions card-body">
                <button type="button" className="btn btn-primary btn-lg btn-block">Add to cart</button>
            </div>
        </li>
    )
};

export default BookListItem;