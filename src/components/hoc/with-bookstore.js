import React, { useContext } from 'react';
import BookStoreContext from '../bookstore-service-context/';

const withBookStore = () => (View) => {
    return (props) => {
        const bookStore = useContext(BookStoreContext);
        return <View bookStore={bookStore} {...props}/>
    }
}

export default withBookStore;