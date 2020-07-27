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

export { booksRequested, booksLoaded, booksFailed };