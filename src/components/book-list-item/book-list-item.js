import React from 'react';

const BookListItem = ({ book }) => {
    const { title, author } = book;
    return (
        <li>
            <span>{title}</span>
            <span>{author}</span>
        </li>
    )
};

export default BookListItem;