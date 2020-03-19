import { combineReducers } from 'redux';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'

// Import custom components
import productReducer from './products';
import cartReducer from './cart';
import filtersReducer from './filters';
import wishlistReducer from './wishlist';
import compareReducer from './compare';
import locationReducer from './location';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import orderReducer from './order';
import AddressReducer from './address';


const rootReducer = combineReducers({
    data: productReducer,
    cartList: cartReducer,
    filters: filtersReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
    setlocation: locationReducer,
    auth: authReducer,
    error: errorReducer,
    order: orderReducer,
    address: AddressReducer,
    Intl
});

export default rootReducer;