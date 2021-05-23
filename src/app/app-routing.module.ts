import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReposComponent } from './repos/repos.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';


const routes: Routes = [
  
  {path: '', component:UsersProfileComponent},
  {path: 'profile', component:UsersProfileComponent},
  {path:'repo',component:ReposComponent},
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
