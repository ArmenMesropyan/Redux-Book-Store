const booksLoaded = (books) => ({
    type: 'FETCH_BOOKS_SUCCESS',
    payload: books,
})

const booksRequested = () => ({
    type: 'FETCH_BOOKS_REQUEST',
})

const booksFailed = (error) => ({
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
})

const bookAddedToCart = (id) => ({
    type: 'BOOK_ADDED_TO_CART',
    payload: id,
})

const fetchBooks = (dispatch, bookStore) => () => {
    dispatch(booksRequested());
    bookStore.getBooks()
             .then(data => dispatch(booksLoaded(data)))
             .catch(error => dispatch(booksFailed(error)))
}

export { booksRequested, booksLoaded, booksFailed, fetchBooks, bookAddedToCart };