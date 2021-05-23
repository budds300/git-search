import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DatePipe } from './date.pipe';
import { UsersProfileComponent } from './users-profile/users-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DatePipe,
    UsersProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
