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
            const { id, title, price } = state.books.find(({ id }) => id === action.payload);
            const itemIndex = state.orderItems.findIndex(({ id }) => action.payload === id);
            const item = state.orderItems[itemIndex];
            console.log('item: ', item);
            let newItem;
            if (item) {
                newItem = {
                    ...item,
                    count: item.count + 1,
                    price: item.price + price,
                }
            }
            else {
                newItem = {
                    id,
                    title,
                    count: 1,
                    price,
                }
            }

            return {
                ...state,
                orderItems: updateCart(state.orderItems, newItem, itemIndex)
            }
        default:
            return state;
    }
}

export default reducer;