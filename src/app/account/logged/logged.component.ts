import { Component, OnInit, DoCheck } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements DoCheck {
  isLogged: boolean = false;
  constructor(private accountService: AccountService, private router: Router) {}

  ngDoCheck() {
    this.isLogged = this.accountService.isLoggedIn();
  }

  logOut() {
    this.accountService.logOut();
    this.router.navigate(['account']);
  }
}
