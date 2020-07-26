import React, { useContext } from 'react';
import BookStoreContext from '../bookstore-service-context/';

const withBookStore = () => (View) => {
    return () => {
        const bookStore = useContext(BookStoreContext);
        return <View bookStore={bookStore}/>
    }
}

export default withBookStore;