const initialState = {
    books: [],
    loading: true,
    error: null,
    orderItems: [],
    totalOrder: 220,
}

const updateCart = (items, newItem, itemIndex) => {
    if (itemIndex < 0) {
        return [
            ...items,
            newItem,
        ]
    }
    else {
        return [
            ...items.slice(0, itemIndex),
            newItem,
            ...items.slice(itemIndex + 1)
        ]
    }
}

const addItem = (book, item = {}) => {
    const {
        id = book.id,
        title = book.title,
        count = 0,
        price = 0 } = item;
    return {
        id,
        title,
        count: count + 1,
        price: price + book.price,
    }
}

const removeBook = (items, index) => {
    return [
        ...items.slice(0, index),
        ...items.slice(index + 1)
    ]
}

const minuseItem = (items, { price, count, ...minusedBook }, currentBook) => {
    const index = items.findIndex(({ id }) => currentBook.id === id);
    if (count - 1) {
        const newItem = {
            ...minusedBook,
            count: count - 1,
            price: price - currentBook.price
        }

        return updateCart(items, newItem, index);
    } else return removeBook(items, index);
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_FAILURE': 
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload,
            }
        case 'FETCH_BOOKS_REQUEST': 
            return {
                ...state,
                books: [],
                loading: true,
                error: null,
            }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null,
            }
        case 'BOOK_ADDED_TO_CART': 
            const book = state.books.find(({ id }) => action.payload === id);
            const itemIndex = state.orderItems.findIndex(({ id }) => action.payload === id);
            const item = state.orderItems[itemIndex];
            const newItem = addItem(book, item);

            return {
                ...state,
                orderItems: updateCart(state.orderItems, newItem, itemIndex)
            }
        case 'BOOK_REMOVED_IN_CART':
            const bookIndex = state.orderItems.findIndex(({ id }) => action.payload === id);
            return {
                ...state,
                orderItems: removeBook(state.orderItems, bookIndex),
            };
        case 'BOOK_MINUSED_IN_CART':
            const minusedBook = state.orderItems.find(({ id }) => action.payload === id);
            const currentBook = state.books.find(({ id }) => action.payload === id);
            return {
                ...state,
                orderItems: minuseItem(state.orderItems, minusedBook, currentBook),
            };
        default:
            return state;
    }
}

export default reducer;