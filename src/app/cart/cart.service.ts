import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { CartItem } from './cart-item';
import { CART_ITEM_LIST } from './cart-item-list';

@Injectable()
export class CartService {
  cartItems: CartItem[];
  constructor() {}

  addToCart(product: Product): void {
    const addedItem = CART_ITEM_LIST.find(
      t => t.product.productId === product.productId
    );
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      const cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CART_ITEM_LIST.push(cartItem);
    }
  } // void herhangi bir şey döndürmek istemediğimizde kullanırıız.

  list(): CartItem[] {
    return CART_ITEM_LIST;
  } // : yaptığımızda bir şey döndürmek istediğimizde kllanırıız.

  clear() {
    CART_ITEM_LIST.splice(0, CART_ITEM_LIST.length);
  }

  removeFormCart(product: Product) {
    const addedItem = CART_ITEM_LIST.find(
      t => t.product.productId === product.productId
    );

    const indexNo = CART_ITEM_LIST.indexOf(addedItem);

    if (indexNo !== -1) {
      CART_ITEM_LIST.splice(indexNo, 1);
    }
  }
}
