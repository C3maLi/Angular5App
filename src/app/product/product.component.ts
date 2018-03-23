import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { NotificationsService } from 'angular2-notifications';
import { CartService } from '../cart/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  products: Product[];
  addProduct: string;
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
    });
  }

  // add to cart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.notificationService.success(
      'Successfull',
      '<b>' + product.productName + '</b> add to cart!'
    );
  }
}
