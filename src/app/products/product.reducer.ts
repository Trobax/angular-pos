import { ProductActions } from './product.actions';
import { IProductList, createDefaultProductList } from './product.types';

export function productListReducer(state = createDefaultProductList(), action): IProductList {
  state = state || createDefaultProductList();
  console.log('action type?: ', action.type);
  switch (action.type) {
    case ProductActions.LOAD_STARTED:
      return {
        products: [],
        loading: true,
        error: null,
      };
    case ProductActions.LOAD_SUCCEEDED:
      return {
        products: action.payload,
        loading: false,
        error: null
      };
    case ProductActions.LOAD_FAILED:
      return {
        products: [],
        loading: false,
        error: action.error
      };
    default:
      return state;
  }

}
