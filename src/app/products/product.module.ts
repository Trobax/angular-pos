import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { ProductActions } from './product.actions';
import { ProductEpics } from './product.epics';
import { ProductService } from './product.service';
import { StoreModule } from '../store/store.module';

@NgModule({
  imports: [CoreModule, StoreModule, CommonModule],
  providers: [ProductActions, ProductEpics, ProductService],
})
export class ProductModule { }
