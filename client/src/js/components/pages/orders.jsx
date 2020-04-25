import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'
import Breadcrumb from "../common/breadcrumb";

import { getCartTotal } from '../../services'
import { startSession } from 'mongoose';

class orders extends Component {
    render() {

        const {auth,address} = this.props;

        const {order,orders,total} = this.props;

        return (
            <div>
                <Helmet>
                    <title>YAP Mart | Order List Page</title>
                    <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
                </Helmet>
                {/*SEO Support End */}

                <Breadcrumb title={'Orders Page'}/>
                {orders.length>0 ?
                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-order">
                                    <h3>your order details</h3>
                                    {orders.map((item, index) => {
                                    return <div className="row product-order-detail" key={index}>
                                                <div className="col-3">
                                                    <img src={`${process.env.PUBLIC_URL}/${item.variants?
                                                        item.variants[0].images
                                                        :item.pictures[0]}`} alt="" className="img-fluid" />
                                                </div>
                                                <div className="col-3 order_detail">
                                                    <div>
                                                        <h4>product name</h4>
                                                        <h5>{item.name}</h5>
                                                    </div>
                                                </div>
                                                <div className="col-3 order_detail">
                                                    <div>
                                                        <h4>quantity</h4>
                                                        <h5>{item.qty}</h5>
                                                    </div>
                                                </div>
                                                <div className="col-3 order_detail">
                                                    <div>
                                                        <h4>price</h4>
                                                        <h5>₹{item.sum}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                    })}
                                    <div className="total-sec">
                                        <ul>
                                            <li>subtotal <span>₹{total}</span></li>
                                            <li>shipping <span>₹0</span></li>
                                            <li>tax(GST) <span>₹0</span></li>
                                        </ul>
                                    </div>
                                    <div className="final-total">
                                        <h3>total <span>₹{total}</span></h3>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row order-success-sec">
                                    <div className="col-sm-6">
                                        <h4>summery</h4>
                                        <ul className="order-detail">

                                            <li>Order Date: {order.CheckDate}</li>
                                            <li>Order Total: ₹{total}</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4>shipping address</h4>
                                        <ul className="order-detail">
                                            <li>{` ${auth.user.name} `}</li>
                                            <li>{`${address.address} `}</li>
                                            <li>{`${address.city} , ${address.pincode} `}</li>
                                            <li>{`${address.phone} `}</li>
                                        </ul>
                                    </div>

                                    <div className="col-sm-12 payment-mode">
                                        <h4>payment method</h4>
                                        <p>Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net
                                            banking acceptance subject to device availability.</p>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="delivery-sec">
                                            <h3>expected time of delivery</h3>
                                            <h2>{order.deliveryDate}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                </section>
                :
                <section className="cart-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div >
                                    <div className="col-sm-12 empty-cart-cls text-center">
                                        <img src='/assets/images/icon-empty-cart.png' className="img-fluid mb-4" alt="" />
                                        <h3>
                                            <strong>Your Order List is Empty</strong>
                                        </h3>
                                        <h4>Explore more shortlist some items.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    }</div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    order: state.order,
    orders: state.order.orders,
    total: state.order.orderTotal,
    address: state.address
})

export default connect(mapStateToProps)(orders)
