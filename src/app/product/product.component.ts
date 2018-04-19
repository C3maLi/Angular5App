import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { NotificationsService } from 'angular2-notifications';
import { CartService } from '../cart/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Pager } from '../app-pager';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  products: Product[];
  addProduct: string;
  pager: Pager = new Pager();
  constructor(
    private productService: ProductService,
    private notificationService: NotificationsService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getProducts(params['seoUrl']);
    });
  }

  // get products
  getProducts(seoUrl: string) {
    this.productService.getProducts(seoUrl).subscribe(p => {
      this.products = p;
      this.pager = this.getPager(p.length);
    });
  }

  // add to cart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.notificationService.success('Successfull', '<b>' + product.productName + '</b> add to cart!');
  }

  // get pager
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 3): Pager {
    const totalPages = Math.ceil(totalItems / pageSize);
    const pages: Array<number> = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    const pager = new Pager();

    pager.currentPage = currentPage;
    pager.pageList = pages;
    pager.pageSize = pageSize;

    return pager;
  }

  // set pager
  setPage(page: number) {
    this.pager.currentPage = page;
  }
}
