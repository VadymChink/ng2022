import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {IUserDetails} from "../../modules/IUserDetails";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
        let {data} = history.state;
        if (data) {
          this.userDetails = data;
        } else {
          this.userService.getUser(id).subscribe(value => this.userDetails = value)
        }
      }
    )
  }


}
