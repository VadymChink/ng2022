import { Component, OnInit } from '@angular/core';
import {IComment} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment:IComment;

  constructor(private router:Router,
              private commentService:CommentService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      let state = this.router.getCurrentNavigation()?.extras.state as IComment;
      if (state){
        this.comment = state
      }else{
        this.commentService.getById(id).subscribe(value => this.comment = value)
      }
    })
  }

}
