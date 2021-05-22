import { Injectable } from '@angular/core';
import { GitUser } from '../git-user';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
user : GitUser[]=[];
environment : any;
  constructor(private http: HttpClient) {}
searchUser(searchItem:string){
  interface data{
    avatar_url: string,
    html_url: string,
    followers: number,
    following: number,
    login: string,
    company: string,
    public_repos: number,
    location:string,
    email: string,
  }
  return new Promise((resolve,reject)=>{
    this.user=[];
    this.http.get<data>(environment.apiUrl +searchItem+this.environment.gitToken).toPromise().then((results)=>{
      this.user.push(results);
      resolve(results);
    },
    (error)=>{
      reject(console.log('Error'));
    })
  })
}
} 