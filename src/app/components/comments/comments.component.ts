import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {IComments} from "../../modules/IComments";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComments[]

  constructor(private commentsService: CommentService) {
  }

  ngOnInit(): void {
    this.commentsService.getComments()
      .subscribe(value => this.comments = value)
  }
}
