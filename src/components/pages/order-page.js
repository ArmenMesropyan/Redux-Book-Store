import React from 'react';
import OrderTable from '../order-table';

const OrderPage = () => {
    return (
        <main className="order-page m-3">
            <div className="container">
                <h2 className="order-page__title text-info">
                    Your Order
                </h2>
                <OrderTable />
            </div>
        </main>
    )
}

export default OrderPage;