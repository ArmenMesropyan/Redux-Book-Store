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
        <section className="home-page__books books">
            <h2 className="visually-hidden">Books List</h2>
            <ul className="books__list">
                { elements }
            </ul>
        </section>
    )
}
const mapStateToProps = ({ books }) => ({ books });

export default compose(
                    withBookStore(),
                    connect(mapStateToProps, actions)
                )(BookList);