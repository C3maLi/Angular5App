import { Component, OnInit, Injector } from '@angular/core';
import { CartItem } from './cart-item';
import { Product } from '../product/product';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends AppComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  isProductRemoved = false;
  cartItems: CartItem[] = [];

  ngOnInit() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product: Product) {
    if (confirm('Are you sure')) {
      this.cartService.removeFormCart(product);
      this.notificationService.success('Successfull', '<b>' + product.productName + '</b> remove!');

      this.isProductRemoved = true;
    }
  }
}
