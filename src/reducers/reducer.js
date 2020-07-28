const initialState = {
    books: [],
    loading: true,
    error: null,
    orderItems: [
        {
            id: 1,
            title: 'A Typographical Journey of Typography Through the Inland Printer, 1883-1900 compiled by Maurice Annenberg',
            count: 1,
            price: 200,
        }
    ],
    totalOrder: 220,
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
        default:
            return state;
    }
}

export default reducer;