import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable';

import { ProductEpics } from '../products/product.epics';

@Injectable()
export class RootEpics {
  constructor(private productEpics: ProductEpics) {}

  public createEpics() {
    return [
      this.productEpics.createEpic(),
    ];
  }
}
