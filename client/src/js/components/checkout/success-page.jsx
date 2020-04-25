import React, {Component} from 'react';
import { connect } from 'react-redux'

import {addToOrders,
        emptyCart } from '../../actions'


class orderSuccess extends Component {

    constructor (props) {
        super (props);
        this.props.emptyCart();
    }

    // componentDidMount(){
    //     const orders = this.props.items;
    //     addToOrders(orders)
    // }

    onAddToOrders = (products,orderTotal,CheckDate,deliveryDate) => {
        this.props.addToOrders(products,orderTotal,CheckDate,deliveryDate)
    }

    render (){

        const {payment, items, symbol, orderTotal} = this.props.location.state;
        const {auth,address} = this.props;
        

        
        //var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'long', minute: 'numeric', sec: false};
        var current = new Date();
        var next5days = new Date(Date.now() + 2000 * 1000);
        let CheckDate = current.toLocaleString().toString()
        let deliveryDate = next5days.toLocaleString().toString()

        this.onAddToOrders(items,orderTotal,CheckDate,deliveryDate);

        return (
            (payment)?
            <div>
                <section className="section-b-space light-layout">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="success-text">
                                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                                    <h2>thank you</h2>
                                    <p>Payment Is Has Been Received Order Placed Successfully</p>
                                    <p>Transaction ID: {(payment.paymentID)?payment.paymentID:payment.id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-order">
                                    <h3>your order details</h3>
                                    {items.map((item, index) => {
                                    return <div className="row product-order-detail" key={index}>
                                                <div className="col-3">
                                                    <img src={item.variants?
                                                        item.variants[0].images
                                                        :item.pictures[0]} alt="" className="img-fluid" />
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
                                                        <h5>{symbol}{item.sum}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                    })}
                                    <div className="total-sec">
                                        <ul>
                                            <li>subtotal <span>{symbol}{orderTotal}</span></li>
                                            <li>shipping <span>$0</span></li>
                                            <li>tax(GST) <span>$0</span></li>
                                        </ul>
                                    </div>
                                    <div className="final-total">
                                        <h3>total <span>{symbol}{orderTotal}</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row order-success-sec">
                                    <div className="col-sm-6">
                                        <h4>summery</h4>
                                        <ul className="order-detail">
                                            {(payment.paymentID)?
                                                <div>
                                            <li>payer ID: {payment.payerID}</li>
                                            <li>payment ID: {payment.paymentID}</li>
                                            <li>payment Token: {payment.paymentToken}</li></div>
                                                :
                                            <li>Order ID: {payment.id}</li> }

                                            <li>Order Date: {CheckDate}</li>
                                            <li>Order Total: {symbol}{orderTotal}</li>
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
                                            <h2>{deliveryDate}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            :
            <section className="p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="error-section">
                                <h1>404</h1>
                                <h2>page not found</h2>
                                <a href="index.html" className="btn btn-solid">back to home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    address: state.address
})

export default connect(mapStateToProps,{addToOrders},{emptyCart})(orderSuccess)