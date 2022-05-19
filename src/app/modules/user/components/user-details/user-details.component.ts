import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";
import {UserService} from "../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUser;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getById(id).subscribe(value => this.user = value)

    })
  }

}
