import { Component, Injector } from '@angular/core';
import { CartService } from './cart/cart.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cartService: CartService;
  notificationService: NotificationsService;
  title = 'Shopping App';
  public options = {
    position: ['bottom', 'right'],
    timeOut: 3000,
    lastOnBottom: true
  };

  constructor(injector: Injector) {
    this.cartService = injector.get(CartService);
    this.notificationService = injector.get(NotificationsService);
  }
}
