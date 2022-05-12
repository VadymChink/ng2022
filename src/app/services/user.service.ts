import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../modules/IUser";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  grtUsers():Observable<IUser[]>{
    return  this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }
}
