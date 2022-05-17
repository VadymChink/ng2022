import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {
  HomeComponent,
  UserComponent, UserDetailComponent, UsersComponent,
  PostComponent, PostDetailsComponent, PostsComponent,
  CommendsComponent, CommentComponent, CommentDetailsComponent,
} from './components';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    UserDetailComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    CommendsComponent,
    CommentDetailsComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'homePage', component: HomeComponent},
      {
        path: 'usersPage', component: UsersComponent,
        children: [
          {path: 'details/:id', component: UserDetailComponent}
        ]
      },
      {
        path: 'postsPage', component: PostsComponent, children: [
          {path: 'postDetailsPage/:id', component: PostDetailsComponent}
        ]
      },
      {
        path: 'commentsPage', component: CommendsComponent, children: [
          {path: 'commentDetailsPage/:id', component: CommentDetailsComponent}
        ]
      },
      {path:'**', redirectTo:'homePage' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
