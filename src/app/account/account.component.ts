import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from './account.service';
import { NotificationsService } from 'angular2-notifications';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  returnUrl: string;
  message: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private accountService: AccountService, private notificationsService: NotificationsService) {}

  // kullanıcının geldi adrese göre yönlendiriyoruz.
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'] || 'products';
    });
  }

  // kullanıcının girişini sağlıyoruz
  loginUser(form: NgForm) {
    if (form.invalid) {
      return false;
    }
    this.accountService.login(form.value.user, form.value.password).subscribe(t => {
      if (t) {
        this.router.navigateByUrl(this.returnUrl);
      } else {
        this.notificationsService.error('Warning', 'Username or Password is incorrect!');
      }
    });
  }
}
