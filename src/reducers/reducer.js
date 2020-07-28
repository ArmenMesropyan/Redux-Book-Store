const initialState = {
    books: [],
    loading: true,
    error: null,
    orderItems: [],
    totalOrder: 220,
}

const reducer = (state = initialState, action) => {
    console.log('action.type: ', action.type);
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
            const { id, title, price } = state.books.find(({ id }) => id === action.payload);
            const newItem = {
                id,
                title,
                count: 1,
                price,
            }
            return {
                ...state,
                orderItems: [
                    ...state.orderItems,
                    newItem,
                ]
            };
        default:
            return state;
    }
}

export default reducer;