import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DatePipe } from './date.pipe';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GithubServiceService } from './githubService/github-service.service';
import { ReposComponent } from './repos/repos.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DatePipe,
    UsersProfileComponent,
    PageNotFoundComponent,
    ReposComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GithubServiceService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
