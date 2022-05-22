import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostResolver, PostsResolver} from "./services";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {data: PostsResolver},
    children: [
      {
        path: ':id', component: PostDetailsComponent,
        resolve: {data: PostResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
