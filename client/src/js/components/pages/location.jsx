import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addLocation } from '../../actions'

class location extends Component {

    constructor(props) {
        super(props)
        this.state = {
            location:''
        }
    }
    
    componentDidMount(){
        this.props.addLocation();
    }

    handleChange = (event) => {
        this.setState({
            location : event.target.value
        })
    }

      onSubmitClick = () => {
        this.props.addLocation(this.state.location);
    }  

    render() {

        return (
            <div>
               <div className="col-lg-6">
                    <h2>Receive products</h2>
                    <h2>from your Location</h2>
                    <h3>To not miss a good deal</h3>
                    <div className="theme-card">
                        <form className="theme-form">
                            <div className="form-group">
                            <label>
                                Select Your Location:
                            <select name="location" value={this.state.location} onChange={this.handleChange}>
                                    <option value="">Select a Location</option>
                                    <option value="Mumbai">Mumbai</option>
							        <option value="Pune">Pune</option>
							        <option value="Bangalore">Bangalore</option>
							        <option value="Delhi">Delhi</option>
							</select>
                            </label>
                            </div>
                            <div className="form-group">
                                        
                            </div>
                            <Link to="/">
                                <button onClick={this.onSubmitClick} className="btn btn-solid">Submit</button>
                            </Link>    
                            </form>
                                </div>
                            </div>
            </div>
        )
    }
}

export default connect(null,{addLocation})(location);