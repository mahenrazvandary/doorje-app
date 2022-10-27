import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-header',
  template: `<nav class="navbar navbar-expand-sm navbar-light bg-light">
    <button class="btn btn-sm btn-default" (click)="login()" *ngIf="(isAuthenticated$ | async) === false">Log in</button>
    <span *ngIf="isAuthenticated$ | async" id="email">{{email}}</span>
    <button *ngIf="isAuthenticated$ | async" href="#" (click)="logout()" class="btn btn-link">(log out)</button>
  </nav>`,
})
export class AppHeaderComponent {
  isAuthenticated$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isAuthenticated$ = authService.isAuthenticated$;
  }

  login(){
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  get email(): string {
    return this.authService.identityClaims
    ? (this.authService.identityClaims as any)['email']
    : '-';
  }
}
