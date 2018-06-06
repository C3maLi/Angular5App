import { Injectable, Inject } from '@angular/core';
import { Product } from './product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
  constructor(private http: Http, @Inject('apiUrl') private apiUrl) {}
  getProducts(seoUrl: string): Observable<Product[]> {
    const category = seoUrl ? 'products/' + seoUrl : 'products';

    return this.http
      .get(this.apiUrl + category)
      .map(response => response.json());
  }
}
