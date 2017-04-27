import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProducts() {
    return this.http.get('http://localhost:3000/products')
      .map(response => response.json());
  }

}
