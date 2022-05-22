import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {CommentService} from "../comment.service";
import {IComment} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<IComment> {

  constructor(private commentService: CommentService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {
    let {id} = route.params;
    let data = this.router.getCurrentNavigation()?.extras.state as IComment;
    if (data) {
      return data
    } else {
      return this.commentService.getById(id);
    }
  }
}
