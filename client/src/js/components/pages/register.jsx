import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Alert}  from 'reactstrap';
import {Link} from 'react-router-dom';

import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

import Breadcrumb from "../common/breadcrumb";

class Register extends Component {

    constructor (props) {
        super (props)
        this.state = {
            name: '',
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
            if(error.id == 'REGISTER_FAIL')
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

        const newUser = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password
        };

        this.props.register(newUser);
    }  

    render (){


        return (
            <div>
                <Breadcrumb title={'create account'}/>
                
                
                {/*Regsiter section*/}
                <section className="register-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>create account</h3>
                                {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">First Name</label>
                                                <input type="text" name="name" className="form-control" id="name"
                                                       placeholder="Name" required="" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">email</label>
                                                <input type="text" name="email" className="form-control" id="email"
                                                       placeholder="Email" required="" onChange={this.handleChange} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Password</label>
                                                <input type="password" name="password" className="form-control" id="review"
                                                       placeholder="Enter your password" required="" onChange={this.handleChange} />
                                            </div>
                                            <Link to="/">
                                <button onClick={this.onSubmitClick} className="btn btn-solid">Create Account</button>
                            </Link>  
                                        </div>
                                    </form>
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

export default connect(mapStateToProps,{ register, clearErrors })(Register);