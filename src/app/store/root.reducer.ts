import { combineReducers } from 'redux';

import { productListReducer } from '../products/product.reducer';

export const rootReducer = combineReducers({
  products: productListReducer,
});
