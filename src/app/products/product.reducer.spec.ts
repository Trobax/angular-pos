import { ProductActions } from './product.actions';
import { productListReducer } from './product.reducer';
import { createDefaultProductList, IProductList } from './product.types';

describe('productListReducer(falsy, unknownAction)', () => {
  const unknownAction = { type: 'UNKNOWN' };

  it('returns the default state', () => {
    const videoGameListing = productListReducer(createDefaultProductList(), unknownAction);
    expect(videoGameListing).toEqual(createDefaultProductList());
  });

  describe('productListReducer(productList, retrieveAction)', () => {
    const productList: IProductList = {
      ...createDefaultProductList(),
      error: 'Error'
    };
    const retrieveAction = { type: ProductActions.LOAD_STARTED };

    it('sets isLoading to true', () => {
      const newProductList = productListReducer(productList, retrieveAction);
      expect(newProductList.loading).toEqual(true);
    });

    it('clears out existing errors', () => {
      const newProductList = productListReducer(productList, retrieveAction);
      expect(newProductList.error).toBeNull();
    });
  });
});
