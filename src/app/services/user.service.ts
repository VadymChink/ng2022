import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../modules/IUser";
import {IUserDetails} from "../modules/IUserDetails";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url)
  }

  getUser(id: string): Observable<IUserDetails> {
    return this.http.get<IUserDetails>(this.url + '/' + id)
  }
}
