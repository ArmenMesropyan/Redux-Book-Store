import React, { useEffect } from 'react';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { connect } from 'react-redux';
import { withBookStore } from '../hoc';
import { compose } from '../../utils';
import { fetchBooks, bookAddedToCart } from '../../actions';

const BookListContainer = ({ loading, error, books, fetchBooks, onAddedToCart }) => {
    useEffect(() => {
        fetchBooks();
    }, []);

    if (loading) return <Spinner className="books__loading"/>
    if (error) return <ErrorIndicator />

    return <BookList books={books} onAddedToCart={onAddedToCart}/>
}

const BookList = ({ books, onAddedToCart }) => {
    const elements = books.map(({ id, ...book }) => (
        <BookListItem
            book={book}
            key={id}
            onAddedToCart={() => onAddedToCart(id)}
        />
    ));

    return (
        <section className="home-page__books books">
            <h2 className="visually-hidden">Books List</h2>
            <div className="container">
                <ul className="books__list row">
                    { elements }
                </ul>
            </div>
        </section>
    )
}
const mapStateToProps = ({ books, loading, error }) => ({ books, loading, error });
const mapDispatchToProps = (dispatch, { bookStore }) => ({
    fetchBooks: fetchBooks(dispatch, bookStore),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
})

export default compose(
                    withBookStore(),
                    connect(mapStateToProps, mapDispatchToProps)
                )(BookListContainer);