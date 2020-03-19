import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import {Link} from "react-router-dom";

import { connect } from 'react-redux';

import { logout } from '../../actions/authActions';

class Dashboard extends Component {

    constructor (props) {
        super (props)
    }

    render (){

        const {auth,address} = this.props;

        return (
            <div>
                <Breadcrumb title={'Dashboard'}/>
                
                
                {/*Dashboard section*/}
                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="account-sidebar">
                                    <a className="popup-btn">
                                        my account
                                    </a>
                                </div>
                                <div className="dashboard-left">
                                    <div className="collection-mobile-back">
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                    </span>
                                    </div>
                                    <div className="block-content">
                                        <ul>
                                            <li className="active"><a href='#'>Account Info</a></li>
                                            <li><Link to="/cart">My Cart</Link></li>
                                            <li><Link to="/pages/orders">My Orders</Link></li>
                                            <li><Link to="/wishlist">My Wishlist</Link></li>
                                            <li className="last"><Link to="/" onClick={ () => this.props.logout()}>Log Out</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="dashboard-right">
                                    <div className="dashboard">
                                        <div className="page-title">
                                            <h2>My Dashboard</h2>
                                        </div>
                                        <div className="welcome-msg">
                                            <p>{`Hello, ${auth.user.name}`}</p>
                                            <p>From your My Account Dashboard you have the ability to view a snapshot of
                                                your recent account activity and update your account information. Select
                                                a link below to view or edit information.</p>
                                        </div>
                                        <div className="box-account box-info">
                                            <div className="box-head">
                                                <h2>Account Information</h2>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="box">
                                                        <div className="box-title">
                                                            <h3>Contact Information</h3>
                                                            <a href="#">{`${address.phone}`}</a>
                                                        </div>
                                                        <div className="box-content">
                                                            <h6>{`${auth.user.name}`}</h6>
                                                            <h6>{`${auth.user.email}`}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="box">
                                                    <div className="box-title">
                                                        <h3>Address</h3>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <h6>Default Shipping Address</h6>
                                                            <address>
                                                            {`${address.address}`}<br/>
                                                            </address>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    address: state.address
})

export default connect(mapStateToProps,{logout})(Dashboard)