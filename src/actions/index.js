const booksLoaded = (books) => ({
    type: 'BOOKS_LOADED',
    payload: books,
})

const booksRequested = () => ({
    type: 'BOOKS_REQUESTED',
})

const booksFailed = (error) => ({
    type: 'BOOKS_FAILED',
    payload: error,
})

const fetchBooks = (dispatch, bookStore) => () => {
    dispatch(booksRequested());
    bookStore.getBooks()
             .then(data => dispatch(booksLoaded(data)))
             .catch(error => dispatch(booksFailed(error)))
}

export { booksRequested, booksLoaded, booksFailed, fetchBooks };