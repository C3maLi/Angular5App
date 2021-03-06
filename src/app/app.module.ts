import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// general
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { LoggedComponent } from './account/logged/logged.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VatAddedPipe } from './product/vat-added.pipe';
import { ProductFilterPipe } from './product/product-filter.pipe';

// services
import { CartService } from './cart/cart.service';
import { AccountService } from './account/account.service';

// 3. party
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';
import { CategoryComponent } from './category/category.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'products/:seoUrl',
    component: ProductComponent
  },
  {
    path: 'my-cart',
    component: CartComponent
  },
  {
    path: 'shipping-detail',
    component: ShippingDetailComponent
  },
  {
    path: 'account',
    component: AccountComponent
  }
];

@NgModule({
  declarations: [AppComponent, ProductComponent, CartComponent, AccountComponent, ShippingDetailComponent, CartSummaryComponent, LoggedComponent, NotFoundComponent, VatAddedPipe, ProductFilterPipe, CategoryComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes), AngularFontAwesomeModule, SimpleNotificationsModule.forRoot()],
  providers: [
    {
      provide: 'apiUrl',
      useValue: 'http://northwindapi.azurewebsites.net/api/'
    },
    NotificationsService,
    CartService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
