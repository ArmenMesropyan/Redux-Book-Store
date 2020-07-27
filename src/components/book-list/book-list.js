import React from 'react';
import BookListItem from '../book-list-item';

const BookList = ({ books }) => {
    const elements = books.map(({ id, ...book }) => (
        <BookListItem book={book} key={id}/>
    ));
    return (
        <ul>
            { elements }
        </ul>
    )
}

export default BookList;