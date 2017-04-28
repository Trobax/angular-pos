import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { ProductActions } from './products/product.actions';
import { IProduct } from './products/product.types';
import { IAppState } from './store/root.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  @select(state => state.products.products) products: Observable<IProduct>;
  title = 'Angular - POS';

  constructor(
    private store: NgRedux<IAppState>,
    public actions: ProductActions) { }

  ngOnInit() {
    this.store.dispatch(this.actions.loadProducts());
  }

}
