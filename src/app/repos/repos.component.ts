import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { RepoServiceService } from '../repo-service/repo-service.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  //repo: Repo[]=[];
  repo!: Repo[];
  //constructor(private repoService: RepoServiceService) { }
  // getRepository(searchItem:string){
  //   this.repoService.getRepo(searchItem).then(data =>{
  //     this.repo =this.repoService.repos;
  //     console.log(this.repo)
  //   })
  constructor(private search:RepoServiceService) { }
 

  //   })
  
  ngOnInit(): void {
   // this.getRepository('budds300')
  }

}
