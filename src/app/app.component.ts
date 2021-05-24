import { Component } from '@angular/core';
import { GitUser } from './git-user';
import { GithubService } from './githubService/github-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gitSearch';
  user!:GitUser[];
  constructor(private gitService:GithubService){}

}
