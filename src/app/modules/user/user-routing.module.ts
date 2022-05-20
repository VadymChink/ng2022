import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserDetailsResolver, UsersResolver} from "./services";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {users: UsersResolver},
    children: [
      {
        path: ':id',
        resolve: {user: UserDetailsResolver},
        component: UserDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
