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




  constructor(private http:HttpClient) { }
  getRepo(searchItem:string):Observable<any>{
    return this.http.get(`https://api.github.com/users/${searchItem}/`)
  }
}
  
  
  



