import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from '../..//environments/environment';
import { Repo } from '../repo';


@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  repo!:Repo [];

  constructor(private http:HttpClient){}
    getRepo(searchItem:string):Observable <any>{
      return this.http.get(environment.apiUrl + searchItem+'/repos?'+ environment.gitToken)
    }
  }


