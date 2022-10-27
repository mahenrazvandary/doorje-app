import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  template: `<div class="container-fluid">
    <app-header></app-header>
    <div class="container-fluid mt-2">
      <router-outlet></router-outlet>
    </div>
  </div>`,
})
export class AppComponent {
  
  isAuthenticated$: Observable<boolean>;
  isDoneLoading$: Observable<boolean>;
  canActivateProtectedRoutes$: Observable<boolean>;

  constructor(
    private authService: AuthService,
  ) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    this.isDoneLoading$ = this.authService.isDoneLoading$;
    this.canActivateProtectedRoutes$ = this.authService.canActivateProtectedRoutes$;
  }
}
