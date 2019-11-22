/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import CartItem from './CartItem';
// eslint-disable-next-line no-unused-vars


class Cart extends Component {
    render() {
        var { children } = this.props;
        return (
            <section className="section">
                    <div className="table-responsive">
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Cộng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                { children }   
                            </tbody>
                        </table>
                    </div>
                </section>

        );
    }
}
export default Cart;
