import React from 'react';

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, image, price } = book;
    return (
        <li className="books__item card m-3 col-md-4 col-sm-6 col-xs-12">
            <h3 className="books__title card-header">
                <span className="books__title books__title--author text-success">
                    { author }
                </span>
                <span className="books__title books__title--title">
                    { title }
                </span>
            </h3>
            <img src={image} alt={title} className="books__image"/>
            <div className="books__price card-body">
                <strong>{price}$</strong>
            </div>
            <div className="books__actions card-footer">
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={onAddedToCart}>
                    Add to cart
                </button>
            </div>
        </li>
    )
};

export default BookListItem;