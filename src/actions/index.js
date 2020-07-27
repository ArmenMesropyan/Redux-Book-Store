const booksLoaded = (books) => ({
    type: 'BOOKS_LOADED',
    payload: books,
})

export { booksLoaded };