import { ADD_TO_ORDERS } from '../constants/ActionTypes';

const initialState = {
    orders:[],
    orderTotal: null,
    CheckDate:null,
    deliveryDate:null
  };

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_ORDERS:
            return { ...state, 
                orders: action.products,
                orderTotal: action.ordertotal,
                CheckDate:action.CheckDate,
                deliveryDate:action.deliveryDate
             }
        default:
            return state;
    }
    return state;
}