import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

import Breadcrumb from "../common/breadcrumb";

class Login extends Component {
    constructor (props) {
        super (props)
        this.state = {
            email: '',
            password:'',
            msg: null
        }
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    componentDidUpdate(prevProps){
        const {error} = this.props;
        if(error !== prevProps.error)
        {
            if(error.id == 'LOGIN_FAIL')
            {
                this.setState({
                    msg: error.msg.msg
                });
            }
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmitClick = () => {

        const user = {
            email : this.state.email,
            password : this.state.password
        };

        this.props.login(user);
    }  

    render (){


        return (
            <div>
                <Breadcrumb title={'Login'}/>
                
                
                {/*Login section*/}
                <section className="login-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Login</h3>
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" name="email" className="form-control" id="email"
                                                       placeholder="Email" required="" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="review">Password</label>
                                            <input type="password" name="password" className="form-control" id="review"
                                                       placeholder="Enter your password" required="" onChange={this.handleChange} />
                                        </div>
                                        <Link to="/">
                                <button onClick={this.onSubmitClick} className="btn btn-solid">Create Account</button>
                            </Link>  
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 right-login">
                                <h3>New Customer</h3>
                                <div className="theme-card authentication-right">
                                    <h6 className="title-font">Create A Account</h6>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It
                                        allows you to be able to order from our shop. To start shopping click
                                        register.</p>
                                    <Link to="/pages/register" className="btn btn-solid">Create an Account</Link>
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
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  });

export default connect(mapStateToProps,{ login, clearErrors })(Login)