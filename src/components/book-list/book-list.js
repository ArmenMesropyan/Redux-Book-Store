import React, { useEffect } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookStore } from '../hoc';
import * as actions from '../../actions';
import { compose } from '../../utils';

const BookList = ({ books, bookStore, booksLoaded }) => {
    useEffect(() => {
        const data = bookStore.getBooks();
        booksLoaded(data);
    }, []);

    const elements = books.map(({ id, ...book }) => (
        <BookListItem book={book} key={id}/>
    ));

    return (
        <ul>
            { elements }
        </ul>
    )
}
const mapStateToProps = ({ books }) => ({ books });

export default compose(
                    withBookStore(),
                    connect(mapStateToProps, actions)
                )(BookList);