import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComments} from "../modules/IComments";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }
  getComments():Observable<IComments[]>{
    return this.http.get<IComments[]>('https://jsonplaceholder.typicode.com/comments')
  }

}
