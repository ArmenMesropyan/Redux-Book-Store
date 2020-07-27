import React from 'react';
import BookList from '../book-list';
import { connect } from 'react-redux';

const HomePage = ({ books }) => {
    return (
        <BookList books={books}/>
    )
}

const mapStateToProps = ({ books }) => ({ books })

export default connect(mapStateToProps)(HomePage);