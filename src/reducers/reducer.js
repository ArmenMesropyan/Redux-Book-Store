const initialState = {
    books: [
        {
            id: 1,
            title: 'JavaScript Book',
            author: 'Armen Mesropyan',
        }
    ],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            }
        default:
            return state;
    }
}

export default reducer;