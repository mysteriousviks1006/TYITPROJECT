import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual'
import { connect } from 'react-redux'

import { logout } from '../../../../actions/authActions';

class TopBar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {translate, location, user, isAuthenticated} = this.props;
        return (
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header-contact">
                                <ul>
                                    <li>{translate('topbar_title', { theme_name: ' Multikart' })}</li>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i>{translate('call_us')}:  123 - 456 - 7890</li>
                                    <li><Link to="/pages/location">{location}</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 text-right">
                            <ul className="header-dropdown">
                                <li className="mobile-wishlist compare-mobile"><Link to={`${process.env.PUBLIC_URL}/compare`}><i className="fa fa-random" aria-hidden="true"></i>{translate('compare')}</Link></li>
                                <li className="mobile-wishlist"><Link to={`${process.env.PUBLIC_URL}/wishlist`}><i className="fa fa-heart" aria-hidden="true"></i>{translate('wishlist')}</Link></li>
                                <li className="onhover-dropdown mobile-account">
                                    <Link to="/pages/dashboard"><i className="fa fa-user" aria-hidden="true">
                                    {
                                    (isAuthenticated == true) ? ` Welcome ${user.name}` : ` My Account`
                                    }</i> </Link>

                                    {
                                        (isAuthenticated == true) ?
                                        
                                    <ul className="onhover-show-div">
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/pages/dashboard`} data-lng="en">Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/pages/orders`} data-lng="en">Orders</Link>
                                        </li>
                                        <li>
                                            <Link to='' onClick={ () => {this.props.logout()} } data-lng="en">Logout</Link>
                                        </li>
                                    </ul>
                                    :
                                    <ul className="onhover-show-div">
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/pages/login`} data-lng="en">Login</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/pages/register`} data-lng="en">Register</Link>
                                        </li>
                                    </ul>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    location: state.setlocation.location,
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,{ logout })(withTranslate(TopBar));