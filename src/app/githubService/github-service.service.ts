import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GitUser  } from '../git-user';
import { environment } from '../../environments/environment'
import{ SearchComponent } from '../search/search.component'
import { from } from 'rxjs';
import { Repo } from '../repo';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user:GitUser[]= [];
  environment: any;
  repository!: Repo
  repos!:any[];
  


  constructor(private http:HttpClient) {
    
   }

  searchUser(searchItem:string){
    interface ApiResponse {
      name: string;
      avatar_url: string,
      html_url: any,
      followers: number,
      following:number,
      login:string,
      company: string,
      public_repos:number,
      location:string,
      email:string,
      created_at: Date,
      bio: string
      
    }
    return new Promise((resolve,reject)=>{
      this.user = [];
      this.http.get<ApiResponse>(`https://api.github.com/users/${searchItem}`) .toPromise().then((results)=>{
        this.user.push(results);
        resolve(searchItem);
      },
      (error)=>{
        reject(console.log('Error occured'));
      }
      );
    });
    
}

getRepoInfo(username:any){
  interface ApiResponse{
    name:string;
    description:string;
    html_url:string;
    svn_url:string;
    created_at:Date;
    updated_at:Date;
    homepage:string;
  }
  let promise = new Promise ((resolve,reject) => {
    this.http.get<ApiResponse[]>(`https://api.github.com/users/budds300/repos`).toPromise().then(response => {
      for(let i of response) {
        let repo =new Repo('','', '', '','',new Date(),new Date(),'','', '');
        repo.name=i.name;
        repo.description=i.description;
        repo.html_url=i.html_url;
        repo.svn_url=i.svn_url;
        repo.created_on=i.created_at;
        repo.updated_on=i.updated_at;
        repo.homepage=i.homepage;          
        this.repos.push(repo);
        resolve(username);
      }
    }).catch(err => reject(err));
   });
   console.log(this.repos);
   return promise;    
  
}
}
//?gitToken=${environment.token}

