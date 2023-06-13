import { UserService } from './../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/User';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy: User;
  private __user: User;

  @Input() set user (user: User) {
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  }
  get user() {
    return this.__user;
  }

 constructor(private userService: UserService) {
    this.user = new User();
    this.__user = new User();
    this.userCopy = new User();
  }

  ngOnInit(): void {
  }
  saveUser() {
    if(this.user.id > 0){
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
    this.user = new User();
  }


  resetForm(form: FormGroup) {
   if(this.user.id === 0){
    this.user = new User();
   }else {
    this.user = this.userCopy;
   }
  }

}
