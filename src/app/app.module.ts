import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header.component';
import { FallbackComponent } from './fallback.component';
import { LoginComponent } from './login.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    FallbackComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'namaste', pathMatch: 'full' },
      { path: 'namaste', loadChildren: () => import('./namaste/namaste.module').then(m => m.NamasteModule) },
      { path: 'login', component: LoginComponent },
      { path: '**', component: FallbackComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
