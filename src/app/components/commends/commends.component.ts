import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {IComment} from "../../modules/IComment";

@Component({
  selector: 'app-commends',
  templateUrl: './commends.component.html',
  styleUrls: ['./commends.component.css']
})
export class CommendsComponent implements OnInit {

  comments: IComment[];

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(value => this.comments = value)
  }

}
