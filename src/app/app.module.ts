import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GithubService } from './githubService/github-service.service';
import { ReposComponent } from './repos/repos.component';
import { SearchComponent } from './search/search.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UsersProfileComponent,
    PageNotFoundComponent,
    ReposComponent,
    SearchComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GithubService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
