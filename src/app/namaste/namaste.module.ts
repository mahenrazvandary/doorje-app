import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../core/auth-guard.service';
import { ApiService } from '../shared/api.service';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      //{ path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '', component: HomeComponent },
    ]),
  ],
  providers: [
    ApiService,
  ],
})
export class NamasteModule { }
