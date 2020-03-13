import {
    FETCH_SINGLE_PRODUCT,
    CHANGE_CURRENCY,
    RECEIVE_PRODUCTS, 
    ITEMS_LOADING} from "../constants/ActionTypes";


const initialState = {
    products: [],
    symbol: '$',
    product_details: [],
    loading: false
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return { ...state,
                products: action.products,
                loading: false
            };
        case FETCH_SINGLE_PRODUCT:
            if (state.products.findIndex(product => product.id === action.productId) !== -1) {
                const singleItem = state.products.reduce((itemAcc, product) => {
                    return product
                }, [])
                return { ...state,
                    product_details: singleItem };
            }

        case CHANGE_CURRENCY:
            return { ...state,
                symbol: action.symbol };
        
        case ITEMS_LOADING:
            return{
                ...state,
                loading: true
            }

        default:
            return state;
    }
};
export default productReducer;