import React, { useEffect } from 'react';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { connect } from 'react-redux';
import { withBookStore } from '../hoc';
import { compose } from '../../utils';
import * as actions from '../../actions';

const BookList = (props) => {
    useEffect(() => {
        const { booksLoaded, booksRequested, bookStore, booksFailed  } = props;
        booksRequested();
        bookStore.getBooks()
                 .then(data => booksLoaded(data))
                 .catch(booksFailed);
    }, []);

    const { loading, error, books } = props;

    if (loading) return <Spinner className="books__loading"/>
    if (error) return <ErrorIndicator />

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
const mapStateToProps = ({ books, loading, error }) => ({ books, loading, error });

export default compose(
                    withBookStore(),
                    connect(mapStateToProps, actions)
                )(BookList);