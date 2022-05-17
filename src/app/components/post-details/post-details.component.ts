import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {IPost} from "../../modules/IPost";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPost

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      let {data} = history.state;
      if (data) {
        this.postDetails = data
      } else {
        this.postService.getPost(id).subscribe(value => this.postDetails = value)
      }
    })
  }

}
