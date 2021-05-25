import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GitUser } from '../git-user';
import { GithubService } from '../githubService/github-service.service';
import { Repo } from '../repo';
import { RepoServiceService } from '../repo-service/repo-service.service';
import { Search } from '../search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 searchItem!: GitUser;
 @Output () searchUser= new EventEmitter <any>();
  repo!: Repo[];
  

  constructor(private repoService:RepoServiceService, private githubService:GithubService) { }


  showUser(form:NgForm){
    this.searchUser.emit(this.searchItem)
    form.resetForm();
  }
  // getRepository(searchItem:string){
  //   this.repoService.getRepo(searchItem).subscribe(data=>{
  //     this.repo = data
  //     console.log(this.repo)})
  //   }
  newSearch = new Search ("");
  submitUser(name: any){
    
    this.githubService.getRepoInfo(name.viewModel);
    this.newSearch = new Search("")
  }
  

  
  ngOnInit(): void {
  }

}
  
