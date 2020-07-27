import React, { useEffect } from 'react';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import { connect } from 'react-redux';
import { withBookStore } from '../hoc';
import { compose } from '../../utils';
import * as actions from '../../actions';

const BookList = ({ books, bookStore, loading, booksLoaded }) => {
    useEffect(() => {
        bookStore.getBooks()
                 .then(data => booksLoaded(data));
    }, []);

    if (loading) return <Spinner className="books__loading"/>

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
const mapStateToProps = ({ books, loading }) => ({ books, loading });

export default compose(
                    withBookStore(),
                    connect(mapStateToProps, actions)
                )(BookList);