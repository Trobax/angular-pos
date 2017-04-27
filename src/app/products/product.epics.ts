import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { Action, Store } from 'redux';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ProductActions } from '../products/product.actions';
import { ProductService } from '../products/product.service';

@Injectable()
export class ProductEpics {
  constructor(
    private service: ProductService,
    private actions: ProductActions
  ) { }

  public createEpic() {
    return createEpicMiddleware(this.createLoadProductEpic());
  }

  private createLoadProductEpic() {
    return action$ => action$
      .ofType(ProductActions.LOAD_STARTED)
      .switchMap(a => this.service.getProducts()
        .map(data => this.actions.loadSucceeded(data))
        .catch(response => of(this.actions.loadFailed({
          status: '' + response.status,
        }))));
  }
}
