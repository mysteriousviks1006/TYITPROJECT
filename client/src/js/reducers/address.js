import { ADD_TO_ADDRESS } from '../constants/ActionTypes';

const initialState = {
    address:null,
    city:null,
    pincode:null,
    phone:null,
  };

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_ADDRESS:
            return { ...state, 
                address: action.details.address,
                city:action.details.city,
                pincode:action.details.pincode,
                phone:action.details.phone,
             }
        default:
            return state;
    }
    return state;
}