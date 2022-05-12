import {Component, Input} from '@angular/core';
import {IComment} from "../../modules/IComment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent  {

  @Input()
  comment: IComment
}
