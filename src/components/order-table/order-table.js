import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const OrderTable = ({ total, items, bookAddedToCart, bookRemovedInCart, bookMinusedInCart }) => {
    const renderRow = (item, idx) => {
        const { title, id, count, price } = item;
        return (
            <tr className="table-light" key={id}>
                <th scope="row">{idx + 1}</th>
                <th scope="row">{title}</th>
                <td>{count}</td>
                <td>${price}</td>
                <td className="order-table__actions">
                    <button
                        className="btn btn-outline-warning"
                        onClick={() => bookMinusedInCart(id)}>
                        Minus Count
                        <i className="fas fa-minus icon"></i>
                    </button>
                    <button
                        className="btn btn-outline-success"
                        onClick={() => bookAddedToCart(id)}>
                        Plus Count
                        <i className="fas fa-plus icon"></i>
                    </button>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => bookRemovedInCart(id)}>
                        Delete Book
                        <i className="fas fa-trash icon"></i>
                    </button>
                </td>
            </tr>
        )
    }
    return (
        <>
            <table className="order-table table table-hover">
                <thead className="order-table__heading">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book title</th>
                        <th scope="col">Count</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="order-table__body">
                    { items.map(renderRow) }
                </tbody>
            </table>
            <strong className="order-total">Total: ${total}</strong>
        </>
    )
}

const mapStateToProps = ({ orderItems, totalOrder }) => ({
    items: orderItems,
    total: totalOrder,
})

export default connect(mapStateToProps, actions)(OrderTable);