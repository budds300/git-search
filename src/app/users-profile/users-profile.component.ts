import { Component, OnInit } from '@angular/core';
import { GitUser } from '../git-user';
import { GithubService } from '../githubService/github-service.service';
import { Repo } from '../repo';
import { RepoServiceService } from '../repo-service/repo-service.service';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css'],
})
export class UsersProfileComponent implements OnInit {
  public userName = '';
  user: GitUser[] = [];
  repos: Repo[] = [];

  constructor(
    private gitService: GithubService,
    private search: RepoServiceService
  ) {}
  getSearchItem(searchItem: any) {
    this.gitService.searchUser(searchItem).then(
      (success: any) => {
        this.user = this.gitService.user;
        console.log(this.user);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  getRepoItem(repoItem: any) {
    this.gitService.getRepoInfo(repoItem).then(
      (success: any) => {
        this.repos = this.gitService.repos;
        console.log(this.repos);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getSearchItem('budds300');
    this.getRepoItem(this.userName);

    //   this.search.getRepo(this.userName);
    //   this.repos = this.search.repos;
    //   console.log(this.repos);
  }
}
