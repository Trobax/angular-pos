import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class ProductActions {
  static readonly LOAD_STARTED = 'LOAD_STARTED';
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
  static readonly LOAD_FAILED = 'LOAD_FAILED';

  loadProducts() {
    return {
      type: ProductActions.LOAD_STARTED,
    };
  }

  loadSucceeded(payload) {
    return {
      type: ProductActions.LOAD_SUCCEEDED,
      payload,
    };
  }

  loadFailed(error) {
    return {
      type: ProductActions.LOAD_FAILED,
      error,
    };
  }
}
