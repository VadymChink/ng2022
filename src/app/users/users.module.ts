import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users-components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./users-service/user.service";
import { UserComponent } from './users-components/user/user.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers:[
    UserService
  ]
})
export class UsersModule { }
