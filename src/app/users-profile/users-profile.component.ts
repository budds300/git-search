import { Component, OnInit } from '@angular/core';
import { GitUser } from '../git-user';
import { GithubServiceService } from '../githubService/github-service.service';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {
user: GitUser[] = [];

  constructor(private gitService:GithubServiceService) { }
  getSearchItem(searchItem:any){
    this.gitService.searchUser(searchItem).then((success) => {
      this.user = (this.gitService.user)
      console.log(this.user)
      },
      (error)=>{
        console.log(error)
      })
  }

  ngOnInit(): void {
    this.getSearchItem('budds300');
  }

}
