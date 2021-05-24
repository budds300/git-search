import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Repo } from '../repo';


@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  
  repos!:Repo [];

  // constructor(private http:HttpClient){}
  

  //   getRepo(username:any){
  //     interface ApiResponse {
  //       name:string;
  //       description:string;
  //       html_url:string;
  //       svn_url:string;
  //       created_at:Date;
  //       updated_at:Date;
  //       homepage:string;
  //     }
  //     return new Promise((resolve, reject) => {   
  //     this.http.get<ApiResponse[] >(`https://api.github.com/users/${username}/repos?gitToken=${environment.gitToken}/&client_secret=${environment.Client_Secret}`).toPromise().then(response=>{
  //       for(let i of response) {
  //         let repo=new Repo('','','','','',new Date(),new Date(),'','', '',);
  //         repo.name=i.name;
  //         repo.description=i.description;
  //         repo.html_url=i.html_url;
  //         repo.svn_url=i.svn_url;
  //         repo.created_on=i.created_at;
  //         repo.updated_on=i.updated_at;
  //         repo.homepage=i.homepage;          
  //         this.repos.push(repo);
  //         resolve(username);
  //       }
  //     })
  //   })
  


  constructor(private http:HttpClient) { }
  getRepo(searchItem:string):Observable<any>{
    return this.http.get(environment.apiUrl + searchItem + '/repos?' + environment.gitToken)
  }
      
  }


