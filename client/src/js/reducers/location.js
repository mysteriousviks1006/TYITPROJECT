import { ADD_LOCATION } from "../constants/ActionTypes";

const initialState = {
    location: '',
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOCATION:
            return{
                ...state,
                location: action.location
            };
    
        default:
            return state;
    }
}

export default locationReducer;