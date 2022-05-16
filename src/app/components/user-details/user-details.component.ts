import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {IUserDetails} from "../../models/IUserDetails";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    let {data} = history.state;
    if (data) {
      this.activatedRoute.params.subscribe(() => {
        this.userDetails = data;
      })
    }
    else {
      this.activatedRoute.params.subscribe(({id}) => {
        this.userService.getUser(id).subscribe(value => this.userDetails = value)
      })
    }


  }

}
